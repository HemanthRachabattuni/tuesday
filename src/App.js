import React from 'react';
import { BrowserRouter, Route }from 'react-router-dom';
import Candidate_Dashboard from './CandidateDashboard/dashboard';
import Homepage from './Homepage/Homepage';
import Recruiter_Dashboard from './RecuiterDashboard/Admin';
import Managejobs from './RecuiterDashboard/Managejobs';
import PostJobs from './RecuiterDashboard/PostJobs';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/candidate-dashboard" exact component={Candidate_Dashboard} />
         <Route path="/recruiter-dashboard" exact component={Recruiter_Dashboard} />
        <Route path="/recruiter-dashboard/Managejobs" component={Managejobs} />
        <Route path="/recruiter-dashboard/PostJobs" component={PostJobs} />
        <Route path="/recruiter-dashboard/Settings" component={Managejobs} />



    </BrowserRouter>
    
  );
}

export default App;
