interface NavbarProps {
    navItems: string[]
}

export default function Navbar({ navItems }: NavbarProps) {
    return (
        <div className="flex space-x-10">
            {navItems.map(i => (
                <p>{i}</p>
            ))}
        </div>
    )
}