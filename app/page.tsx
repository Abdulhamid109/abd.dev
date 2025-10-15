"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page1 from "@/components/PersonalComps/page1";
import Page2 from "@/components/PersonalComps/page2";
import Page3 from "@/components/PersonalComps/page3";
import Page4 from "@/components/PersonalComps/page4";
import Page5 from "@/components/PersonalComps/page5";
import Page6 from "@/components/PersonalComps/page6";

export default function Page() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each page with ScrollTrigger
    gsap.utils.toArray(".page").forEach((page, i) => {
      gsap.from(page as any, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: page as any,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          markers: false, // Set to true for debugging
          onEnter: () => gsap.to(page as any, { opacity: 1, y: 0, duration: 1 }),
          onEnterBack: () => gsap.to(page as any, { opacity: 1, y: 0, duration: 1 }),
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className="" ref={containerRef}>
      <div id="about" className="page">
        <Page1 />
      </div>
      <div id="project" className="page">
        <Page2 />
      </div>
      <div className="page">
        <Page3 />
      </div>
      <div className="page">
        <Page4 />
      </div>
      <div className="page">
        <Page5 />

      </div>
      <div className="page">
        <Page6 />
      </div>

    </div>
  );
}
