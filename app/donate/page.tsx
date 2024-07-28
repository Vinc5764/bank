import React from 'react'
import DonationForm from '../components/DonationForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Header/>
        <DonationForm/>
        <Footer/>
    </div>
  )
}

export default page