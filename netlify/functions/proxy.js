export async function handler(event, context) {
  const url = "https://script.google.com/macros/s/AKfycbzzWYMIND9J-LA2ohQeOQkL7MkqRIKTHh98a4ktx1lde01KlC6wCo50dQtRQFTWkyrGSw/exec";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: event.body // esto ya es JSON si viene de fetch
    });

    const text = await response.text(); // 👈 para capturar incluso si no es JSON
    return {
      statusCode: 200,
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
