import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If the date has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex justify-center space-x-4 md:space-x-8" id="countdown-timer">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="countdown-item bg-background bg-opacity-90 px-4 py-3 md:p-6 rounded-lg">
        <span className="font-cinzel text-3xl md:text-4xl text-primary" id="days">
          {formatNumber(timeLeft.days)}
        </span>
        <span className="block font-lato text-sm uppercase mt-1">Days</span>
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="countdown-item bg-background bg-opacity-90 px-4 py-3 md:p-6 rounded-lg">
        <span className="font-cinzel text-3xl md:text-4xl text-primary" id="hours">
          {formatNumber(timeLeft.hours)}
        </span>
        <span className="block font-lato text-sm uppercase mt-1">Hours</span>
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="countdown-item bg-background bg-opacity-90 px-4 py-3 md:p-6 rounded-lg">
        <span className="font-cinzel text-3xl md:text-4xl text-primary" id="minutes">
          {formatNumber(timeLeft.minutes)}
        </span>
        <span className="block font-lato text-sm uppercase mt-1">Minutes</span>
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="countdown-item bg-background bg-opacity-90 px-4 py-3 md:p-6 rounded-lg">
        <span className="font-cinzel text-3xl md:text-4xl text-primary" id="seconds">
          {formatNumber(timeLeft.seconds)}
        </span>
        <span className="block font-lato text-sm uppercase mt-1">Seconds</span>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
