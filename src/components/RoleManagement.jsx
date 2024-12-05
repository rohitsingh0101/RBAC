import React, { useState } from 'react';
import { Shield, Edit, Trash2 } from 'lucide-react';
import { useRBAC } from '../context/RBACContext';

export const RoleManagement = () => {
  const { roles, permissions, addRole, updateRole, deleteRole } = useRBAC();
  const [editingRole, setEditingRole] = useState(null);
  const [newRole, setNewRole] = useState({
    name: '',
    permissions: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRole) {
      updateRole({ ...editingRole, ...newRole });
      setEditingRole(null);
    } else {
      addRole(newRole);
    }
    setNewRole({ name: '', permissions: [] });
  };

  const handlePermissionToggle = (permission) => {
    const currentPermissions = newRole.permissions || [];
    const exists = currentPermissions.find(p => p.id === permission.id);
    
    if (exists) {
      setNewRole({
        ...newRole,
        permissions: currentPermissions.filter(p => p.id !== permission.id),
      });
    } else {
      setNewRole({
        ...newRole,
        permissions: [...currentPermissions, permission],
      });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Role Management</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700">Role Name</label>
            <input
              type="text"
              value={newRole.name}
              onChange={e => setNewRole({ ...newRole, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
            <div className="grid grid-cols-2 gap-4">
              {permissions.map(permission => (
                <label key={permission.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newRole.permissions?.some(p => p.id === permission.id) || false}
                    onChange={() => handlePermissionToggle(permission)}
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">
                    {permission.name} - {permission.description}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {editingRole ? 'Update Role' : 'Add Role'}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {roles.map(role => (
              <tr key={role.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Shield className="h-10 w-10 text-gray-400" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{role.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {role.permissions.map(permission => (
                      <span
                        key={permission.id}
                        className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                      >
                        {permission.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => setEditingRole(role)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => deleteRole(role.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
