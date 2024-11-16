'use client';

import { ArrowDownUpIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import UpsertTransactionDialog from './upsert-transaction-dialog';

export default function AddTransactionButton() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOPen={setDialogIsOpen}
      />
    </>
  );
}
