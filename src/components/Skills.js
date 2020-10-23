import React from 'react'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3Full, DiSass } from 'react-icons/di'
import {
  SiBootstrap,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiMaterialUi,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { BiHash } from 'react-icons/bi'

const Skills = () => {
  return (
    <div className='bg-secondary relative skills'>
      <div className='container mx-auto py-8'>
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
