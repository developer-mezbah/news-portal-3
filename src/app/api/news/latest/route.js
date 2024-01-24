import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req, res){
    try {
        const prisma = new PrismaClient()
        const result = await prisma.news_list.findMany({
            // take: 5,
            // select: {id: true, title: true, short_des: true, img1: true, img2: true, img3: true, img4: true, createdAt: true},
            where: {userID: 1}
        })
        return NextResponse.json({status: "success", data: result})
    } catch (error) {
        return NextResponse.json({status: "fail", data: error})
    }
}