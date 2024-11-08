import { ArrowDownUpIcon } from 'lucide-react';
import { Button } from '../_components/ui/button';
import { DataTable } from '../_components/ui/data-table';
import { db } from '../_lib/prisma';
import { transactionColumns } from './_columns';

export default async function Transactions() {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      {/* Title and button */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
}
