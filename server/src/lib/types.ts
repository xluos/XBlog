import { Prisma } from '../generated/prisma-client'
import { Request } from "express";
export interface Context {
  prisma: Prisma
  request: Request
}

export interface Token {
  userId: string
}