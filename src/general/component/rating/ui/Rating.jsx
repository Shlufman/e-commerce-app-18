import { RatingStar } from "./RatingStar";

import styles from './../style/style.module.scss';

export const Rating = ({rating})=>{

    const renderStarts = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<RatingStar key={i} fraction={rating-i}/>);
        }
        return stars;
      };

    return (
        <div className={styles.rating}>
            {
                renderStarts()
            }            
        </div>
    );
};