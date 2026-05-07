import prismaClient from '../lib/prisma'

async function main() {
  await prismaClient.user.createMany({
    data: [
      { name: 'Ada', email: 'ada@example.com', role: 'plug', verified: true },
      { name: 'Femi', email: 'femi@example.com', role: 'plugged' },
      { name: 'Nkechi', email: 'nkechi@example.com', role: 'plug' },
    ],
    skipDuplicates: true
  })
  console.log('Seeded demo users')
}

main().catch(e => { console.error(e); process.exit(1) }).finally(async () => { await prismaClient.$disconnect() })
