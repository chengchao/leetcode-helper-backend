export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const problemSlug = searchParams.get('problemSlug')
  return new Response(`Problem: ${problemSlug}`);
}