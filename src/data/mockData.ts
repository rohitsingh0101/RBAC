import { User, Role, Permission } from '../types';

export const defaultPermissions: Permission[] = [
  { id: 'p1', name: 'read', description: 'Can view resources' },
  { id: 'p2', name: 'create', description: 'Can create new resources' },
  { id: 'p3', name: 'update', description: 'Can modify existing resources' },
  { id: 'p4', name: 'delete', description: 'Can remove resources' },
];

export const initialRoles: Role[] = [
  { 
    id: 'r1', 
    name: 'Admin', 
    permissions: defaultPermissions 
  },
  { 
    id: 'r2', 
    name: 'Editor', 
    permissions: defaultPermissions.filter(p => p.name !== 'delete') 
  },
  { 
    id: 'r3', 
    name: 'Viewer', 
    permissions: defaultPermissions.filter(p => p.name === 'read') 
  },
];

export const initialUsers: User[] = [
  {
    id: 'u1',
    name: 'John Admin',
    email: 'john@example.com',
    roleId: 'r1',
    isActive: true,
  },
  {
    id: 'u2',
    name: 'Sarah Editor',
    email: 'sarah@example.com',
    roleId: 'r2',
    isActive: true,
  },
  {
    id: 'u3',
    name: 'Mike Viewer',
    email: 'mike@example.com',
    roleId: 'r3',
    isActive: false,
  },
];