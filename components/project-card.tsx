import "./project-card.scss"

//<img src={props.image} />

const ProjectCard = (props:{title:string, subtitle:string, image:string, tags:string[], links:{text:string, url:string}[]}) => (
  <div className="ProjectCard">
    <div className="card-image" style={{backgroundImage:"url("+props.image+")"}}>
    <div></div>
    </div>
    <div className="card-content">
      <div className="card-title">
        {props.title}
      </div>
      <div className="card-subtitle">
        {props.subtitle}
      </div>
      <div className="card-links">
        {props.links.map((value, index) => {
          return (<a className="card-link" href={value.url} key={index} target="_blank">{value.text}</a>);
        })}
      </div>
      <div className="card-tags">
        {props.tags.map((value, index) => {
          return (<div className="tag" key={index}>{value}</div>);
        })}
      </div>
    </div>
  </div>
);

export default ProjectCard;
