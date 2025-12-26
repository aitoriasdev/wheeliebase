import * as z from 'zod';

export const SignInSchema = z.object({
  username: z.string('Username is required').min(1, 'Username is required'),
  password: z
    .string('Password is required')
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});
