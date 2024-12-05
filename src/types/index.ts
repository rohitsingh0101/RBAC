export interface User {
  id: string;
  name: string;
  email: string;
  roleId: string;
  isActive: boolean;
}

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export type Action = 'create' | 'read' | 'update' | 'delete';