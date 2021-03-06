import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// initialState
import initialState from '../utils/initialState';
import '../styles/components/Project.scss';

// Assetdummie
import github from '../assets/logos/github_black.png';
import android from '../assets/logos/android.png';
import ios from '../assets/logos/ios.png';

// Widget
import ScrollDown from '../widgets/ScrollDown';

const Project = ({ match }) => {
  const { id } = match.params;

  const project = initialState.projects.find((p) => p.id === id);


  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.set('.scroll-down', { display: 'block', duration: '1' });

    gsap.to('.scroll-down', {
      display: 'none',
      scrollTrigger: {
        trigger: '.back',
        start: 'top 100%',
      },
    });
  });
  return (
    <div className="oneproject">
      <div style={{ background: project.style }} className="header">
        <p className="project_title">{project.title}</p>
      </div>
      <div className="info">
        <div className="content">
          <div className="text">
            <p className="copy">{project.copy}</p>
            <p className="resume">{project.resume}</p>
            {project.subresume && <p className="resume">{project.subresume}</p>}
            <a href={project.link} target="blank" className="link">
              Saber más
            </a>
          </div>
          <div className="info_image">
            <img src={project.first} alt="" />
          </div>
        </div>
      </div>
      <div className="myinfo">
        <div className="content">
          <div className="info_content">
            <p className="title">MI ROL</p>
            {project.roles.map((e) => {
              return(
                <p className="work">{e}</p>
              )
            })}
            <div className="team">
              <p className="title">EQUIPO</p>
              <div className="team_content">
                {project.team.map((e) => {
                  return (
                    <a href={e} className="user" target="blank">
                      <img src={github} alt="" />
                    </a>
                  );
                })}
              </div>
            </div>
            <p className="title">TECNOLOGÍA</p>
            <div className="tech">
              {project.tech.map((e) => {
                return <img src={e} alt="" />;
              })}
            </div>
          </div>
          <div className="info_image">
            <img src={project.second} alt="" />
          </div>
        </div>
      </div>

      <div className="media">
        <img className="media_img" src={project.mediaImg} alt="" />
        <div className="getit">
          <div className="content">
            <p className="media_title">Descárgala ahora </p>

            <div className="images">
              <a href={project.android} className="user" target="blank">
                <img src={android} alt="" />
              </a>
              <a href={project.ios} className="user" target="blank">
                <img src={ios} alt="" />
              </a>
            </div>
            <Link to="/" className="back">
              <p>Volver</p>
            </Link>
          </div>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Project;
