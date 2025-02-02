import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Moon, Settings, ChevronDown } from "lucide-react"

interface Case {
  type: string
  client: string
  section: string
  description: string
}

const cases: Case[] = [
  {
    type: "Criminal",
    client: "Pulkit",
    section: "IPC SECTION 300",
    description: "Revision of Nonaut Sub in Low Bursa/Lig, Open Approach",
  },
  {
    type: "Theft",
    client: "Priyanshu",
    section: "IPC SECTION 379",
    description: "Drainage of Urethra with Drainage Device, Endo",
  },
  {
    type: "criminal",
    client: "Hardik",
    section: "IPC SECTION 300",
    description: "Replace of R Up Arm Tendon with Nonaut Sub, Open Approach",
  },
  {
    type: "Rape",
    client: "Vihaan",
    section: "IPC SECTION 376",
    description: "Occlusion of Right Axillary Vein, Perc Endo Approach",
  },
]

export default function CasesGrid() {
  return (
    <div className="min-h-screen bg-[#1a1f37]">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between p-4 bg-[#232a4a]">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">LAWYER</span>
          <div className="relative ml-8">
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
            <div className="w-8 h-8 rounded-full bg-white/10" />
            <div className="text-white">
              <div className="text-sm font-medium">Devansh</div>
              <div className="text-xs text-gray-400">Lawyer</div>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">CASES</h1>
          <p className="text-gray-400">See your list of cases.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((caseItem, index) => (
            <Card key={index} className="bg-[#232a4a] border-none text-white">
              <CardHeader>
                <div className="text-sm text-orange-400 uppercase">{caseItem.type}</div>
                <CardTitle className="text-lg">{caseItem.client}</CardTitle>
                <div className="text-sm text-gray-400">{caseItem.section}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">{caseItem.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                  SEE MORE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

