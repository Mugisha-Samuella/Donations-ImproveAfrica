import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <div className="flex flex-col p-6 lg:p-24 lg:gap-10">
        <div className="flex flex-col md:flex-row">
          <div>
            <h4 className="bg-lightgreen text-white px-1 rounded-md flex justify-center w-[7rem]">
              45,000 Rwf
            </h4>
            <h3>Educational Support</h3>
            <p>
              Your 45,000 Rwf donation can pay for a child&apos;s school fees in need.
            </p>
            <a href="">Donate 45,000 Rwf</a>
          </div>
          <div className="relative w-full h-64 md:w-1/2"> {/* Responsive image container */}
            <Image
              src="/Images/educationframe.png"
              alt="Educational support"
              layout="fill" 
              objectFit="cover" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full h-64 md:w-1/2"> {/* Responsive image container */}
            <Image
              src="/Images/meal.jpg"
              alt="Providing a meal"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <h4 className="bg-lightgreen text-white px-1 rounded-md flex justify-center w-[7rem]">
              25,000 Rwf
            </h4>
            <h3>Provide a Meal</h3>
            <p>
              Your 25,000 Rwf donation can provide a nutritious meal for a family in need.
            </p>
            <a href="">Donate 25,000 Rwf</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div>
            <h4 className="bg-lightgreen text-white px-1 rounded-md flex justify-center w-[7rem]">
              50,000 Rwf
            </h4>
            <h3>Provide Essential Care</h3>
            <p>
              Your 50,000 Rwf donation can provide essential medical care and supplies.
            </p>
            <a href="">Donate 50,000 Rwf</a>
          </div>
          <div className="relative w-full h-64 md:w-1/2"> {/* Responsive image container */}
            <Image
              src="/Images/care.jpg"
              alt="Providing essential care"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
