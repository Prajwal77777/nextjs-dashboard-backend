import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

export const getAllRevenue = async () => {
    try {
        const revenues = await prisma.revenue.findMany();
        return revenues;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching revenue: ${error.message}`);
        }
    }
};