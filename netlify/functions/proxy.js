// netlify/functions/proxy.js
export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  const datos = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbzzWYMIND9J-LA2ohQeOQkL7MkqRIKTHh98a4ktx1lde01KlC6wCo50dQtRQFTWkyrGSw/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  });

  const result = await response.text(); // Google Scripts devuelve texto

  return {
    statusCode: 200,
    body: result
  }; 
}
