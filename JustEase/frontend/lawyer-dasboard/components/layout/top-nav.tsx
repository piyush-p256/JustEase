import { Input } from "@/components/ui/input"
import { Moon, Settings, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopNav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#232a4a] border-b border-gray-800">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input type="search" placeholder="Search..." className="w-64 pl-10 bg-[#1a1f37] border-none text-white" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Moon className="h-5 w-5 text-gray-400" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-gray-400" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-600" />
          <div>
            <div className="text-sm font-medium text-white">Devansh</div>
            <div className="text-xs text-gray-400">Lawyer</div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </nav>
  )
}

