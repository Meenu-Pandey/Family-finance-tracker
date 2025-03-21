import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Plus, AlertTriangle } from "lucide-react"

export default function BudgetsPage() {
  // Sample budget data
  const budgets = [
    { id: 1, category: "Groceries", budgeted: 500, spent: 350, percentage: 70 },
    { id: 2, category: "Utilities", budgeted: 300, spent: 285, percentage: 95 },
    { id: 3, category: "Entertainment", budgeted: 200, spent: 120, percentage: 60 },
    { id: 4, category: "Transportation", budgeted: 250, spent: 180, percentage: 72 },
    { id: 5, category: "Dining Out", budgeted: 300, spent: 310, percentage: 103 },
    { id: 6, category: "Shopping", budgeted: 400, spent: 250, percentage: 63 },
    { id: 7, category: "Healthcare", budgeted: 150, spent: 45, percentage: 30 },
    { id: 8, category: "Education", budgeted: 200, spent: 150, percentage: 75 },
  ]

  // Function to determine progress color based on percentage
  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return "bg-destructive"
    if (percentage >= 80) return "bg-warning"
    return "bg-primary"
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Budget Management</h1>
        <p className="text-muted-foreground">Set and track budgets for different expense categories.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-sm">On Track</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-warning" />
            <span className="text-sm">Approaching Limit</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <span className="text-sm">Over Budget</span>
          </div>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Set New Budget
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {budgets.map((budget) => (
          <Card key={budget.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{budget.category}</CardTitle>
                {budget.percentage >= 100 && <AlertTriangle className="h-4 w-4 text-destructive" />}
              </div>
              <CardDescription>
                ${budget.spent.toFixed(2)} of ${budget.budgeted.toFixed(2)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={budget.percentage} max={100} className={`h-2 ${getProgressColor(budget.percentage)}`} />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>{budget.percentage}% used</span>
                <span>${(budget.budgeted - budget.spent).toFixed(2)} remaining</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

