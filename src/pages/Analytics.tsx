import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react";

const metrics = [
  { title: "Total Employees", value: "156", change: "+12 this month", icon: Users },
  { title: "Active Onboardings", value: "24", change: "+5 this week", icon: TrendingUp },
  { title: "Avg. Time to Complete", value: "4.2 days", change: "0.3 days faster", icon: Clock },
  { title: "Completion Rate", value: "94%", change: "+2% from last month", icon: CheckCircle },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Track performance and insights across your onboarding program
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {metric.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Onboarding Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart visualization will go here
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
