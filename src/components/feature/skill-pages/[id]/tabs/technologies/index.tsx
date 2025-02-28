import { Card, CardContent } from '@/components/_ui/card';
import { TabsContent } from '@/components/_ui/tabs';
import { SkillSheet } from '@/queries/skill-sheet/types';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  PaletteIcon,
  TestTubeIcon,
} from 'lucide-react';
import TechnologyContent from './content';

export type TechnologiesTabProps = Readonly<{
  technologies: SkillSheet['technologies'];
}>;

export default function TechnologiesTab({
  technologies,
}: TechnologiesTabProps) {
  return (
    <TabsContent value="technologies" className="mt-4">
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TechnologyContent
              technologies={technologies.frontend}
              label="フロントエンド"
              icon={<CodeIcon className="h-4 w-4 text-blue-600" />}
              badgeColor="bg-blue-100 text-blue-800"
            />

            <TechnologyContent
              technologies={technologies.backend}
              label="バックエンド"
              icon={<DatabaseIcon className="h-4 w-4 text-green-600" />}
              badgeColor="bg-green-100 text-green-800"
            />

            <TechnologyContent
              technologies={technologies.ui}
              label="UIライブラリ"
              icon={<LayoutIcon className="h-4 w-4 text-purple-600" />}
              badgeColor="bg-purple-100 text-purple-800"
            />

            <TechnologyContent
              technologies={technologies.styles}
              label="スタイリング"
              icon={<PaletteIcon className="h-4 w-4 text-pink-600" />}
              badgeColor="bg-pink-100 text-pink-800"
            />

            <TechnologyContent
              technologies={technologies.testing}
              label="テスト"
              icon={<TestTubeIcon className="h-4 w-4 text-amber-600" />}
              badgeColor="bg-amber-100 text-amber-800"
            />

            <TechnologyContent
              technologies={technologies.cms}
              label="CMS"
              icon={<DatabaseIcon className="h-4 w-4 text-teal-600" />}
              badgeColor="bg-teal-100 text-teal-800"
            />

            <TechnologyContent
              technologies={technologies.other}
              label="その他"
              icon={<CodeIcon className="h-4 w-4 text-gray-600" />}
              badgeColor="bg-gray-100 text-gray-800"
            />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
