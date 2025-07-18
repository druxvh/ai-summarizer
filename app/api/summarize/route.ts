import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";

const baseContext = `
You are a professional academic writer that summarizes educational notes into structured markdown format.

Automatically detect the heading and make bullet points according to the given context and keep all the bullet points brief and concise.
  
Return the summary in this format ONLY:

**Topic Title**
- Bullet point 1
- Bullet point 2
- Bullet point 3

Repeat for each main topic found in the input notes. 
Do NOT add any explanation outside this format. Only respond in this structure.
`

const google = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
    const { prompt }: { prompt: string } = await req.json();

    if (!prompt || typeof prompt !== "string") {
        return new Response("Missing or invalid prompt", { status: 400 });
    }

    try {
        const result = streamText({
            model: google("gemini-2.5-flash"),
            prompt: `${baseContext} \n\n ${prompt}`,
        });

        return result.toDataStreamResponse()
    } catch (error) {
        console.error("Gemini API Error:", error);
        return new Response("Failed to summarize notes", { status: 500 });
    }
}
