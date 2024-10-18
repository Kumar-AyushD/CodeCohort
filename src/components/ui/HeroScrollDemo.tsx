"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import img  from '../../../src/public/video-img22.png'

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Connect Ideas. Collaborate Efforts. <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Code Together.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={img}
          alt="hero"
          height={820}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}