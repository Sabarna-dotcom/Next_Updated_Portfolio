"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronics and Communication Engineering (ECE)</span>,
        Then I joined Tata Consultancy Service (TCS) as Software Developer.{" "}Then I have done my Mastars in Computer Science and Engineering.
        There I have worked in building E-commarce applications.{" "}Currently I am working in the domain of{" "}
        <span className="font-medium">
          Machine Learning alongside MLOps
        </span>
        .{" "}I have also worked in React, Next.js, Node.js, and MongoDB.{" "}I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and watching sports. 
      </p>
    </motion.section>
  );
}
