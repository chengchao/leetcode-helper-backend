import { PrismaClient } from "@prisma/client";

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  if (!slug) {
    return new Response('Problem slug is required', { status: 400 })
  }

  const prisma = new PrismaClient()
  const problem = await prisma.problem.findUnique({
    where: {
      slug: slug
    }
  })

  return new Response(JSON.stringify(problem), {
    headers: {
      'content-type': 'application/json'
    }
  })
}