import React, { useState } from 'react';
import { RBACProvider } from './context/RBACContext';
import { UserManagement } from './components/UserManagement';
import { RoleManagement } from './components/RoleManagement';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

function App() {
  const [activeTab, setActiveTab] = useState('home'); // Removed type annotations

  return (
    <RBACProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        <main>
          {activeTab === 'home' && <Home onNavigate={setActiveTab} />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'roles' && <RoleManagement />}
        </main>
      </div>
    </RBACProvider>
  );
}

export default App;
