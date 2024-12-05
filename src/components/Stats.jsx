import React from 'react';
import { Users, Shield, Key, Activity } from 'lucide-react';
import { useRBAC } from '../context/RBACContext';

export const Stats = () => {
  const { users, roles, permissions } = useRBAC();
  
  const stats = [
    { name: 'Total Users', value: users.length, icon: Users, color: 'text-blue-600' },
    { name: 'Active Roles', value: roles.length, icon: Shield, color: 'text-green-600' },
    { name: 'Permissions', value: permissions.length, icon: Key, color: 'text-purple-600' },
    { name: 'Active Sessions', value: users.filter(u => u.isActive).length, icon: Activity, color: 'text-orange-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
