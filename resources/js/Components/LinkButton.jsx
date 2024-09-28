import { Link } from "@inertiajs/react";

export default function LinkButton({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-4 rounded-none border border-transparent text-sm font-medium transition ease-in-out duration-150 focus:outline-none tracking-widest focus:ring-2" +
                (active
                    ? "border-indigo-400 text-gray-200 focus:border-slate-200"
                    : "border-transparent text-gray-500 hover:text-slate-200 hover:border-slate-200 focus:text-slate-500 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
