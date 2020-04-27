export interface ColorProps {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    dark: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
    };
}

const colors: ColorProps = {
    primary: "#28D6D6",
    secondary: "#7673F6",
    error: "#FF6857",
    warning: "#F7BA15",
    info: "#8581D9",
    success: "#038A63",
    dark: {
        alpha: "#000C36",
        beta: "#48506A",
        gamma: "#858CA3",
        delta: "#D5D9E8"
    }
}

export default colors