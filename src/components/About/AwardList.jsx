import React from "react";
import { awards } from "./Awards";
import { Link } from "react-router-dom";
import { Diamond } from "lucide-react";

function AwardList() {
  return (
    <div>
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-3xl font-bold text-purple-200 leading-tight">
          Awards
        </h1>
      </div>

      {/* Scrollable container for awards */}
      <div className="max-h-[200px] overflow-y-scroll my-6 space-y-2">
        {awards.map((award) => (
          <div
            key={award.id}
            className="pl-4 md:pl-24 p-2 transition-all duration-300 transform hover:translate-x-2 flex flex-row items-center gap-2"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Diamond color="purple" size={20} />
            </div>
            <div className="flex-1">
              <Link
                to={`/award/${award.id}`}
                className="text-purple text-sm md:text-lg"
              >
                {award.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardList;
