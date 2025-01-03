"use client";


import React, { useState } from "react";



const MarketButtons = () => {
  const [focusedButton, setFocusedButton] = useState("KRW Market"); // Default focus

  const handleFocus = (button) => {
    setFocusedButton(button); // Update the focused button
  };
  const [toggle,setToggle] = useState();

  return (
    <>
    <div className="flex justify-start items-center">
      <button
        className={`Marketbtn ${focusedButton === "KRW Market" ? "focused" : ""}`}
        onClick={() => handleFocus("KRW Market")}
      >
        KRW Market
      </button>
      <button
        className={`Marketbtn ${focusedButton === "BTC Market" ? "focused" : ""}`}
        onClick={() => handleFocus("BTC Market")}
      >
        BTC Market
      </button>
      <button
        className={`Marketbtn ${focusedButton === "Held" ? "focused" : ""}`}
        onClick={() => handleFocus("Held")}
      >
        Held
      </button>
      <button
        className={`Marketbtn ${focusedButton === "Favorites" ? "focused" : ""}`}
        onClick={() => handleFocus("Favorites")}
      >
        Favorites
      </button>
      
    </div>
    
    </>
  );
};

export default MarketButtons;
