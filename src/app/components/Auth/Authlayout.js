"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import AuthModal from "./AuthModal";


const Authlayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>{children}</main>
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Authlayout;
