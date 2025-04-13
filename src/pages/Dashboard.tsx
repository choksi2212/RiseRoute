import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowRight, Bot, Target, BookOpen, FileText, Briefcase, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import CareerCard from '../components/CareerCard';
import SkillProgress from '../components/SkillProgress';
import AIChatAssistant from '../components/AIChatAssistant';
import AnimatedCard from '../components/AnimatedCard';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // User state to make the name dynamic
  const [user] = useState({
    firstName: 'Alex',
    lastName: 'Johnson'
  });

  // Example data
  const careerSuggestions = [
    {
      title: "Data Scientist",
      description: "Use statistical methods and machine learning to analyze and interpret complex data for insights and decision making.",
      match: 92,
      skills: ["Python", "Statistics", "Machine Learning", "SQL"],
      growth: "↑ 28% growth",
      salary: "$122,000",
    },
    {
      title: "UX Designer",
      description: "Create intuitive, accessible and engaging user experiences for websites, apps, and other digital products.",
      match: 85,
      skills: ["UI Design", "User Testing", "Wireframing", "Figma"],
      growth: "↑ 18% growth",
      salary: "$94,000",
    },
    {
      title: "DevOps Engineer",
      description: "Combine development and operations skills to build, test, and maintain infrastructure and tools for software.",
      match: 78,
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      growth: "↑ 24% growth",
      salary: "$115,000",
    }
  ];

  const skills = [
    { name: "Python Programming", level: 65, category: "Technical" },
    { name: "Data Analysis", level: 72, category: "Technical" },
    { name: "Project Management", level: 58, category: "Soft Skills" },
    { name: "Communication", level: 85, category: "Soft Skills" },
  ];

  const learningResources = [
    {
      title: "Introduction to Machine Learning",
      platform: "Coursera",
      duration: "8 weeks",
      match: 95,
    },
    {
      title: "Data Visualization with Tableau",
      platform: "Udemy",
      duration: "4 weeks",
      match: 88,
    },
    {
      title: "Effective Communication Skills",
      platform: "LinkedIn Learning",
      duration: "2 weeks",
      match: 90,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.firstName}</h1>
            <p className="text-muted-foreground">Here's your career progress overview</p>
          </div>
          <Link to="/resume">
            <Button className="gap-2">
              <FileText size={16} />
              Update Resume
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <AnimatedCard className="col-span-1 md:col-span-2">
            <h2 className="text-lg font-semibold mb-3">Career Readiness</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall Profile Strength</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: <FileText size={20} />, label: "Resume Completion", value: "85%" },
                  { icon: <Target size={20} />, label: "Skills Match", value: "72%" },
                  { icon: <BookOpen size={20} />, label: "Knowledge Areas", value: "8/10" },
                  { icon: <Briefcase size={20} />, label: "Experience", value: "65%" },
                ].map((stat, index) => (
                  <Card key={index} className="bg-secondary/40">
                    <CardContent className="p-4 flex justify-between items-center">
                      <div className="flex-shrink-0 bg-white p-2 rounded-lg text-career-purple">
                        {stat.icon}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-xl font-semibold">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedCard>
          
          <AnimatedCard className="row-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-career-purple p-1.5 rounded-full text-white">
                <Sparkles size={18} />
              </div>
              <h2 className="text-lg font-semibold">This Week's Focus</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-secondary/40 rounded-lg p-4">
                <h3 className="font-medium mb-2">Complete Python Course</h3>
                <Progress value={65} className="h-2 mb-3" />
                <p className="text-sm text-muted-foreground">
                  You're making good progress! Finish the final module to increase your data analysis skills.
                </p>
                <Button size="sm" variant="outline" className="mt-3 gap-1">
                  Continue <ArrowRight size={14} />
                </Button>
              </div>
              
              <div className="bg-secondary/40 rounded-lg p-4">
                <h3 className="font-medium mb-2">Update Work Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Your resume would be stronger with more details about your internship at TechCorp.
                </p>
                <Button size="sm" variant="outline" className="mt-3 gap-1">
                  Update <ArrowRight size={14} />
                </Button>
              </div>
              
              <div className="bg-secondary/40 rounded-lg p-4">
                <h3 className="font-medium mb-2">Take Career Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  A detailed assessment will help refine your career recommendations.
                </p>
                <Button size="sm" variant="outline" className="mt-3 gap-1">
                  Start Assessment <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </AnimatedCard>
          
          <div className="col-span-1 md:col-span-2">
            <Tabs defaultValue="careers" className="w-full">
              <TabsList className="grid grid-cols-3 w-full max-w-md mb-4">
                <TabsTrigger value="careers">Career Matches</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="learning">Learning</TabsTrigger>
              </TabsList>
              
              <TabsContent value="careers" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {careerSuggestions.map((career, index) => (
                    <CareerCard
                      key={index}
                      title={career.title}
                      description={career.description}
                      match={career.match}
                      skills={career.skills}
                      growth={career.growth}
                      salary={career.salary}
                      animationDelay={index * 100}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="skills" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <SkillProgress 
                    skills={skills} 
                    title="Your Current Skills" 
                  />
                  
                  <AnimatedCard>
                    <h3 className="text-lg font-semibold mb-4">Recommended Skills to Develop</h3>
                    <div className="space-y-4">
                      {[
                        { name: "Machine Learning", importance: "High", trend: "↑ 34% increase in demand" },
                        { name: "SQL", importance: "Medium", trend: "↑ 18% increase in demand" },
                        { name: "Presentation Skills", importance: "High", trend: "Required in 72% of roles" },
                      ].map((skill, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{skill.name}</h4>
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                              {skill.importance}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 flex items-center">
                            <ArrowUp size={14} className="text-green-500 mr-1" /> 
                            {skill.trend}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AnimatedCard>
                </div>
              </TabsContent>
              
              <TabsContent value="learning" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {learningResources.map((resource, index) => (
                    <AnimatedCard key={index} animationDelay={index * 100}>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold">{resource.title}</h3>
                        <span className="text-xs px-2 py-1 bg-career-purple-light/10 rounded-full text-career-purple font-medium">
                          {resource.match}% Match
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p>Platform: <span className="font-medium">{resource.platform}</span></p>
                        <p>Duration: <span className="font-medium">{resource.duration}</span></p>
                      </div>
                      <Button size="sm" className="w-full mt-4 gap-1">
                        Explore Course <ArrowRight size={14} />
                      </Button>
                    </AnimatedCard>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <AIChatAssistant />
          </div>
          
          <AnimatedCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Career Insights</h3>
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                View All <ArrowRight size={14} />
              </Button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Remote Work Trends", description: "Remote job listings have increased by 37% in your field.", date: "3 days ago" },
                { title: "Salary Insights", description: "The average salary for Data Scientists in your area is $122,000.", date: "1 week ago" },
                { title: "Industry Growth", description: "Tech sector is projected to grow by 22% over the next 5 years.", date: "2 weeks ago" },
              ].map((insight, index) => (
                <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                  <h4 className="font-medium">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{insight.date}</p>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
