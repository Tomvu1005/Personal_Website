const footerItems = [
    { name: "2004vmtom@gmail.com"},
    { name: "(734) 881-4109"},
]

export default function Footer() {
    return (
        <footer>
            <ul>
                {footerItems.map((item) => (
                    <li key={item.name}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </footer>
    )
}