import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

export default function About(props) {
  return (
    
    <div className='min-vh-100'>
  
  
  
  <div className="bg- pt-5" >
    <div className="container py-5">
      <div className="row align-items-center mb-5">            
        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-"></i>
          <h2 className="font-weight-light">My Text Editor About Us</h2>
          <p className="font-italic  mb-4">
          MyTextEditor Is A Editor Which Can Be Used To Manipulate Your Text In The Way You Want.<br/><br/>An Online Text Editor Enables You To Write A Text, Edit The Text And Use It Anywhere You Want

</p><Link to="/" className="btn btn-light px-5 rounded-pill shadow-sm">Go Back</Link>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={img1} alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      </div>
      
    </div>
  </div>
  
  <div className={`bg-${props.aboutbg} py-5`}  >
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-5">
          <h2 className="display-4 font-weight-light">Our team</h2>
          <p className="font-italic text-">Hardworking Members.</p>
        </div>
      </div>
  
      <div className="row text-center">
        {/* <!-- Team item--> */}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src={img3} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0 text-muted">Mr.Sufiyan</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          </div>
        </div>
        {/* <!-- End-->/*}
  
        <!-- Team item--> */}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4"><img src={img2} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0 text-muted">Miss Chougle</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          </div>
        </div>
         {/* <!-- End--> */}
  
        
  
      </div>
    </div>
  </div>
  </div>

  )
}
