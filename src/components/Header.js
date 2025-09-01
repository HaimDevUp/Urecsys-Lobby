'use client';

import './Header.scss';
import Image from 'next/image';
const Header = () => {
    return (
        <header >
            <div className="header-container">
                <Image src="/Logo.png" alt="UrecSys Logo" width={85} height={71} />
                <div className="header-text">
                    This building is protected by Urecsys Clean Air Technology
                </div>
            </div>
        </header>
    );
};

export default Header;
