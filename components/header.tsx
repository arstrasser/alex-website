import Link from 'next/link';

const Header = () => (
  <div>
    <div className="Header">
      <Link href="/"><a><img src="static/images/AS.png" /></a></Link>
      <div className="header-links">
        <Link href="/about"><a className="header-link">About Me</a></Link>
        <Link href="/projects"><a className="header-link">Projects</a></Link>
        <Link href="/resume"><a className="header-link">Resume</a></Link>
        <Link href="/contact"><a className="header-link">Contact</a></Link>
      </div>
    </div>
    <div className="spacer" style={{height:'70px'}}></div>
    <style jsx>{`
      .Header {
        display: flex;
        flex-direction: row;
        height: 60px;
        width: 100%;
        background-color:#242038;
        padding:5px;
        top:0;
        position:fixed;
      }
      img {
        height:calc(100% - 10px);
        padding: 5px;
      }
      a {
        width:fit-content;
      }
      .header-links {
        position:absolute;
        right:0;
        margin:20px;
      }
      .header-links a {
        margin:  10px;
        padding: 10px;
        color:white;
        text-decoration: none;
        font: bold 20px helvetica;
        border-radius: 3px;
      }

      .header-links a:hover {
        background:rgba(255,255,255,0.5)
      }
    `}</style>
  </div>
);

export default Header;
