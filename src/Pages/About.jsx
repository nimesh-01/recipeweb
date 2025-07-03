import React from 'react';
import ScrambledText from '../../scramble/scrambletext';

const About = () => {
  return (
    <div className="relative px-4 py-10 flex justify-center items-center w-full bg-[#0F172B] min-h-screen overflow-hidden">
      <div className="bg-[#0F172B] px-4 max-w-4xl w-full rounded relative z-10">
        <h1 className="font-thin text-center text-3xl sm:text-4xl mb-6 text-cyan-400 drop-shadow-md">
          About This Website
        </h1>

        <ScrambledText>
          <p className="font-bold text-justify text-xl sm:text-2xl text-white">
            Hello! <span className="text-blue-500">I'm Nimesh Solannki</span>, a passionate web developer and food lover. This recipe website is a personal project I built using HTML, Tailwind CSS, React, and JavaScript.
            <br /><br />
            My goal is simple — to bring together a collection of delicious recipes that are easy to follow, beautifully presented, and accessible to everyone. Whether you're looking to try something new or cook your favorite comfort food, this site is designed to help you cook with confidence.
            <br /><br />
            🧑‍🍳 <strong>What Makes This Site Special:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-white">
              <li className="text-lg sm:text-xl">Clean, fast, and responsive UI built with React  and Tailwind</li>
              <li className="text-lg sm:text-xl">Recipes with step-by-step instructions</li>
              <li className="text-lg sm:text-xl">Modern design with smooth user experience</li>
              <li className="text-lg sm:text-xl">Created with love for both coding and cooking</li>
            </ul>
            <br />
            Thank you for visiting! I hope you find a recipe you’ll love and enjoy the experience as much as I enjoyed building it.
          </p>

          <small className="block mt-6 text-red-400 font-bold text-xl sm:text-2xl text-right">
            – Nimesh Solanki
          </small>
        </ScrambledText>
      </div>
    </div>
  );
};

export default About;
