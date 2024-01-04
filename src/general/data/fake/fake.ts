import nike from './image/nike_cross720.png';
import adidas from './image/adidas720.png';
import reebok from './image/reebok720.png';
import new_balance720 from './image/new_balance720.png';
import puma from './image/puma720.png';

import type {TBannerDTO} from '../type/type-dto';


export const bannerItems: Array<TBannerDTO> = [
    {
      title: "AIR Beyond Compare",
      text: "Explore the best Air Max for fall & beyond",
      backGroundText: "nike",
      imageURL: nike,//"/nike_cross720.png"
      alt: "nike",
    },
    {
      title: "Stride Beyond, Style Beyond",
      text: "Redefine Your Footwear Game",
      backGroundText: "adidas",
      imageURL: adidas,//"/GZ5174_01_standard.png"
      alt: "adidas",
    },
    {
      title: "Pace, Precision, Puma",
      text: "Step Into Style and Performance",
      backGroundText: "puma",
      imageURL: puma,// "/R78-Runner-Trainers.png"
      alt: "puma",
    },
    {
      title: "Revolutionize Your Step, Revolutionize Your Style",
      text: "Step Comfortably, Step Stylishly",
      backGroundText: "reebok",
      imageURL:reebok,// "/reebok720.png"
      alt: "reebok",
    },
    {
      title: "The MADE in USA",
      text: "Sport heritage, evolved",
      backGroundText: "new balance",
      imageURL: new_balance720,// "/new_balance720.png"
      alt: "new balance",
    },
  ];