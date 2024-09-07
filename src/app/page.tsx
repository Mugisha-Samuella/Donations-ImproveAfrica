import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function Home() {
  const totalRaised = 160000; 
  const goalAmount = 1600000; 

  const progressPercentage = Math.min((totalRaised / goalAmount) * 100, 100);

  return (
    <div className="h-screen flex flex-col justify-between bg-gray-100">
      {/* Mobile Header */}
      <div className="flex flex-row p-3 gap-2 justify-center items-center">
        <FaHandHoldingHeart className="w-6 h-6 text-red-600" />
        <h5 className="text-base font-bold text-gray-700">ImproveAfrica</h5>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center lg:flex-row justify-center w-full lg:w-3/4 mx-auto p-6 lg:p-8 space-y-6 lg:space-y-0">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full">
          <div className="lg:w-1/2">
            <Image
              src={"/Images/gallery.png"}
              width={500}
              height={500}
              alt="Gallery"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
            <div className="flex flex-row items-center gap-2 mb-4">
              <h5 className="text-lg font-bold text-gray-700">ImproveAfrica</h5>
            </div>

            <h1 className="font-extrabold text-3xl lg:text-4xl text-gray-800 mb-4">
              Let’s Help 40 Kids Get to School!
            </h1>
            <p className="text-base text-gray-600 mb-4">
              School starts this Monday, and 40 kindergarten students need your support. Each child's school fees are <strong>40,000 Rwf</strong>, and raising <strong>1,600,000 Rwf</strong> is just for one term. We don't want any child to drop out after one term, so your help is crucial!
            </p>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 rounded mb-4">
              <h1 className="text-base font-semibold">
                IMMANUEL VISION SCHOOL <br />
                <span className="font-bold">MOMO PAY CODE:</span> *182*8*1*1321072#
              </h1>
            </div>

            <p className="text-base text-gray-600 mb-4">
              Your contributions can start from just <strong>100 Rwf</strong> and are greatly appreciated. Help ensure these kids don’t miss out on their education. Even if we don’t reach the full amount by Monday, your contributions can still make a difference after the school term begins.
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
