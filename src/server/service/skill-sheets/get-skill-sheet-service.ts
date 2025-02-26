'use server';

import { zSkillSheet } from '@/queries/skill-sheet/types';
import SkillSheetRepository from '@/server/repository/skill-sheet';

export default async function getSkillSheetService(id: string) {
  const skillSheetRepository = new SkillSheetRepository();

  const res = await skillSheetRepository.getSkillSheet(id);

  return zSkillSheet.parse(res);
}
