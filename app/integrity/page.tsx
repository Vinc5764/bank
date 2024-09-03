import Image from 'next/image'
import integrity from '@/public/integrity.jpg'
import Integrity from '../components/Integrity'


export default function EthicalTransformation() {
  return (
    <div className="bg-gray-100 lg:px-[20rem] min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-900">
            T5: ETHICAL TRANSFORMATION
          </h1>
          <p className="text-lg italic mt-2 text-orange-600">Integrity all the way!</p>
        </div>

        {/* Image Section */}
        <div className="my-8 flex justify-center">
          <Image
            src={ integrity}// Placeholder, update the image path accordingly
            alt="Ethical Transformation Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="text-gray-700">
          <p className="mb-4">
            The <span className="font-bold">Ethical Transformation</span> will be the pillar around which all the other transformation's transformations will rely. 
            This initiative promotes a culture of honesty, integrity, and transparency across all sectors of society, including government and private enterprise.
          </p>

          <p className="mb-4">
            By combating corruption and fostering ethical leadership, the PAG Government will seek to uphold moral standards that will sustain long-term public trust and long-term progress.
          </p>

          <p className="mb-4">
            The greatest drawback and killer of any developmental agenda is corruption and unethical behaviour around the acquisition and use of money.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">A Pledge to the People</h2>
          <p className="mb-4">
            A PAG Government will pledge to the people of Ghana to lead the way in developing an alternative culture to the current pervasive culture of corruption in our nation.
          </p>

          <p className="mb-4">
            We will model ethical leadership which we believe, after a while, will become the new and preferred culture for the majority of our people. We will personally hold ourselves accountable to the people of Ghana.
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>No acquisition of property while in office. The President, the Vice President and his cabinet as well as all key party officials will sign a pledge not to acquire any personal property during their first term of office.</li>
            <li>Government contracts will be awarded on merit alone.</li>
          </ul>
        </div>
      </div>
      <Integrity />
    </div>
  )
}
