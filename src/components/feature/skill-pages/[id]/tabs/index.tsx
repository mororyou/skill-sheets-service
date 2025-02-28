import { Tabs, TabsList, TabsTrigger } from '@/components/_ui/tabs';
import { SkillSheet } from '@/queries/skill-sheet/types';
import EffortTab from './effort';
import RepositoriesTab from './repositories';
import TechnologiesTab from './technologies';

export type SkillSheetTabContentsProps = Readonly<{
  skillSheet: SkillSheet;
}>;

export default function SkillSheetTabContents({
  skillSheet,
}: SkillSheetTabContentsProps) {
  return (
    <Tabs defaultValue="technologies" className="mt-6">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="technologies">使用技術</TabsTrigger>
        <TabsTrigger value="efforts">工数・工夫</TabsTrigger>
        <TabsTrigger value="repositories">リポジトリ</TabsTrigger>
      </TabsList>

      <TechnologiesTab technologies={skillSheet.technologies} />

      <EffortTab efforts={skillSheet.efforts} />

      <RepositoriesTab repositories={skillSheet.repositories} />
    </Tabs>
  );
}
