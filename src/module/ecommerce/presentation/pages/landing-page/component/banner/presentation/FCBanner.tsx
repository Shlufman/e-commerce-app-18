import { useEffect, useState } from "react";

import ArrowIcon from "../../../../../../../../general/icon/arrow/presentation/ArrowIcon";
import ArrowLeft from "../../arrow-left/ArrowLeft";
import ArrowRight from "../../arrow-right/ArrowRight";
import ImageComponent from "../../ImageComponent/ImageComponent";

import styles from "../../style/style.module.scss";





import {getBannerData} from './../../../../../../../../general/data/service/api';

import type {TBannerDTO} from '../../../../../../../../general/data/type/type-dto';


const FCBanner: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [opacityImage, setOpacityImage] = useState(0);
  const [bannerData, setGetBannerData]= useState<Array<TBannerDTO>>([] as Array<TBannerDTO>);

  useEffect(()=>{
    getBannerData().then((data:Array<TBannerDTO>)=>{setGetBannerData(data);});
  },[]);


  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIndex((prev) => {
        return (prev + 1) % bannerData.length;
      });
    }, 5000);

    const timerOpacity = setInterval(()=>{setOpacityImage(prev=>{
        let result = prev+0.01;
        if(result>1) clearInterval(timerOpacity);
        return result;
    })},20);
    return () => {
      clearInterval(timerOpacity);
      clearTimeout(timer);
      setOpacityImage(0);
    };
  }, [index,bannerData.length]);

  let fontSize: string='0';

  if(bannerData.length>0)
  if (bannerData[index].backGroundText.length <= 4) {
    fontSize = "500px";
  } else if (bannerData[index].backGroundText.length <= 8) {
    fontSize = "400px";
  } else {
    fontSize = `${Math.max(1, bannerData[index].backGroundText.length)}vw`;
  }

  return (
    <div className={styles.container}>
      {bannerData.length>0&&<div className={styles.title}>{bannerData[index].title}</div>}
      {bannerData.length>0&&<div className={styles.text}>{bannerData[index].text}</div>}
      <ArrowLeft className={styles.leftArrow} />
      <div className={styles.ellipse}></div>
      <div className={styles.bannerImage}>
        
      {bannerData.length>0&& <ImageComponent
            src={bannerData[index].imageURL}
            alt={bannerData[index].alt}
            opacity={opacityImage}
          />}
           {/* {bannerData.length>0&& <ImageComponent
            src={require(`./../images${bannerData[index].imageURL}`)}
            alt={bannerData[index].alt}
            opacity={opacityImage}
          />} */}

      </div>
      <ArrowRight className={styles.rightArrow} />
      <button className={styles.buttonBuyNow}>Buy now</button>
      <button className={styles.buttonExplore}>
        Explore <ArrowIcon className={styles.arrowIcon} />
      </button>
      <div className={styles.backgroundText} style={{ fontSize: fontSize, opacity:opacityImage }}>
        {bannerData.length>0&&bannerData[index].backGroundText.toUpperCase()}
      </div>
    </div>
  );
};
//

export default FCBanner;
