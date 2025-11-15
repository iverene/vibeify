const axios = require('axios');

async function generatePlaylist(userInput) {
    const key = process.env.OPENAI_API_KEY;
    if (!key) throw new Error('OpenAI API key not configured');

    const prompt = `You are a playlist-generating AI. Create a playlist inspired by the following user input:

    "${userInput}"

    Interpret the meaning, vibe, mood, feeling, theme, or context behind the input—no matter what language it is written in. You should understand Filipino language and slangs.

    Return the playlist strictly in this JSON format:

    {
    "playlistName": "string",
    "songs": [
        {
        "id": "int",
        "title": "string",
        "artist": "string"
        }
    ]
    }

    Guidelines:
    - Generate at least 10 songs.
    - All songs must match the mood or vibe of the user's input.
    - Songs can be in any language.
    - The playlist name must be creative, trendy, and unique.
    - Do NOT include numbers, extra text, or explanations outside the JSON.
    - Do NOT include symbols such as ** or any markdown formatting.
    - The result must be valid JSON only.
    `

    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions',
        {model: "openai/gpt-oss-20b:free",
            messages: [{role: "user", content: prompt}],
            temperature: 0.3
        },
        {  
            headers: {
                Authorization: `Bearer ${key}`,
                "HTTP-Referer": "http://localhost:5173",
                "X-Title": "Vibeify"
            }
        }
    )

    const text = response.data.choices?.[0]?.message?.content || ""
      try {
        const json = text.match(/{[\s\S]*}/)
        if (!json) throw new Error('No JSON found in the response')
            return JSON.parse(json[0])
      } catch (error) {
        throw new Error('Error parsing JSON response: ' + text)
      }
} 

module.exports = { generatePlaylist } 