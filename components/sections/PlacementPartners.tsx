"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedSection } from "../ui/AnimatedSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const placementPartners = [
  {
    name: "Adani Thiruvananthapuram",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Adani-Logo.png",
    fallback: "Adani",
  },
  {
    name: "Kempegowda International Airport Bengaluru",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Kempegowda_International_Airport_Logo.svg/1200px-Kempegowda_International_Airport_Logo.svg.png",
    fallback: "KIA",
  },
  {
    name: "Chennai International Airport",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Chennai_International_Airport_Logo.svg/1200px-Chennai_International_Airport_Logo.svg.png",
    fallback: "Chennai Airport",
  },
  {
    name: "Delhivery",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Delhivery-Logo.png",
    fallback: "Delhivery",
  },
  {
    name: "Kannur International Airport",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Kannur_International_Airport_Logo.svg/1200px-Kannur_International_Airport_Logo.svg.png",
    fallback: "Kannur Airport",
  },
  {
    name: "Air India Express",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Air-India-Express-Logo.png",
    fallback: "Air India Express",
  },
  {
    name: "Air India",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Air-India-Logo.png",
    fallback: "Air India",
  },
  {
    name: "Qatar Airways",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Qatar-Airways-Logo.png",
    fallback: "Qatar Airways",
  },
  {
    name: "SpiceJet",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/SpiceJet-Logo.png",
    fallback: "SpiceJet",
  },
  {
    name: "Emmay Logistics",
    logo: "https://via.placeholder.com/200x100/4F46E5/FFFFFF?text=Emmay+Logistics",
    fallback: "Emmay",
  },
  {
    name: "The Road Tales",
    logo: "https://via.placeholder.com/200x100/DC2626/FFFFFF?text=The+Road+Tales",
    fallback: "Road Tales",
  },
  {
    name: "CIAL Cochin International Airport",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Cochin_International_Airport_Logo.svg/1200px-Cochin_International_Airport_Logo.svg.png",
    fallback: "CIAL",
  },
  {
    name: "Bhadra",
    logo: "https://via.placeholder.com/200x100/059669/FFFFFF?text=Bhadra",
    fallback: "Bhadra",
  },
  {
    name: "Çelebi",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Celebi-Logo.png",
    fallback: "Çelebi",
  },
  {
    name: "AirAsia",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/AirAsia-Logo.png",
    fallback: "AirAsia",
  },
  {
    name: "IndiGo",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/IndiGo-Logo.png",
    fallback: "IndiGo",
  },
  {
    name: "Etihad Airways",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Etihad-Airways-Logo.png",
    fallback: "Etihad",
  },
  {
    name: "BWFS Bird Worldwide Flight Services",
    logo: "https://via.placeholder.com/200x100/7C3AED/FFFFFF?text=BWFS",
    fallback: "BWFS",
  },
  {
    name: "Valtrans",
    logo: "https://via.placeholder.com/200x100/EA580C/FFFFFF?text=Valtrans",
    fallback: "Valtrans",
  },
  {
    name: "GlobeGround India",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/GlobeGround-Logo.png",
    fallback: "GlobeGround",
  },
  {
    name: "Fly Smart Go Air",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/GoAir-Logo.png",
    fallback: "GoAir",
  },
  {
    name: "Emirates",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Emirates-Logo.png",
    fallback: "Emirates",
  },
  {
    name: "FedEx",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/FedEx-Logo.png",
    fallback: "FedEx",
  },
  {
    name: "Blue Dart",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Blue-Dart-Logo.png",
    fallback: "Blue Dart",
  },
  {
    name: "Maersk",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Maersk-Logo.png",
    fallback: "Maersk",
  },
  {
    name: "DHL",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/DHL-Logo.png",
    fallback: "DHL",
  },
  {
    name: "Aramex",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Aramex-Logo.png",
    fallback: "Aramex",
  },
];

export function PlacementPartners() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const logos = sectionRef.current.querySelectorAll(".partner-logo");
    gsap.fromTo(
      logos,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where Our Students Are Placed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our students have been successfully placed in leading aviation,
            logistics, and shipping companies worldwide
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
          {placementPartners.map((partner, index) => (
            <div
              key={partner.name}
              className="partner-logo group flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200"
            >
              <div className="relative w-full h-16 md:h-20 flex items-center justify-center p-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".fallback-text")) {
                      const fallback = document.createElement("div");
                      fallback.className =
                        "fallback-text text-xs text-gray-600 text-center font-medium px-2";
                      fallback.textContent =
                        partner.fallback || partner.name.split(" ")[0];
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
