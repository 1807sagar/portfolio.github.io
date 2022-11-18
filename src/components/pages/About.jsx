import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import "./About.css"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <p>{val.desc2}</p>
                <p>{val.desc3}</p>
                <p>{val.desc4}</p>
                <button>Download CV</button>
                <button className='primaryBtn'><a href="https://drive.google.com/file/d/1-G0lYwml_Jo8VAYWoqXnqFhgp3sQFIjU/view?usp=share_link">Download CV</a></button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
