// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import prisma from "@/lib/prisma";
// import jwt from "jsonwebtoken";

// export async function POST(req: Request) {
//   const { email } = await req.json();

//   const user = await prisma.user.findUnique({ where: { email } });

//   if (!user) {
//     return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
//   }

//   const token = jwt.sign(
//     { id: user.id, email: user.email },
//     process.env.JWT_SECRET!,
//     { expiresIn: "7d" }
//   );

//   return NextResponse.json({ success: true, token });
// }
