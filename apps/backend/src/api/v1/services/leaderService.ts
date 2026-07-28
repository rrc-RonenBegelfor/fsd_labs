import { Role } from "@prisma/client";
import prisma from "../../../../prisma/client";

export const fetchAllLeaders = async(): Promise<Role[]> => {
    return prisma.role.findMany();
}

export const getLeaderById = async(id: number): Promise<Role | null> => {
    try {
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
    await prisma.role.delete({
        where: {
            id: id
        }
    });
}