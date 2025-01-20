import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get <span className="text-teal-600">in</span> Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          Surrey, V3T 5J7, BC, Canada
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          <a
            href="tel:+7789567035"
            className="bg-gradient-to-r from-teal-300 via-slate-500 to-teal-500 bg-clip-text text-transparent font-bold text-xl"
          >
            Give me a call
          </a>
        </motion.p>

        <a
          href="mailto:harminder_saini94@outlook.com?subject=Initial Exploration Call for a Potential Oppurtunity!"
          className="bg-gradient-to-r from-teal-300 via-slate-500 to-teal-500 bg-clip-text text-transparent font-bold text-xl"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
