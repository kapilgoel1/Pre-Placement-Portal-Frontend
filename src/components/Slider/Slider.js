import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import './Slider.css';
import Image1 from '../../assets/Image1.jpg'
import Image2 from '../../assets/Image2.jpg'
import Image3 from '../../assets/Image3.jpg'
import Image4 from '../../assets/Image4.jpg'
import Image5 from '../../assets/Image5.jpg'


// This is the slider that is visible on the main page

const items = [
  {
    src: Image1,
    altText: "Image 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: Image2,
    altText: "Image 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: Image3,
    altText: "Image 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: Image4,
    altText: "Image 4",
    caption: "",
    header: "",
    key: "4",
  },
  {
    src: Image5,
    altText: "Image 5",
    caption: "",
    header: "",
    key: "5",
  }
];

const Slider = () => (

  <div className="slider">  
    <UncontrolledCarousel items={items} />  
  </div>    
);

export default Slider;