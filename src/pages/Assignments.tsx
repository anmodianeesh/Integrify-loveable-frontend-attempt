import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const assignments = [
  { id: 1, employee: "Sarah Chen", flow: "Engineering Onboarding", progress: 95, startDate: "Jan 15", status: "on-track" },
  { id: 2, employee: "Mike Rodriguez", flow: "Product Manager Onboarding", progress: 60, startDate: "Jan 18", status: "on-track" },
  { id: 3, employee: "Emma Watson", flow: "Design Onboarding", progress: 80, startDate: "Jan 12", status: "on-track" },
  { id: 4, employee: "James Smith", flow: "Sales Rep Onboarding", progress: 25, startDate: "Jan 20", status: "delayed" },
];

export default function Assignments() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Active Assignments</h1>
          <p className="text-muted-foreground mt-1">
            Track ongoing onboarding progress across your team
          </p>
        </div>

        <div className="space-y-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {assignment.employee.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold">{assignment.employee}</h3>
                        <p className="text-sm text-muted-foreground">{assignment.flow}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{assignment.progress}%</p>
                        <p className="text-xs text-muted-foreground">Started {assignment.startDate}</p>
                      </div>
                      <Badge variant={assignment.status === "on-track" ? "default" : "destructive"}>
                        {assignment.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={assignment.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
