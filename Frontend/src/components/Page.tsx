import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Component {
  children: ReactNode
}

const Page = ({ children }: Component) => {
  return (
    <div className="flex flex-col overflow-hidden h-screen ">
      <Navbar />
      <div className="flex h-full bg-zinc-200">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Page
