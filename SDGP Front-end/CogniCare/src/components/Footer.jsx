import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-purple-900 text-gray-300 py-1 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-400 py-8">
        <div>
          <h6 className="font-bold pt-2">CONTACT US</h6>
          <ul>
            <li className="py-1">Tel : +94 77 773 4321</li>
            <li className="py-1">Email : cognicareplus@gmail.com</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold pt-2">QUICK LINKS</h6>
          <ul>
            <li className="py-1">
              <a href="#" className="transition hover:opacity-75">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="transition hover:opacity-75">
                {" "}
                About{" "}
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="transition hover:opacity-75">
                {" "}
                Awareness{" "}
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="transition hover:opacity-75">
                {" "}
                e-Channelling{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold pt-2">FOLLOW US</h6>
          <ul>
            <li className="py-1">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-75"
              >
                {" "}
                Facebook{" "}
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-75"
              >
                {" "}
                Instagram{" "}
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-75"
              >
                {" "}
                Twitter{" "}
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-75"
              >
                {" "}
                Github{" "}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold pt-2">LEGAL</h6>
          <ul>
            <li className="py-1">
              <a href="#" className="transition hover:opacity-75">
                {" "}
                Privacy{" "}
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="transition hover:opacity-75">
                {" "}
                Policies{" "}
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="transition hover:opacity-75">
                {" "}
                Terms{" "}
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="transition hover:opacity-75">
                {" "}
                Conditions{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            Sign up to receive updates and resources delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter your email"
            />
            <button className="p-2 mb-4 text-white">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-300">
        <p className="py-4">&copy; 2024 CogniCare+. All Rights Reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
