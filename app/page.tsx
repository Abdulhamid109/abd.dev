import React from "react";
import Page1 from "@/components/PersonalComps/page1";
import Page2 from "@/components/PersonalComps/page2";
import Page3 from "@/components/PersonalComps/page3";
import Page4 from "@/components/PersonalComps/page4";

export default function Page() {
  return (
    <div className="">
      <div>
        <Page1/>
      </div>
      <div>
        <Page2/>
      </div>
      <div className="">
        <Page3/>
      </div>
      <div>
        <Page4/>
      </div>
    </div>
  );
}
