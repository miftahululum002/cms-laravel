import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function Select(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <>
            <input
                {...props}
                type={type}
                className={
                    "border-gray-300 focus:border-primary focus:ring-indigo-500 rounded-none shadow-sm " +
                    className
                }
                ref={input}
            />
        </>
    );
});
