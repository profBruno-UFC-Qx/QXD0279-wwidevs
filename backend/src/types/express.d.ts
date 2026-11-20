declare namespace Express {
  export interface Request {
    user?: {
      id: number;
      role: 'CUSTOMER' | 'EMPLOYEE' | 'ADMIN';
    };
  }
}