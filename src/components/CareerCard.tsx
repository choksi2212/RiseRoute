
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedCard from './AnimatedCard';
import { ArrowRight, Briefcase, Star, Sparkles } from 'lucide-react';

interface CareerCardProps {
  title: string;
  description: string;
  match: number;
  skills: string[];
  growth: string;
  salary: string;
  animationDelay?: number;
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  description,
  match,
  skills,
  growth,
  salary,
  animationDelay = 0,
}) => {
  // Convert match percentage to match stars
  const matchStars = Math.round(match / 20);
  
  const header = (
    <div className="flex justify-between items-start">
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center mt-1 text-career-purple">
          <Briefcase size={16} className="mr-2" />
          <span className="text-sm font-medium">{growth}</span>
        </div>
      </div>
      <div className="flex items-center bg-career-purple-light/10 px-3 py-1 rounded-full">
        <Sparkles size={16} className="mr-1 text-career-purple" />
        <span className="text-sm font-medium">{match}% Match</span>
      </div>
    </div>
  );

  const footer = (
    <div className="flex justify-between items-center w-full">
      <div className="text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{salary}</span> avg. salary
      </div>
      <Button size="sm" className="gap-1">
        Explore <ArrowRight size={16} />
      </Button>
    </div>
  );

  return (
    <AnimatedCard 
      className="w-full" 
      header={header} 
      footer={footer}
      animationDelay={animationDelay}
    >
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="bg-secondary/70">
            {skill}
          </Badge>
        ))}
      </div>
    </AnimatedCard>
  );
};

export default CareerCard;
