import { Card, CardContent } from '@/components/_ui/card';
import { TabsContent } from '@/components/_ui/tabs';
import { SkillSheet } from '@/queries/skill-sheet/types';

export type EffortTabProps = Readonly<{
  efforts: SkillSheet['efforts'];
}>;

export default function EffortTab({ efforts }: EffortTabProps) {
  return (
    <TabsContent value="efforts" className="mt-4">
      <Card>
        <CardContent className="pt-6">
          {efforts && efforts.length > 0 ? (
            <div className="space-y-6">
              {efforts.map((effort, index) => (
                <div
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="mb-2 text-lg font-medium">{effort.title}</h3>
                  {effort.issue && (
                    <div className="mb-2">
                      <h4 className="mb-1 text-sm font-medium text-muted-foreground">
                        課題:
                      </h4>
                      <p className="text-sm">{effort.issue}</p>
                    </div>
                  )}
                  {effort.devise && (
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-muted-foreground">
                        工夫:
                      </h4>
                      <p className="text-sm">{effort.devise}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">工数情報はありません</p>
          )}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
