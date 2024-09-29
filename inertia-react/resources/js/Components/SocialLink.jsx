export default function SocialLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <a
            {...props}
            className={
                "w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" +
                (active
                    ? "border-indigo-400 text-gray-200 focus:border-slate-200"
                    : "border-transparent text-gray-500 hover:text-slate-200 hover:border-slate-200 focus:text-slate-500 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </a>
    );
}
