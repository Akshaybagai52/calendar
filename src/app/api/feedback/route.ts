import { NextRequest, NextResponse } from "next/server";
// import prisma from "../../../../lib/db";

export const POST =(req: NextRequest, res: NextResponse)=>{
try {
    return NextResponse.json({ message: "true" }, { status: 200 });

    
} catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
}
} 


