import React, { Fragment } from "react"
const FAQ = () => {
  return (
    <Fragment>
      <div id="FAQ" className="container-class container-fluid text-center bg-grey">
        {/* <br></br>
        <br></br>
        <br></br> */}
        <h2>Frequently Asked Questions</h2>
        <div
          id="myCarousel"
          className="carousel slide text-center"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
          </ol>
          <div className="carousel-inner container-fluid" role="listbox">
            <div className="item active ">
              <h5>Who are we?</h5>
              <span>
                We're a team of friends with shared interests in crypto,{" "}
                <br></br>
                design, and technology. Our ambition, vision, hard work,{" "}
                <br></br>
                and individual professional skills came together to create this
                brand and the community around it.
              </span>
            </div>
            <div className="item">
              <h5>What's the idea behind HippiesNFT?</h5>
              <span>
                HippiesNFT is NFT collection built using Solana blockchain
                technology, <br></br>
                we're building a fun, community-driven platform with
                play-to-earn, staking, <br></br>
                and investment opportunities. To be a part of this journey, join
                our official Discord community.
              </span>
            </div>
            <div className="item">
              <h5>Why are we doing this?</h5>
              <span>
                With our creativity, knowledge and skillset, we believe we can
                build a brand with a global community.<br></br>
                We aim to design a fun virtual world, engage with our audience
                and entertain the world.
              </span>
            </div>
            <div className="item">
              <h5>How to get your own HippiesNFT?</h5>
              <span>
                You must mint it in the pre-sale or public sale.<br></br>
                To mint you must have enough Solana in your wallet to cover the
                cost of the transaction (including the fees).<br></br>
                The official mint dates, prices and links will be announced
                soon.<br></br>
                Make sure to join our official Discord server.
              </span>
            </div>
            <div className="item">
              <h5>Why get your own HippiesNFT?</h5>
              <span>
                Besides NFT collections, we designed HippiesNFT as a long-term
                project, investment, passive income opportunity, <br></br>
                and a fun community where you can meet other people and share
                interests. <br></br>
                For more information about the development and utility join our
                official Discord community.
              </span>
            </div>
            <div className="item">
              <h5>Why Solana?</h5>
              <span>
                We chose to built our project on the Solana blockchain because
                of its speed and low gas fees.<br></br>
                Solana can handle up to 65,000 transactions per second with an
                average cost per transaction being $0.00025.<br></br>
                Solana also doesn't have a mempool problem, which means
                transactions are accepted nearly instantaneously, it's
                accessible,<br></br>
                uses less bandwidth and is more resilient than other blockchain
                ecosystems.
              </span>
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default FAQ
