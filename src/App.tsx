import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { StudyView } from './pages/StudyView';
import { Downloads } from './pages/Downloads';
import { AdminDashboard } from './pages/AdminDashboard';
export function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-cream dark:bg-warmDark transition-colors duration-300">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/teaching/:slug" element={<StudyView />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>);

}