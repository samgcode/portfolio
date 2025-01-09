import React from 'react'

import Image from 'next/image'

function Carousel({ slides }) {
  return (
    <div className="carousel w-full" >
      {
        slides.map((image, i) => {
          return (
            <div id={`slide${i}`} key={`slide${i}`} className="carousel-item relative w-full h-72">
              <Image
                src={image}
                width={1184}
                height={553}
                style={{ objectFit: "contain", borderRadius: '2%' }}
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                {(i == 0) ?
                  <a href={`#slide${slides.length - 1}`} className="animated drop-shadow-lg btn btn-circle">❮</a>
                  : <a href={`#slide${i - 1}`} className="animated drop-shadow-lg btn btn-circle">❮</a>
                }
                {(i == slides.length - 1) ?
                  <a href={`#slide${0}`} className="animated drop-shadow-lg btn btn-circle">❯</a>
                  : <a href={`#slide${i + 1}`} className="animated drop-shadow-lg btn btn-circle">❯</a>
                }
              </div>
            </div>

          )
        })
      }
    </div>
  )
}

export default Carousel
