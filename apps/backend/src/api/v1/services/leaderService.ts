// Use the Leader type defined in prisma/schema.prisma
import { Role } from "@prisma/client";
// initialize a prisma client if not already and use in queries here
import prisma from "../../../../prisma/client";

/**
 * Services access data as necessary from the Prisma client. They invoke
 * methods on the ORM, which will send queries to the database and respond
 * with data needed.
 * 
 * More general info on Prisma: https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/rest
 */
export const fetchAllLeaders = async(): Promise<Role[]> => {
    // get all records in the Leader table
    return prisma.role.findMany();
}

export const getLeaderById = async(id: number): Promise<Role | null> => {
    try {
        // get first record that match the "where" object key/value pairs
        const Leader = prisma.role.findUnique({
            where: {
                id: id
            }
        });

        if(!Leader) {
            return null;
        } else{
            return Leader;
        }
    } catch(error) {
        throw new Error(`Failed to fetch Leader with id ${id}`);
    }
}

export const createLeader = async(LeaderData: {
    firstName: string;
    lastName: string;
    role: string;
}): Promise<Role> => {
    // create a new Leader with LeaderData as its column values, except for isFavourite as false
    const newLeader: Role = await prisma.role.create({
        data: {
            ...LeaderData
        }
    });

    return newLeader;
}

export const updateLeader = async(
    id: number,
    Leader: {title: string, definition: string, isFavourite: boolean}
): Promise<Role> => {
    // find a Leader where the id matches the id parameter, and update with the Leader argument for values
    const updateLeader = await prisma.role.update({
        where: {
            id: id
        },
        data: {
            ...Leader
        }
    });
    return updateLeader;
}

export const deleteLeader = async(id: number): Promise<void> => {
    // delete the Leader that matches the where key/value pairs
    await prisma.role.delete({
        where: {
            id: id
        }
    });
}