
import { MEDISON_CONTEXT } from "../../../../utils/MedisonContext";
export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            // Website context
            {
              role: "user",
              parts: [{ text: MEDISON_CONTEXT} ]
            },
            // Actual user input
            {
              role: "user",
              parts: [{ text: message }]
            }
          ]
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      return new Response(
        JSON.stringify({ reply: `⚠️ Error: the Medison AI request limit has been reached. Please try again later.` }),
        { status: 400 }
      );
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ Sorry, I couldn’t process that.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}




