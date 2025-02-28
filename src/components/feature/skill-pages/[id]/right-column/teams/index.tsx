import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/_ui/card';
import { SkillSheet } from '@/queries/skill-sheet/types';

export type TeamsCardProps = Readonly<{
  team: SkillSheet['team'];
}>;

export default function TeamsCard({ team }: TeamsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>チーム構成</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>ディレクター</span>
            <span className="font-medium">{team.director}名</span>
          </div>
          <div className="flex items-center justify-between">
            <span>エンジニア</span>
            <span className="font-medium">{team.engineer}名</span>
          </div>
          <div className="flex items-center justify-between">
            <span>プログラマー</span>
            <span className="font-medium">{team.programmer}名</span>
          </div>
          <div className="flex items-center justify-between">
            <span>デザイナー</span>
            <span className="font-medium">{team.designer}名</span>
          </div>
          <div className="flex items-center justify-between border-t pt-2">
            <span className="font-medium">合計</span>
            <span className="font-medium">
              {team.director + team.engineer + team.programmer + team.designer}
              名
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
