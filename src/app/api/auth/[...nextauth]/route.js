import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


export const authOptions ={
    providers: [
        GoogleProvider({
            clientId: "712106052142-hlg0vldfnkmvr27t7ih9dn9ujvs5cogu.apps.googleusercontent.com",
            clientSecret: "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"
        }),
    ]
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};