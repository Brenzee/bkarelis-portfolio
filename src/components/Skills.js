import React from 'react'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3Full, DiSass } from 'react-icons/di'
import {
  SiBootstrap,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { BiHash } from 'react-icons/bi'

const Skills = () => {
  return (
    <div className='bg-white relative skills'>
      <svg
        style={{ top: '-60px', left: '0' }}
        width='100%'
        height='150px'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute'
        viewBox='0 0 1440 320'
        preserveAspectRatio='none'
      >
        <path
          fill='#736ced'
          fillOpacity='1'
          d='M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,288C672,299,768,277,864,240C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg>
      <div className='container mx-auto pb-8 pt-16'>
        <h2 className='skills_title mx-4 lg:mx-0' id='skills'>
          Skills
        </h2>
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-10 mx-4'>
          <div className='skills_card'>
            <h3 className='skills_card_title'>Frontend</h3>
            <div className='skills_card_main bg-white lg:flex-row lg:items-start lg:justify-around '>
              <div className='skills_card_main_part'>
                <div className='skills_card_main_item '>
                  <AiFillHtml5 className='skills_card_main_icon' />
                  HTML
                </div>
                <div className='skills_card_main_item'>
                  <DiCss3Full className='skills_card_main_icon' />
                  CSS
                </div>
                <div className='skills_card_main_item'>
                  <DiSass className='skills_card_main_icon' />
                  SASS
                </div>
                <div className='skills_card_main_item'>
                  <SiBootstrap className='skills_card_main_icon' />
                  Bootstrap
                </div>
                <div className='skills_card_main_item'>
                  <SiTailwindcss className='skills_card_main_icon' />
                  Tailwind
                </div>
              </div>
              <div className='skills_card_main_part'>
                <div className='skills_card_main_item'>
                  <SiJavascript className='skills_card_main_icon' />
                  JavaScript
                </div>
                <div className='skills_card_main_item'>
                  <SiTypescript className='skills_card_main_icon' />
                  TypeScript
                </div>
                <div className='skills_card_main_item'>
                  <FaReact className='skills_card_main_icon' />
                  React
                </div>
                <div className='skills_card_main_item'>
                  <SiRedux className='skills_card_main_icon' />
                  Redux
                </div>
              </div>
            </div>
          </div>
          <div className='skills_card'>
            <h3 className='skills_card_title'>Backend</h3>
            <div className='skills_card_main bg-white min-h-full lg:flex-row lg:items-start lg:justify-around'>
              <div className='skills_card_main_part'>
                <div className='skills_card_main_item'>
                  <FaNodeJs className='skills_card_main_icon' />
                  Node.JS
                </div>
                <div className='skills_card_main_item'>
                  <SiMongodb className='skills_card_main_icon' />
                  MongoDB
                </div>
                <div className='skills_card_main_item'>
                  <BiHash className='skills_card_main_icon' />
                  Express
                </div>
              </div>
              <div className='skills_card_main_part'>
                <div className='skills_card_main_item'>
                  <SiFirebase className='skills_card_main_icon' />
                  Firebase
                </div>
                <div className='skills_card_main_item'>
                  <SiGraphql className='skills_card_main_icon' />
                  Graphql
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
