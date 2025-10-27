import React, { useEffect, useState } from 'react';
import API from '../services/api';
import JobCard from '../components/JobCard';
import JobForm from '../components/JobForm';

export default function Dashboard(){
  const [jobs, setJobs] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const res = await API.get('/jobs');
    setJobs(res.data);
  };

  useEffect(()=>{ load(); }, []);

  const add = async (data) => { await API.post('/jobs', data); load(); setEditing(null); };
  const update = async (data) => { await API.put(`/jobs/${editing._id}`, data); load(); setEditing(null); };
  const remove = async (id) => { if (confirm('Delete?')) { await API.delete(`/jobs/${id}`); load(); } };

  return (
    <div>
      <h1>My Job Applications</h1>
      <JobForm onSubmit={editing ? update : add} initial={editing} />
      <div style={{display:'grid', gap:12}}>
        {jobs.map(j => <JobCard key={j._id} job={j} onEdit={(job)=>setEditing(job)} onDelete={remove} />)}
      </div>
    </div>
  )
}
