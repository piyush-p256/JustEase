"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, FileText, CreditCard, Globe, Calendar, CheckSquare, Settings, UserCircle } from "lucide-react"

const sidebarLinks = [
  { title: "Dashboard", icon: Home, href: "/dashboard" },
  { title: "Cases", icon: FileText, href: "/cases" },
  { title: "Clients", icon: Users, href: "/clients" },
  { title: "Payments", icon: CreditCard, href: "/payments" },
  { title: "Calendar", icon: Calendar, href: "/calendar" },
  { title: "To-Do List", icon: CheckSquare, href: "/todo" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#1a1f37] border-r border-gray-800">
      <div className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-xl font-bold text-white">
          <span>LAWYER</span>
        </Link>
      </div>

      <nav className="mt-8 px-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg mb-1 transition-colors
                ${isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-[#232a4a]"}`}
            >
              <Icon className="h-5 w-5" />
              {link.title}
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-8 left-0 right-0 px-4">
        <div className="flex items-center gap-3 p-4 rounded-lg bg-[#232a4a]">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div>
            <div className="text-sm font-medium text-white">Devansh</div>
            <div className="text-xs text-gray-400">Lawyer</div>
          </div>
          <Settings className="ml-auto h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}

