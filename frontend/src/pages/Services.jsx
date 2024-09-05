import React from "react";
import civildata from "../api/civilEngineering.json"
import architecturaldata from "../api/architectural.json"
import { ServicesGroup } from "../components/ServicesComponents/ServicesGroup";
import "./CSS/Services.css"
import { useEffect } from "react";
function services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="Services-main">
        <h1>Civil Services</h1>
        <ServicesGroup data={civildata} className="civil"></ServicesGroup>

        <h1>Architectural services</h1>
        <ServicesGroup data={architecturaldata} className="architecture"></ServicesGroup>
      </div>
    </>
  );
}
export default services;