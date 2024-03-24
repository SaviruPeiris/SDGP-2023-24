import React from "react";

import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-purple-900 text-gray-300 py-1 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-400 py-8">
        <div>
          <h6 className="font-bold pt-2">CONTACT US</h6>
          <ul className="p-0">
            <li className="py-1">Tel : +94 77 773 4321</li>
            <li className="py-1">Email : cognicareplus@gmail.com</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold pt-2">QUICK LINKS</h6>
          <ul className="p-0">
            <li className="py-1">
              <Link
                to="/home"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="/about"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                About{" "}
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="/awarenessPage"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Blogs{" "}
              </Link>
            </li>

            <li className="py-1">
              <Link
                to="/eChannelingPage"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                e-Channelling{" "}
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="/FAQ-Page"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                FAQ{" "}
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="/contactUsPage"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Contact-Us{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold pt-2">FOLLOW US</h6>
          <ul className="p-0">
            <li className="py-1">
              <a
                href="https://web.facebook.com/profile.php?id=61557183195099"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Facebook{" "}
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.instagram.com/cognicareplus/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Instagram{" "}
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://twitter.com/CogniCarePlus"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Twitter{" "}
              </a>
            </li>
            {/* <li className="py-1">
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Github{" "}
              </a>
            </li> */}
          </ul>
        </div>

        <div>
          <h6 className="font-bold pt-2">LEGAL</h6>
          <ul className="p-0">
            <li className="py-1">
              <a
                href="#"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Privacy{" "}
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Policies{" "}
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Terms{" "}
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="transition hover:opacity-75 no-underline text-gray-300"
              >
                {" "}
                Conditions{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase text-white">
            Subscribe to our newsletter
          </p>
          <p className="py-4 text-white">
            Sign up to receive updates and resources delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className="p-2 mb-4 text-white">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-300">
        <p className="py-4 text-white">
          &copy; 2024 CogniCare+. All Rights Reserved.
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a
            href="https://web.facebook.com/profile.php?id=61557183195099"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/cognicareplus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/CogniCarePlus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          {/* <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
          >
            <FaWhatsapp />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
