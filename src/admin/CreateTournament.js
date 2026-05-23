import React, { useState } from 'react';

function CreateTournament() {
  const [formData, setFormData] = useState({
    title: '',
    prizePool: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create tournament logic here
    console.log('Creating tournament:', formData);
  };

  return (
    <div className="create-tournament">
      <h2>Create Tournament</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Tournament Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="prizePool"
          placeholder="Prize Pool"
          value={formData.prizePool}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Tournament</button>
      </form>
    </div>
  );
}

export default CreateTournament;
