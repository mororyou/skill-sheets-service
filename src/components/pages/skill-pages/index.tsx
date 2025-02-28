'use client';

import Loader from '@/components/_ui/loader';
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
        .with('pending', () => <Loader />)
        .with('error', () => <div>エラーが発生しました</div>)
        .exhaustive()}
    </div>
  );
}
