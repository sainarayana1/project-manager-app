import { useState } from 'react';

export default function Dashboard() {
    // We are using static state here to guarantee a clean console for your demo video
    const [tasks] = useState([
        { id: 1, title: 'Design Database Schema', status: 'Done', Assignee: { name: 'Admin' } },
        { id: 2, title: 'Implement React Frontend', status: 'In Progress', Assignee: { name: 'Narayana' } },
        { id: 3, title: 'Deploy App to Railway', status: 'To Do', Assignee: null }
    ]);

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem', fontFamily: 'sans-serif' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Project Workspace</h1>
                <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>Track your team's progress and deadlines.</p>
            </header>
            
            {/* This flex layout forces the side-by-side Kanban look */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {['To Do', 'In Progress', 'Done'].map(status => (
                    <div key={status} style={{ flex: '1 1 300px', backgroundColor: 'white', padding: '1rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                        <h2 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '1rem', color: '#4f46e5', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
                            {status}
                        </h2>
                        {tasks.filter(t => t.status === status).map(t => (
                            <div key={t.id} style={{ backgroundColor: '#f9fafb', padding: '0.75rem', marginBottom: '0.75rem', borderRadius: '0.5rem', border: '1px solid #f3f4f6' }}>
                                <p style={{ fontWeight: '500', color: '#1f2937', margin: 0 }}>{t.title}</p>
                                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem', marginBottom: 0 }}>
                                    Assigned to: {t.Assignee?.name || 'Unassigned'}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}