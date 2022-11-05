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
                <button className='primaryBtn'><a href="https://www.linkedin.com/dms/D5606AQGUmfsLLNZ2VQ/messaging-attachmentFile/0/1667422133411?m=AQIOJR1VKwEo3AAAAYQ8fUX6A0hXsF0kiWpP9wgz2BrISt2gKGm_mC2etA&ne=1&v=beta&t=7lkM0IjzfIejG7QpwzApOM-FC0PwPXapoVdLBdoufqM&lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging%3B7NbHEtS5RuG2yAAF49RBfA%3D%3D">Download CV</a></button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
