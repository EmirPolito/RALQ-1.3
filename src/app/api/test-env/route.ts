export function GET() {
  return Response.json({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "NO LLEGA",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "NO LLEGA",
  });
}
