import React, { createContext, useContext, useState, useCallback } from 'react';
import { initialUsers, initialRoles, defaultPermissions } from '../data/mockData';

const RBACContext = createContext(undefined);

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [roles, setRoles] = useState(initialRoles);

  const addUser = useCallback((userData) => {
    const newUser = { ...userData, id: `u${Date.now()}` };
    setUsers(prev => [...prev, newUser]);
  }, []);

  const updateUser = useCallback((updatedUser) => {
    setUsers(prev => prev.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
  }, []);

  const deleteUser = useCallback((id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  }, []);

  const addRole = useCallback((roleData) => {
    const newRole = { ...roleData, id: `r${Date.now()}` };
    setRoles(prev => [...prev, newRole]);
  }, []);

  const updateRole = useCallback((updatedRole) => {
    setRoles(prev => prev.map(role => 
      role.id === updatedRole.id ? updatedRole : role
    ));
  }, []);

  const deleteRole = useCallback((id) => {
    setRoles(prev => prev.filter(role => role.id !== id));
  }, []);

  return (
    <RBACContext.Provider value={{
      users,
      roles,
      permissions: defaultPermissions,
      addUser,
      updateUser,
      deleteUser,
      addRole,
      updateRole,
      deleteRole,
    }}>
      {children}
    </RBACContext.Provider>
  );
};

export const useRBAC = () => {
  const context = useContext(RBACContext);
  if (context === undefined) {
    throw new Error('useRBAC must be used within a RBACProvider');
  }
  return context;
};
