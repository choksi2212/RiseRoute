
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCog, Briefcase, GraduationCap, Plus, Trash2, Edit2, Save } from 'lucide-react';
import Navigation from '../components/Navigation';
import AnimatedCard from '../components/AnimatedCard';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <AnimatedCard>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-semibold mb-1">Alex Johnson</h1>
                <p className="text-sm text-muted-foreground mb-4">Data Analyst & Web Developer</p>
                <Button variant="outline" className="w-full gap-1 mb-3">
                  <Edit2 size={14} />
                  Edit Profile
                </Button>
                
                <div className="w-full space-y-4 mt-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Profile Strength</h3>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-career-purple h-full rounded-full" style={{ width: "78%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">78% Complete</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Location</h3>
                    <p className="text-sm">San Francisco, CA</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Email</h3>
                    <p className="text-sm break-all">alex.johnson@example.com</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid grid-cols-3 w-full max-w-md mb-4">
                <TabsTrigger value="personal">
                  <UserCog className="h-4 w-4 mr-2" />
                  Personal
                </TabsTrigger>
                <TabsTrigger value="education">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Education
                </TabsTrigger>
                <TabsTrigger value="experience">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Experience
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <AnimatedCard>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Alex" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Johnson" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="alex.johnson@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="San Francisco, CA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website/Portfolio</Label>
                        <Input id="website" type="url" defaultValue="https://alexjohnson.dev" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Summary</Label>
                      <Textarea
                        id="bio"
                        placeholder="Describe your professional background, current role, and career aspirations..."
                        defaultValue="Data analyst with 3+ years of experience specializing in business intelligence and web development. Passionate about leveraging data to drive business decisions with a focus on creating interactive data visualizations."
                        rows={4}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Skills</Label>
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {["Data Analysis", "Python", "SQL", "Tableau", "JavaScript", "React", "Excel", "Business Intelligence"].map((skill, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center gap-1 pl-3 pr-2">
                              {skill}
                              <button type="button" className="ml-1 rounded-full hover:bg-secondary/80 p-1">
                                <Trash2 size={12} />
                              </button>
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="Add a new skill..." className="flex-1" />
                          <Button type="button" size="icon" variant="outline">
                            <Plus size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="button" className="gap-2">
                        <Save size={16} />
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </AnimatedCard>
              </TabsContent>
              
              <TabsContent value="education">
                <AnimatedCard>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-5 relative">
                      <div className="absolute right-4 top-4 flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Edit2 size={16} />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-destructive">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                      <h3 className="text-lg font-semibold">University of California, Berkeley</h3>
                      <p className="text-sm text-muted-foreground mb-3">Bachelor of Science, Data Science — 2018 to 2022</p>
                      <div className="text-sm space-y-2">
                        <p>GPA: 3.8/4.0</p>
                        <div>
                          <p className="font-medium">Relevant Coursework:</p>
                          <p>Machine Learning, Database Systems, Data Visualization, Statistical Methods</p>
                        </div>
                        <div>
                          <p className="font-medium">Activities:</p>
                          <p>Data Science Student Association, Hackathon Organizer</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-5 relative">
                      <div className="absolute right-4 top-4 flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Edit2 size={16} />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-destructive">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                      <h3 className="text-lg font-semibold">San Francisco City College</h3>
                      <p className="text-sm text-muted-foreground mb-3">Associate's Degree, Computer Science — 2016 to 2018</p>
                      <div className="text-sm space-y-2">
                        <p>GPA: 3.6/4.0</p>
                        <div>
                          <p className="font-medium">Relevant Coursework:</p>
                          <p>Programming Fundamentals, Web Development, Data Structures</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full gap-2">
                      <Plus size={16} />
                      Add Education
                    </Button>
                  </div>
                </AnimatedCard>
              </TabsContent>
              
              <TabsContent value="experience">
                <AnimatedCard>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-5 relative">
                      <div className="absolute right-4 top-4 flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Edit2 size={16} />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-destructive">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                      <h3 className="text-lg font-semibold">Data Analyst</h3>
                      <p className="text-sm font-medium text-career-purple">TechVision Inc.</p>
                      <p className="text-sm text-muted-foreground mb-3">Jun 2022 - Present • San Francisco, CA</p>
                      <div className="text-sm space-y-2">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Analyze business data to identify trends and opportunities, resulting in 15% increased efficiency</li>
                          <li>Create interactive dashboards using Tableau for executive decision-making</li>
                          <li>Implement ETL processes for data warehousing and reporting automation</li>
                          <li>Collaborate with product teams to develop data-driven product features</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">SQL</Badge>
                          <Badge variant="outline">Python</Badge>
                          <Badge variant="outline">Tableau</Badge>
                          <Badge variant="outline">ETL</Badge>
                          <Badge variant="outline">Data Visualization</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-5 relative">
                      <div className="absolute right-4 top-4 flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Edit2 size={16} />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-destructive">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                      <h3 className="text-lg font-semibold">Data Science Intern</h3>
                      <p className="text-sm font-medium text-career-purple">InnovateTech</p>
                      <p className="text-sm text-muted-foreground mb-3">May 2021 - Aug 2021 • San Francisco, CA</p>
                      <div className="text-sm space-y-2">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Assisted in building machine learning models for customer segmentation</li>
                          <li>Performed data cleaning and preprocessing of customer datasets</li>
                          <li>Created reports and presentations for stakeholders</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">Python</Badge>
                          <Badge variant="outline">scikit-learn</Badge>
                          <Badge variant="outline">Pandas</Badge>
                          <Badge variant="outline">Data Analysis</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full gap-2">
                      <Plus size={16} />
                      Add Experience
                    </Button>
                  </div>
                </AnimatedCard>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
