import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mackson.png"
          alt="An image of Mackson"
          width={300}
          height={300}
        />
        <h1></h1>
      </div>
      <h1>Hi, I'm Mackson</h1>
      <p>
        I'm a software developer and blogger with 7 years experience in writing
        web applications.
      </p>
    </section>
  );
};

export default Hero;
