/**
 * POST /api/submit
 */
export async function onRequestPost(context) {
    try {
        const { request } = context;
        const contentType = request.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
            const body = await request.json();
            // TODO: Integrate with SendGrid, Mailgun, or Turnstile here
            // For now, we just return a success response
            console.log("Form received", body);

            return new Response(JSON.stringify({ success: true, message: "Message received" }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response("Invalid content type", { status: 400 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
