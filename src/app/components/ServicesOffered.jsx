import React from "react";
import ServicesCard from "./ServicesCard";

function ServicesOffered() {
  const services = [
    {
      name: "Web Development",
      description:
        "We create responsive, visually stunning websites that deliver seamless functionality and align with your business goals. From simple landing pages to complex platforms, our solutions are designed to stand out and drive results.",
    },
    {
      name: "App Development",
      description:
        "Our app development services deliver intuitive, high-performing mobile applications that engage users and meet your business needs. We handle everything from design to launch, ensuring a top-notch user experience. ",
    },
    {
      name: "Maintenance & Support",
      description:
        "We provide ongoing maintenance and support to keep your website or app secure and optimized. Our team handles updates and resolves issues promptly, ensuring smooth and reliable performance",
    },
    {
      name: "UI/UX Designing",
      description:
        "Our UI/UX services focus on crafting engaging, user-friendly interfaces that enhance user experience and drive satisfaction. We combine innovative design with user research for seamless interactions",
    },
    {
      name: "Wordpress",
      description:
        "We offer tailored WordPress solutions, including custom themes and plugins, to build and manage your website efficiently. Our services ensure your WordPress site is functional, optimized, and visually appealing",
    },
    {
      name: "Desktop App",
      description:
        "Our desktop app development services create powerful, reliable applications tailored to your needs. We deliver high-quality, user-friendly solutions that enhance productivity and integrate seamlessly with your systems",
    },
  ];
  return (
    <div className="my-14">
      <p className="py-5 text-4xl text-center font-semibold text-[#c9f31d]">
        Services Offered
      </p>
      <p className="text-white w-[60%] my-5 text-center mx-auto">
        Tired of managing multiple vendors for your diverse business needs?
        Simplify your life with us! We offer a comprehensive range of services
        all under one roof, designed to streamline your operations, enhance
        productivity, and help you reach your objectives with ease.
      </p>
      <div className="grid sm:grid-cols-3 px-4 grid-cols-1 sm:gap-10 gap-14 mt-10">
        {services.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesOffered;
