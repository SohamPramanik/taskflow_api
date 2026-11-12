
import prisma from "../config/prisma.js";

async function checkDatabase() {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;

    console.log("Connected to PostgreSQL through Prisma!");
    console.log("Database time:", result);

  } catch (error) {
    console.error("Database connection failed:", error);
    process.exitCode = 1;

  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
