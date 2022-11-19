import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const card1 = await prisma.graphicsCard.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      id: 1,
      model: 'GTX 3060',
      vendor: 'NVIDIA',
    },
  });

  const card2 = await prisma.graphicsCard.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      id: 2,
      model: 'GTX 3080',
      vendor: 'NVIDIA',
    },
  });

  console.log({ card1, card2 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
