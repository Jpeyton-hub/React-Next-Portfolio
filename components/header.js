import Image from "next/image";
import Link from "next/link";
import { useSpring, animated, config } from "react-spring";

const Header = () => {
  const navProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
    config: {
        duration: 800
    }
  });

  return (
    <animated.nav
      style={navProps}
      className="navbar navbar-expand-lg navbar-light"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src="/LogoBlack.png" height={50} width={50} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" href="#">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </animated.nav>
  );
};

export default Header;
