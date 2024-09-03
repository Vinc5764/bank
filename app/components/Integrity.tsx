import Image from 'next/image'
import integrity1 from '@/public/integrity1.jpg'
import integrity2 from '@/public/integrity2.jpg'

export default function Integrity() {
    return (
      <>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-900">
            PROVIDING FIRST CLASS CARE FOR OUR PEOPLE
          </h1>
          <p className="text-lg italic mt-2 text-orange-600">
            Through the implementation of these five transformational transformations, a PAG Government will open the doors to very significant increase in Ghana’s economic muscle and social advancement.
          </p>
        </div>

        {/* Image Section */}
        <div className="my-8 flex justify-center">
          <Image
            src={integrity1} // Placeholder, update the image path accordingly
            alt="First Class Care Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            />
        </div>

        {/* Content Section */}
        <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Synergistic Impact</h2>
            <p className="mb-4">
              The synergistic impact of agricultural self-sufficiency, industrial progress, secure ownership, infrastructure expansion, and ethical governance will pave the way for a prosperous future.
            </p>

            <p className="mb-4">
              The resulting wealth and resources will provide a constant source of funds for investments in education, healthcare, housing, social welfare, and all the other needs of our people, thereby creating a sustainable framework for future national transformation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p className="mb-4">
              The goal will be to make Ghana the leader again in the delivery of world-class education in Africa.
            </p>

            <p className="mb-4">
              <span className="font-bold">Financing Education:</span> 
              <ul className="list-disc list-inside">
                <li>Nursery to JHS will be free.</li>
                <li>From SHS to University, a needs-based scholarship system will be implemented where, financially capable parents and guardians will be made to pay their fair share of the fees while those who need it most will receive free tuition and other scholarships.</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Health Care</h2>
            <p className="mb-4">
              A viable comprehensive National Health Insurance system will be developed and implemented which will guarantee an excellent quality and accessible medical care for all irrespective of social or economic status or geographical location.
            </p>

            <p className="mb-4">
              The education of our health practitioners will be aligned with the needs of the people. More doctors and other qualified medical staff will be employed to address the illiteracy and malnutrition concerns. We will develop strong expertise where none exists and will be equipping our hospitals with the latest technology and more investments in preventive medicine and primary healthcare.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Housing</h2>
            <p className="mb-4">
              With a housing deficit of 1.8 million units and a projected need of 2.5 million units in the next ten years, the housing challenge is one of the most urgent in the country today. The task will be to provide affordable and decent housing which will add billions to the GDP of Ghana.
            </p>

            <p className="mb-4">
              A PAG Government will inspire the development of innovative, affordable, housing models and strengthen and modernize the financing methods of real estate to meet this goal.
            </p>

            <p className="mb-4">
              Every hard-working Ghanaian will have the opportunity to live in a decent home that addresses his or her needs and provides dignity and comfort.
            </p>
          </div>
        </div>
      </div>
            </div>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* <div className="text-sm text-gray-600 mb-2">Re-creating Ghana | 2024</div> */}
      {/* <div className="text-right text-sm text-gray-600 mb-4">Progressive Alliance for Ghana (PAG)</div> */}
      
      <h1 className="text-2xl font-bold text-blue-800 mb-4">RECOMMENDATIONS FOR IMPLEMENTATION</h1>
      
      <div className="mb-4 relative">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          <Image src={integrity2} alt='' className="w-full h-full text-gray-400" />
        </div>
      </div>
      
      <p className="text-sm mb-4">
        To realize the vision articulated in this policy document, there will be the need to establish dedicated task
        forces, strategic partnerships and rigorous monitoring mechanisms to ensure accountability and progress.
      </p>
      
      <p className="text-sm mb-4">
        By aligning our efforts with these Five Transformations, a PAG Government will commit to building a new
        Ghana that will be up and running again - a new nation where social justice reigns and happiness and
        prosperity become the daily bread of all her citizens.
      </p>
    </div>
            </>
  )
}
