import React from 'react'
import QRCode from "react-qr-code";

function Qr() {
  return (
    <div><QRCode size={200}  bgColor="#ffffff"  value="https://github.com/durdufatih" /></div>
  )
}

export default Qr