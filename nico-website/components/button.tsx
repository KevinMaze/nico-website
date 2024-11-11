import NextLink from "next/link";
import { title } from "@/font/font";
import './button.css'
import { button } from "@nextui-org/theme";

type ButtonProps = {
    label: string;
    href?: string;
    onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({label, href, onClick}) => {
    if (href) {
        return (
            <div className= {title.className}>
                <div className="container">
                    <NextLink href={href} passHref className="btn">{label}</NextLink>
                </div>
            </div>
        );
    }

    return (
        <button onClick={onClick} className="btn">
            {label}
        </button>
    );
}