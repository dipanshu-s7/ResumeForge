import OpenAI from "openai";

const ai = new OpenAI({
    apiKey: (process.env.OPENAI_API_KEY || "").trim(),
    baseURL: (process.env.OPENAI_BASE_URL || "").trim(),
});

export default ai;


