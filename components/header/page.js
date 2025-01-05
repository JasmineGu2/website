"use client"
import Link from "next/link";
import Contact from "../contact/page";
export default function Header () {

    // have Projects - Technical and Product
    // Community - Compass Food Bank, EFA, London Boys and Girls Club, Social Justice CLub President, MYAC President
            // Western AI - Internals, Residence Soph - 

    const items = ["Work Experiences", "Projects", "Commmunity", "About Me"]
    return (
      <div className="w-full justify-between flex ">
      <div className="header-container">
      <Link href="#landing" className="header-item"> <img src="love.png" className="img"></img> </Link>
      <Link href="#about" className="header-item"> About</Link>
      <Link href="#work" className="header-item"> Work </Link>
      <Link href="#projects" className="header-item">Projects </Link>
      </div>
      </div>

    )
}