import React from "react";
import Header from "@/components/Header";
import EventDetails from "@/components/EventDetails";
import Honorees from "@/components/Honorees";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Quiz from "@/components/Quiz";
import RsvpForm from "@/components/RsvpForm";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <EventDetails />
      <Honorees />
      <Gallery />
      <Location />
      <Quiz />
      <RsvpForm />
    </>
  );
};

export default HomePage;
