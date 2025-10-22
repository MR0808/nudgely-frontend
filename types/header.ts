export interface ChildProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navItems: { name: string; href: string }[];
    pageLinks: { name: string; href: string }[];
}
