/* eslint-disable no-unused-vars */
import React from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFILE from "../../Components/PDFFILE/PDFFILE.JSX";

const RDF = () => {
  return (
    <div>
      <div>
        <PDFDownloadLink document={<PDFFILE />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button
                style={{ padding: "20px", fontSize: "20px", cursor: "pointer" }}
              >
                Download
              </button>
            )
          }
        </PDFDownloadLink>
        {/* <PDFFile /> */}
      </div>
    </div>
  );
};

export default RDF;
