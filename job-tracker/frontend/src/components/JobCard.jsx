import React from 'react';

export default function JobCard({ job, onEdit, onDelete }){
  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
          <h3 style={{margin:0}}>{job.position} @ {job.company}</h3>
          <p style={{margin:0}}>Status: {job.status} — Applied: {new Date(job.appliedDate).toLocaleDateString()}</p>
        </div>
        <div>
          <button onClick={() => onEdit(job)} className="button mr-2">Edit</button>
          <button onClick={() => onDelete(job._id)} className="button">Delete</button>
        </div>
      </div>
      {job.notes && <p>{job.notes}</p>}
    </div>
  )
}
