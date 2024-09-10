// App.js

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ProjectDetail from './components/ProjectDetail'; // Import the ProjectDetail component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import iotbg from './assets/IOT.jpg';
import blockchainbg from './assets/Blockchain.jpg';
import cloudbg from './assets/azure.jpg';
import devopsbg from './assets/devops.jpg';
import etlbg from './assets/etl.jpg';

const projects = [
  { id: 1, title: 'IOT', description: 'Description for Project 1', bgImage: iotbg },
  { id: 2, title: 'Blockchain', description: 'Description for Project 2', bgImage: blockchainbg },
  { id: 3, title: 'Cloud', description: 'Description for Project 3', bgImage: cloudbg },
  { id: 4, title: 'DevOps', description: 'Description for Project 4', bgImage: devopsbg },
  { id: 5, title: 'ETL', description: 'Description for Project 5', bgImage: etlbg },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home projects={projects} />} />
        
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
