import React from 'react';
import './App.css';
import JobApplicationForm from '././pages/JobApplicationForm';

function App() {
  return (
    <div className="App" style={{background: 'linear-gradient(60deg,rgb(255, 49, 49),rgb(100, 100, 255))'}}>
      <main>
        <JobApplicationForm />
      </main>
    </div>
  );
}

export default App;
