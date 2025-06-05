import React from 'react';
import image from '../assets/overview/image.png';
import Button from '../components/button/buttonMain';
import { Bold } from 'iconoir-react';

// Overview Component
export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
         Godrej Lakeside Orchard
A premier residential development on Sarjapur Main Road, Bangalore.

          </span>
          <br />
          <br/>
            <span>
            <p>
   <b> Homes:</b> 3, 3.5, and 4.5 BHK with lake views and private balconies.
<br/>
    <b>Exclusive Living: </b>Only 4 flats per floor, minimal shared walls for privacy.
<br/>
   <b> Green Spaces:</b> 6 acres of open space, 700+ trees, and 1.9 acres of podium greenery.
<br/>
    <b>Amenities:</b> 40+ including a gym, butterfly park, swimming pool, and more.
 </p>
            <br/>
            <p><b>Prime Location</b>
<br/>
    Nearby: Top schools, hospitals, malls, and tech parks.

    Commuting: Easy access to major roads, Carmelaram Railway Station, and upcoming metro.
</p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => setContactModal(!contactmodal)} // Toggle contact modal on button click
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Gardenia"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
