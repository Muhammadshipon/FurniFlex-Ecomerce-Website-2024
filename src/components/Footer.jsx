import { FaXTwitter } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="footer  text-gray-400 p-10">
  <aside>
  <a className="btn btn-ghost text-2xl text-white"><img src="/src/assets/Furniflexicon.png" alt="" /><span>Furni<span className="text-blue-400">Flex</span></span></a>
  
  </aside>
  <nav>
    <h6 className="text-lg font-semibold text-white">About Us</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-lg font-semibold text-white">Explore EEVE</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-lg font-semibold text-white">Community & Support</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
<div className="max-w-7xl text-gray-400 mx-auto flex flex-col lg:flex-row justify-between border-t-2 border-gray-400  py-5 gap-10 px-10">
    <div className="flex gap-2">
    <LuFacebook className="text-white text-2xl"/>
    <GrInstagram  className="text-white text-2xl"/>
    <FaXTwitter className="text-white text-2xl" />
    <SlSocialLinkedin className="text-white text-2xl" />
       </div>
    <div className="flex gap-5">
      <p>March22 Recap</p>
      <p>Privacy Policy</p>
      <p>General Terms</p>
      <p>Contact</p>
    </div>
    <div>
      <p className="flex items-center gap-2"><span><GiUsaFlag className="text-white"/></span>
      United States (English)</p>
    </div>
  </div>
  <footer className="footer footer-center  text-gray-600 p-4 pb-10">
  <aside>
    <p> EEVE © 2024. All rights reserved.</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;