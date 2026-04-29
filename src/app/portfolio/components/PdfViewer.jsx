"use client";

import { useState } from "react";
import { Maximize2, Download, ExternalLink } from "lucide-react";
import "./pdf.css";

export default function PdfViewer() {
  const [full, setFull] = useState(false);

  return (
    <div className={`pdfWrapper ${full ? "full" : ""}`}>
      <div className="pdfCard">
        {/* Header */}
        <div className="pdfHeader">
          <div className="pdfTitle">Adclan Portfolio</div>

          <div className="pdfActions">
            <button onClick={() => setFull(!full)} className="iconBtn">
              <Maximize2 size={16} />
            </button>

            <a
              href="/adclan-portfolio-compressed.pdf"
              download
              className="iconBtn"
            >
              <Download size={16} />
            </a>

            <a
              href="/adclan-portfolio-compressed.pdf"
              target="_blank"
              className="iconBtn"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* PDF */}
        <iframe
          src="/adclan-portfolio-compressed.pdf#view=FitH"
          className="pdfFrame"
        />
      </div>
    </div>
  );
}
