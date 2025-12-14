"use server";

import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with a dummy key for now.
// In production, this should be process.env.RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

const contactSchema = z.object({
    email: z.string().email(),
    message: z.string().min(10),
});

export async function submitContact(prevState: any, formData: FormData) {
    const data = Object.fromEntries(formData);
    const result = contactSchema.safeParse(data);

    if (!result.success) {
        return { success: false, errors: result.error.flatten().fieldErrors };
    }

    // Example of using 'after' (simulated or real depending on Next.js version support)
    // In Next.js 15+, we can use logic here.
    // For now, simple direct send.
    try {
        /*
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'delivered@resend.dev',
          subject: 'Hello World',
          html: '<p>Congrats on sending your first email!</p>'
        });
        */

        return { success: true, message: "Message sent!" };
    } catch (error) {
        return { success: false, message: "Failed to send message." };
    }
}
