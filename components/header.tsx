import Link from 'next/link';
import "./header.scss";

const Header = () => (
  <div>
    <div className="Header">
      <Link href="/"><a><img className="header-logo" src="static/images/AS.png" /></a></Link>
      <div className="header-links">
        <Link href="/projects"><a className="header-link">Projects</a></Link>
        <Link href="/resume"><a className="header-link">Resume</a></Link>
        <Link href="/about"><a className="header-link">About</a></Link>
      </div>
    </div>
    <div className="spacer" style={{height:'70px'}}></div>
  </div>
);

export default Header;
