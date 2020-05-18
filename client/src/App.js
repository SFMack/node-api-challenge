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
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
