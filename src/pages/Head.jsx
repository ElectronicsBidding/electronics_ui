import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const Head = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Head;
