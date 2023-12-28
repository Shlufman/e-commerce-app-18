import style from "../style/BagSpan.module.scss";


interface Props{
    size?:string;
    fill?: "white",
    fillOpacity?: 1.0,
}

const BagSpan = ({size}:Props) => {
    return (
        <span className={`${style.icon} ${style.iconBike}`} style={{width:size, height:size}}></span>
    );
};

export default BagSpan;