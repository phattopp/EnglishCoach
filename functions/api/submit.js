import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

/**
 * POST /api/submit
 * Handles contact form submissions and sends email via Cloudflare Email Routing
 */
export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        const contentType = request.headers.get("content-type") || "";

        if (!contentType.includes("application/json")) {
            return new Response(JSON.stringify({ error: "Invalid content type" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const body = await request.json();
        const { name, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Create the email message
        const msg = createMimeMessage();
        msg.setSender({ name: "English Coach Website", addr: "noreply@englishcoach.at" });
        msg.setRecipient(env.CONTACT_EMAIL || "mike@englishcoach.at");
        msg.setSubject(`Contact Form: Message from ${name}`);
        msg.addMessage({
            contentType: "text/plain",
            data: `New contact form submission from englishcoach.at

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the contact form on englishcoach.at`,
        });

        // Send the email using Cloudflare Email Routing
        const emailMessage = new EmailMessage(
            "noreply@englishcoach.at",
            env.CONTACT_EMAIL || "mike@englishcoach.at",
            msg.asRaw()
        );

        await env.EMAIL.send(emailMessage);

        return new Response(JSON.stringify({ success: true, message: "Message sent successfully" }), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (err) {
        console.error("Email send error:", err);
        return new Response(JSON.stringify({ error: "Failed to send message. Please try again." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
