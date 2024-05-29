import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


export const authOptions ={
    providers: [
        GoogleProvider({
            clientId: "712106052142-24ltdf6gclm2d7kja4u65l2f97e1tqeq.apps.googleusercontent.com",
            clientSecret: "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"
        }),
    ]
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};