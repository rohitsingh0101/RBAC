import React from 'react';
import { useRBAC } from '../context/RBACContext';
import { Clock } from 'lucide-react';

export const RecentActivity = () => {
  const { users, roles } = useRBAC();
  
  // Simulate recent activities based on users and roles
  const activities = [
    { id: 1, user: users[0]?.name || 'Admin', action: 'created', target: 'new role', timestamp: '5 minutes ago' },
    { id: 2, user: users[1]?.name || 'Editor', action: 'modified', target: 'permissions', timestamp: '10 minutes ago' },
    { id: 3, user: users[0]?.name || 'Admin', action: 'added', target: 'new user', timestamp: '15 minutes ago' },
    { id: 4, user: users[2]?.name || 'User', action: 'updated', target: 'profile', timestamp: '20 minutes ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-indigo-500" />
            Recent Activity
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {activities.map((activity) => (
              <li key={activity.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-indigo-600 truncate">{activity.user}</p>
                    <p className="ml-2 text-sm text-gray-500">
                      {activity.action} {activity.target}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="text-sm text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
