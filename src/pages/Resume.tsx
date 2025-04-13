
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Share2, Plus, Edit2 } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Resume: React.FC = () => {
  const [activeResume, setActiveResume] = useState('professional');
  
  // User state to make content dynamic
  const [user] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    title: 'Data Analyst & Web Developer',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    summary: 'Data analyst with 3+ years of experience specializing in business intelligence and web development. Passionate about leveraging data to drive business decisions with a focus on creating interactive data visualizations.'
  });
  
  // Example resume templates
  const resumeTemplates = [
    { id: 'professional', name: 'Professional', description: 'Clean, formal template ideal for corporate roles' },
    { id: 'creative', name: 'Creative', description: 'Modern design with visual elements for creative fields' },
    { id: 'academic', name: 'Academic', description: 'Detailed format for research and academic positions' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Resume Builder</h1>
            <p className="text-muted-foreground">Create and manage professional resumes tailored to your target roles</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download size={16} />
              Export PDF
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 size={16} />
              Share
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <AnimatedCard>
              <h2 className="text-lg font-semibold mb-4">Your Resumes</h2>
              <div className="space-y-3">
                {resumeTemplates.map(template => (
                  <div 
                    key={template.id}
                    className={`p-3 rounded-lg cursor-pointer border transition-all ${
                      activeResume === template.id ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setActiveResume(template.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{template.name}</h3>
                      {activeResume === template.id && (
                        <div className="bg-primary text-white text-xs px-2 py-0.5 rounded">Active</div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-2 gap-2">
                  <Plus size={16} />
                  Create New Resume
                </Button>
              </div>
            </AnimatedCard>
            
            <AnimatedCard>
              <h2 className="text-lg font-semibold mb-4">AI Suggestions</h2>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-secondary/40 rounded-lg">
                  <p className="font-medium">Add quantifiable achievements</p>
                  <p className="text-muted-foreground mt-1">Include metrics to strengthen your impact statements in work experience.</p>
                </div>
                <div className="p-3 bg-secondary/40 rounded-lg">
                  <p className="font-medium">Skills gap detected</p>
                  <p className="text-muted-foreground mt-1">Adding SQL to your technical skills would increase match rate by 15%.</p>
                </div>
                <div className="p-3 bg-secondary/40 rounded-lg">
                  <p className="font-medium">Update education section</p>
                  <p className="text-muted-foreground mt-1">Include relevant coursework to highlight specialized knowledge.</p>
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="lg:col-span-2">
            <AnimatedCard className="p-6 h-full">
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-bold">{user.firstName} {user.lastName}</h2>
                <Button size="sm" variant="ghost">
                  <Edit2 size={16} />
                </Button>
              </div>
              
              <div className="mb-6">
                <p className="text-lg text-career-purple">{user.title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-2">
                  <span>{user.email}</span>
                  <span>{user.phone}</span>
                  <span>{user.location}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
                <p>{user.summary}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <Button size="sm" variant="ghost">
                    <Plus size={16} />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Data Analyst</h4>
                        <p className="text-sm text-career-purple">TechVision Inc.</p>
                      </div>
                      <p className="text-sm">Jun 2022 - Present</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Analyze business data to identify trends and opportunities, resulting in 15% increased efficiency</li>
                      <li>Create interactive dashboards using Tableau for executive decision-making</li>
                      <li>Implement ETL processes for data warehousing and reporting automation</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Data Science Intern</h4>
                        <p className="text-sm text-career-purple">InnovateTech</p>
                      </div>
                      <p className="text-sm">May 2021 - Aug 2021</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Assisted in building machine learning models for customer segmentation</li>
                      <li>Performed data cleaning and preprocessing of customer datasets</li>
                      <li>Created reports and presentations for stakeholders</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <Button size="sm" variant="ghost">
                    <Plus size={16} />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">University of California, Berkeley</h4>
                        <p className="text-sm">Bachelor of Science, Data Science</p>
                      </div>
                      <p className="text-sm">2018 - 2022</p>
                    </div>
                    <p className="text-sm mt-1">GPA: 3.8/4.0</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <Button size="sm" variant="ghost">
                    <Plus size={16} />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Data Analysis", "Python", "SQL", "Tableau", "JavaScript", "React", "Excel", "Business Intelligence"].map((skill, i) => (
                    <div key={i} className="bg-secondary/60 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
