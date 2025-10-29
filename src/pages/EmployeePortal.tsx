import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Video, ClipboardCheck, Users } from "lucide-react";

const tasks = [
  { id: 1, title: "Complete profile setup", type: "form", completed: true, icon: ClipboardCheck },
  { id: 2, title: "Watch welcome video", type: "video", completed: true, icon: Video },
  { id: 3, title: "Review company handbook", type: "document", completed: true, icon: FileText },
  { id: 4, title: "Meet with manager", type: "meeting", completed: false, icon: Users },
  { id: 5, title: "Complete security training", type: "quiz", completed: false, icon: ClipboardCheck },
];

export default function EmployeePortal() {
  const completedCount = tasks.filter(t => t.completed).length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Onboarding</h1>
          <p className="text-muted-foreground mt-1">
            Complete your tasks to finish onboarding
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Overall Progress</h3>
                <p className="text-sm text-muted-foreground">
                  {completedCount} of {tasks.length} tasks completed
                </p>
              </div>
              <Badge className="text-lg px-4 py-2">{Math.round(progress)}%</Badge>
            </div>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        <div className="space-y-3">
          {tasks.map((task) => (
            <Card key={task.id} className={task.completed ? "opacity-60" : ""}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Checkbox checked={task.completed} />
                  <div className="flex items-center gap-3 flex-1">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <task.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${task.completed ? "line-through" : ""}`}>
                        {task.title}
                      </p>
                      <p className="text-sm text-muted-foreground capitalize">{task.type}</p>
                    </div>
                  </div>
                  {task.completed && <Badge variant="secondary">Completed</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
