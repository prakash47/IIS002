import type { Metadata } from "next";
import { JoinForm } from "@/components/join-form";

export const metadata: Metadata = {
    title: "Get Free Pass | Urja Fitness",
    description: "Start your fitness journey today.",
};

export default function JoinPage() {
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-lg">
                    <h1 className="text-5xl font-bold">1-Day Free Pass!</h1>
                    <p className="py-6">
                        Experience the energy, the community, and the results.
                        Fill out the form to get instant access to Urja Fitness Hub for a full day, on us.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <JoinForm />
                </div>
            </div>
        </div>
    );
}
