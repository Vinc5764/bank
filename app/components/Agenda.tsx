import Image from 'next/image';
import cornFieldImage from '@/public/cornfield.jpg'; // Place your image in the public directory

export default function AgriculturalTransformation() {
  return (
    <div className="bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-purple-800 text-xl font-bold uppercase mb-2">T1: Agricultural Transformation</h1>
        <h2 className="text-gray-700 text-lg italic mb-4">Grow what we eat and beyond</h2>
        
        <div className="relative w-full h-96 mb-6">
          <Image src={cornFieldImage} alt="Corn Field" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
        
        <p className="text-gray-700 mb-4">
          The Agricultural Transformation will aim at making Ghana grow all that we need for food and beyond that, for export. 
          Some key targets will be to achieve self-sufficiency in critical sectors, such as rice and poultry production, within three years.
        </p>
        
        <div className="mb-6">
          <h3 className="text-gray-800 font-bold text-lg mb-2">Ghana Chicken Status:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Seven out of every eight chickens (87%) consumed in Ghana are imported!</li>
            <li>The import bill is US$ 410 million a year (GHS 6.3 billion).</li>
            <li>If we were to grow our own chickens in Ghana (100%) that would realise GHS 6 billion wealth to Ghanaian poultry farmers, chicken feed producers, maize growers etc. plus hundreds of thousands of jobs.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-gray-800 font-bold text-lg mb-2">Ghana Rice Status:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>60% of the rice consumed in Ghana is imported!</li>
            <li>This costs us US$ 391 million (GHS 6 billion).</li>
            <li>Imagine distributing this money within Ghana: hundreds of thousands of farmers, fertilizer production and distribution, milling, packaging etc. - the value chain.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
