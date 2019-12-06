import Layout from '../components/layout';
import { projects, tags, imagePrefix } from '../data/projects';
import ProjectCard from '../components/project-card';

const Projects = () => (
  <Layout title="Alex Strasser">
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", padding:'10px', background:'white'}}>
      {projects.map((value, index) => {
        return (
          <ProjectCard
            title={value.name}
            subtitle={value.short}
            image={imagePrefix+value.pictures[0]}
            tags={value.tags}
            links={value.links}
            key={index}></ProjectCard>
        );
      })}
    </div>
  </Layout>
);

export default Projects;
