import NextAuth, {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {supabase} from '@/app/lib/api/supabase.ts';
import {SignInSchema} from '@/app/lib/zod.ts';
import {getErrorMessage} from '@/app/lib/utils/getErrorMessage.ts';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      id: 'log-in',
      name: 'Log In',
      credentials: {
        username: {label: 'Username', type: 'text', placeholder: 'username'},
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        const parsed = SignInSchema.safeParse(credentials);

        if (!parsed.success) {
          return null;
        }

        const {username, password} = parsed.data;

        try {
          const {data, error} = await supabase.functions.invoke(
            'get-decrypted-user-for-login',
            {
              body: {username},
            }
          );

          if (error) {
            console.error('Edge Function error:', error);
            return null;
          }

          if (!data || !data.id || !data.password_hash) {
            return null;
          }

          if (password !== data.password_hash) return null;

          return {
            id: data.id,
            name: data.username,
          };
        } catch (error) {
          console.error(getErrorMessage(error));

          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
