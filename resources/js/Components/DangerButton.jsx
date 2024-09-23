import Button from "./Button";

export default function DangerButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <Button
            {...props}
            className={`bg-red-600 ${disabled && "opacity-25"} ` + className}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
