"use client";
import React from "react";
import Image from "next/image";

const PhoneVideoMock = ({ phoneImg, videoSrc }) => {
  return (
    <div className="relative w-[200px] md:w-[260px] lg:w-[300px] aspect-[9/19] mx-auto">
      {/* Phone Dummy Image (background) */}
      <Image
        src={phoneImg}
        alt="Phone mockup"
        fill
        className="object-contain pointer-events-none select-none"
        priority
      />

      {/* Video overlay inside screen */}
      <div className="absolute top-[7%] left-[7%] w-[86%] h-[84%] rounded-[22px] overflow-hidden">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PhoneVideoMock;
