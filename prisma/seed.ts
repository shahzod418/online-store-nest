import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.graphicsCard.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      id: 1,
      model: 'RTX 3060',
      vendor: 'NVIDIA',
    },
  });

  await prisma.graphicsCard.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      id: 2,
      model: 'RTX 3080',
      vendor: 'NVIDIA',
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
