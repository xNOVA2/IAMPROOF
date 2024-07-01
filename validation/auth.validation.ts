import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(30),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(30),
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(30),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(30),
});