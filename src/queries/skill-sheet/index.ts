import getSkillSheetService from '@/server/service/skill-sheets/get-skill-sheet-service';
import getSkillSheetsService from '@/server/service/skill-sheets/get-skill-sheets-service';
import { useQuery } from '@tanstack/react-query';
import { skillSheetKeys } from './keys';

export const useGetSkillSheets = () => {
  const { data, status, error } = useQuery({
    queryKey: skillSheetKeys.all,
    queryFn: async () => {
      return await getSkillSheetsService();
    },
  });

  return { data, status, error };
};

export const useGetSkillSheet = (id: string) => {
  const { data, status, error } = useQuery({
    queryKey: skillSheetKeys.details(id),
    queryFn: async () => {
      return await getSkillSheetService(id);
    },
  });

  return { data, status, error };
};
