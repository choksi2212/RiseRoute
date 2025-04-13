
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, ArrowRight, CheckCircle, Circle, BarChart3, Book, Goal, Zap } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import SkillProgress from '../components/SkillProgress';

const Skills: React.FC = () => {
  // User state to make content dynamic
  const [user] = useState({
    firstName: 'Alex',
    lastName: 'Johnson'
  });

  // Technical skills data
  const technicalSkills = [
    { name: "Python Programming", level: 65, category: "Technical" },
    { name: "Data Analysis", level: 72, category: "Technical" },
    { name: "SQL", level: 58, category: "Technical" },
    { name: "JavaScript", level: 45, category: "Technical" },
    { name: "Data Visualization", level: 60, category: "Technical" },
  ];
  
  // Soft skills data
  const softSkills = [
    { name: "Communication", level: 85, category: "Soft Skills" },
    { name: "Project Management", level: 58, category: "Soft Skills" },
    { name: "Problem Solving", level: 75, category: "Soft Skills" },
    { name: "Teamwork", level: 82, category: "Soft Skills" },
  ];
  
  // Learning paths data
  const learningPaths = [
    {
      title: "Data Science Mastery",
      progress: 45,
      courses: [
        { name: "Python for Data Analysis", completed: true },
        { name: "SQL for Data Scientists", completed: true },
        { name: "Machine Learning Fundamentals", completed: false },
        { name: "Advanced Statistical Methods", completed: false },
      ]
    },
    {
      title: "Business Intelligence",
      progress: 20,
      courses: [
        { name: "Tableau Fundamentals", completed: true },
        { name: "Dashboard Design Principles", completed: false },
        { name: "Business Analytics", completed: false },
        { name: "Data Storytelling", completed: false },
      ]
    },
  ];
  
  // Recommended courses
  const recommendedCourses = [
    {
      title: "Applied Machine Learning",
      platform: "Coursera",
      duration: "6 weeks",
      level: "Intermediate",
      match: 94,
      skills: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      title: "Advanced SQL for Data Analysis",
      platform: "Udemy",
      duration: "4 weeks",
      level: "Intermediate",
      match: 91,
      skills: ["SQL", "Database Design", "Data Modeling"]
    },
    {
      title: "Effective Data Visualization",
      platform: "DataCamp",
      duration: "3 weeks",
      level: "All Levels",
      match: 87,
      skills: ["Tableau", "Data Visualization", "Storytelling"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Skills Development</h1>
          <p className="text-muted-foreground">Track your progress and find learning opportunities</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <AnimatedCard className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Skill Assessment</h2>
                <Button variant="outline" size="sm">Update Skills</Button>
              </div>
              
              <Tabs defaultValue="technical">
                <TabsList className="mb-4">
                  <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                </TabsList>
                
                <TabsContent value="technical">
                  <SkillProgress skills={technicalSkills} title="Your Technical Skills" />
                </TabsContent>
                
                <TabsContent value="soft">
                  <SkillProgress skills={softSkills} title="Your Soft Skills" />
                </TabsContent>
              </Tabs>
            </AnimatedCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard>
                <h2 className="text-lg font-semibold mb-4">Skill Gap Analysis</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on your target role as a Data Scientist, here are the top skills you should develop.
                </p>
                <div className="space-y-4">
                  {[
                    { name: "Machine Learning", current: 35, required: 70 },
                    { name: "Statistical Analysis", current: 45, required: 75 },
                    { name: "Data Modeling", current: 30, required: 65 },
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.current}% / {skill.required}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full mt-1">
                        <div 
                          className="h-full bg-career-purple rounded-full" 
                          style={{ width: `${skill.current}%` }}
                        ></div>
                        <div 
                          className="h-full border-r-2 border-dashed border-red-400 relative top-[-8px]" 
                          style={{ width: `${skill.required}%`, marginLeft: "-2px" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 gap-2">
                  View Detailed Analysis
                  <ArrowRight size={14} />
                </Button>
              </AnimatedCard>
              
              <AnimatedCard>
                <h2 className="text-lg font-semibold mb-4">Career Skill Benchmarks</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  How your skills compare to industry standards for your target roles.
                </p>
                <div className="space-y-4">
                  {[
                    { role: "Data Analyst", match: 82, skills: ["SQL", "Excel", "Tableau"] },
                    { role: "Data Scientist", match: 65, skills: ["Python", "ML", "Statistics"] },
                    { role: "Business Analyst", match: 78, skills: ["SQL", "Requirements", "Process"] }
                  ].map((benchmark, i) => (
                    <div key={i} className="p-3 rounded-lg border border-border">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{benchmark.role}</h3>
                        <Badge variant={benchmark.match > 75 ? "default" : "secondary"}>
                          {benchmark.match}% Match
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {benchmark.skills.map((skill, j) => (
                          <span key={j} className="text-xs bg-secondary/60 rounded-full px-2 py-0.5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </div>
          
          <div>
            <AnimatedCard className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-career-purple p-1.5 rounded-full text-white">
                  <Goal size={16} />
                </div>
                <h2 className="text-lg font-semibold">Learning Paths</h2>
              </div>
              
              <div className="space-y-5">
                {learningPaths.map((path, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{path.title}</h3>
                      <span className="text-sm">{path.progress}% Complete</span>
                    </div>
                    <Progress value={path.progress} className="h-2 mb-3" />
                    <div className="space-y-2 text-sm">
                      {path.courses.map((course, j) => (
                        <div key={j} className="flex items-center gap-2">
                          {course.completed ? (
                            <CheckCircle size={14} className="text-green-500" />
                          ) : (
                            <Circle size={14} className="text-muted-foreground" />
                          )}
                          <span className={course.completed ? "" : "text-muted-foreground"}>
                            {course.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3 gap-1">
                      Continue Learning
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            </AnimatedCard>
            
            <AnimatedCard>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-career-purple p-1.5 rounded-full text-white">
                  <Zap size={16} />
                </div>
                <h2 className="text-lg font-semibold">Recommended Courses</h2>
              </div>
              
              <div className="space-y-4">
                {recommendedCourses.map((course, i) => (
                  <div key={i} className="border rounded-lg p-3">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">{course.title}</h3>
                      <Badge className="bg-career-purple-light/20 text-career-purple">
                        {course.match}% Match
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      {course.platform} • {course.duration} • {course.level}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2 mb-3">
                      {course.skills.map((skill, j) => (
                        <span key={j} className="text-xs bg-secondary/60 rounded-full px-2 py-0.5">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full gap-1">
                      <Book size={14} />
                      View Course
                    </Button>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
