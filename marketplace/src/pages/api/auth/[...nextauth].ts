// Import dotenv and configure it to load environment variables

// Import NextAuth and Google provider

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

// Configure authentication options
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string ,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
    // Add more providers here if needed
  ],
}
session: {
  strategy : 'jwt'
}
// Export NextAuth with authentication options
export default NextAuth(authOptions)
