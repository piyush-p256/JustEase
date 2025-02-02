import type React from "react"
import { Sidebar } from "./sidebar"
import { TopNav } from "./top-nav"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1a1f37]">
      <Sidebar />
      <div className="pl-64">
        <TopNav />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  )
}

