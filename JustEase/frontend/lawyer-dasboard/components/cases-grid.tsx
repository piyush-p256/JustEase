import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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

export function CasesGrid() {
  return (
    <div className="p-6">
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
    </div>
  )
}

