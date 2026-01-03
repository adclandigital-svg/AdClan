"use client";
import "./AboutClients.css";

export default function AboutClients() {
  const clients = [
    "/client-logo/adclan-logo-1.png",
    "/client-logo/adclan-logo-2.png",
    "/client-logo/adclan-logo-3.png",
    "/client-logo/adclan-logo-4.png",
    // "/client-logo/adclan-logo-5.png",
    "/client-logo/adclan-logo-6.png",
    "/client-logo/adclan-logo-7.png",
    "/client-logo/adclan-logo-8.png",
    "/client-logo/adclan-logo-9.png",
    "/client-logo/adclan-logo-10.png",
    "/client-logo/adclan-logo-11.png",
    "/client-logo/adclan-logo-12.png",
    "/client-logo/adclan-logo-13.png",
    // "/client-logo/adclan-logo-14.png",
    "/client-logo/adclan-logo-15.png",
    "/client-logo/adclan-logo-16.png",
    "/client-logo/adclan-logo-17.png",
    "/client-logo/adclan-logo-18.png",
    "/client-logo/adclan-logo-19.png",
    "/client-logo/adclan-logo-20.png",
    "/client-logo/adclan-logo-21.png",
    "/client-logo/adclan-logo-22.png",
    "/client-logo/adclan-logo-23.png",
    "/client-logo/adclan-logo-24.png",
    "/client-logo/adclan-logo-25.png",
    "/client-logo/adclan-logo-26.png",
    "/client-logo/adclan-logo-27.png",
    "/client-logo/adclan-logo-28.png",
  ];

  return (
    <section className="about-clients">
      <div className="clients-container">
        {clients.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
