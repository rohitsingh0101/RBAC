import React from 'react';
import { Shield, Users, Key } from 'lucide-react';
import { useRBAC } from '../context/RBACContext';

export const Hero = ({ onNavigate }) => {
  const { users, roles } = useRBAC();

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Secure Access Control</span>
                <span className="block text-indigo-600">Made Simple</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Manage user roles and permissions with ease. Our RBAC system provides a robust and flexible way to control access across your organization.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button 
                    onClick={() => onNavigate('users')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Manage Users
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button 
                    onClick={() => onNavigate('roles')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Manage Roles
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-indigo-50 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8 p-8">
            <div className="text-center">
              <Shield className="w-24 h-24 text-indigo-600 mx-auto" />
              <p className="mt-2 text-lg font-semibold text-gray-900">{roles.length} Roles</p>
            </div>
            <div className="text-center">
              <Users className="w-24 h-24 text-indigo-500 mx-auto" />
              <p className="mt-2 text-lg font-semibold text-gray-900">{users.length} Users</p>
            </div>
            <div className="text-center">
              <Key className="w-24 h-24 text-indigo-400 mx-auto" />
              <p className="mt-2 text-lg font-semibold text-gray-900">Permissions</p>
            </div>
            <div className="text-center">
              <Shield className="w-24 h-24 text-indigo-300 mx-auto" />
              <p className="mt-2 text-lg font-semibold text-gray-900">Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
