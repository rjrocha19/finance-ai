import { ArrowDownUpIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export default function AddTransactionButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full font-bold">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Transação</DialogTitle>
          <DialogDescription className="text-pretty">
            Insira as informações abaixo
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" className="w-full rounded-xl">
            Cancelar
          </Button>
          <Button variant="default" className="w-full rounded-xl">
            Adicionar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
