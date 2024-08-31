import { env } from "@/env";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
	debug: true,
	session: {
		strategy: "jwt",
	},
	providers: [
		GitHubProvider({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET,
		}),
	],
	callbacks: {
		jwt: async ({ token, user, account, profile }) => {
			if (user) {
				token.user = user;
				// biome-ignore lint/suspicious/noExplicitAny: any
				const u = user as any;
				token.role = u.role;
			}
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		session: ({ session, token }) => {
			token.accessToken;
			return {
				...session,
				user: {
					...session.user,
					role: token.role,
				},
			};
		},
	},
});

export { handler as GET, handler as POST };
