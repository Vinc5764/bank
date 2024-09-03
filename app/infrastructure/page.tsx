import Image from 'next/image'
import infraImage from '@/public/infra.jpg'
import Footer from '../components/Footer'

export default function page() {
  return (
    <>
    <div className="bg-gray-100 lg:px-[10rem] min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-900">
            T4: INFRASTRUCTURE TRANSFORMATION
          </h1>
          <p className="text-lg italic mt-2">Keeping things moving</p>
        </div>

        {/* Image Section */}
        <div className="my-8">
          <Image
            src={infraImage}
            alt="Infrastructure Image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="text-gray-700">
          <p className="mb-4">
            Economic infrastructure can be defined as the 
            <span className="font-semibold italic"> "internal facilities of a country that make business activity possible, such as communication, transportation and distribution networks, financial institutions and related international markets and energy supply systems".</span>
          </p>

          <p className="mb-4">
            The PAG Government will develop and modernise our national infrastructure in order to facilitate a transformation in our economy. We will identify and create the critical transportation networks - road, rail, water and air transport systems - that will help to lift business in our country into the next gear.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Roads</h2>
          <p className="mb-4">
            The PAG Government will indigenise road design and road construction and inspire innovative road building in Ghana. The goal will be to reduce costs significantly, so we can build all our roads in all our towns and cities - and between our towns and cities. All inter-regional city roads will be dualised.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Railways</h2>
          <p>
            The colonial heritage of railways shall be replaced by a modernised system and this will be expanded across the country to facilitate fast and comfortable transport, as well as haulage of goods.
          </p>
        </div>
          <div className="text-gray-700 mt-12">
          <h2 className="text-2xl font-bold mt-6 mb-2">Water Transport</h2>
          <p className="mb-4">
            It is actually known that the cheapest way to move heavy goods across a country is using big boats and ferries. The North-South alignment of the Volta Lake presents an excellent opportunity for transporting heavy goods between the Southern and Northern parts of this country relatively cheaply.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Air Transport</h2>
          <p className="mb-4">
            Accra will be developed into an international hub for the aviation industry. A national airline will be re-started and many local airports created for very fast movement between different parts of the country with links to international flights.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">More Developments</h2>
          <p className="mb-4">
            The IT infrastructure, energy supply systems, water supply, and sewage treatment systems will all receive considerable attention during this phase. In addition, key financial institutions will be identified and created to provide the optimum environment for business in Ghana.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Energy Infrastructure</h2>
          <p>
            Solar energy will become the main source of energy supply in Ghana. Solar panels and most of the kits will be manufactured locally, thus connecting the industrial transformation with the infrastructure transformation and will typify the interconnectedness of the transformations. By connecting communities and improving accessibility nationwide, Ghana aims to transform economic productivity, ease congestion, and foster a more integrated society.
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
