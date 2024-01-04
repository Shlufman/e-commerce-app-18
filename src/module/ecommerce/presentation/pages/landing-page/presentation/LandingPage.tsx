
import Icon, {
  IconBtn,
  IconWrapperForBtn,
} from "../../../../../../general/component/icon/ui/Icon";
import { Rating } from "../../../../../../general/component/rating/ui/Rating";
import { Header } from "../../../components/menu2/ui/Header";
import FCBanner from "../component/banner/presentation/FCBanner";

import styles from "./../style/style.module.scss";

const LandingPage = () => {

  return (
    <>
      <div>
        {/* <FCBanner /> */}
        <Icon name={"bag"} className={styles.iconBag} />
        <Icon name={"bagCenter"} className={styles.iconBag} />
        <Icon name={"camera"} className={styles.iconBag} />
        <Icon name={"cameraCenter"} className={styles.iconBag} />
        <Icon name={"cart"} className={styles.iconBag} />
        <Icon name={"basket"} className={styles.iconBag} />
        <Icon name={"clipboard"} className={styles.iconBag} />
        <Icon name={"trash"} className={styles.iconBag} />
        <Icon name={"trash-alt"} className={styles.iconBag} />
        <Icon name={"cog"} className={styles.iconBag} />
        <Icon name={"eye"} className={styles.iconBag} />
        <Icon name={"eye-slash"} className={styles.iconBag} />
        <Icon name={"calender"} className={styles.iconBag} />
        <Icon name={"info-circle"} className={styles.iconBag} />
        <Icon name={"plus"} className={styles.iconBag} />
        <Icon name={"cross"} className={styles.iconBag} />
        <Icon name={"check"} className={styles.iconBag} />
        <Icon name={"comment-alt"} className={styles.iconBag} />
        <Icon name={"envelope"} className={styles.iconBag} />
        <Icon name={"user"} className={styles.iconBag} />
        <Icon name={"check-circle"} className={styles.iconBag} />
        <Icon name={"phone"} className={styles.iconBag} />
        <Icon name={"lock"} className={styles.iconBag} />
        <Icon name={"filter"} className={styles.iconBag} />
        <Icon name={"clock"} className={styles.iconBag} />
        <Icon name={"heart"} className={styles.iconBag} />
        <Icon name={"heartCenter"} className={styles.iconBag} />
        <Icon name={"heart-full"} className={styles.iconBag} />
        <Icon name={"search"} className={styles.iconBag} />
      </div>
      <div>
        <Icon name={"sliders-v"} className={styles.iconBag} />
        <Icon name={"location-point"} className={styles.iconBag} />
        <Icon name={"bell"} className={styles.iconBag} />
        <Icon name={"google"} className={styles.iconBag} />
        <Icon name={"angle-up"} className={styles.iconBag} />
        <Icon name={"angle-right"} className={styles.iconBag} />
        <Icon name={"angle-left"} className={styles.iconBag} />
        <Icon name={"angle-down"} className={styles.iconBag} />
        <Icon name={"angle-right-b"} className={styles.iconBag} />
        <Icon name={"angle-left-b"} className={styles.iconBag} />
        <Icon name={"arrow-down"} className={styles.iconBag} />
        <Icon name={"arrow-up"} className={styles.iconBag} />
        <Icon name={"arrow-right"} className={styles.iconBag} />
        <Icon name={"arrow-left"} className={styles.iconBag} />
        <Icon name={"instagram"} className={styles.iconBag} />
        <Icon name={"facebook"} className={styles.iconBag} />
        <Icon name={"twitter"} className={styles.iconBag} />
        <Icon name={"apple"} className={styles.iconBag} />
        <Icon name={"basket"} className={styles.iconBag} />
        <Icon name={"basket"} className={styles.iconBag} />
      </div>
      <div>
        <Icon name={"star"} className={styles.iconStar} />
        <div>
         <Rating rating={0.5}/>
         <Rating rating={1}/>
         <Rating rating={2}/>
         <Rating rating={3}/>
         <Rating rating={4.5}/>
         <Rating rating={5}/>
        </div>
      </div>
      <div>
        <IconWrapperForBtn
          name={"heartFull"}
          className={styles.btnWithIconHeart}
        />
        <IconWrapperForBtn name={"bag"} className={styles.btnWithIconBag} />
      </div>
      <Header/>
    </>
  );
};

export default LandingPage;
