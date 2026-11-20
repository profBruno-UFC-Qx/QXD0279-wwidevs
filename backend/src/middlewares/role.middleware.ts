import { Request, Response, NextFunction } from "express";

type Role = 'CUSTOMER' | 'EMPLOYEE' | 'ADMIN';

export function authorizeRoles(...allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuário não autenticado.' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Acesso negado: permissão insuficiente.' });
    }

    return next();
  };
}