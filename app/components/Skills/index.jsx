"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MdCircle } from "react-icons/md";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

gsap.registerPlugin(ScrollTrigger);

const skillNames = [
  {
    name: "React",
    color: "#61DAFB", // React official color
  },
  {
    name: "Nextjs.",
    color: "#000000", // Black for Next.js
  },
  {
    name: "Gsap",
    color: "#88CE02", // GSAP official green
  },
  {
    name: "JavaScript",
    color: "#F0DB4F", // Yellow with less brightness for JavaScript
  },
  {
    name: "Node.js",
    color: "#43853D", // Node.js darker green
  },
  {
    name: "TypeScript",
    color: "#007ACC", // TypeScript official blue
  },
  {
    name: "MongoDB",
    color: "#4DB33D", // MongoDB official green
  },
  {
    name: "Python",
    color: "#3776AB", // Python darker blue
  },
  {
    name: "Express.js",
    color: "#303030", // Neutral dark gray for Express.js
  },
];


export default function Skills() {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  });


  return (
    <div
      className="py-7 overflow-x-hidden scroll-mt-40"
      ref={component}
      id="skills"
    >
      <h2 className="text-5xl text-white flex justify-center font-lato font-extrabold uppercase pb-3">
        Skills
      </h2>
      {skillNames.map((skill, skillIndex) => (
        <div
          key={skillIndex}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className="text-7xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 && skill.color ? skill.color : "inherit",
                }}
              >
                {skill.name}
              </span>
              <span className="text-5xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
