import { Badge } from '@/components/_ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/_ui/card';
import { formatDate } from '@/libs/date-fns/format-date';
import { SkillSheet } from '@/queries/skill-sheet/types';
import { CalendarIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import TechnologyBadges from './technology-badges';

export type SkillSheetCardProps = Readonly<{
  sheet: SkillSheet;
}>;

const calculateTeamSize = (team: SkillSheet['team']) => {
  return (
    (team.director ?? 0) +
    (team.engineer ?? 0) +
    (team.programmer ?? 0) +
    (team.designer ?? 0)
  );
};

export default function SkillSheetCard({ sheet }: SkillSheetCardProps) {
  return (
    <Link
      href={`/skill-sheets/${sheet.id}`}
      key={sheet.id}
      className="block hover:no-underline"
    >
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle className="line-clamp-2">{sheet.name}</CardTitle>
          <CardDescription className="mt-2 flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            {formatDate(sheet.from_day, 'yyyy年MM月')} 〜{' '}
            {formatDate(sheet.to_day, 'yyyy年MM月') || '現在'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-1">
            {sheet.types?.map((type) => (
              <Badge key={type} variant="outline">
                {type}
              </Badge>
            ))}
          </div>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {sheet.overview}
          </p>

          <div className="mt-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <UsersIcon className="h-4 w-4" />
              <span>{calculateTeamSize(sheet.team)}名</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <TechnologyBadges technologies={sheet.technologies} />
        </CardFooter>
      </Card>
    </Link>
  );
}
