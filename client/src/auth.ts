import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "1546303798-cav561hv0ldck7e388kcbimvl5fjr2at.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export default NextAuth(authOptions);
