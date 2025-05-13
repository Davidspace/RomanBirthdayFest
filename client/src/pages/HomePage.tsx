import React from "react";
import Header from "@/components/Header";
import EventDetails from "@/components/EventDetails";
import Honorees from "@/components/Honorees";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import AssignmentFinder from "@/components/AssignmentFinder";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <EventDetails />
      <Honorees />
      <Gallery />
      <Location />
      <AssignmentFinder />
    </>
  );
};

export default HomePage;
