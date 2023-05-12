import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >

        Hey there, I'm Chris, a front-end developer with a passion for crafting engaging and intuitive user interfaces. I've had the pleasure of attending Lighthouse Labs' web dev program, where I gained a solid foundation in full-stack development and hands-on experience with React, Tailwindcss, postgreSQL, and Cypress . <br /><br />

        I'm also experienced in using Node.js to build scalable and efficient back-end solutions, and I've dabbled in Threejs to create stunning 3D visualizations and animations. <br /><br />

        While In school, I've collaborated with Peers, Mentors, and real developers to deliver projects that exceed expectations. I understand the importance of communication, organization, and attention to detail when it comes to building successful web applications. <br /><br />

        When I'm not coding, you'll find me exploring new web technologies, attending tech meetups, and contributing to open-source projects on GitHub. If you're looking for a dedicated and skilled front-end developer who's committed to delivering high-quality solutions, let's connect and discuss your project needs!
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");