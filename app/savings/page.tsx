import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Plus, Users, Calendar, DollarSign } from "lucide-react"

export default function SavingsPage() {
  // Sample savings goals data
  const savingsGoals = [
    {
      id: 1,
      name: "Vacation Fund",
      target: 5000,
      current: 3500,
      percentage: 70,
      deadline: "2023-12-31",
      contributors: 4,
    },
    {
      id: 2,
      name: "Emergency Fund",
      target: 10000,
      current: 7500,
      percentage: 75,
      deadline: "2023-09-30",
      contributors: 2,
    },
    {
      id: 3,
      name: "New Car",
      target: 20000,
      current: 5000,
      percentage: 25,
      deadline: "2024-06-30",
      contributors: 3,
    },
    {
      id: 4,
      name: "Home Down Payment",
      target: 50000,
      current: 15000,
      percentage: 30,
      deadline: "2025-01-15",
      contributors: 2,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Savings Goals</h1>
        <p className="text-muted-foreground">Track progress towards your family's financial goals.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Showing {savingsGoals.length} active savings goals</div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Goal
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {savingsGoals.map((goal) => (
          <Card key={goal.id}>
            <CardHeader>
              <CardTitle>{goal.name}</CardTitle>
              <CardDescription>
                ${goal.current.toFixed(2)} of ${goal.target.toFixed(2)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={goal.percentage} max={100} className="h-2" />
              <div className="text-sm text-muted-foreground">{goal.percentage}% complete</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                  <Calendar className="mb-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Deadline</span>
                  <span className="text-sm font-medium">{new Date(goal.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                  <Users className="mb-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Contributors</span>
                  <span className="text-sm font-medium">{goal.contributors}</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                  <DollarSign className="mb-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Remaining</span>
                  <span className="text-sm font-medium">${(goal.target - goal.current).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View Details</Button>
              <Button>Add Contribution</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

