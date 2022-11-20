import { ReactNode } from "react";
import Footer from "./Footer";

interface Component {
  children: ReactNode
}

const Page = ({ children }: Component) => {
  return (
    <div className="flex flex-col overflow-hidden h-screen bg-slate-500">
      {children}
      <div className="flex h-full text-white bg-zinc-800">
        <span className="text-4xl m-5">Content</span>
      </div>
      <Footer />
    </div>
  )
}

export default Page
