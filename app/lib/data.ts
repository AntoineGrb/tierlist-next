import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLists = async () => {
    const lists = await prisma.list.findMany({
        include: {
            items: true
        }
    });
    console.log("lists server : " , lists)
    return lists;
}