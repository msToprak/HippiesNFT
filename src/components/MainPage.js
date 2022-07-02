import React, { Fragment } from "react"

const MainPage = () => {
  return (
    <Fragment>
      <div id="mainPage" className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h3>
              <br></br>
            </h3>
            <h1>WE BELIVE</h1>
            <h2>WE CAN CHANGE THE WAY OF Page</h2>
            <h2>NFT WORLD</h2>
            <p>
              Different God’s Messanger for every blockchain and integrations
              with metaverse projects. We’re going to write the HOLY BOOK OF
              METAVERSE with our hodler in the HOLYDAO.{" "}
            </p>
            <p>
              Just lıke in real world, there will be a God in Metaverse as well.
            </p>
          </div>
          <div className="col-sm-6">
            <div className="imgtop">
              <img src="images\main-image.jpg" width="auto" height="400" />
            </div>
          </div>
        </div>
        <br></br>
        <h4 className="slideanim text-left">Sample of our collection..</h4>
        <div className="row text-center slideanim">
          <div className="col-sm-3">
            <div className="img">
              <img src="images/45.jpg" width="300" height="300" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="img">
              <img src="images/88.jpg" width="300" height="300" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="img">
              <img src="images/94.jpg" width="300" height="300" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="img">
              <img src="images/29.jpg" width="300" height="300" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default MainPage
