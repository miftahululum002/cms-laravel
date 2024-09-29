import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? "border-primary text-primary bg-indigo-50 focus:text-indigo-800 focus:bg-primary focus:border-primary"
                    : "border-transparent text-gray-600 hover:text-primary hover:bg-gray-50 hover:border-primary focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
