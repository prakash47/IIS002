"use client";

import { useActionState } from "react";
import { submitFreePass } from "@/actions/free-pass";

const initialState = {
    success: false,
    message: "",
};

export function JoinForm() {
    const [state, action, isPending] = useActionState(submitFreePass, initialState);

    if (state.success) {
        return (
            <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{state.message}</span>
            </div>
        );
    }

    return (
        <form action={action} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input name="name" type="text" placeholder="John Doe" className="input input-bordered" required />
                {state.errors?.name && <p className="text-error text-sm mt-1">{state.errors.name[0]}</p>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="john@example.com" className="input input-bordered" required />
                {state.errors?.email && <p className="text-error text-sm mt-1">{state.errors.email[0]}</p>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                <input name="phone" type="tel" placeholder="+91 98765 43210" className="input input-bordered" required />
                {state.errors?.phone && <p className="text-error text-sm mt-1">{state.errors.phone[0]}</p>}
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={isPending}>
                    {isPending ? <span className="loading loading-spinner"></span> : "Get My Free Pass"}
                </button>
            </div>
            {state.message && !state.success && (
                <div className="alert alert-error mt-4">
                    <span>{state.message}</span>
                </div>
            )}
        </form>
    );
}
