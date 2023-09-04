export default async function Page({ params }: { params: { slug: string[] } }) {
  return <div>I am a page: {JSON.stringify(params.slug)}</div>;
}
