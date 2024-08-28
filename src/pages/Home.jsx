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
import Contact from '../components/UI/Contact'
import Header from '../components/Header'






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
       <Review />
       <FAQ />
       <BotFeatures />
       <Contact />
       <Footer />
       


    </div>
  )
}

export default Home