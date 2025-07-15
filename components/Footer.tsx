"use client";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
// import { socialMedia } from "@/data";
// import MagicButton from "./ui/MagicButton";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import Link from "next/link";
// import Link from "next/link";

const socialMedia = [
  {
    id: 1,
    icon: <FaGithub size={20} />,
    link: "https://github.com/Umar246",
  },
  {
    id: 2,
    icon: <FaFacebook size={20} />,
    link: "https://www.facebook.com/umar.hayaat.391",
  },
  {
    id: 3,
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com/in/umarhayaat",
  },
];
const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 text-white" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p> */}

        {/* Contact Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl mt-16 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Let&apos;s <span className="text-purple">Connect</span>
                </h2>
                <p className="text-white-200 mb-8">
                  I&apos;m always excited to work on new projects and
                  collaborate with amazing people. Whether you have a project in
                  mind or just want to chat about web development, feel free to
                  reach out!
                </p>
              </div>
              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center">
                    <IoMdMail className="text-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-white-200">umarhayaat2003@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center">
                    <FaLocationArrow className="text-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-white-200">
                      Pakistan (Remote Available)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center">
                    <MdAccessTimeFilled className="text-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Response Time</h3>
                    <p className="text-white-200">Within 24 hours</p>
                  </div>
                </div>
              </div>
              {/* Direct Contact Button */}
              {/* <Link href="mailto:umarhayaat2003@gmail.com">
                <MagicButton
                  title="Send Direct Email"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="w-full gap-2"
                />
              </Link> */}
            </div>
          </motion.div>
          {/* Right Side - Contact Form */}
          <ContactForm />
        </div>
      </div>
      {/* Footer Bottom */}

      <div className="flex mt-16 mb-10 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-gray-400 text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Umar Hayaat
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 roundedlg border border-black-300"
            >
              {/* {info.icon} */}
              {info.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
