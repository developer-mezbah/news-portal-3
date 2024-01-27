const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

export async function POST(req, res){
    try {
        const reqBody = await req.json()
        const prisma = new PrismaClient()
        const result = await prisma.news_list.findMany({
            where: {title: {contains: reqBody}}
        })
        return NextResponse.json({status: "success", data: result})
    } catch (error) {
        return NextResponse.json({status: "fail", data: error})
    }
}