import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req, res){
    try {
        const {searchParams} = new URL(req.url)
        const type = searchParams.get('type')
        const prisma = new PrismaClient()
        const result = await prisma.news_list.findMany({
            where: {type}
        })
        return NextResponse.json({status: "success", data: result})
    } catch (error) {
        return NextResponse.json({status: "fail", data: error})
    }
}