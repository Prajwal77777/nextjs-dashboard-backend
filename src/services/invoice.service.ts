import {Prisma, PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()
export const getAllInvoices = async () => {
    try{
        return await prisma.invoices.findMany();
    }catch(err){
        if (err instanceof Error) {
            throw new Error(`Error fetching invoices${err.message}`);
        }
    }
}