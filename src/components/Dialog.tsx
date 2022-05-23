import './Dialog.css'
import Qr from './Qr'

function Dialog() {
    return (
        <div>
            <div className='mainDiv'>
                <div className='qrdiv'>
                    <div className='qr'><Qr qrvalue='https://github.com/durdufatih' /></div>
                </div>

                <div className='dialog'>
                    <div className='dialog-title'>Improve your front-end skills by building projects</div>
                    <div className='dialog-description'>Scan the QR code to visit Frontend Mentor and take your coding skills to next level</div>
                </div>
            </div>
        </div>
    )
}

export default Dialog