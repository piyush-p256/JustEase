import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

interface Payment {
  id: string
  caseId: string
  amount: number
  date: string
  status: "Completed" | "Pending" | "Failed"
}

const payments: Payment[] = [
  { id: "INV001", caseId: "CASE001", amount: 5000, date: "2023-05-15", status: "Completed" },
  { id: "INV002", caseId: "CASE002", amount: 7500, date: "2023-05-16", status: "Pending" },
  { id: "INV003", caseId: "CASE003", amount: 3000, date: "2023-05-17", status: "Completed" },
  { id: "INV004", caseId: "CASE004", amount: 10000, date: "2023-05-18", status: "Failed" },
  { id: "INV005", caseId: "CASE005", amount: 2500, date: "2023-05-19", status: "Completed" },
]

export default function PaymentsPage() {
  const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Payments</h1>

      <Card className="bg-[#232a4a] border-none text-white mb-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Total from all payments</p>
        </CardContent>
      </Card>

      <div className="rounded-md border border-gray-700">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-[#2a325a]">
              <TableHead className="text-gray-400">Payment ID</TableHead>
              <TableHead className="text-gray-400">Case ID</TableHead>
              <TableHead className="text-gray-400">Amount</TableHead>
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id} className="border-gray-700 hover:bg-[#2a325a]">
                <TableCell className="font-medium text-gray-300">{payment.id}</TableCell>
                <TableCell className="text-gray-300">{payment.caseId}</TableCell>
                <TableCell className="text-gray-300">₹{payment.amount.toLocaleString()}</TableCell>
                <TableCell className="text-gray-300">{payment.date}</TableCell>
                <TableCell className="text-gray-300">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      payment.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : payment.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {payment.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

