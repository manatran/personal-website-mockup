import React, { Component } from 'react';

import './index.css';

import ProjectsData from '../../data/projects.json';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      project: {}
    }
  }

  componentWillMount() {
    this.setState({ projects: ProjectsData });
    this.setState({ project: ProjectsData[0] });
  }

  componentDidMount() {
    const close = document.querySelector('.fa-times');
    const maximize = document.querySelector('.fa-window-maximize');
    const minimize = document.querySelector('.fa-window-minimize');
    const projects = document.querySelector('.projects-window');

    close.addEventListener('click', e => {
      projects.classList.remove('maximized');
    })
    maximize.addEventListener('click', e => {
      projects.classList.toggle('maximized');
    })
    minimize.addEventListener('click', e => {
      projects.classList.remove('maximized');
    })
  }

  buttonClick(slug) {
    // Remove previous active class
    const active = document.querySelector('.active');
    active.classList.remove('active');
    // Set new active class on pressed tab
    document.querySelector('.' + slug + '-sidebar button').classList.add('active');
    // Get current active project
    let project = this.state.projects.filter(project => {
      return project.slug === slug
    });
    this.setState({ project: project[0] });
  }

  render() {
    return (
      <section className="projects">
        <h3>My <span className="gradient-text secondary">Projects</span></h3>
        <p>Here you can find some of the work I am most proud of.</p>
        <section className="projects-window">
          <div className="header">
            <span className="action-buttons">
              <i className="fas fa-times" />
              <i className="far fa-window-maximize" />
              <i className="fas fa-window-minimize" />
            </span>
            <div className="input">
              <i className="fas fa-sync-alt"></i>
              <span>{window.location.href}</span>
            </div>
          </div>
          <div className="body">
            <div className="sidebar">
              <ul className="projects-list">
                {this.state.projects.map((project, i) => (
                  <li key={project.slug} className={project.slug + '-sidebar'}>
                    <button className={i === 0 ? 'active' : null} onClick={() => this.buttonClick(project.slug)}>
                      <img src={'assets/' + project.thumbnail} alt={project.title} />
                      {project.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="content">
              <div className="banner" style={{ backgroundImage: 'url(/assets/' + this.state.project.banner + ')' }} />
              <div className="info">
                <div className="titles">
                  <img alt="icon" src={'/assets/' + this.state.project.thumbnail} />
                  <h3>{this.state.project.title}<span className="light"> - {this.state.project.short_description}</span></h3>
                </div>
                {this.state.project.description.map((el, i) => (
                  <p key={i}>{el}</p>
                ))}
                <a target="_blank" href={this.state.project.url} rel="noopener noreferrer" className="button secondary">Visit project</a>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Projects;
