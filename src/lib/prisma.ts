import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  console.log("Initializing Prisma Client v5...");
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

// Reset the cached global Prisma instance to flush out old versions
if (globalThis.prismaGlobal && !(globalThis.prismaGlobal instanceof PrismaClient)) {
    globalThis.prismaGlobal = undefined;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
