"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Smartphone,
  User,
  Globe,
  Send,
  Paperclip,
  PanelRightClose,
  MessageSquare,
} from "lucide-react";
import img1 from "../public/image.png";
import img2 from "../public/image2.png";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#292A2D]">
      {/* Sidebar */}
      <div className="w-full md:w-16 bg-[#212327] flex md:flex-col items-center py-4 space-x-4 md:space-x-0 md:space-y-4">
        <div className="flex md:flex-col gap-3">
          <Image
            src={img1}
            width={32}
            height={32}
            alt="Logo"
            className="rounded-lg"
          />
          <PanelRightClose className="text-gray-400" />
          <MessageSquare className="text-gray-400" />
        </div>

        <div className="flex-grow hidden md:block" />
        <div className="flex flex-col space-x-4 md:space-x-0 md:space-y-4">
          <Smartphone className="w-6 h-6 text-gray-400 hover:text-white" />
          <User className="w-6 h-6 text-gray-400 hover:text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-3">
              <Image src={img2} width={64} height={64} alt="DeepSeek Logo" />
              <h1 className="text-white text-xl">Hi, I'm DeepSeek.</h1>
            </div>
            <p className="text-gray-400">How can I help you today?</p>
          </div>
        </motion.div>

        {/* Chat Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-[#404045] rounded-xl p-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message DeepSeek"
              className="w-full bg-transparent text-white focus:outline-none px-4 pb-2"
            />
            <div className="flex flex-wrap justify-between items-center mt-3 gap-3">
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-blue-200 rounded-xl text-sm font-medium shadow-md"
                >
                  <span className="text-lg">🌀</span> DeepThink (R1)
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-gray-300 rounded-xl text-sm shadow-md"
                >
                  <Globe className="w-4 h-4" /> Search
                </motion.button>
              </div>
              <div className="flex space-x-3 items-center">
                <Paperclip className="w-5 h-5 text-gray-400 hover:text-gray-300" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-600 p-2 rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-500"
                  disabled={!message}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
