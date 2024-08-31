import classes from "../styles/Video.module.css";
import imagee from "../assets/images/3.jpg";
export default function Video({title, id, noq}) {
  return (
      <div className={classes.video}>
        <img src={imagee} alt={title} />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq}</p>
          <p>Total Post : {noq * 5}</p>
        </div>
      </div>
  );
}
