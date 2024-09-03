import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import gold from '@/public/goldbars.jpg'
import oil from '@/public/oils.jpg'
import Footer from '../components/Footer';

const page = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Re-creating Ghana | 2024</h2>
        <h1 className="text-3xl font-bold mt-2 text-purple-800">T3: NATURAL RESOURCE TRANSFORMATION</h1>
        <p className="text-xl italic text-gray-700 mt-2">
          Ghana must become the real owners of Ghana's wealth
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="md:w-1/2 mb-4 md:mb-0">
            <Image
              width={200}
              height={200}
            src={gold}
            alt="Gold bars stacked"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <p className="text-sm mb-4">
            Ghana has been blessed with an abundance of natural resources. There is enough under the ground we are
            walking on daily, to make Ghana one of the richest countries in the world.
          </p>
          <p className="text-sm mb-4">
            Unfortunately, due to the past agreements, signed between successive Ghanaian leaders and their foreign
            partners, most of our thirty-four million Ghanaians receive only a very small part of this wealth. Most of it
            goes to foreigners and big elders who signed the agreements.
          </p>
          <p className="text-sm mb-4">
            The Natural Resource Transformation will change this. A PAG Government will transition the ownership of
            Ghana's natural resources to Ghanaians and will justly reward foreigners for their skills and expertise. Ghanaians
            will become the rightful owners and beneficiaries, at last, of all the wealth that we have in this country.
          </p>
          <p className="text-sm">
            We will turn our abundant resources in technical, financial and environmental areas to make the release of
            wealth from our land a positive and enriching experience for all the thirty-four million Ghanaians to share in
            equally.
          </p>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg">
        <p className="text-sm italic">
          "Every year, the vast majority of Ghana's natural wealth is stolen. The country is among the
          largest exporters of gold in the world, yet - according to a study by the Bank of Ghana - less than 1.7
          percent of global returns from its gold make their way back to the Ghanaian government. This means
          ..."
        </p>
      </div>

      <div className="mt-4 text-right text-sm text-gray-600">
        Progressive Alliance for Ghana (PAG)
      </div>
    </div>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <Image 
            width={400}
            height={48}
            src={oil} 
            alt="Oil rig in the ocean" 
            className=" rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">GOLD</h2>
            <p className="text-sm mb-2">
              In 2023, gold mining companies in Ghana produced and sold US$ 5.53 billion worth of gold (10.58 million ounces). After debt offset, we only received 1.71% of the total money made from our mines back into Ghana.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>This came to only 0.16 of a billion US$ (GHC 2.4 billion) back into Ghana. ("TWI BERMA")</li>
              <li>If we charged 10% (round) with our trade in gold alone, we would not need to go begging for the US$ 3 billion IMF loans and the troubles they take us through to grant these loans.</li>
            </ul>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">OIL</h2>
            <p className="text-sm mb-2">
              Between 2010 and 2021, the sale of oil from our three oil fields came to the massive amount of US$ 31.62 billion.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Ghana however received only 17% of this money (only US$ 5.55 billion).</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-red-100 p-4 rounded-lg flex items-start">
        <AlertTriangle className="text-red-600 mr-2 flex-shrink-0" />
        <p className="text-sm">
          <span className="font-semibold">Warning:</span> that the remaining 83% is robbed by outside entities — mainly multinational corporations. In other words, of the US$ 5.2 billion of gold produced from 1990 to 2002, the government received only US$ 87.3 million in corporate income taxes and royalty payments. ("Oduro de Ghre, TWN")
        </p>
      </div>
      <div className="mt-4 text-right text-sm text-gray-600">
        Progressive Alliance for Ghana (PAG)
      </div>
      </div>
      <Footer />
    </>
  );
};

export default page;