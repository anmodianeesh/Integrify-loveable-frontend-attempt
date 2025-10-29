import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const employees = [
  { id: 1, name: "Sarah Chen", role: "Software Engineer", department: "Engineering", status: "active", progress: 95 },
  { id: 2, name: "Mike Rodriguez", role: "Product Manager", department: "Product", status: "active", progress: 60 },
  { id: 3, name: "Emma Watson", role: "Designer", department: "Design", status: "active", progress: 80 },
  { id: 4, name: "James Smith", role: "Sales Rep", department: "Sales", status: "pending", progress: 25 },
  { id: 5, name: "Lisa Anderson", role: "Marketing Manager", department: "Marketing", status: "active", progress: 100 },
  { id: 6, name: "David Kim", role: "DevOps Engineer", department: "Engineering", status: "active", progress: 70 }
];

export default function Employees() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Employees</h1>
            <p className="text-muted-foreground mt-1">
              Manage your team and track onboarding progress
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search employees..."
              className="pl-9"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {employees.map((employee) => (
            <Link key={employee.id} to={`/dashboard/employees/${employee.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">{employee.role} • {employee.department}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{employee.progress}%</p>
                        <p className="text-xs text-muted-foreground">Progress</p>
                      </div>
                      <Badge variant={employee.status === "active" ? "default" : "secondary"}>
                        {employee.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
