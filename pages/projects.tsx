import Layout from '../components/layout';
import { projects, tags, imagePrefix } from '../data/projects';
import ProjectCard from '../components/project-card';

import '../components/projects-page.scss';

const Projects = () => (
  <Layout title="Alex Strasser">
    <div className="project-container">
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
