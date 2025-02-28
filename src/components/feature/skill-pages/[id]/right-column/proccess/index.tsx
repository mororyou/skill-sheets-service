import { Badge } from '@/components/_ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/_ui/card';
import { SkillSheet } from '@/queries/skill-sheet/types';

export type ProcessCardProps = Readonly<{
  process: SkillSheet['process'];
}>;

export default function ProccessCard({ process }: ProcessCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>プロセス</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {process?.map((proc) => (
            <Badge key={proc} variant="outline">
              {proc}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
