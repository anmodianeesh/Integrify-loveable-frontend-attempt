import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function EmployeeProfile() {
  const { id } = useParams();

  const employee = {
    name: "Sarah Chen",
    role: "Software Engineer",
    department: "Engineering",
    email: "sarah.chen@company.com",
    startDate: "Jan 15, 2024",
    status: "active",
    progress: 95
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <Link to="/dashboard/employees">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Employees
          </Button>
        </Link>

        <div className="flex items-start gap-6">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-2xl">
            {employee.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-foreground">{employee.name}</h1>
              <Badge>{employee.status}</Badge>
            </div>
            <p className="text-muted-foreground mt-1">{employee.role} • {employee.department}</p>
            <p className="text-sm text-muted-foreground mt-2">{employee.email}</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Position History</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Employee Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Start Date</span>
                    <span className="font-medium">{employee.startDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Department</span>
                    <span className="font-medium">{employee.department}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Position</span>
                    <span className="font-medium">{employee.role}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Onboarding Progress</span>
                    <span className="font-medium">{employee.progress}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Completed Equipment Setup</p>
                      <p className="text-muted-foreground text-xs">2 days ago</p>
                    </div>
                    <div>
                      <p className="font-medium">Attended First Team Meeting</p>
                      <p className="text-muted-foreground text-xs">3 days ago</p>
                    </div>
                    <div>
                      <p className="font-medium">Submitted Required Documents</p>
                      <p className="text-muted-foreground text-xs">5 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Position History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-medium">{employee.role}</p>
                    <p className="text-sm text-muted-foreground">{employee.department}</p>
                    <p className="text-xs text-muted-foreground mt-1">{employee.startDate} - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roles">
            <Card>
              <CardHeader>
                <CardTitle>Roles & Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge>Employee</Badge>
                  <Badge variant="secondary">Team Member</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
