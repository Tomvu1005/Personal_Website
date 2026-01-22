import Link from "next/link"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
]

const externalLinks = [
    { name: "Github", href: "https://github.com/Tomvu1005" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/duc-vu-985195250/" },
]

export default function Navbar() {
    return (
        <nav>
            <ul className="navItems">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <ul className="externalLinks">
                {externalLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}