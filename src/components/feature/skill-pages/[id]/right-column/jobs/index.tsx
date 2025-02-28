import { Badge } from '@/components/_ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/_ui/card';
import { SkillSheet } from '@/queries/skill-sheet/types';

export type JobsCardProps = Readonly<{
  jobs: SkillSheet['job'];
}>;

export default function JobsCard({ jobs }: JobsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>職務</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {jobs?.map((job) => (
            <Badge key={job} variant="outline">
              {job}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
