import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const BASEURL = "http://localhost:4000";
  const PROJECTS = "/api/projects";
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASEURL}${PROJECTS}`)
      .then(projects => {
        console.log(projects);
        setAllProjects(projects.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {allProjects &&
          allProjects.map(project => (
            <div key={project.id}>
              <h3>{project.name}</h3>
              <h4>{project.description}</h4>
              <h5>{`Completed: ${project.completed}`}</h5>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
