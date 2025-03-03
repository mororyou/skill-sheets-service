import SkillSheetPageContainer from '@/components/pages/skill-pages/[id]';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'スキル詳細 | techFountain',
  description: 'これまでのスキルシートを閲覧可能です。',
};

export default async function SkillSheet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <SkillSheetPageContainer id={id} />;
}
