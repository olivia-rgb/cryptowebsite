import React from 'react'
import Figures from '../components/UI/Figures'
import Dashboard from '../components/UI/Dashboard'
import Featured from '../components/UI/Featured'
import About from '../components/UI/About'
import Services from '../components/UI/Services'
import Spot from '../components/UI/Spot'
import Bot from '../components/UI/Bot'
import Review from '../components/UI/Review'
import BotFeatures from '../components/UI/BotFeatures'
import FAQ from '../components/UI/FAQ'
import Footer from '../components/UI/Footer'
import Footer2 from '../components/UI/Footer2'
import Contact from '../components/UI/Contact'
import Loan from '../components/UI/Loan'
import Save from '../components/UI/Save'
import Header from '../components/Header'
import FraudTrackingTeam from '../components/UI/FraudTrackingTeam'






function Home() {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
         <Header/>
        <Featured />
        <Dashboard />
        <About />
        <Figures />
        <Services />
        <Spot />
       < Bot />
       <Loan />
       <Save />
       <FraudTrackingTeam />
       <Review />
       <FAQ />
       <BotFeatures />
       <Contact />
       <Footer2 />
       


    </div>
  )
}

export default Home