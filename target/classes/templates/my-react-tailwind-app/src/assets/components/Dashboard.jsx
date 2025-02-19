import React from 'react';

const Dashboard = ({ jobs }) => {
  return (
    <div>
      <h2>Posted Jobs</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>{job.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>
  );
};

export default Dashboard;