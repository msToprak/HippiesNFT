import React, { useState } from "react"
import Slider from "react-slick"
import data from "./../data"

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const { headers, contents } = data

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  }

  return (
    <div id="features" className="container container-class">
      <div className="row container-fluid">
      <h2 className="text-center">Features and Rarity</h2>
      <br></br>
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br><br></br> */}
        <div className="col-sm-4">
          <ul>
            {headers.map((e, i) => (
            <h5> <li key={i} onClick={() => setActiveIndex(i)}>
                {e}
              </li> </h5>
            ))}
          </ul>
        </div>
        <div className="col-sm-8">
          <section className="contents padding">
            <Slider {...settings}>
              {contents[activeIndex]?.map(({ title, description, img }, i) => (
                <article key={i}>
                  <img src={`/images/features/${img}`} height="80" />
                  <h6>{title}</h6>
                  <p>{description}</p>
                </article>
              ))}
            </Slider>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Features
