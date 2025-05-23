import Header from "@/app/components/landing-page/header";
import Button from "@/app/components/ui/button";

export default async function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      <div className="flex gap-4">
        <Button className="cursor-pointer">R$ 9,90 / mês</Button>
        <Button className="cursor-pointer">R$ 99,90 Vitalício</Button>
      </div>
    </div>
  );
}