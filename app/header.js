import Image from "next/image";
import img from "./images/myportfolio-high-resolution-logo-transparent.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="topheader">
        <div style={{ margin: "5px" }}>
          <Image alt="" src={img} width={80} height={60} />
        </div>

        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>My Projects</li>
            <li>Contact Me</li>
            <li>About Me</li>
          </ul>
        </nav>
      </div>
      <hr />

      <div className="bottmheader">
        <div className="info">
          <div className="shortInfo">
            <h1>
              Wellcome, I&apos;m <span>Hamzah Barozaiq</span>
            </h1>
            <hr />
            <p>
              <span> Frontend </span> Developer
            </p>
          </div>
        </div>
        {/* <div className="backgroundphoto">
          <Image
            className="photo"
            alt=""
            src={myphoto}
            width={450}
            height={650}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
