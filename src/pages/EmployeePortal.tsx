import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Video, 
  ClipboardCheck, 
  Users, 
  Calendar,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  PlayCircle,
  FileCheck
} from "lucide-react";

const initialTasks = [
  { id: 1, title: "Complete profile setup", type: "form", completed: true, icon: ClipboardCheck, description: "Fill in your personal information" },
  { id: 2, title: "Watch welcome video", type: "video", completed: true, icon: Video, description: "5 min introduction to company culture" },
  { id: 3, title: "Review company handbook", type: "document", completed: true, icon: FileText, description: "Read our policies and guidelines" },
  { id: 4, title: "Meet with manager", type: "meeting", completed: false, icon: Users, description: "30 min 1:1 introduction call" },
  { id: 5, title: "Complete security training", type: "quiz", completed: false, icon: ClipboardCheck, description: "15 min online training module" },
  { id: 6, title: "Set up work equipment", type: "task", completed: false, icon: Briefcase, description: "Configure laptop and accounts" },
];

const resources = [
  { title: "Employee Handbook", type: "document", icon: BookOpen, url: "#" },
  { title: "Benefits Overview", type: "document", icon: FileText, url: "#" },
  { title: "Company Culture Video", type: "video", icon: PlayCircle, url: "#" },
  { title: "Team Directory", type: "link", icon: Users, url: "#" },
  { title: "IT Support Guide", type: "document", icon: FileCheck, url: "#" },
];

export default function EmployeePortal() {
  const [tasks, setTasks] = useState(initialTasks);
  
  const completedCount = tasks.filter(t => t.completed).length;
  const progress = (completedCount / tasks.length) * 100;

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6 max-w-6xl mx-auto">
        {/* Welcome Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome, John Doe</h1>
              <p className="text-muted-foreground mt-1">Software Engineer · Engineering Team</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-sm">Day 3 of Onboarding</Badge>
        </div>

        <Tabs defaultValue="onboarding" className="space-y-6">
          <TabsList>
            <TabsTrigger value="onboarding">My Onboarding</TabsTrigger>
            <TabsTrigger value="resources">Company Resources</TabsTrigger>
            <TabsTrigger value="profile">My Profile</TabsTrigger>
          </TabsList>

          {/* Onboarding Tab */}
          <TabsContent value="onboarding" className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Overall Progress</h3>
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
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <Checkbox 
                        checked={task.completed} 
                        onCheckedChange={() => toggleTask(task.id)}
                        className="mt-1"
                      />
                      <div className="flex items-start gap-3 flex-1">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                          <task.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium ${task.completed ? "line-through" : ""}`}>
                            {task.title}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs capitalize">{task.type}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {task.completed && <Badge variant="secondary">Completed</Badge>}
                        {!task.completed && (
                          <Button size="sm" onClick={() => toggleTask(task.id)}>
                            Start
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Resources</CardTitle>
                <CardDescription>
                  Everything you need to get started and stay informed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {resources.map((resource, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <resource.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{resource.title}</p>
                            <p className="text-sm text-muted-foreground capitalize">{resource.type}</p>
                          </div>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">HR Department</p>
                    <p className="text-sm text-muted-foreground">hr@company.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">IT Support</p>
                    <p className="text-sm text-muted-foreground">support@company.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Your Manager</p>
                    <p className="text-sm text-muted-foreground">Sarah Johnson · sarah.j@company.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Your profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">john.doe@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Start Date</p>
                      <p className="font-medium">January 15, 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Employment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Position</p>
                    <p className="font-medium">Software Engineer</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="font-medium">Engineering</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Employee ID</p>
                    <p className="font-medium">EMP-2025-001</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Manager</p>
                    <p className="font-medium">Sarah Johnson</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
