"use client";
import React, { useEffect, useRef } from "react";
import TestinomialCard from "./TestinomialCard";

function Testinomials() {
  const testinimials = [
    {
      picture:
        "https://images.unsplash.com/photo-1656416571067-5d3d9fa8fd0a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "From start to finish, the process was seamless and stress-free. The attention to detail and dedication to customer satisfaction truly set them apart. I'm beyond thrilled with the outcome!",
      name: "— Sarah Johnson",
      company: "Manager of abc",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Their professionalism and expertise are unmatched. They listened to our vision and brought it to life, exceeding our expectations in every way. We couldn't be happier with the results!",
      name: "— Michael Thompson",
      company: "Manager of abc",
    },
    {
      picture:
        "https://media.istockphoto.com/id/1704590314/photo/office-manager-talks-to-the-new-intern.webp?s=1024x1024&w=is&k=20&c=_eWmwpTD-ZmCUxjUMhdLmS6kc9qFgVedNvY50B77K8M=",
      description:
        "The quality of work was outstanding, and the customer service was impeccable. They were attentive, responsive, and truly cared about our satisfaction. Highly recommended!",
      name: "— Emily Davis",
      company: "Manager of abc",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlJTIwY2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "The technical support and implementation were exemplary. The detailed documentation and proactive troubleshooting ensured a smooth deployment and high system reliability",
      name: "— Lisa Green",
      company: "Manager of abc",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The implementation of the new system streamlined our processes significantly. The integration was flawless, and the performance improvements were immediately noticeable.",
      name: "— Sarah Johnson",
      company: "Manager of abc",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1508243529287-e21914733111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The technical execution was spot on. The system's scalability and the seamless API integration surpassed our expectations. Outstanding technical delivery!",
      name: "— David Lee",
      company: "Manager of abc",
    },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const scrollAmount = 4;
    const interval = 20;

    const scroll = () => {
      if (container) {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(scroll, interval);

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <div className="my-14">
      <p className="py-5 text-4xl text-center font-semibold text-[#c9f31d]">
        Testinomials
      </p>
      <div className="overflow-x-auto scrollbar" ref={scrollContainerRef}>
        <div className="flex space-x-6 px-4 py-6">
          {testinimials.map((testinimial, index) => (
            <div className="flex-none w-[25rem]" key={index}>
              <TestinomialCard testinimial={testinimial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testinomials;
