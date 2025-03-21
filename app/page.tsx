import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, CreditCard, DollarSign, Target, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Unified Family Finance Tracker</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manage your family's finances together in one place. Track expenses, set budgets, and achieve savings goals
            as a team.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/login">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/register">Create Account</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Expense Tracking</CardTitle>
              <CardDescription>
                Track all your family expenses in one place with detailed categorization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Easily log expenses, upload receipts, and see where your money is going with intuitive visualizations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Budget Management</CardTitle>
              <CardDescription>Set and monitor budgets for different expense categories.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create personalized budgets, get alerts when approaching limits, and adjust as needed.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Savings Goals</CardTitle>
              <CardDescription>Set financial goals and track progress as a family.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create shared savings goals, track contributions from each family member, and celebrate achievements
                together.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>Gain insights into your family's financial health.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visualize spending patterns, track budget performance, and identify areas for improvement with detailed
                reports and charts.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/visualizations">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Family Collaboration</CardTitle>
              <CardDescription>Work together as a family to manage finances.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Assign roles, set permissions, and collaborate on financial decisions. Keep everyone informed and
                involved in your family's financial journey.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/family/members">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to take control of your family finances?</h2>
          <Button size="lg" asChild>
            <Link href="/register">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

