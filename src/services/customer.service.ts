import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const getAllCustomers = async () =>{
    try{
        return await prisma.customers.findMany({
            include: {
                invoices: true
            }
        });
    }catch(error){
        if(error instanceof Error){
            throw new Error(`Error to fetch customers data${error.message}`)
        }
    }
}