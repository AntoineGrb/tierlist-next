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

export const getList = async (id: number) => {
    const list = await prisma.list.findUnique({
        where: {
            id: id
        },
        include: {
            items: true
        }
    });
    console.log("list server : " , list)
    return list;
}