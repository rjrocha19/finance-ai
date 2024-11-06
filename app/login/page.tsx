import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid h-full grid-cols-2">
      {/* Right */}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Faça login" fill className="object-cover" />
      </div>
    </div>
  )
}