import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function Home() {
  const totalRaised = 10000; 
  const goalAmount = 100000; 

  const progressPercentage = Math.min((totalRaised / goalAmount) * 100, 100); // Calculate progress as a percentage

  return (
    <div className="h-screen flex flex-col justify-between bg-gray-100">
      {/* Mobile Header */}
      <div className="flex flex-row p-3 gap-2 justify-center items-center">
        <FaHandHoldingHeart className="w-6 h-6 text-red-600" />
        <h5 className="text-base font-bold text-gray-700">ImproveAfrica</h5>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center lg:flex-row justify-center w-full lg:w-3/4 mx-auto p-6 lg:p-8 space-y-6 lg:space-y-0">
        {/* Combined Card */}
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <Image
              src={"/Images/gallery.png"}
              width={500}
              height={500}
              alt="Gallery"
              className="object-cover h-full w-full"
            />
          </div>

          {/* Text Section */}
          <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
            {/* Desktop Header */}
            <div className="flex flex-row items-center gap-2 mb-4">
              {/* <FaHandHoldingHeart className="w-8 h-8 text-red-600" /> */}
              <h5 className="text-lg font-bold text-gray-700">
                ImproveAfrica
              </h5>
            </div>

            <h1 className="font-extrabold text-3xl lg:text-4xl text-gray-800 mb-4">
              Help Make a Difference
            </h1>
            <p className="text-base text-gray-600 mb-4">
              Your donation can provide essential aid and support to those in need. Join us in making a positive impact on our community.
            </p>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 rounded mb-4">
              <h1 className="text-base font-semibold">
                IMMANUEL VISION SCHOOL <br />
                <span className="font-bold">MOMO PAY CODE:</span> *182*8*1*1321072#
              </h1>
            </div>

            <p className="text-base text-gray-600 mb-4">
              The school fees for one child are <strong>45,000 Rwf</strong>, but any contribution, starting at any amount, is greatly appreciated.
            </p>

            {/* Progress Section */}
            <div className="bg-gray-200 rounded-full h-4 w-full overflow-hidden mb-4">
              <div
                className="bg-green-500 h-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              <strong>{totalRaised} Rwf</strong> raised so far out of <strong>{goalAmount} Rwf</strong> goal.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center p-2 pb-2 text-gray-600">
        <h1 className="text-sm flex flex-row justify-center items-center gap-2">
          Made with <FaHeart className="text-red-500" /> by Samuella
        </h1>
      </div>
    </div>
  );
}
