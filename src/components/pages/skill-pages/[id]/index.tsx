'use client';

import Loader from '@/components/_ui/loader';
import SkillViewer from '@/components/feature/skill-pages/[id]';
import { useGetSkillSheet } from '@/queries/skill-sheet';
import { match, P } from 'ts-pattern';

export type SkillSheetPageContainerProps = Readonly<{
  id: string;
}>;

export default function SkillSheetPageContainer({
  id,
}: SkillSheetPageContainerProps) {
  const { data, status } = useGetSkillSheet(id);

  return match(status)
    .with('success', () => {
      return match(data)
        .with(P.nullish, () => <div>Not Found</div>)
        .otherwise((data) => <SkillViewer skillSheet={data} />);
    })
    .with('pending', () => <Loader />)
    .with('error', () => <div>Error</div>)
    .exhaustive();
}
