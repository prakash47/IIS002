import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Trainers | Urja Fitness",
    description: "Meet our elite fitness coaches.",
};

const trainers = [
    { name: "Rajesh S.", role: "Head Coach", spec: "Strength & Conditioning", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop" },
    { name: "Priya M.", role: "Yoga Instructor", spec: "Vinyasa & Hatha", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop" },
    { name: "Vikram R.", role: "CrossFit Coach", spec: "Functional Fitness", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" },
    { name: "Sneha K.", role: "Zumba Lead", spec: "Dance Fitness", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop" },
];

export default function TrainersPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-primary">Meet Our Trainers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trainers.map((trainer, idx) => (
                    <div key={idx} className="card bg-base-100 shadow-xl border border-base-200 hover:scale-105 transition-transform duration-300">
                        <figure className="h-64 relative overflow-hidden">
                            <img src={trainer.img} alt={trainer.name} className="object-cover w-full h-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">{trainer.name}</h2>
                            <div className="badge badge-secondary">{trainer.role}</div>
                            <p className="text-sm mt-2">{trainer.spec}</p>
                            <div className="card-actions mt-4">
                                <button className="btn btn-outline btn-sm">Book Session</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
