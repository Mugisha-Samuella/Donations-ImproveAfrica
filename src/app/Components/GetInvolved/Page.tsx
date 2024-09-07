import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
       <div>
        <h4>Get Involved</h4>
        <h3>Join Us in Making a Difference</h3>
        <p>
          Your donation, no matter the amount, can have a profound impact on the
          lives of those in need. Together, we can create a stronger, more
          resilient community.
        </p>
        <a href="">Donate Now</a>
      </div>
      <Image src={"/Images/me2.jpg"} width={50} height={50} alt="me"></Image>
    </div>
  )
}

export default Page
