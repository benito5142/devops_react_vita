import React, { useState } from 'react';
import JobForm from './components/JobForm';
import SocialMediaIntegration from './components/SocialMediaIntegration';
import Dashboard from './components/Dashboard';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [connectedPlatforms, setConnectedPlatforms] = useState([]);

  const handleJobSubmit = (job) => {
    setJobs([...jobs, job]);
    // Call API to post job to job boards
    console.log('Job Posted:', job);
  };

  const handleSocialMediaConnect = (platform) => {
    setConnectedPlatforms([...connectedPlatforms, platform]);
    // Call API to connect social media account
    console.log('Connected to:', platform);
  };

  return (
    <div>
      <h1>Automated Job Posting and Social Media Integration</h1>
      <JobForm onSubmit={handleJobSubmit} />
      <SocialMediaIntegration onConnect={handleSocialMediaConnect} />
      <Dashboard jobs={jobs} />
    </div>
  );
};

export default App;