import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST ( req: Request) {
try {
    const { userId } = auth();
    const sTitle = await req.json();
    const title = String(sTitle);
    if (!userId) {
        return new NextResponse("unauthorized", { status: 401});
    }
    const course = await db.course.create({
        data: {
            userId,
            title,
        }
    }); 

    return NextResponse.json(course); 
} catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("internal error", {status : 500});
}
}