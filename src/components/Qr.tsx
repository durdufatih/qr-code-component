import React from 'react'
import QRCode from "react-qr-code";

function Qr(props: { qrvalue: string }) {
    return (
        <div><QRCode size={200} bgColor="#ffffff" value={props.qrvalue} /></div>
    )
}

export default Qr