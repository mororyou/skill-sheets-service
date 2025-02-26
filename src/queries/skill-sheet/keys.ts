export const skillSheetKeys = {
  all: ['skill-sheets'] as const,
  lists: () => [...skillSheetKeys.all, 'list'] as const,
  details: (id: string) => [...skillSheetKeys.all, id] as const,
};
