"use client";

import { useState } from "react";
import "@/styles/UpArrowCircle.css";

type State<Type> = [Type, React.Dispatch<React.SetStateAction<Type>>];

export const UpArrowCircle: React.FC = () => {
  const [currentScrollY, setCurrentScrollY]: State<number> = useState<number>(window.scrollY),
    [strokeDashoffset, setStrokeDashoffset]: State<number> = useState<number>(565),
    scrollToTop: () => void = () => window.scrollTo({ top: 0, behavior: "smooth" });

  window.addEventListener("scroll", () => {
    setCurrentScrollY(window.scrollY);
    setStrokeDashoffset(565 - (565 * (currentScrollY / document.documentElement.offsetHeight)) - 35);
  });

  return (
    <>
      <svg className="circle" viewBox="0 0 200 200" onClick={scrollToTop}>
        <defs>
          <linearGradient id="linear-gradient">
            <stop offset={0} stopColor="#004387" />
            <stop offset={50} stopColor="#00AAF7" />
          </linearGradient>
        </defs>
        <circle cy={100} cx={100} r={90} fill="url(#linear-gradient)" stroke="#f00" strokeWidth={10} strokeLinecap="round" strokeDasharray={565} strokeDashoffset={strokeDashoffset} style={{ display: currentScrollY === 0 ? "none" : "block" }} />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        style={{ display: currentScrollY === 0 ? "none" : "block" }}
        onClick={scrollToTop}
      >
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          fill="#fff"
        />
      </svg>
    </>
  );
};