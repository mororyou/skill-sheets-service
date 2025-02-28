import { Badge } from '@/components/_ui/badge';
import { Button } from '@/components/_ui/button';
import { formatDate } from '@/libs/date-fns/format-date';
import { SkillSheet } from '@/queries/skill-sheet/types';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import JobsCard from './right-column/jobs';
import MetaCard from './right-column/meta';
import ProccessCard from './right-column/proccess';
import TeamsCard from './right-column/teams';
import SkillSummary from './summary';
import SkillSheetTabContents from './tabs';
import SkillSheetTitle from './title';

export type SkillViewerProps = Readonly<{
  skillSheet: SkillSheet;
}>;

export default function SkillViewer({ skillSheet }: SkillViewerProps) {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            一覧に戻る
          </Link>
        </Button>

        <SkillSheetTitle name={skillSheet.name} />

        <div className="mt-3 flex flex-wrap gap-2">
          {skillSheet.types?.map((type) => (
            <Badge key={type} variant="outline">
              {type}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>
            {formatDate(skillSheet.from_day, 'yyyy年MM月')} 〜{' '}
            {formatDate(skillSheet.to_day, 'yyyy年MM月') || '現在'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SkillSummary overview={skillSheet.overview} />

          <SkillSheetTabContents skillSheet={skillSheet} />
        </div>

        <div className="space-y-6">
          <TeamsCard team={skillSheet.team} />

          <ProccessCard process={skillSheet.process} />

          <JobsCard jobs={skillSheet.job} />

          <MetaCard
            createdAt={skillSheet.createdAt}
            updatedAt={skillSheet.updatedAt}
            publishedAt={skillSheet.publishedAt}
            revisedAt={skillSheet.revisedAt}
          />
        </div>
      </div>
    </div>
  );
}
