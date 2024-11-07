import Image from 'next/image'
import { Button } from '../_components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const { userId } = await auth()
  if (userId) {
    redirect('/')
  }
  return (
    <div className="grid h-full grid-cols-2">
      {/* Left */}
      <div className="flex flex-col h-full mx-auto max-w-[550px] justify-center p-8">
        <Image
          src="/logo.svg"
          alt="Logo Finance Ai"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Fazer Login ou criar uma conta
          </Button>
        </SignInButton>
      </div>
      {/* Right */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
