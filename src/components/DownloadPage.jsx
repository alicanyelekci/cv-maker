import JsPDF from 'jspdf';

export default function DownloadPage({ name }) {
    function generatePDF() {  
        const doc = new JsPDF('portrait', 'mm', 'a4');
        const elementToCapture = document.querySelector('.body');
        const clonedElement = elementToCapture.cloneNode(true);
        
        const buttonsToRemove = clonedElement.querySelectorAll('button');
        buttonsToRemove.forEach(button => {
            button.remove();
        });
        
        const formsToRemove = clonedElement.querySelectorAll('form');
        formsToRemove.forEach(form => {
            form.remove();
        });

        doc.html(clonedElement).then(() => {
            doc.save(`${name} - Resume.pdf`);
        });
        ReactPDF.render(<PDFDownloadLink />, `${name}/example.pdf`);
    };

    return (
        <button className='download-btn' onClick={generatePDF}>Download CV ↓</button>
    )
}