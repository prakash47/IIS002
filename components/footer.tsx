import Link from "next/link";

export function Footer() {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">Gym</h6>
                <Link href="/classes" className="link link-hover">Classes</Link>
                <Link href="/trainers" className="link link-hover">Trainers</Link>
                <Link href="/pricing" className="link link-hover">Membership</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <span className="text-sm">123 Fitness St, Muscle City</span>
                <span className="text-sm">support@urjafitness.com</span>
            </nav>
        </footer>
    );
}
