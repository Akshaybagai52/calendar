import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login',
      },
    providers: [
        GitHubProvider({
            clientId:"8767bb99f83a3a7e5a23",
            clientSecret:"8379445a0d7e010b5858f8b2b7195dafc85c1fb2",
        }),
    ],
    secret:"next js ",
}
export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, authOptions);


// import { NextApiRequest, NextApiResponse } from 'next';
// import NextAuth from 'next-auth';
// import { GitHubProvider } from 'next-auth';

// const options = {
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   // Add other configurations as needed
// };

// export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
//   NextAuth(req, res, options);
