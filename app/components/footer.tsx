const footerItems = [
    { name: "2004vmtom@gmail.com"},
    { name: "(734) 881-4109"},
    { name: "LinkedIn", href: "https://www.linkedin.com/in/duc-vu-985195250/" },
]

export default function Footer() {
    return (
        <footer>
            <h3>
                Contacts:
            </h3>
            <ul className="footerItems">
                {footerItems.map((item) => (
                    <li key={item.name}>
                        {item.href ? (
                            <a href={item.href}>{item.name}</a>
                        ) : (
                            item.name
                        )}
                    </li>
                ))}
            </ul>
        </footer>
    )
}