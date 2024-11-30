"use client"
import { colors } from "@/data/colors";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";
import { useState } from "react";

function ProjectCard({ project }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible((prev) => !prev);
  };

  return (
    <Link href={project.html_url || '#'} target="_blank">
      <div className="p-8 h-auto flex flex-col justify-between bg-primary-bg">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold capitalize text-primary-title">
              {project.name}
            </p>
            <IoLinkSharp className="text-primary-icon text-xl" />
          </div>
          <p className="line-clamp-2 text-primary-text my-5 text-sm">
            {project.description}
          </p>
        </div>

        {/* Description Toggle Section */}
        <div className="my-4">
          <button
            onClick={toggleDescription}
            className="text-primary-text text-sm font-semibold underline">
            {isDescriptionVisible ? "Hide Description" : "Show More"}
          </button>
          {isDescriptionVisible && (
            <p className="text-primary-text mt-2 text-sm">
              {project.long_description || "No detailed description available."}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              <FaRegStar className="text-primary-icon" />
              <span>{project.stargazers_count}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaCodeFork className="text-primary-icon" />
              <span>{project.forks_count}</span>
            </p>
          </div>
          <p className="flex items-center gap-2">
            <span
              style={{ backgroundColor: colors[project.language] }}
              className="w-3 h-3 rounded-full"></span>
            <span className="text-primary-text text-sm">{project.language}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
