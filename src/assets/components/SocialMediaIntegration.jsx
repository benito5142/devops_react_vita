import React, { useState } from 'react';

const SocialMediaIntegration = ({ onConnect }) => {
  const [platform, setPlatform] = useState('');

  const handleConnect = (e) => {
    e.preventDefault();
    onConnect(platform);
  };

  return (
    <form onSubmit={handleConnect}>
      <div>
        <label>Select Platform</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
        </select>
      </div>
      <button type="submit">Connect</button>
    </form>
  );
};

export default SocialMediaIntegration;