'use client';
import { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
    </>
  );
}
