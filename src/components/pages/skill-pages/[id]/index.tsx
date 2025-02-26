'use client';

import { useGetSkillSheet } from '@/queries/skill-sheet';

export type SkillSheetPageContainerProps = Readonly<{
  id: string;
}>;

export default function SkillSheetPageContainer({
  id,
}: SkillSheetPageContainerProps) {
  const { data, status } = useGetSkillSheet(id);

  return (
    <pre>
      {status} | {JSON.stringify(data, null, 2)}
    </pre>
  );
}
