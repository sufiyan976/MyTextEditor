import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='min-vh-100  justify-content-center my-auto mx-auto d-flex align-content-center align-items-center'>
        <h5 className='mx-2'>Click Here To Start</h5>
    <Link to="/"><button type="button" className="btn btn-primary mx-1 mr-6">Click Here</button></Link> </div>
  )
}
