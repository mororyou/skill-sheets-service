import { Card, CardContent } from '@/components/_ui/card';
import { TabsContent } from '@/components/_ui/tabs';
import { SkillSheet } from '@/queries/skill-sheet/types';
import { FolderGit2Icon } from 'lucide-react';
import Link from 'next/link';

export type RepositoriesTabProps = Readonly<{
  repositories: SkillSheet['repositories'];
}>;

export default function RepositoriesTab({
  repositories,
}: RepositoriesTabProps) {
  return (
    <TabsContent value="repositories" className="mt-4">
      <Card>
        <CardContent className="pt-6">
          {repositories && repositories.length > 0 ? (
            <div className="space-y-4">
              {repositories.map((repo, index) => (
                <div
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="mb-1 font-medium">{repo.description}</h3>
                  <Link
                    href={repo.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <FolderGit2Icon className="h-4 w-4" />
                    {repo.repository}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">リポジトリ情報はありません</p>
          )}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
