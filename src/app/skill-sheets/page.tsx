import SkillSheetsPageContainer from '@/components/pages/skill-pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'スキルシート | techFountain',
  description: 'これまでのスキルシートを閲覧可能です。',
};

export default function SkillSheets() {
  return <SkillSheetsPageContainer />;
}
