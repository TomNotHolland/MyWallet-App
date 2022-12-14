import { ReactNode } from "react";

interface PageChildren {
  children: ReactNode
}

export default function PageWrapper ({ children }: PageChildren) {
  return (
    <div className="w-full h-full select-none">
      {children}
    </div>
  )
}