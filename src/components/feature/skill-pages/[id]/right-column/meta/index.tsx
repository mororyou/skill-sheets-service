import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/_ui/card';
import { formatDate } from '@/libs/date-fns/format-date';
import { SkillSheet } from '@/queries/skill-sheet/types';

export type MetaCardProps = Readonly<{
  createdAt: SkillSheet['createdAt'];
  updatedAt: SkillSheet['updatedAt'];
  publishedAt: SkillSheet['publishedAt'];
  revisedAt: SkillSheet['revisedAt'];
}>;

export default function MetaCard({
  createdAt,
  updatedAt,
  publishedAt,
  revisedAt,
}: MetaCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>メタ情報</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">作成日:</span>
            <span>{formatDate(createdAt, 'yyyy/MM/dd HH:mm')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">更新日:</span>
            <span>{formatDate(updatedAt, 'yyyy/MM/dd HH:mm')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">公開日:</span>
            <span>{formatDate(publishedAt, 'yyyy/MM/dd HH:mm')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">改訂日:</span>
            <span>{formatDate(revisedAt, 'yyyy/MM/dd HH:mm')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
