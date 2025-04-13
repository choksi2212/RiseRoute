
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  BookmarkPlus, 
  MapPin, 
  Building, 
  DollarSign, 
  Clock, 
  Briefcase, 
  TrendingUp,
  Plus 
} from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Opportunities: React.FC = () => {
  // User state to make content dynamic
  const [user] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    preferredJobTitles: ['Data Analyst', 'Business Intelligence Analyst', 'Data Scientist'],
    location: 'San Francisco, CA',
    skills: ['Python', 'SQL', 'Data Analysis', 'Tableau']
  });
  
  // Example opportunities
  const [opportunities] = useState([
    {
      id: 1,
      title: 'Senior Data Analyst',
      company: 'TechGrowth Inc.',
      location: 'San Francisco, CA',
      salary: '$95,000 - $120,000',
      type: 'Full-time',
      posted: '2 days ago',
      skills: ['SQL', 'Python', 'Tableau', 'Excel'],
      matchScore: 92,
      description: 'Looking for a skilled data analyst to join our business intelligence team. You will analyze complex datasets and create visualizations to drive business decisions.',
      trending: true
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'InnovateTech',
      location: 'Remote',
      salary: '$110,000 - $140,000',
      type: 'Full-time',
      posted: '1 week ago',
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      matchScore: 87,
      description: 'Join our data science team to build machine learning models that help optimize our product recommendations and customer segmentation.'
    },
    {
      id: 3,
      title: 'Business Intelligence Analyst',
      company: 'DataDriven Corp',
      location: 'San Francisco, CA',
      salary: '$90,000 - $115,000',
      type: 'Full-time',
      posted: '3 days ago',
      skills: ['SQL', 'Power BI', 'Data Modeling', 'Business Analytics'],
      matchScore: 85,
      description: 'We are seeking a business intelligence analyst to develop and maintain dashboards and reports for stakeholders across the organization.',
      trending: true
    },
    {
      id: 4,
      title: 'Data Visualization Specialist',
      company: 'Visualify',
      location: 'New York, NY (Remote Option)',
      salary: '$85,000 - $110,000',
      type: 'Full-time',
      posted: '1 day ago',
      skills: ['Tableau', 'D3.js', 'Data Storytelling', 'SQL'],
      matchScore: 79,
      description: 'Create compelling data visualizations that tell stories and provide insights into complex business problems.'
    }
  ]);
  
  // Industry trends data
  const industryTrends = [
    { skill: 'Machine Learning', growth: '+32%', demand: 'Very High' },
    { skill: 'SQL', growth: '+18%', demand: 'High' },
    { skill: 'Data Visualization', growth: '+24%', demand: 'High' },
    { skill: 'Python', growth: '+28%', demand: 'Very High' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Career Opportunities</h1>
          <p className="text-muted-foreground">Discover and track job opportunities matched to your profile</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search job titles, companies, or skills" className="pl-9" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filters
              </Button>
            </div>
            
            <Tabs defaultValue="recommended">
              <TabsList className="mb-4">
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
                <TabsTrigger value="applied">Applied</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recommended" className="space-y-4">
                {opportunities.map(job => (
                  <AnimatedCard key={job.id} className="p-0">
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold flex items-center gap-2">
                            {job.title}
                            {job.trending && (
                              <span className="flex items-center text-xs text-career-purple font-medium">
                                <TrendingUp size={14} className="mr-0.5" /> Trending
                              </span>
                            )}
                          </h3>
                          <p className="text-sm">{job.company}</p>
                        </div>
                        <div>
                          <Badge className="bg-career-purple">{job.matchScore}% Match</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3 text-sm">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-muted-foreground" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign size={14} className="text-muted-foreground" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={14} className="text-muted-foreground" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} className="text-muted-foreground" />
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, i) => (
                          <span key={i} className={`text-xs px-2 py-1 rounded-full ${
                            user.skills.includes(skill) 
                              ? 'bg-career-purple/10 text-career-purple' 
                              : 'bg-secondary'
                          }`}>
                            {skill}
                            {user.skills.includes(skill) && " ✓"}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm">View Details</Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <BookmarkPlus size={14} />
                          Save
                        </Button>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </TabsContent>
              
              <TabsContent value="saved">
                <AnimatedCard>
                  <div className="text-center py-10">
                    <p className="text-muted-foreground mb-4">You haven't saved any opportunities yet.</p>
                    <Button>Browse Opportunities</Button>
                  </div>
                </AnimatedCard>
              </TabsContent>
              
              <TabsContent value="applied">
                <AnimatedCard>
                  <div className="text-center py-10">
                    <p className="text-muted-foreground mb-4">You haven't applied to any opportunities yet.</p>
                    <Button>Browse Opportunities</Button>
                  </div>
                </AnimatedCard>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <AnimatedCard>
              <h2 className="text-lg font-semibold mb-4">Your Job Preferences</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Target Roles</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.preferredJobTitles.map((title, i) => (
                      <Badge key={i} variant="secondary">{title}</Badge>
                    ))}
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      <Plus size={12} className="mr-1" /> Add
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Location</h3>
                  <p className="text-sm">{user.location}</p>
                  <Button variant="link" className="p-0 h-auto text-xs">Edit location</Button>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Job Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Full-time</Badge>
                    <Badge variant="secondary">Remote</Badge>
                    <Badge variant="secondary">Hybrid</Badge>
                  </div>
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard>
              <h2 className="text-lg font-semibold mb-4">Industry Trends</h2>
              <div className="space-y-3">
                {industryTrends.map((trend, i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded-lg hover:bg-secondary/40">
                    <div>
                      <p className="font-medium">{trend.skill}</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp size={14} className="mr-1" />
                        {trend.growth} in demand
                      </p>
                    </div>
                    <Badge className="bg-secondary text-foreground">{trend.demand}</Badge>
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

export default Opportunities;
