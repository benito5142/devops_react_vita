import React, { useState } from 'react';

const JobForm = ({ onSubmit }) => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(job);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Job Title</label>
        <input
          type="text"
          name="title"
          value={job.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={job.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={job.location}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobForm;