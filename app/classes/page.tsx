import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Class Schedule | Urja Fitness",
    description: "Join our high-energy fitness classes.",
};

const schedule = [
    { time: "06:00 AM", mon: "Yoga", tue: "HIIT", wed: "Yoga", thu: "HIIT", fri: "Yoga", sat: "Cardio", sun: "Rest" },
    { time: "07:30 AM", mon: "CrossFit", tue: "Zumba", wed: "CrossFit", thu: "Zumba", fri: "CrossFit", sat: "Open Gym", sun: "Rest" },
    { time: "05:00 PM", mon: "Boxing", tue: "Pilates", wed: "Boxing", thu: "Pilates", fri: "Boxing", sat: "Open Gym", sun: "Rest" },
    { time: "07:00 PM", mon: "Strength", tue: "Strength", wed: "Strength", thu: "Strength", fri: "Strength", sat: "Competition", sun: "Rest" },
];

export default function ClassesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-primary">Weekly Class Schedule</h1>
            <div className="overflow-x-auto">
                <table className="table table-lg table-zebra border border-base-300">
                    <thead>
                        <tr className="bg-base-200 text-base-content text-lg">
                            <th>Time</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((slot, index) => (
                            <tr key={index} className="hover:bg-base-200/50 transition-colors">
                                <th className="font-bold text-secondary">{slot.time}</th>
                                <td className="font-medium">{slot.mon}</td>
                                <td className="font-medium">{slot.tue}</td>
                                <td className="font-medium">{slot.wed}</td>
                                <td className="font-medium">{slot.thu}</td>
                                <td className="font-medium">{slot.fri}</td>
                                <td className="font-medium">{slot.sat}</td>
                                <td className="opacity-50 italic">{slot.sun}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
