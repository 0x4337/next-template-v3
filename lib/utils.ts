import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { SignJWT, jwtVerify } from "jose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const SECRET_KEY = process.env.SECRET_KEY;

export function generateToken() {
  const token = new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(new TextEncoder().encode(SECRET_KEY));

  return token;
}

export async function verifyToken(token: string | undefined) {
  if (!token) return false;

  try {
    await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));

    return true;
  } catch (error) {
    console.log("token verification failed", error);
    return false;
  }
}
