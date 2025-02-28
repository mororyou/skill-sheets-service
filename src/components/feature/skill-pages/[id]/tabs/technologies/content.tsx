import { Badge } from '@/components/_ui/badge';
import { SkillSheet } from '@/queries/skill-sheet/types';

export type TechnologyContentProps = Readonly<{
  label: string;
  icon: React.ReactNode;
  badgeColor: string;
  technologies:
    | SkillSheet['technologies']['frontend']
    | SkillSheet['technologies']['backend']
    | SkillSheet['technologies']['ui']
    | SkillSheet['technologies']['styles']
    | SkillSheet['technologies']['testing']
    | SkillSheet['technologies']['cms']
    | SkillSheet['technologies']['other'];
}>;

export default function TechnologyContent({
  label,
  icon,
  badgeColor,
  technologies,
}: TechnologyContentProps) {
  return (
    <>
      {technologies && technologies.length > 0 && (
        <div>
          <div className="mb-2 flex items-center gap-2 font-medium">
            {icon}
            <h3>{label}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className={badgeColor}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
