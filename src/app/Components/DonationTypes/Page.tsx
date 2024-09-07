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
              Your 45,000 donation can pay for a child's school fees in need.
            </p>
            <a href="">Donate 45,000</a>
          </div>
          <div>
            <Image
              src="/Images/educationframe.png"
              alt="education"
              layout="responsive"
              width={100} // These width and height values will define the aspect ratio.
              height={100}
              sizes="(max-width: 768px) 100vw, // For mobile
             (max-width: 1200px) 50vw, // For tablet
             33vw" // For laptops
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <Image
              src="/Images/meal.jpg"
              alt="education"
              layout="responsive"
              width={100} // These width and height values will define the aspect ratio.
              height={100}
              sizes="(max-width: 768px) 100vw, // For mobile
             (max-width: 1200px) 50vw, // For tablet
             33vw" // For laptops
            />
          </div>
          <div>
            <h4 className="bg-lightgreen text-white px-1 rounded-md flex justify-center w-[7rem]">
              25,000 Rwf
            </h4>
            <h3>Provide a Meal</h3>
            <p>
              Your 25,000 Rwf donation can provide a nutritious meal for a
              family in need.
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
              Your 50,000 Rwf donation can provide essential medical care and
              supplies.
            </p>
            <a href="">Donate 50,000 Rwf</a>
          </div>
          <div>
            <Image
              src="/Images/care.jpg"
              alt="education"
              layout="responsive"
              width={100} // These width and height values will define the aspect ratio.
              height={100}
              sizes="(max-width: 768px) 100vw, // For mobile
             (max-width: 1200px) 50vw, // For tablet
             33vw" // For laptops
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
