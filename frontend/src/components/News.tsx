"use client";

import "@/styles/News.css";
import Image from "next/image";
import newsImage from "@/assets/images/news-image.jpg";
import loveIcon from "@/assets/icons/love.svg";
import { useRef, useEffect, useState } from "react";

type CanvasRef = React.RefObject<HTMLCanvasElement>;
type Canvas2dContext = CanvasRenderingContext2D;
type State<Type> = [Type, React.Dispatch<React.SetStateAction<Type>>];

export const News: React.FC = () => {
  const hahaRef: CanvasRef = useRef<HTMLCanvasElement>(null),
    wowRef: CanvasRef = useRef<HTMLCanvasElement>(null),
    sadRef: CanvasRef = useRef<HTMLCanvasElement>(null),
    sadRef2: CanvasRef = useRef<HTMLCanvasElement>(null),
    angryRef: CanvasRef = useRef<HTMLCanvasElement>(null),
    likeReactionRef: React.RefObject<SVGPathElement> = useRef<SVGPathElement>(null)!,
    [fill, setFill]: State<string> = useState<string>("transparent"),
    [stroke, setStroke]: State<string> = useState<string>("#000"),
    [reactionName, setReactionName]: State<string> = useState<string>(""),
    [reactionNameColor, setReactionNameColor]: State<string> =
      useState<string>("#000"),
    flexRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null),
    likeClickHandler: () => void = () => {
      switch (fill) {
        case "transparent":
          setFill("#006aff");
          setStroke("transparent");
          setReactionName("Like");
          setReactionNameColor("#006aff");
          break;
        default:
          setFill("transparent");
          setStroke("#000");
          setReactionName("");
      }
    },
    mouseDownHandler: () => void = () => window.setTimeout(() => flexRef.current!.style.opacity === "0" ? flexRef.current!.style.opacity = "1" : flexRef.current!.style.opacity = "0", 500),
    reactionClickHandler: (e: React.MouseEvent) => void = (e: React.MouseEvent) => {
      if ("outerHTML" in e.target) {
        const outerHTML: string = e.target.outerHTML as string;

        likeReactionRef.current!.innerHTML = outerHTML;
      }
    };

  useEffect(() => {
    const hahaContext: Canvas2dContext = hahaRef.current!.getContext("2d")!;

    hahaContext.fillStyle = "rgb(255, 255, 0)";

    hahaContext.beginPath();
    hahaContext.arc(100, 50, 50, 0, Math.PI * 2);
    hahaContext.closePath();
    hahaContext.fill();

    hahaContext.fillStyle = "#000";

    hahaContext.beginPath();
    hahaContext.arc(80, 40, 10, 0, Math.PI * 2);
    hahaContext.closePath();
    hahaContext.fill();

    hahaContext.beginPath();
    hahaContext.arc(120, 40, 10, 0, Math.PI * 2);
    hahaContext.closePath();
    hahaContext.fill();

    hahaContext.beginPath();
    hahaContext.arc(100, 65, 25, 0, Math.PI);
    hahaContext.closePath();
    hahaContext.fill();

    const wowContext: Canvas2dContext = wowRef.current!.getContext("2d")!;

    wowContext.fillStyle = "rgb(255, 255, 0)";

    wowContext.beginPath();
    wowContext.arc(100, 60, 50, 0, Math.PI * 2);
    wowContext.closePath();
    wowContext.fill();

    wowContext.fillStyle = "#000";

    wowContext.beginPath();
    wowContext.arc(80, 50, 10, 0, Math.PI * 2);
    wowContext.closePath();
    wowContext.fill();

    wowContext.beginPath();
    wowContext.arc(120, 50, 10, 0, Math.PI * 2);
    wowContext.closePath();
    wowContext.fill();

    wowContext.beginPath();
    wowContext.arc(100, 85, 15, 0, Math.PI * 2);
    wowContext.closePath();
    wowContext.fill();

    const sadContext: Canvas2dContext = sadRef.current!.getContext("2d")!;

    sadContext.fillStyle = "rgb(255, 255, 0)";

    sadContext.beginPath();
    sadContext.arc(100, 60, 50, 0, Math.PI * 2);
    sadContext.fill();

    sadContext.fillStyle = "#000";

    sadContext.beginPath();
    sadContext.arc(80, 50, 10, 0, Math.PI * 2);
    sadContext.fill();

    sadContext.beginPath();
    sadContext.arc(120, 50, 10, 0, Math.PI * 2);
    sadContext.fill();

    const sadContext2: Canvas2dContext = sadRef2.current!.getContext("2d")!;

    sadContext2.lineWidth = 6;
    sadContext2.lineCap = "round";
    sadContext2.beginPath();
    sadContext2.arc(20, 85, 25, 0, Math.PI * 1.5, true);
    sadContext2.stroke();

    const angryContext: Canvas2dContext = angryRef.current!.getContext("2d")!,
      linearGradient: CanvasGradient = angryContext.createLinearGradient(
        0,
        0,
        100,
        100
      );

    linearGradient.addColorStop(0, "rgb(255, 255, 0)");
    linearGradient.addColorStop(1, "#f00");

    angryContext.fillStyle = linearGradient;

    angryContext.beginPath();
    angryContext.arc(50, 50, 50, 0, Math.PI * 2);
    angryContext.fill();

    angryContext.fillStyle = "#000";

    angryContext.beginPath();
    angryContext.arc(30, 35, 10, 0, Math.PI * 2);
    angryContext.fill();

    angryContext.beginPath();
    angryContext.arc(70, 35, 10, 0, Math.PI * 2);
    angryContext.fill();

    angryContext.strokeStyle = "#000";

    angryContext.lineCap = "round";
    angryContext.lineWidth = 7;
    angryContext.beginPath();
    angryContext.arc(50, 80, 25, 0, Math.PI, true);
    angryContext.stroke();
  });

  return (
    <div className="news">
      <div className="news-card">
        <div className="news-card-flex" ref={flexRef}>
          <Image src={newsImage} alt="News Image" className="news-card-image" />
          <div className="news-card-text-container">
            <div className="news-card-title">
              <div className="news-card-title-text">Asser</div>
            </div>
            <div className="news-card-text">
              Asser Ibrahim Mahmoud Abas Saad Salah Mohamed Khalil Almadawy
            </div>
          </div>
        </div>
        <div className="news-card-reactions" ref={flexRef}>
          <div className="reaction-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={reactionClickHandler}
              className="reaction"
              style={{ width: "35px", height: "35px" }}
            >
              <path
                d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                fill="#006aff"
              />
            </svg>
          </div>
          <div className="reaction-container">
            <Image className="reaction small love" src={loveIcon} alt="Love" />
          </div>
          <div className="reaction-container face">
            <canvas className="reaction" ref={hahaRef} onClick={reactionClickHandler}></canvas>
          </div>
          <div className="reaction-container face">
            <canvas className="reaction" ref={wowRef} onClick={reactionClickHandler}></canvas>
          </div>
          <div className="reaction-container face">
            <canvas className="reaction" ref={sadRef} onClick={reactionClickHandler}></canvas>
            <canvas className="reaction" ref={sadRef2} onClick={reactionClickHandler}></canvas>
            <div className="water-drop"></div>
          </div>
          <div className="reaction-container last">
            <canvas className="reaction" ref={angryRef} style={{ height: "47px" }}></canvas>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 520 512"
          onClick={likeClickHandler}
          className="like-reaction"
          onMouseDown={mouseDownHandler}
        >
          <path
            d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
            fill={fill}
            stroke={stroke}
            stroke-width="4"
            stroke-linecap="round"
            ref={likeReactionRef}
          />
        </svg>
        <div className="reaction-name" style={{ color: reactionNameColor }}>
          {reactionName}
        </div>
      </div>
    </div>
  );
};