import React from 'react';
import { Shield, Users, Key, Lock } from 'lucide-react';

export const Features = ({ onNavigate }) => {
  const features = [
    {
      name: 'User Management',
      description: 'Easily manage users and their access levels across your organization.',
      icon: Users,
      action: () => onNavigate('users'),
    },
    {
      name: 'Role-Based Access',
      description: 'Create and manage roles with specific permissions and capabilities.',
      icon: Shield,
      action: () => onNavigate('roles'),
    },
    {
      name: 'Permission Control',
      description: 'Fine-grained control over what actions users can perform.',
      icon: Key,
      action: () => onNavigate('roles'),
    },
    {
      name: 'Security First',
      description: 'Built with security best practices to protect your resources.',
      icon: Lock,
      action: () => onNavigate('roles'),
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for access control
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A complete solution for managing user access and permissions in your application.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={feature.action}
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
