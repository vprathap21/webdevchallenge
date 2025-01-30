"use client";
// app/page.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Smartphone,
  User,
  Globe,
  Send,
  Paperclip,
  PanelRightClose,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import img1 from "../public/image.png";
import img2 from "../public/image2.png";

export default function Home() {
  const [message, setMessage] = useState("");
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-16 bg-[#212327] flex flex-col items-center py-4 space-y-4">
        <div className="flex flex-col gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <Image
              src={img1}
              width={32}
              height={32}
              alt="Logo"
              className="rounded-lg"
            />
          </div>{" "}
          <PanelRightClose className="text-white" />
          <MessageSquare className="text-white" />
        </div>

        <div className="flex-grow" />
        <button className="w-8 h-8 text-gray-400 hover:text-white">
          <Smartphone className="w-6 h-6" />
        </button>
        <button className="w-8 h-8 text-gray-400 hover:text-white">
          <User className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#292A2D] flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="flex flex-col items-center">
            <div className=" flex items-center justify-start">
              <Image
                src={img2}
                width={64}
                height={64}
                alt="DeepSeek Logo"
                className=" "
              />
              <h1 className="text-white text-xl mb-2">Hi, I'm DeepSeek.</h1>
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
          <div className="relative">
            <div className=" bg-[#404045] rounded-xl p-3 space-x-3">
              <div>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message DeepSeek"
                  className="flex-1 bg-transparent text-white focus:outline-none px-4 pb-8"
                />
              </div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-blue-200 rounded-xl text-sm font-medium shadow-md"
                  >
                    <span className="text-lg">🌀</span>
                    DeepThink (R1)
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-gray-300 rounded-xl text-sm shadow-md"
                  >
                    <Globe className="w-4 h-4" />
                    Search
                  </motion.button>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="text-gray-400 hover:text-gray-300">
                    <Paperclip className="w-5 h-5" />
                  </button>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
