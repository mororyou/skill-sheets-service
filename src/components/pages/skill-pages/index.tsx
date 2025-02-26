'use client';

import { useGetSkillSheets } from '@/queries/skill-sheet';
import Link from 'next/link';
import { match } from 'ts-pattern';
export default function SkillSheetsPageContainer() {
  const { data, status } = useGetSkillSheets();

  return (
    <div>
      {match(status)
        .with('success', () => (
          <div>
            {data?.map((skillSheet) => (
              <Link href={`/skill-sheets/${skillSheet.id}`} key={skillSheet.id}>
                {skillSheet.name}
              </Link>
            ))}
          </div>
        ))
        .with('pending', () => <div>ローディング中</div>)
        .with('error', () => <div>エラーが発生しました</div>)
        .exhaustive()}
    </div>
  );
}
