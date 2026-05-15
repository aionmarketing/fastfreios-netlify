exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL;
  if (!appsScriptUrl) {
    console.warn("APPS_SCRIPT_URL not configured — skipping Sheets sync");
    return { statusCode: 200, body: "OK (Sheets not configured)" };
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const data = payload.data || {};

    await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: data.timestamp || new Date().toLocaleString("pt-BR"),
        name: data.name || "",
        phone: data.phone || "",
        car: data.car || "",
        service: data.service || "",
      }),
    });
  } catch (err) {
    console.error("Sheets sync error:", err);
  }

  return { statusCode: 200, body: "OK" };
};
