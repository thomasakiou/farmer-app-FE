/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RegisterFarmer from './pages/RegisterFarmer';
import FarmerProfile from './pages/FarmerProfile';
import MediaUpload from './pages/MediaUpload';
import ManageFarmers from './pages/ManageFarmers';
import AdminSettings from './pages/AdminSettings';
import Reports from './pages/Reports';
import FarmLands from './pages/FarmLands';
import FarmerDashboard from './pages/FarmerDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/register-farmer" element={<RegisterFarmer />} />
        <Route path="/edit-farmer/:id" element={<RegisterFarmer />} />
        <Route path="/farmer-profile/:id" element={<FarmerProfile />} />
        <Route path="/media-upload" element={<MediaUpload />} />
        <Route path="/manage-farmers" element={<ManageFarmers />} />
        <Route path="/farm-lands" element={<FarmLands />} />
        <Route path="/admin-settings" element={<AdminSettings />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}
