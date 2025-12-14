"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

const freePassSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export type FormState = {
    success?: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
    };
};

export async function submitFreePass(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
    };

    const result = freePassSchema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            message: "Validation failed",
            errors: result.error.flatten().fieldErrors,
        };
    }

    try {
        // In a real app, use 'after' to send email without blocking
        // For now, we simulate the send
        console.log("Sending Free Pass to:", data.email);

        // Simulating delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return { success: true, message: "Free Pass Sent! Check your email." };
    } catch (error) {
        return { success: false, message: "Failed to process request." };
    }
}
