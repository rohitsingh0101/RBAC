import React from 'react';
import { UserPlus, ShieldPlus, Settings, HelpCircle } from 'lucide-react';

export const QuickActions = ({ onNavigate }) => {
  const actions = [
    { name: 'Add New User', description: 'Create a new user account', icon: UserPlus, action: () => onNavigate('users') },
    { name: 'Create Role', description: 'Define a new role with permissions', icon: ShieldPlus, action: () => onNavigate('roles') },
    { name: 'System Settings', description: 'Configure system preferences', icon: Settings, action: () => {} },
    { name: 'Help & Support', description: 'Get help with RBAC management', icon: HelpCircle, action: () => {} },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => (
          <button
            key={action.name}
            onClick={action.action}
            className="relative group bg-white p-6 focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-lg shadow hover:shadow-md transition-all"
          >
            <div>
              <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                {action.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {action.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
