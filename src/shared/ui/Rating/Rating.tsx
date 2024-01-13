import { RatingStar } from "./RatingStar";

import styles from './style.module.scss';


export const Rating = ({rating, className}:{rating: number, className?:string})=>{

    const renderStarts = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<RatingStar key={i} fraction={rating-i}/>);
        }
        return stars;
      };

    return (
        <div className={`${styles.rating} ${className}`}>
            {
                renderStarts()
            }            
        </div>
    );
};