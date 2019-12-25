import Panel from '../components/panel';

const AvatarPanel = (props) => (
  <Panel>
    <div className="avatar-container">
      <img className="avatar-img" src="/static/images/profile.jpg" />
      <div className="avatar-title">Alex Strasser</div>
      <a className="avatar-email" href="mailto:astrasser@cmu.edu">astrasser@cmu.edu</a>
      <div className="avatar-links">
        <a href="https://github.com/arstrasser/" target="_blank"><img src="/static/images/github.png" /></a>
        <a href="https://www.linkedin.com/in/alexstrasser/" target="_blank"><img src="/static/images/linkedin.png" /></a>
      </div>
    </div>
    <style jsx>{`
      .avatar-container {
        text-align:center;
      }

      .avatar-img {
        width:30%;
        border-radius: 50%;
        margin-top:20%;
      }

      .avatar-title {
        margin-top: 5%;
        font-size: 2.5em;
      }

      .avatar-email {
        font-size: 1em;
        color:white;
      }

      .avatar-links {
        margin-top: 5%;
        height: 2.5em;
      }

      .avatar-links > a {
        margin: 1em 2em;
      }

      .avatar-links > a > img {
        height: 2.5em;
      }
    `}</style>
  </Panel>
);

export default AvatarPanel;
