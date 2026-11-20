import bcrypt from "bcryptjs";
import { AppDataSource } from "./data-source";
import { User, UserRole } from "../models/User";

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

const defaultUsers: SeedUser[] = [
  {
    name: "Cliente Teste",
    email: "customer@test.com",
    password: "c12345",
    role: "CUSTOMER",
  },
  {
    name: "Funcionário Teste",
    email: "employee@test.com",
    password: "e12345",
    role: "EMPLOYEE",
  },
  {
    name: "Administrador Teste",
    email: "admin@test.com",
    password: "a12345",
    role: "ADMIN",
  },
];

export async function runSeed() {
  const userRepository = AppDataSource.getRepository(User);

  for (const userData of defaultUsers) {
    const userExists = await userRepository.findOneBy({ email: userData.email });

    if (!userExists) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const user = userRepository.create({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: userData.role,
      });

      await userRepository.save(user);
      console.log(`Seed: usuário ${userData.email} (${userData.role}) criado.`);
    }
  }
}