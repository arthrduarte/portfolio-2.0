interface NavbarProps {
    navItems: string[]
}

export default function Navbar({ navItems }: NavbarProps) {
    return (
        <div>
            <ul className="mt-12 hidden lg:flex lg:flex-row lg: lg:items-center lg:justify-around lg:bg-[#FF4D5A] lg:rounded-full lg:p-0">
                {navItems.map(i => (
                    <li className="px-[1.2rem] py-[1rem] rounded-full hover:bg-[#FF737D] font-[600] text-white"><a href={`#${i}`}>{i}</a></li>
                ))}
            </ul>
        </div>
    )
}