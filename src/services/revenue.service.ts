import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

export const getAllRevenue = async () => {
    try {
        return await prisma.revenue.findMany();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching revenue: ${error.message}`);
        }
    }
};