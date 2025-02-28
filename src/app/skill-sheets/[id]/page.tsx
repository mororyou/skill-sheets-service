import SkillSheetPageContainer from '@/components/pages/skill-pages/[id]';

export default async function SkillSheet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <SkillSheetPageContainer id={id} />;
}
