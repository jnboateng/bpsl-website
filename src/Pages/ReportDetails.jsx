import React from "react";
import Hero from "../components/About/Hero";
import { annualReports } from "./Reports";
import { useParams } from "react-router-dom";
import PdfViewer from "./PdfViewer";

function ReportDetails() {
  const { id } = useParams();
  const report = annualReports.find((report) => report.id === id);

  if (!report) {
    return (
      <div className="p-12">
        <Hero text1="Annual Report" />
        <p className="text-red-500 text-center mt-12 text-xl font-semibold">
          Report not found.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Hero text1={"Annual Report"} />
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 px-8">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-purple-200 leading-tight">
          {report.title}
        </h1>
      </div>

     <div className="">
      <PdfViewer fileUrl={'/Abraham.pdf'}  />
     </div>
    </div>
  );
}

export default ReportDetails;
