import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.problem.createMany({
    data: [
      {
        slug: "contains-duplicate-ii",
        problemNumber: 219,
        title: "Contains Duplicate II",
        difficulty: "EASY"
      },
      {
        slug: "summary-ranges",
        problemNumber: 228,
        title: "Summary Ranges",
        difficulty: "EASY"
      },
      {
        slug: "longest-consecutive-sequence",
        problemNumber: 128,
        title: "Longest Consecutive Sequence",
        difficulty: "MEDIUM"
      }
    ],
    skipDuplicates: true
  })
  // const allProblems = await prisma.problem.findMany()
  // console.log(allProblems)

  const problem = await prisma.problem.findUnique({
    where: {
      slug: "contains-duplicate-ii"
    }
  })
  console.log(problem)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
