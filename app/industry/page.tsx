import Image from 'next/image';
import industrialImage from '@/public/robot.jpg'; // Place your image in the public directory
import Footer from '../components/Footer';

export default function IndustrialTransformation() {
  return (
    <>
    <div className="bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-purple-800 text-xl font-bold uppercase mb-2">T2: Industrial Transformation</h1>
        <h2 className="text-gray-700 text-lg italic mb-4">Make what we use</h2>
        
        <div className="relative w-full h-96 mb-6">
          <Image src={industrialImage} alt="Industrial Worker" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
        
        <p className="text-gray-700 mb-4">
          Under the Industrial Transformation, Ghana will aim to manufacture all consumer goods locally - from basic necessities like pens, clothing, shoes, TV sets, mobile phones, buses, cars, tractors, building materials, sanitary wares, furniture, aeroplanes and satellites etc.
        </p>
        <p className="text-gray-700 mb-4">
          The older generation will remember that during Nkrumah’s short rule, Ghana was producing many of the items listed above.
        </p>
        <p className="text-gray-700 mb-4">
          This initiative will reduce reliance on imports and stimulate local industry and the creation of millions of jobs for the people of Ghana, fostering economic independence.
        </p>
        <p className="text-gray-700 mb-4">
          We spend over US$ 250 million on used clothing, US$ 400 million (GHS 1.6 billion?) on building materials, US$ 358 million on cars.
        </p>
        <p className="text-gray-700 mb-4">
          The value chain for each of these three items alone, if being produced locally, will release billions of Ghana Cedis into the nation, that will spread prosperity in this country.
        </p>
        <p className="text-gray-700 mb-4">
          A PAG Government will reverse this trend by initiating a transformation in which we produce most of the goods we need in this country.
        </p>
      </div>
    </div>
      <Footer />
    </>
  );
}
