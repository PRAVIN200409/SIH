import React from 'react';
import landingimg from '../assets/landingimg.png';
import footerimg from '../assets/footerimg.png';

const Landing = () => {
  return (
    <div className="bg-customColor-landingbackground w-full">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center pt-14">
        <h1 className="text-[35px] font-urbanist text-customColor-landingverydark text-4xl font-extralight">
          CONDITION BASED MONITORING AND MAINTENANCE SYSTEM
        </h1>
        <h2 className="text-[25px] mt-5 font-urbanist text-customColor-landingverydark font-light">
          Empowering Maintenance with Intelligence
        </h2>
        <button className="mt-5 px-5 py-2 text-[15px] font-urbanist bg-customColor-landingverydark hover:scale-125 hover:transition-transform duration-500 text-white rounded-3xl">
          Start Tracking
        </button>
      </div>

      {/* Landing Image */}
      <div>
        <img
          src={landingimg}
          alt="landingimage"
          className="w-full h-[400px]"
        />
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default Landing;


{/* <img
            src={footerimg}
            alt="Footer Image"
            className="absolute top-0 right-0 w-[200px] h-auto object-cover pointer-events-none"
          /> */}