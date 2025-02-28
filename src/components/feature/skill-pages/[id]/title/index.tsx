import { SkillSheet } from '@/queries/skill-sheet/types';

export type SkillSheetTitleProps = Readonly<{
  name: SkillSheet['name'];
}>;

export default function SkillSheetTitle({ name }: SkillSheetTitleProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-3xl font-bold">{name}</h1>
    </div>
  );
}
