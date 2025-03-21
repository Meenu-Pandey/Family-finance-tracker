import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Plus, Mail } from "lucide-react"

export default function FamilyMembersPage() {
  // Sample family members data
  const members = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active", lastActive: "Today" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Super User",
      status: "Active",
      lastActive: "Yesterday",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "User",
      status: "Active",
      lastActive: "3 days ago",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "User",
      status: "Inactive",
      lastActive: "1 week ago",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Family Members</h1>
        <p className="text-muted-foreground">Manage your family members and their access.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search members..." className="w-full pl-8" />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {members.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="outline" className="bg-primary text-primary-foreground">
                        {member.role}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={member.status === "Active" ? "bg-green-500 text-white" : "bg-gray-500 text-white"}
                      >
                        {member.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Last active: {member.lastActive}</div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Message
                </Button>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    Edit Role
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

