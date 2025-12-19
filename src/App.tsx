import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Level1 } from './components/levels/Level1';
import { Level2 } from './components/levels/Level2';
import { Level3 } from './components/levels/Level3';
import { Level4 } from './components/levels/Level4';
import { Level5 } from './components/levels/Level5';
import { Level6 } from './components/levels/Level6';
import { Level7 } from './components/levels/Level7';
import { Level8 } from './components/levels/Level8';
import { Level9 } from './components/levels/Level9';
import { Level10 } from './components/levels/Level10';
import { Level11 } from './components/levels/Level11';
import { Level12 } from './components/levels/Level12';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 mt-16">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/level-1" element={<Level1 />} />
                <Route path="/level-2" element={<Level2 />} />
                <Route path="/level-3" element={<Level3 />} />
                <Route path="/level-4" element={<Level4 />} />
                <Route path="/level-5" element={<Level5 />} />
                <Route path="/level-6" element={<Level6 />} />
                <Route path="/level-7" element={<Level7 />} />
                <Route path="/level-8" element={<Level8 />} />
                <Route path="/level-9" element={<Level9 />} />
                <Route path="/level-10" element={<Level10 />} />
                <Route path="/level-11" element={<Level11 />} />
                <Route path="/level-12" element={<Level12 />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}