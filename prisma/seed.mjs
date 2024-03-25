import { PrismaClient } from "@prisma/client";
import lists from "../data/lists.json" assert { type: "json" };

const prisma = new PrismaClient();

async function main() {
    for (const list of lists) {

        //Check if list already exists
        const existingList = await prisma.list.findFirst({
            where: {
                title: list.title
            }
        })

        //If list already exists, skip to next iteration
        if (existingList) {
            console.log(`${list.title} already exists with id: ${existingList.id}`)
            continue
        }

        //If list does not exist, create it
        const newList = await prisma.list.create({
            data: {
                title: list.title,
                description: list.description,
                cardImageUrl: list.cardImageUrl,
                category: list.category,
                isPopular: list.isPopular,
                items: {
                    create: list.items
                }
            }
        })
        console.log(`${newList.title} created with id: ${newList.id}`)
    }
}

main()
    .catch(e => {
        console.error(e);
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    });