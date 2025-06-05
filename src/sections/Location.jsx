import React from 'react';
import mapPointer from '../assets/location/markerGodrejGreen.png'; // Importing map pointer icon
import Button from '../components/button/buttonMain'; // Import the reusable Button component

export const Location = () => {
  return (
    <section id="Location" className="max-w-full flex flex-col items-center bg-white">
      {/* Location Section Header and Info */}
      <div className="w-full flex flex-col md:flex-row items-center py-7 md:py-14 gap-6 md:gap-14">
        
        {/* Title and Location Info */}
        <div className="flex flex-col items-center md:items-start w-full px-6 md:pl-[7.5rem] md:justify-between gap-6 text-center md:text-left lg:max-w-lg"> 
          {/* Center items on mobile view, align left on larger screens */}
          
          <div className="flex md:flex-col items-center md:items-start w-full  md:px-2 gap-2 md:gap-6 ">
            
            <div className='flex flex-col items-center md:items-start w-full lg:px-2 gap-3 md:gap-6 '>
              {/* Section Title */}
              <h1 className="text-3xl md:text-5xl font-subheading font-normal text-black uppercase">Location</h1> 
              {/* Location Address with Map Pointer */}
              <div className="flex items-center justify-center md:justify-start">
                <img src={mapPointer} alt="Map Pointer" className="w-3 h-3 md:w-5 md:h-5 mr-2" />
                <p className="text-xs md:text-xl font-body font-medium">
                  Sarjapur Road, Bengaluru
                </p>
              </div>
            </div>

            <ol className='text-left font-body text-xs md:text-base list-disc font-medium pl-1 md:pl-5 hidden sm:block space-y-3'>
                <li className=''>RGA Tech Park - 4 mins</li>
                <li className=''>Sarjapur Main Road - 1 min</li>
                <li className=''>Primus Public School - 3 mins</li>
                <li className=''>Market Square Mall - 4 mins</li>
                <li className=''>Manipal Hospital - 15 mins</li>
                {/* <li className=''>10 mins- Decathon Chandapura Market </li> */}
            </ol>
          </div>

          {/* Google Maps Button */}
          <div className="text-center md:text-left w-fit">
            <Button 
              text="Open in Google Maps" // Button text
              className="whitespace-nowrap"  // Prevent text wrapping
              onClick={() => window.open("https://maps.app.goo.gl/XHspqbJHdP55cASA8", "_blank")} // Opens Google Maps link in a new tab
            />
          </div>
        </div>
              {/* Google Maps Iframe */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 min-h-[60vh]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.884834661425!2d77.70188227507506!3d12.8911286874169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13770d8ab99b%3A0x346ffde1c7a0d564!2sGodrej%20Lakeside%20Orchard%20-%20Sarjapur%20Road%2C%20Bangalore!5e1!3m2!1sen!2sin!4v1749110381252!5m2!1sen!2sin" 
         className="w-full h-full"
                 style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};
