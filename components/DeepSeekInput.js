"use client";

import { motion } from "framer-motion";
import { FaPaperclip } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Globe } from "lucide-react";

export default function DeepSeekInput() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="relative flex items-center bg-gray-700 rounded-xl p-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-blue-200 rounded-lg text-sm font-medium shadow-md"
        >
          <span className="text-lg">🌀</span>
          DeepThink (R1)
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-gray-300 rounded-lg text-sm ml-3 shadow-md"
        >
          <Globe className="w-4 h-4" />
          Search
        </motion.button>
        <div className="flex items-center ml-auto space-x-3">
          <FaPaperclip className="text-gray-400 cursor-pointer hover:text-gray-300" />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-600 p-2 rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-500"
          >
            <IoIosSend className="text-lg" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
