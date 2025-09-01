'use client';

import './Footer.scss';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer >
            <div className="footer-container">
                <div className="footer-left">
                    <Image src="/WhiteLogo.png" alt="Urecsys Logo" width={49} height={38} />
                    <div className="footer-text">
                        Powered by Urecsys.
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-text">
                        Scan the QR code to take building information with you.
                    </div>
                    <Image src="/ScanQR.png" alt="scan-qr" width={60} height={60} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
