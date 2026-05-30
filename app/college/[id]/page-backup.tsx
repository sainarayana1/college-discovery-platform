export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div style={{ padding: "40px" }}>
      <h1>College Details Page</h1>
      <h2>ID: {id}</h2>
    </div>
  );
}