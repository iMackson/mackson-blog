import Image from "next/image";
import classes from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image />
        </div>
        <div className={classes.content}>
          <h3>TITLE</h3>
          <time>February 13th 2023</time>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
            facilis!
          </p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
