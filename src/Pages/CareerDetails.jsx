import Hero from "../components/About/Hero";
import { useParams } from "react-router-dom";
import { roles } from "../components/careers/Jobs";
import { MapPin, Clock, Briefcase, CheckCircle } from "lucide-react";
import UndoButton from "../components/UndoButton";
import ApplicationForm from "../components/Form";
import React, { useRef } from "react";

const heroBg="https://res.cloudinary.com/dinb6qtto/image/upload/v1747327037/fuelme/eunqurz5ywlilv9qris7.png"

function CareerDetials() {
  const { id } = useParams();
  const career = roles.find((a) => a.id === parseInt(id));
  const applyRef = useRef(null);

  if (!career) {
    return <div className="p-6 text-red-500">Career not found.</div>;
  }
  return (
    <div>
      <Hero image={heroBg} text1={"Careers"} />
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <>
          <UndoButton />
          <h1 className="text-3xl md:text-4xl font-bold text-purple-200 leading-tight">
            {career.title}
          </h1>
        </>
      </div>
      <div className="pl-4 md:pl-24 pt-6 w-[90vw]">
        <div className=" bg-white">
          {/* Header Section */}
          <div className="bg-purple-100 rounded-2xl px-6 py-6 flex flex-col lg:flex-row justify-between gap-6">
            {/* Left Side */}
            <div className="flex flex-col gap-y-4 flex-wrap">
              {/* Category Tag */}
              <h4 className="bg-white w-fit text-purple text-xs font-semibold px-3 py-1 mb-2 rounded-lg">
                {career.category}
              </h4>

              {/* Title */}
              <h1 className="text-white text-2xl sm:text-4xl font-bold">
                {career.title}
              </h1>

              {/* Info Row */}
              <div className="flex flex-wrap items-center gap-4 text-white text-sm font-medium">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{career.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{career.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  <span>
                    ₵{career.payStart} - ₵{career.payEnd}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center">
              {/* Apply Button */}
              <button
                onClick={() =>
                  applyRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-purple text-xl sm:text-2xl font-bold py-3 px-10 sm:py-4 sm:px-16 rounded-md transition"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="py-12">
            <h2 className="text-purple-100 text-2xl font-bold mb-6">
              Description
            </h2>
            <p className="text-gray-700 font-open-sans leading-relaxed text-base">
              {career.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pl-4 md:pl-24">
        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-purple-100 mb-4">Skills</h2>
          <ul className="space-y-2">
            {career.skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className=" text-purple-500">
                  <CheckCircle />
                </span>
                <p className="text-sm font-open-sans font-extralight">
                  {skill}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div>
          <h2 className="text-2xl font-bold text-purple-100 mb-4">
            Responsibilities
          </h2>
          <ul className="space-y-2">
            {career.responsibilities.map((resp, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className=" text-purple-500">
                  <CheckCircle />
                </span>
                <p className="text-sm font-open-sans font-extralight">{resp}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Qualification */}
        <div>
          <h2 className="text-2xl font-bold text-purple-100 mb-4">
            Qualification
          </h2>
          <ul className="space-y-2">
            {career.qualifications.map((qual, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className=" text-purple-500">
                  <CheckCircle />
                </span>
                <p className="text-sm font-open-sans font-extralight">{qual}</p>
              </li>
            ))}
          </ul>

          {/* Industry Certifications */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              Industry certifications such as:
            </h3>
            <ul className="space-y-2">
              {career.certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className=" text-purple-500">
                    <CheckCircle />
                  </span>
                  <p className="text-sm font-open-sans font-extralight">
                    {cert}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Salary & Benefits */}
        <div>
          <h2 className="text-2xl font-bold text-purple-100 mb-4">
            Salary & Benefits
          </h2>
          <ul className="space-y-2">
            {career.salaryBenefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className=" text-purple-500">
                  <CheckCircle />
                </span>
                <p className="text-sm font-open-sans font-extralight">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full md:w-2/5 pl-4 md:pl-24">
        <h1 className="text-xl font-semibold text-purple-100 mb-2 ">
          Apply Via Email
        </h1>
        <p className="text-sm my-2">
          If you need to send us a mail regarding job opportunities, please
          write to us at{" "}
          <span className="text-purple underline">info@bestpointgh.com</span>
          for more information.
        </p>
      </div>
      <div ref={applyRef} id="apply" className="flex gap-x-4 lg:gap-x-12 items-center justify-start my-12">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-semibold text-purple-200 leading-tight">
          Submit Application
        </h1>
      </div>
      <div  className="w-2/3 min-h-screen mx-auto">
        <ApplicationForm career={career.title} />
      </div>
    </div>
  );
}

export default CareerDetials;
