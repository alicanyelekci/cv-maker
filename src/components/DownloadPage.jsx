import JsPDF from 'jspdf';

export default function DownloadPage({ name }) {
    function generatePDF() {
        // const resume = new JsPDF('portrait', 'mm', 'a4');
        // resume.html(document.querySelectorAll('.resume')).then(() => {
        //   resume.save(`${info.name} - Resume.pdf`);
        // });
  
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
  
        const scale = 0.1; // Adjust the scale factor as needed
          doc.html(clonedElement, {
            callback: function (pdf) {
              pdf.save(`${name} - Resume.pdf`);
            },
            x: 10,
            y: 10,
            width: doc.internal.pageSize.width * scale,
          });
  
  
        // doc.html(clonedElement).then(() => {
        //     doc.save(`${info.name} - Resume.pdf`);
        //   });
      };

    return (
        <button className='download-btn' onClick={generatePDF}>Download CV ↓</button>
    )
}