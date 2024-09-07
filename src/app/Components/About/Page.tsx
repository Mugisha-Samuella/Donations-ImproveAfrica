import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="flex flex-col p-8 gap-6 md:flex-row lg:p-[5rem]">
        <div>
          <h3 className="text-secondaryblue">Our Cause</h3>
          <h2 className="text-primaryblue font-extrabold text-xl">
            Empowering Our Community
          </h2>
          <p>
            We are dedicated to providing essential resources and support to
            those in need within our local community. Your donation can make a
            real difference in the lives of our neighbors.
          </p>
        </div>
        <div>
          <h3 className="text-secondaryblue">Our Impact</h3>
          <h2 className="text-primaryblue font-extrabold text-xl">
            See the Difference You Can Make
          </h2>
          <p>
            Your donation can help us expand our reach, provide more services,
            and make a lasting impact on the lives of those we serve. Together,
            we can create a stronger, more resilient community.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
