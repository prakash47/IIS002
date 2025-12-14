import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Membership | Urja Fitness",
    description: "Affordable plans for everyone.",
};

const plans = [
    { name: "Day Pass", price: "₹500", freq: "/day", features: ["Access to Gym Floor", "Locker Access", "1 Class Included"], highlight: false },
    { name: "Monthly", price: "₹2,500", freq: "/mo", features: ["Unlimited Gym Access", "All Classes Included", "Free Diet Consultation", "Guest Pass (1/mo)"], highlight: true },
    { name: "Yearly", price: "₹20,000", freq: "/yr", features: ["Everything in Monthly", "Personal Training Session (2)", "Merchandise Kit", "Priority Support"], highlight: false },
];

export default function PricingPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-primary mb-4">Flexible Membership Plans</h1>
                <p className="text-xl opacity-75">Choose the plan that fits your lifestyle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <div key={idx} className={`card bg-base-100 shadow-xl border ${plan.highlight ? 'border-primary scale-105 z-10' : 'border-base-200'}`}>
                        <div className="card-body">
                            {plan.highlight && <div className="badge badge-primary absolute top-4 right-4">Popular</div>}
                            <h2 className="card-title text-3xl font-bold">{plan.name}</h2>
                            <div className="my-6">
                                <span className="text-5xl font-extrabold">{plan.price}</span>
                                <span className="text-lg opacity-60 font-medium">{plan.freq}</span>
                            </div>
                            <ul className="space-y-4 flex-1 mb-6">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex gap-3 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="card-actions justify-center">
                                <Link href="/join" className={`btn w-full ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}>Join Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
