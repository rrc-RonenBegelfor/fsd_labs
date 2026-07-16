import { PrismaClient } from "@prisma/client";
import { EmployeeData, LeaderData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.employee.deleteMany();
    await prisma.leadership.deleteMany();

    // insert employees to db
    const createManyEmployees = await prisma.employee.createManyAndReturn(
        {
            data: EmployeeData,
            skipDuplicates: true
        }
    );

    const createManyLeaders = await prisma.leader.createManyAndReturn(
        {
            data: LeaderData,
            skipDuplicates: true
        }
    )

    console.log(`CREATED TABLES: ${createManyEmployees} and ${createManyLeaders}`);
};

main()
    .then(async () => {
        await prisma.$disconnect();
        await pool.end();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        await pool.end();
        process.exit(1);
});