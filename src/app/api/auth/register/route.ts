// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import prisma from "@/lib/prisma";

// export async function POST(req: Request) {
//   try {
//     const { email, password, confirmPassword } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
//     }

//     if (password !== confirmPassword) {
//       return NextResponse.json({ error: "Las contraseñas no coinciden" }, { status: 400 });
//     }

//     const hashed = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: { email, password: hashed }
//     });

//     return NextResponse.json({ success: true, user });
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Error en el servidor" },
//       { status: 500 }
//     );
//   }
// }
