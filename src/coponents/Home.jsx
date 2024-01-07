import Lottie from 'lottie-react'
import React from 'react'
import bitcoinloader from '../bitcoin_loader.json'
import '../coponents/Home.css'
function Home() {
  return (
    <>
    <div id="home">
   <div id='bitcoinloader'>
  <Lottie animationData={bitcoinloader}></Lottie>
  <h1>Welcome to Cryptoss..</h1>
   </div>
   </div>
</>

  )
}


export default Home