import React from 'react'
import './home.scss'
import "./common.scss"

const HomeBody = () => {
  return (
    <div className="container md-5">      
      <div className="row align-items-center">
        <div className="col">          
          <h1>Life changing when you saving money</h1>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nunc morbi aliquet nisi, enim lacus.</p>
          <div class="d-flex">
            <button className="btn btnRegisterNow">Register Now</button>
            <button className="btn btnLearnMore">Learn More</button>
          </div>
        </div>

        <div className="col">
          <img src={"/images/home_pages/life_changing.png"} alt="Life changing" className="img-fluid" />  
        </div>
      </div>

      <div className="row align-items-center md-5">
        <div className="col" style={{"order": 2}}>
          <div>
            <a href="#!" className="text-link">Managing</a>
          </div>
          <section>
            <h1>Overview your spending and present asset</h1>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh egestas ut tellus, accumsan, sollicitudin. Lectusv neque sed pellentesque hac dui semper. Velit felis tempor volutpat massa mauris, facilisi. </p>
            <div>
              <button className="btn">Start Free Trial</button>
            </div>
          </section>            
        </div>

        <div className="col" style={{"order": 1}}>
          <img src={"/images/home_pages/overview_searching.png"} alt="Life changing" className="img-fluid" />  
        </div>
      </div>  

      <div className="row align-items-center">
        <div className="col">
          <h1>Keep track of your tasks and manage them any time</h1>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh egestas ut tellus, accumsan, sollicitudin. Lectusv neque sed pellentesque hac dui semper. Velit felis tempor volutpat massa mauris, facilisi.</p>
        </div>

        <div className="col">
          <img src={"/images/home_pages/daily_meeting.png"} alt="Keep track of your tasks and manage them any time" className="img-fluid" />  
        </div>
      </div>  
    </div>    
  )
}

export default HomeBody
