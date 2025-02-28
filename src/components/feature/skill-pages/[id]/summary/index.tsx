import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/_ui/card';
import { SkillSheet } from '@/queries/skill-sheet/types';

export type SkillSummaryProps = Readonly<{
  overview: SkillSheet['overview'];
}>;

export default function SkillSummary({ overview }: SkillSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>概要</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{overview}</p>
      </CardContent>
    </Card>
  );
}
