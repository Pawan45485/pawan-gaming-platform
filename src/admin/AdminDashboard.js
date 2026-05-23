import React from 'react';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <nav className="admin-nav">
        <a href="/admin/upload-apk">Upload APK</a>
        <a href="/admin/create-tournament">Create Tournament</a>
        <a href="/admin/manage-users">Manage Users</a>
        <a href="/admin/create-blog">Create Blog</a>
      </nav>
      {/* Admin dashboard content */}
    </div>
  );
}

export default AdminDashboard;
