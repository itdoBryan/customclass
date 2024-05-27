import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


export const authOptions ={
    providers: [
        GoogleProvider({
            clientId: "712106052142-rcjudbtpncdbkkdav7n3pf8ni0p4sl5c.apps.googleusercontent.com",
            clientSecret: "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"
        }),
    ]
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};