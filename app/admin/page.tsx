"use client";
import React, { useState, useEffect } from "react";
import { Lock, Plus, Edit2, Trash2, LogOut, Save, X, Database } from "lucide-react";

export default function AdminPanel() {
  // --- States ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: "", pass: "" });
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("crud-data");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // Central function to update state and browser storage
  const updateStorage = (newItems: any) => {
    setItems(newItems);
    localStorage.setItem("crud-data", JSON.stringify(newItems));
  };

  // --- Auth Handler ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.user === "karthik" && loginForm.pass === "kar143pranlk") {
      setIsLoggedIn(true);
    } else {
      alert("Unauthorized Access: Invalid Credentials");
    }
  };

  // --- CRUD Handlers ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    if (isEditing) {
      const updated = items.map((item: any) => (item.id === form.id ? form : item));
      updateStorage(updated);
      setIsEditing(false);
    } else {
      const newItem = { ...form, id: Date.now() };
      updateStorage([...items, newItem]);
    }
    setForm({ id: null, name: "", email: "" });
  };

  const startEdit = (item: any) => {
    setForm(item);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      const filtered = items.filter((item: any) => item.id !== id);
      updateStorage(filtered);
    }
  };

  // --- 1. LOGIN SCREEN ---
  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-[#050814] flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-slate-900/40 border border-slate-800 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Lock className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <h2 className="text-white text-2xl font-black text-center mb-2 tracking-tighter uppercase">Admin Portal</h2>
          <p className="text-slate-500 text-[10px] text-center mb-8 tracking-[0.3em] uppercase">Security Clearance Required</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-black border border-slate-800 rounded-xl px-5 py-4 text-white text-sm focus:border-blue-500 outline-none transition"
              onChange={(e) => setLoginForm({ ...loginForm, user: e.target.value })}
            />
            <input
              type="password"
              placeholder="Access Key"
              className="w-full bg-black border border-slate-800 rounded-xl px-5 py-4 text-white text-sm focus:border-blue-500 outline-none transition"
              onChange={(e) => setLoginForm({ ...loginForm, pass: e.target.value })}
            />
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition active:scale-95 uppercase text-[10px] tracking-widest mt-4">
              Authenticate
            </button>
          </form>
        </div>
      </main>
    );
  }

  // --- 2. DASHBOARD MAIN VIEW ---
  return (
    <main className="min-h-screen bg-[#050814] text-slate-300 p-6 md:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Database className="w-4 h-4 text-blue-500" />
              <span className="text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase">Control Center</span>
            </div>
            <h1 className="text-white text-4xl font-black tracking-tighter uppercase">Dashboard</h1>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition duration-300"
          >
            <LogOut className="w-3 h-3" /> Terminate Session
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Side (Input Fields) */}
          <div className="lg:col-span-4">
            <div className="sticky top-12 bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 backdrop-blur-md">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isEditing ? 'bg-yellow-500/10' : 'bg-blue-500/10'}`}>
                   {isEditing ? <Edit2 className="w-4 h-4 text-yellow-500" /> : <Plus className="w-4 h-4 text-blue-500" />}
                </div>
                {isEditing ? "Modify Entry" : "New Entry"}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={form.name}
                    className="w-full bg-black border border-slate-800 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-blue-500 transition"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={form.email}
                    className="w-full bg-black border border-slate-800 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-blue-500 transition"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                
                <div className="pt-4 flex flex-col gap-3">
                  <button 
                    type="submit" 
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest transition shadow-lg ${isEditing ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
                  >
                    <Save className="w-4 h-4" /> {isEditing ? "Save Changes" : "Deploy to Database"}
                  </button>
                  {isEditing && (
                    <button 
                      type="button"
                      onClick={() => { setIsEditing(false); setForm({ id: null, name: "", email: "" }); }}
                      className="w-full py-4 bg-slate-800 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-700 transition"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Table Side (Data List) */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900/20 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-xl">
              <div className="px-8 py-5 border-b border-slate-800 bg-slate-900/40">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Live Database Records</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-900/20 text-[9px] font-bold uppercase tracking-widest text-slate-600 border-b border-slate-800/50">
                      <th className="px-8 py-5">System Entity</th>
                      <th className="px-8 py-5">Access Status</th>
                      <th className="px-8 py-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {items.map((item: any) => (
                      <tr key={item.id} className="group hover:bg-blue-500/[0.03] transition duration-300">
                        <td className="px-8 py-6">
                          <div className="text-sm font-bold text-white tracking-tight">{item.name}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{item.email}</div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-[9px] font-black uppercase text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-md border border-emerald-400/20">
                            Active
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right space-x-1">
                          <button 
                            onClick={() => startEdit(item)}
                            className="p-2.5 text-slate-500 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-xl transition duration-300"
                            title="Edit Entry"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-2.5 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition duration-300"
                            title="Delete Entry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {items.length === 0 && (
                      <tr>
                        <td colSpan={3} className="px-8 py-24 text-center text-slate-600 uppercase text-[10px] tracking-[0.5em] font-bold">
                          Null - No Records Found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}