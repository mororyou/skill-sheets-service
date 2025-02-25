export default async function SkillSheet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div>SkillSheet: {id}</div>;
}
