import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaDiscord } from "react-icons/fa";
import RedditIcon from "@mui/icons-material/Reddit";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M12.3 2h2.8c.1 1.1.6 2.1 1.3 2.9.8.7 1.8 1.2 2.9 1.3V9c-.8 0-1.6-.2-2.3-.5-.7-.4-1.3-.8-1.9-1.4v7.5c0 1.2-.3 2.3-1 3.2-.5.9-1.3 1.6-2.2 2-1 .5-2.1.7-3.2.6-.9 0-1.8-.2-2.6-.6-.8-.4-1.5-1-2-1.7-.5-.7-.9-1.6-1.1-2.5-.3-.9-.3-1.9-.2-2.8.2-.9.6-1.8 1.2-2.6.5-.7 1.3-1.3 2-1.7.8-.4 1.6-.6 2.5-.6h.5v2.6c-.4-.1-.8-.1-1.2 0-.6 0-1.1.3-1.5.7-.4.4-.7 1-.8 1.6-.1.7 0 1.3.3 1.9.2.5.6.9 1.1 1.2.5.3 1.1.4 1.7.4.4 0 .7-.1 1.1-.2.3-.1.6-.3.8-.5.2-.2.4-.5.5-.8.1-.3.2-.6.2-.9V2z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#EAF7EE] py-4 px-8 flex justify-between items-center mt-auto">
      <div className="flex space-x-6 text-[.6rem] text-gray-700">
        <a href="#" className="hover:underline">
          Terms Of Service
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
      </div>

      <div className="flex space-x-4 text-gray-600 h-4">
        <a href="#" className="hover:text-gray-800 h-3">
          <FacebookIcon fontSize="small" />
        </a>
        <a href="#" className="hover:text-gray-800 h-3">
          <InstagramIcon fontSize="small" />
        </a>
        <a href="#" className="hover:text-gray-800 h-3">
          <TikTokIcon />
        </a>
        <a href="#" className="hover:text-gray-800 h-3">
          <FaDiscord fontSize="small" />
        </a>
        <a href="#" className="hover:text-gray-800 h-3">
          <RedditIcon fontSize="small" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
