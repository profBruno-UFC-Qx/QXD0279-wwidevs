export type UserRole = 'CUSTOMER' | 'EMPLOYEE' | 'ADMIN'

export interface User {
    id: number
    name: string
    email: string
    role: UserRole
}