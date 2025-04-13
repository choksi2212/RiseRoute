
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Briefcase, BookOpen, Brain, Award, CheckCircle } from 'lucide-react';
import ThreeDBackground from '../components/ThreeDBackground';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Index: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitchToSignup = () => {
    setShowLogin(false);
  };

  const handleSwitchToLogin = () => {
    setShowLogin(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-secondary/20">
      <ThreeDBackground />
      
      <header className="container mx-auto px-4 py-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white p-2 rounded-lg font-medium">RS</div>
          <span className="font-poppins font-semibold text-xl">Riseroute</span>
        </div>
        <div className="flex gap-3">
          <Button variant={showLogin ? "default" : "outline"} onClick={handleSwitchToLogin} size="sm">Log In</Button>
          <Button variant={!showLogin ? "default" : "outline"} onClick={handleSwitchToSignup} size="sm">Sign Up</Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-1.5 gap-1.5 mb-4">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-semibold">AI-Powered Career Platform</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6">
                Shape Your Future <span className="text-primary">Career</span> with Professional Guidance
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Discover the perfect career path, build an impressive resume, and develop the skills needed to succeed in today's competitive job market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Brain size={20} />, title: "Personalized Recommendations", description: "AI-driven career paths based on your skills and goals" },
                { icon: <Briefcase size={20} />, title: "Professional Resume Builder", description: "Create ATS-optimized resumes for your target roles" },
                { icon: <BookOpen size={20} />, title: "Strategic Skill Development", description: "Focus on high-demand skills based on market analysis" },
                { icon: <Award size={20} />, title: "Opportunity Insights", description: "Data-driven job market trends and opportunities" },
              ].map((feature, index) => (
                <div key={index} className="flex p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
                  <div className="mr-4 bg-primary/10 p-2 rounded-lg text-primary h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              {[
                "93% of users found relevant job opportunities",
                "87% improved interview success rate",
                "4.8/5 average user rating"
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm font-medium">{stat}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            {showLogin ? (
              <LoginForm onSwitchToSignup={handleSwitchToSignup} />
            ) : (
              <SignupForm onSwitchToLogin={handleSwitchToLogin} />
            )}
          </div>
        </div>
      </main>
      
      <footer className="container mx-auto p-6 text-center text-sm text-muted-foreground z-10 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 text-primary p-1 rounded">RS</div>
            <span className="font-medium">Riseroute</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
          <div>&copy; {new Date().getFullYear()} Riseroute. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
