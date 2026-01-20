import React from "react";
import TopFooter from "../Reusables/TopFooter";
import BottomFooter from "../Reusables/BottomFooter";
import Navbar from "../Reusables/Navbar";
import ServiceHeader from "../Reusables/ServiceHeader";
import ServiceSections from "./ServiceSections";
import serviceone from "../../assets/serviceone.png";
import servicetwo from "../../assets/servicetwo.png";
import servicethree from "../../assets/servicethree.png";

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ServiceHeader
        name="Our Services"
        header="What we do"
        statement="Expertly delivered solutions across building construction, civil engineering, and telecommunications infrastructure."
      />
      <div className="px-18 py-15 flex flex-col gap-20">
        <div className="flex flex-col items-start justify-start text-left gap-2 h-[25vh]">
          <div className="flex flex-row gap-2 items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00075 15.9993L16 8.00001L8.00078 0.000750201L2.79227e-05 0.000736237L0 15.9992L8.00075 15.9993Z"
                fill="#00AAE8"
              />
            </svg>
            <span className="text-[14px] text-[#00AAE8] font-bold">
              Our Services
            </span>
          </div>
          <span className="text-[#343434] text-[20px] md:text-[34px]">
            Expert Engineering Solutions You Can Trust
          </span>
          <span className="text-[#000000] text-[15px] md:w-[61%]">
            Our services are delivered with precision, safety, and
            professionalism to ensure durable, efficient, and cost-effective
            outcomes for every project.
          </span>
        </div>
      </div>
      <ServiceSections
        title="BUILDING DESIGN & CONSTRUCTION"
        pic={serviceone}
        listItems={[
          "Architectural Designs and Finishes",
          "Building Construction",
          "Construction Project Management"
        ]}
      />
      <ServiceSections
        title="CIVIL & STRUCTURAL ENGINEERING"
        pic={servicetwo}
        listItems={[
          "Pile Foundation Construction and Soil Tests",
          "Conceptual and Detailed Design of Structures and Roads/Highway",
          "Construction Supervision and Management",
          "Structural Assessments and NDT Analysis of Buildings"
        ]}
        reverse
      />
      <ServiceSections
        title="TELECOMMUNICATIONS TOWER & MAST MANAGEMENT"
        pic={servicethree}
        listItems={[
          "Power Audit of IHS Sites",
          "Structural Audit and Appraisal of Towers",
          "Tower Mapping and Audit",
          "Structural Integrity Tests of Building Roof top Assets",
          "Tower Retrofit and Upgrade",
          "Technical Site Survey",
          "Site Assessment and Upgrade",
          "Telecoms Site Building",
          "Tower Foundation Mapping and Retrofit",
          "Rooftop Building Assessment and NDT Analysis"
        ]}
      />
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Service;
