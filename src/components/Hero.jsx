// import React from "react";
import "./Hero.css";
import HeroImage from "../assets/images/homeVisao.png";
import CPPengrenagem2_p from "../assets/images/CPPengrenagem2_p.png";
import { useState, useEffect } from "react";
import { textTypingEffect } from "../utils/textTypingEffect";

const Hero = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    textTypingEffect("Políticas Públicas", setText);
  }, []);

  return (
    <div className="Hero">
      <div className="Hero-Image">
        <img src={HeroImage} alt="Equipe do CPP" />
      </div>
      <div className="Hero-Text">
        <div className="Text-Main">
          <h6>CURSO DE</h6>
          <div className="Animation-type">
            <p className="text-title-typewriter">{text}</p>
          </div>
          <div className="Animation-city">
            <span>Queimados</span>
            <img src={CPPengrenagem2_p} alt="" />
            <span>2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
