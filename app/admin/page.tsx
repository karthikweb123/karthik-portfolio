"use client";
import React, { useState, useEffect } from "react";
import { Lock, Plus, Edit2, Trash2, LogOut, Save, X } from "lucide-react";

export default function AdminPanel() {
  // --- States ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: "", pass: "" });
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Load data on mount
  useEffect(() => {
    const saved = localStorage.getItem("crud-data");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // Save data to localStorage whenever items change
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
      alert("Invalid Admin Credentials");
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
    if (confirm("Delete this record?")) {
      const filtered = items.filter((item: any) => item.id !== id);
      updateStorage(filtered);
    }
  };

  // --- 1. LOGIN UI ---
  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-[#050814] flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-slate-900/40 border border-slate-800 p-10 rounded-[2.5rem] backdrop-blur-xl">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Lock className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <h2 className="text-white text-2xl font-black text-center mb-2 tracking-tighter uppercase">Admin Access</h2>
          <p className="text-slate-500 text-xs text-center mb-8 tracking-widest uppercase">System Authentication Required</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Admin ID"
              className="w-full bg-black border border-slate-800 rounded-xl px-5 py-4 text-white text-sm focus:border-blue-500 outline-none transition"
              onChange={(e) => setLoginForm({ ...loginForm, user: e.target.value })}
            />
            <input
              type="password"
              placeholder="Security Key"
              className="w-full bg-black border border-slate-800 rounded-xl px-5 py-4 text-white text-sm focus:border-blue-500 outline-none transition"
              onChange={(e) => setLoginForm({ ...loginForm, pass: e.target.value })}
            />
            <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition active:scale-95 uppercase text-xs tracking-widest mt-4">
              Authorize
            </button>
          </form>
        </div>
      </main>
    );
  }

  // --- 2. DASHBOARD UI ---
  return (
    <main className="min-h-screen bg-[#050814] text-slate-300 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-white text-3xl font-black tracking-tighter uppercase">Dashboard</h1>
            <p className="text-blue-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-1">Data Management System</p>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition"
          >
            <LogOut className="w-3 h-3" /> Logout
          </button>
        </div>

        {/* Input Form Card */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 mb-8 backdrop-blur-md">
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
            {isEditing ? <Edit2 className="w-4 h-4 text-yellow-500" /> : <Plus className="w-4 h-4 text-blue-500" />}
            {isEditing ? "Modify Record" : "Create New Record"}
          </h3>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Candidate Name"
              value={form.name}
              className="bg-black border border-slate-800 rounded-xl px-5 py-3 text-white text-sm outline-none focus:border-blue-500 transition"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Candidate Email"
              value={form.email}
              className="bg-black border border-slate-800 rounded-xl px-5 py-3 text-white text-sm outline-none focus:border-blue-500 transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <div className="md:col-span-2 flex gap-3 mt-2">
              <button 
                type="submit" 
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest transition ${isEditing ? 'bg-yellow-500 text-black' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
              >
                <Save className="w-4 h-4" /> {isEditing ? "Update Database" : "Commit to Database"}
              </button>
              {isEditing && (
                <button 
                  type="button"
                  onClick={() => { setIsEditing(false); setForm({ id: null, name: "", email: "" }); }}
                  className="px-6 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List Card */}
        <div className="bg-slate-900/20 border border-slate-800 rounded-[2rem] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900/50 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800">
                <th className="px-8 py-5">Candidate</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {items.map((item: any) => (
                <tr key={item.id} className="group hover:bg-white/[0.02] transition">
                  <td className="px-8 py-5">
                    <div className="text-sm font-bold text-white">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.email}</div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-[9px] font-black uppercase text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20">Active</span>
                  </td>
                  <td className="px-8 py-5 text-right space-x-2">
                    <button 
                      onClick={() => startEdit(item)}
                      className="p-2 text-slate-500 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-8 py-20 text-center text-slate-600 uppercase text-[10px] tracking-widest font-bold">
                    Database Empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}