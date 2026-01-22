import "@/styles/components/navbar.css"
import "@/styles/globals.css"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
