import React, { useState, useEffect } from 'react';

export default function JobForm({ onSubmit, initial }){
  const [form, setForm] = useState({ company:'', position:'', status:'Applied', appliedDate:'', notes:'' });

  useEffect(()=>{ if (initial) setForm({...initial, appliedDate: initial.appliedDate ? new Date(initial.appliedDate).toISOString().slice(0,10) : ''}); }, [initial]);

  const handle = (e) => setForm(s => ({...s, [e.target.name]: e.target.value}));
  const submit = (e) => { e.preventDefault(); onSubmit(form); };

  return (
    <form onSubmit={submit} className="card" style={{marginBottom:12}}>
      <input name="company" value={form.company} onChange={handle} placeholder="Company" required />
      <input name="position" value={form.position} onChange={handle} placeholder="Position" required />
      <select name="status" value={form.status} onChange={handle}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
        <option>Hired</option>
      </select>
      <input type="date" name="appliedDate" value={form.appliedDate} onChange={handle} />
      <textarea name="notes" value={form.notes} onChange={handle} placeholder="Notes" />
      <button className="button" type="submit">Save</button>
    </form>
  )
}
