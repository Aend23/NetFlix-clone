import React from "react";

import img from "../assets/tv.png";
import img3 from "../assets/devices.png";
import img4 from "../assets/childern.png";
import img2 from "../assets/mobile.jpg";
import Poster from "../components/Poster";
import Row from "../components/Row";
import Row2 from "../components/Row2_Mob";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <div className="text-white  h-full w-full relative">
        <Poster />
        <Row
          heading={"Enjoy on your TV"}
          desp={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          img={img}
          video={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          }
        />

        <Row
          heading={"Download your shows to watch offline"}
          desp={
            "Save your favourites easily and always have something to watch."
          }
          row={true}
          component={<Row2 img={img2} />}
        />

        <Row
          heading={"Watch everywhere"}
          desp={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          }
          img={img3}
        />

        <Row
          heading={"Create profiles for kids"}
          desp={
            "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          }
          row={true}
          img={img4}
        />

        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
