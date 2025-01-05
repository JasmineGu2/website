

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Jasmine from '/public/headshot.gif';


export default function LandingComponent (){
    return (
        <div className="landing-container">
        <div className="landing-box">
        <div className="flex flex-col gap-12 md:flex-row">

        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
          <Image
  src={Jasmine}
  alt="Headshot of Jasmine"
  className="absolute z-10 h-[280px] w-[280px] max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[320px] rounded-full"
  style={{ objectFit: 'cover' }}
></Image>

            <div className="absolute h-[280px] w-[280px] border-8 border-transparent max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <h1>
              Hi, I&apos;m Jasmine{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </h1>
              I&apos;m a full stack developer (React.js & Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. I love to learn and prioritize creating impact whether that is through technology, charity or community involvement. 
          </div>
          <div className="flex flex-col gap-2">

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <h3>Always looking for opportunities~</h3>
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>
    );
  };
  