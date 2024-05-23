import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p> we are happy to serve you food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum
            voluptates ducimus pariatur dolor ea omnis voluptatibus aliquid.
            Iste reiciendis nemo adipisci non aliquam, fugiat corporis molestias
            quasi eaque voluptatum iusto nobis similique fugit quidem cupiditate
            deserunt omnis, veritatis voluptate quibusdam dignissimos. Quo
            molestiae quam quasi magni possimus. Incidunt, dicta.
          </p>
          <Link to={"/"}>Explore Menu <span>
            <HiOutlineArrowNarrowRight/></span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
