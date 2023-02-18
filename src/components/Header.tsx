import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 bg-bg-primary-100 shadow-md text-gray-400 z-50">
      <nav className="flex items-center justify-between max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ x: -300, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}>
          <SocialIcon
            url="https://twitter.com/C_bi__"
            bgColor="transparent"
            fgColor="gray"
          />
          <SocialIcon
            url="https://github.com/ChinmayaBisoi"
            bgColor="transparent"
            fgColor="gray"
          />
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center cursor-pointer hover:underline underline-offset-4">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            bgColor="transparent"
            fgColor="gray"
          />
          <p className="uppercase hidden md:inline-block text-sm">
            Get In Touch
          </p>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
