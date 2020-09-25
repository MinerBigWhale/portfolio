import React from "react";
import "../assets/styles/Site.scss";
import iR1 from "../assets/images/media/4iR-1.jpg";
import iR2 from "../assets/images/media/4iR-2.jpg";
import iR3 from "../assets/images/media/4iR-3.jpg";
import HackX1 from "../assets/images/media/HackX-1.jpg";
import HackX2 from "../assets/images/media/HackX-2.jpg";
import HackX3 from "../assets/images/media/HackX-3.jpg";
import IEEEP1 from "../assets/images/media/IEEEP-1.jpg";
import IEEEP2 from "../assets/images/media/IEEEP-2.jpg";
import IEEES1 from "../assets/images/media/IEEES12-1.jpg";
import IEEES2 from "../assets/images/media/IEEES12-2.jpg";
import ImageCardComponent from "../components/ImageCardComponent";
import { MediaSlider } from "../components/MediaSlider";

export class MediaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgId: -1,
    };
  }
  
  onImageClick(event) {
    const iId =event.target.id;   
    this.setState({ imgId: iId });
  }

  setDefaultImg() {
    this.state.imgId = -1;
    this.setState();
  }

  render() {
    const imgList = [
      iR3,
      iR2,
      iR1,
      IEEEP2,
      IEEEP1,
      IEEES2,
      IEEES1,
      HackX3,
      HackX2,
      HackX1,
    ];
    return (
      <section className="moments_area pad_top">
        <div className="container box_1620">
          <div className="moments_inner imageGallery1">
            {imgList.reverse().map((img, key) => {
              return <ImageCardComponent key={key} image={img} id={key} openClick={this.onImageClick.bind(this)}/>;
            })}
            <MediaSlider imageList = {imgList} selectedImg={this.state.imgId} onClose={this.setDefaultImg.bind(this)}></MediaSlider>

          </div>
        </div>
      </section>
    );
  }
};
