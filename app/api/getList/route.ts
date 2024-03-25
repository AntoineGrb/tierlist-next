import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
      const url = new URL(request.url);
      const listId = url.searchParams.get('id');

    try {
        const list = await prisma.list.findUnique({
            where: {
                id: Number(listId)
            },
            include: {
                items: true
            }
        });

        if (list) {
            return new Response(JSON.stringify(list), {
                status: 200,
                headers: {
                  'Content-Type': 'application/json',
                },
              });

        } else {
            return new Response(JSON.stringify({ message: 'List not found' }), {
                status: 404,
                headers: {
                  'Content-Type': 'application/json',
                },
              });
        }

    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error fetching list' }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          });
    }
}