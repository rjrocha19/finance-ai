import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="grid h-full grid-cols-2">
      {/* Left */}
      <div className="flex flex-col h-full mx-auto max-w-[500px] p-8">
        <Image src="/logo.svg" alt="Logo Finance Ai" width={173} height={39} />
        <h1>Bem-vindo</h1>
        <p>
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
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
