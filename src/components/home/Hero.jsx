import React, {/* useEffect*/ } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1 className="type">
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <button className='primaryBtn' data-aos='fade-up-right'>
              <a href="https://www.linkedin.com/dms/D5606AQGUmfsLLNZ2VQ/messaging-attachmentFile/0/1667422133411?m=AQIOJR1VKwEo3AAAAYQ8fUX6A0hXsF0kiWpP9wgz2BrISt2gKGm_mC2etA&ne=1&v=beta&t=7lkM0IjzfIejG7QpwzApOM-FC0PwPXapoVdLBdoufqM&lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging%3B7NbHEtS5RuG2yAAF49RBfA%3D%3D">Download CV</a>
            </button>
          </div>
        ))}
      </section>
    </>
  )
}
