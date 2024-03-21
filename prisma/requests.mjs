import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getLists() { 
    const lists = await prisma.list.findMany({
        include: {
            items: true
        }
    })
    console.log('lists from loader' , lists)
    return lists
}