import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Important: Set the pdf.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => Math.max(1, Math.min(numPages, prevPageNumber + offset)));
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function zoomIn() {
    setScale(prevScale => Math.min(2.0, prevScale + 0.1));
  }

  function zoomOut() {
    setScale(prevScale => Math.max(0.5, prevScale - 0.1));
  }

  return (
    <div className="pdf-viewer w-full">
      <div className="controls flex justify-between p-2 bg-gray-100 mb-2">
        <div>
          <button 
            className="px-3 py-1 mr-2 bg-blue-500 text-white rounded" 
            onClick={previousPage} 
            disabled={pageNumber <= 1}
          >
            Previous
          </button>
          <button 
            className="px-3 py-1 bg-blue-500 text-white rounded" 
            onClick={nextPage} 
            disabled={pageNumber >= numPages}
          >
            Next
          </button>
        </div>
        <div>
          <span className="mx-2">
            Page {pageNumber} of {numPages || '--'}
          </span>
        </div>
        <div>
          <button 
            className="px-3 py-1 mr-2 bg-blue-500 text-white rounded" 
            onClick={zoomOut}
          >
            Zoom -
          </button>
          <button 
            className="px-3 py-1 bg-blue-500 text-white rounded" 
            onClick={zoomIn}
          >
            Zoom +
          </button>
        </div>
      </div>
      
      <div className="document-container border overflow-auto h-96">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error('Error loading PDF:', error)}
          loading={<div className="text-center p-4">Loading PDF...</div>}
          noData={<div className="text-center p-4">No PDF file specified</div>}
          error={<div className="text-center p-4 text-red-500">Failed to load PDF file</div>}
        >
          <Page 
            pageNumber={pageNumber} 
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer