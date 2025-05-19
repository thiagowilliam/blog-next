import { Footer } from "../footer"
import { Header } from "../header"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({children}:LayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen dark">
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  )
}