import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="text-gray-400 px-4 sticky top-0 z-50 max-w-5xl mx-auto flex items-center justify-between">
      <motion.div
        initial={{ x: -300, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}>
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
        transition={{ duration: 1.2 }}
        className="flex items-center cursor-pointer hover:underline">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          bgColor="transparent"
          fgColor="gray"
        />
        <p className="uppercase hidden md:inline-block text-sm">Get In Touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
