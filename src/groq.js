const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const callGroqAI = async (prompt, text) => {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: prompt },
          { role: 'user', content: text }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Groq AI Error:', error);
    return `Error: ${error.message}. Please check your connection or API limit.`;
  }
};
