import React from 'react'
import Navbar from "../../layout/navbar/Navbar"
import HomeBody from "../../pages/home/HomeBody"

import './home.scss'
import "./common.scss"

const Home = () => {
    return (
        <>
          <div className='home container'>
			    	<Navbar />
            <HomeBody />
          </div>
        </>
    )
}

export default Home
