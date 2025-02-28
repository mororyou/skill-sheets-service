'use client';

import SkillSheetCard from '@/components/feature/skill-pages';
import { useGetSkillSheets } from '@/queries/skill-sheet';
import { match, P } from 'ts-pattern';

export default function SkillSheetsPageContainer() {
  const { data, status } = useGetSkillSheets();

  return (
    <section className="flex w-full flex-col gap-4 px-4 py-16">
      {match(status)
        .with('success', () => {
          return match(data)
            .with(P.nullish, () => <div>データがありません</div>)
            .otherwise((data) => (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((skillSheet) => (
                  <SkillSheetCard key={skillSheet.id} sheet={skillSheet} />
                ))}
              </div>
            ));
        })
        .with('pending', () => <div>ローディング中</div>)
        .with('error', () => <div>エラーが発生しました</div>)
        .exhaustive()}
    </section>
  );
}
