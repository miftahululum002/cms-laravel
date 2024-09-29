import { Link } from "@inertiajs/react";

export default function LinkText({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "block text-primary justify-center text-sm items-center mb-1 w-ful" +
                (active
                    ? "border-indigo-400 focus:border-primary"
                    : "border-transparent hover:opacity-50 hover:border-slate-200 focus:text-slate-500 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
