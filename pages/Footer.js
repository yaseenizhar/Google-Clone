import React from "react";
import CountryLocation from "./components/CountryLocation";

const Footer = () => {
    return(
        (<footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
            <div className="border-b px-8 py-3 text-base"> <CountryLocation/> </div>
            <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-x-7 sm:space-y-0">
                <ul className="flex items-center space-x-6">
                    <li className="link cursor-pointer	hover:underline">About</li>
                    <li className="link cursor-pointer	hover:underline">Advertisement</li>
                    <li className="link cursor-pointer	hover:underline">Business</li>
                    <li className="link cursor-pointer	hover:underline">Business</li>
                    <li className="link cursor-pointer	hover:underline">How Serarch Works</li>
                </ul >
                <ul className="flex items-center space-x-6">
                    <li className="link cursor-pointer	hover:underline">Privacy</li>
                    <li className="link cursor-pointer	hover:underline">Terms</li>
                    <li className="link cursor-pointer	hover:underline">Settings</li>
                    <li className="link cursor-pointer	hover:underline"></li>
                </ul>
            </div>
        </footer>)

    )
}

export default Footer;
