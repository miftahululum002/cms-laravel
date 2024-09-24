import Button from "./Button";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <Button
            {...props}
            className={
                `bg-primary text-white ${disabled && "opacity-25"} ` + className
            }
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
