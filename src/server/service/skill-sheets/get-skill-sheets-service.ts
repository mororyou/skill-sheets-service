'use server';

import { zSkillSheetList } from '@/queries/skill-sheet/types';
import SkillSheetRepository from '@/server/repository/skill-sheet';

export default async function getSkillSheetsService() {
  const skillSheetRepository = new SkillSheetRepository();

  const res = await skillSheetRepository.getSkillSheets();

  return zSkillSheetList.parse(res.contents);
}
