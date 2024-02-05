import { PrismaClient } from "@prisma/client";
const prisma =  new PrismaClient();

async function seed(){
    const vehicle = await prisma.vehicle.create({
        data:{
            name: "juan garcia",
            brand: "audi",
            model: "cabrio",
            year: 2015,
        }
        });
    

async function seed(){
    const ownervehicle = await prisma.ownervehicle.create({
        data:{
            name: "victor cruz",
            email: "victor@gmail.com",
            phoneNumber: 21578469,
        }
    });

    async function seed(){
        const company = await prisma.company.create({
            data:{
                name: "vehiculos  victor",
                email: "vehiculos@gmail.com",
                address: "quinta chica"
                }
        });
            
        console.log('Seed data insert succeblefully');

}
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
}
