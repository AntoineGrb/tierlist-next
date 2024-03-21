import { PrismaClient } from "@prisma/client";
import lists from "../data/lists.json" assert { type: "json" };

const prisma = new PrismaClient();

async function main() {
    for (const list of lists) {
        const newList = await prisma.list.create({
            data: {
                title: list.title,
                description: list.description,
                cardImageUrl: list.cardImageUrl,
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