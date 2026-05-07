import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/lib/prisma'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Simple demo authorize - in production, validate hashed password
        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (user) return { id: user.id, name: user.name, email: user.email, role: user.role, verified: user.verified }
        return null
      }
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.verified = user.verified
      }
      return token
    },
    async session({ session, token }) {
      session.user = { id: token.id, name: token.name, email: token.email, role: token.role, verified: token.verified }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
