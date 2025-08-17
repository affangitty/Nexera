import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Nexera", 
  name: "Nexera",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
