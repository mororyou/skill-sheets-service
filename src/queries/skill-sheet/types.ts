import { z } from 'zod';

export const zStringArray = z.array(z.string()).nullish();

export const zTechnologies = z.object({
  fieldId: z.literal('frameworks'),
  frontend: zStringArray,
  backend: zStringArray,
  ui: zStringArray,
  styles: zStringArray,
  testing: zStringArray,
  other: zStringArray,
  cms: zStringArray,
});

export type Technologies = z.infer<typeof zTechnologies>;

export const zTeam = z.object({
  fieldId: z.literal('teams'),
  director: z.number(),
  engineer: z.number(),
  programmer: z.number(),
  designer: z.number(),
});

export type Team = z.infer<typeof zTeam>;

export const zEfforts = z.array(
  z.object({
    fieldId: z.literal('effort'),
    title: z.string().optional(),
    issue: z.string().optional(),
    devise: z.string().optional(),
  }),
);

export type Efforts = z.infer<typeof zEfforts>;

export const zRepositories = z.array(
  z.object({
    fieldId: z.literal('repository'),
    description: z.string(),
    repository: z.string().url(),
  }),
);

export type Repositories = z.infer<typeof zRepositories>;

export const zSkillSheet = z.object({
  id: z.string().describe('ID'),
  createdAt: z.string().describe('作成日'),
  updatedAt: z.string().describe('更新日'),
  publishedAt: z.string().describe('公開日'),
  revisedAt: z.string().describe('改訂日'),
  name: z.string().min(1).describe('プロジェクト名'),
  repositories: zRepositories.nullish().describe('リポジトリ'),
  types: zStringArray.describe('タイプ'),
  from_day: z.string().describe('開始日'),
  to_day: z.string().optional().describe('終了日'),
  team: zTeam.describe('チーム'),
  process: zStringArray.describe('プロセス'),
  job: zStringArray.describe('職務'),
  technologies: zTechnologies,
  overview: z.string().min(1).describe('概要'),
  efforts: zEfforts.nullish().describe('工数'),
});

export type SkillSheet = z.infer<typeof zSkillSheet>;

export const zSkillSheetList = z.array(zSkillSheet);

export type SkillSheetList = z.infer<typeof zSkillSheetList>;
