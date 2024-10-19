// CookieComponent.tsx
import React, { useState, useEffect } from "react";
import "./Cookie.css"; // Optional: import styles if you want

const CookieComponent: React.FC = () => {
  const [points, setPoints] = useState(0);
  const [clicksLeft, setClicksLeft] = useState(5); // Initial click value
  const [isClickable, setIsClickable] = useState(true);
  const [timer, setTimer] = useState(0); // Timer for recharging clicks
  const cookieValue = 1; // Points gained from eating the cookie

  // Function to handle eating the cookie
  const eatCookie = () => {
    if (isClickable && clicksLeft > 0) {
      setPoints(points + cookieValue);
      setClicksLeft(clicksLeft - 1);
    }
    // If no clicks left, start the timer
    if (clicksLeft === 1) {
      setIsClickable(false);
      setTimer(5); // 5 seconds timer to recharge clicks
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0 && !isClickable) {
      // Recharge clicks after timer ends
      setClicksLeft(5);
      setIsClickable(true);
    }
  }, [timer, isClickable]);

  return (
    <div className='cookie-container'>
      <h1>Cookie Clicker</h1>
      <div className='cookie' onClick={eatCookie}>
        🍪 {/* Emoji representation of a cookie */}
      </div>
      <h2>Total Points: {points}</h2>
      <h3>Clicks Left: {isClickable ? clicksLeft : "0"}</h3>
      <h3>
        {isClickable
          ? "You can feed a cookie!"
          : `Recharge in ${timer} seconds...`}
      </h3>
    </div>
  );
};

export default CookieComponent;
