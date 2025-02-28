import { Badge } from '@/components/_ui/badge';
import { SkillSheet } from '@/queries/skill-sheet/types';

export type TechnologyBadgesProps = Readonly<{
  technologies: SkillSheet['technologies'];
}>;

export default function TechnologyBadges({
  technologies,
}: TechnologyBadgesProps) {
  const frontendTechs = technologies.frontend?.slice(0, 2) || [];
  const backendTechs = technologies.backend?.slice(0, 2) || [];
  const totalTechCount =
    (technologies.frontend?.length || 0) + (technologies.backend?.length || 0);

  return (
    <div className="flex flex-wrap gap-1">
      {frontendTechs.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="bg-blue-100 text-blue-800 hover:bg-blue-200"
        >
          {tech}
        </Badge>
      ))}
      {backendTechs.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="bg-green-100 text-green-800 hover:bg-green-200"
        >
          {tech}
        </Badge>
      ))}
      {totalTechCount > 4 && (
        <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200">
          +
        </Badge>
      )}
    </div>
  );
}
