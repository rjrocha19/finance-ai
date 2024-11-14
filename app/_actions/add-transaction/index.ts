'use server';

import { db } from '@/app/_lib/prisma';
import { auth } from '@clerk/nextjs/server';
import type { Prisma } from '@prisma/client';
import { addTransactionSchema } from '../schema';

export const addTransaction = async (
  params: Omit<Prisma.TransactionCreateInput, 'userId'>,
) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error('Unauthorized');
  }
  await db.transaction.create({ data: { ...params, userId } });
};
