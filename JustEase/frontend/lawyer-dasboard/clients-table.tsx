import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Client {
  id: string
  name: string
  email: string
  phoneNumber: string
  state: string
  occupation: string
  role: string
}

const clients: Client[] = [
  {
    id: "63701ccf1023239c72c000180",
    name: "Deepanshu",
    email: "mdoniont@hostgator.com",
    phoneNumber: "(998)190-6117",
    state: "MP",
    occupation: "Food Chemist",
    role: "user",
  },
  {
    id: "63701ccf1023239c72c000188",
    name: "Rachit",
    email: "fleiwesley5@liveinternet.ru",
    phoneNumber: "(240)147-8620",
    state: "CN",
    occupation: "Administrative Assistant III",
    role: "user",
  },
  {
    id: "63701ccf102323d81ee000012",
    name: "AJ",
    email: "aguare20@shinystat.com",
    phoneNumber: "(724)554-3213",
    state: "ID",
    occupation: "Librarian",
    role: "user",
  },
  {
    id: "63701ccf1023235b53000123",
    name: "Marley",
    email: "mbottomer2@netlog.com",
    phoneNumber: "(672)414-4982",
    state: "CN",
    occupation: "GIS Technical Architect",
    role: "user",
  },
  {
    id: "63701ccf1023235b53000126",
    name: "Nanine",
    email: "ncockshot21@aol.com",
    phoneNumber: "(613)753-6796",
    state: "PS",
    occupation: "Legal Assistant",
    role: "user",
  },
  {
    id: "63701ccf102323d59100031c",
    name: "Rickert",
    email: "rlgptn31@photobucket.com",
    phoneNumber: "(104)133-3724",
    state: "RU",
    occupation: "Research Nurse",
    role: "user",
  },
  {
    id: "63701ccf102323d591000326",
    name: "Steward",
    email: "swoolford3b@blogspot.com",
    phoneNumber: "(707)285-6822",
    state: "GB",
    occupation: "Sales Associate",
    role: "user",
  },
  {
    id: "63701ccf102323bef0000126",
    name: "Kalina",
    email: "kfhomme4h@who.int",
    phoneNumber: "(848)936-6779",
    state: "ID",
    occupation: "Senior Developer",
    role: "user",
  },
]

export default function ClientsTable() {
  return (
    <div className="min-h-screen bg-[#1a1f37] p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">CLIENTS</h1>
        <p className="text-gray-400">List of Clients</p>
      </div>

      <div className="rounded-lg border border-gray-700 bg-[#232a4a]">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-[#2a325a]">
              <TableHead className="text-gray-400">ID</TableHead>
              <TableHead className="text-gray-400">Name</TableHead>
              <TableHead className="text-gray-400">Email</TableHead>
              <TableHead className="text-gray-400">Phone Number</TableHead>
              <TableHead className="text-gray-400">State</TableHead>
              <TableHead className="text-gray-400">Occupation</TableHead>
              <TableHead className="text-gray-400">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id} className="border-gray-700 hover:bg-[#2a325a]">
                <TableCell className="text-sm text-gray-300">{client.id}</TableCell>
                <TableCell className="text-sm text-gray-300">{client.name}</TableCell>
                <TableCell className="text-sm text-gray-300">{client.email}</TableCell>
                <TableCell className="text-sm text-gray-300">{client.phoneNumber}</TableCell>
                <TableCell className="text-sm text-gray-300">{client.state}</TableCell>
                <TableCell className="text-sm text-gray-300">{client.occupation}</TableCell>
                <TableCell className="text-sm text-gray-300">{client.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-end gap-4 p-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Rows per page:</span>
            <Select defaultValue="100">
              <SelectTrigger className="w-16 bg-transparent border-gray-700 text-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="200">200</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-gray-400">1-100 of 102</div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

