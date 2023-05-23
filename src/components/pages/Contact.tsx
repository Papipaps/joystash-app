import React, { useState } from "react";
import Typo from "../atoms/Typo/Typo";
import Card from "../molecules/Card/Card";
import { Button } from "../atoms/Button/Button";
import Navbar from "../organisms/Navigation/Navbar";

function Contact() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => setShowModal((prev) => !prev);
  return (
    <>
    <Navbar/>
    </>
  );
}

export default Contact;
