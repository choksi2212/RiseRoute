
import React from 'react';
import { Progress } from "@/components/ui/progress";
import AnimatedCard from './AnimatedCard';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillProgressProps {
  skills: Skill[];
  title: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ skills, title }) => {
  return (
    <AnimatedCard className="w-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
            <div className="text-xs text-muted-foreground">{skill.category}</div>
          </div>
        ))}
      </div>
    </AnimatedCard>
  );
};

export default SkillProgress;
