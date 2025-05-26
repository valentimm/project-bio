"use client"

import { createLink } from "@/app/actions/create-link";
import { verifyLink } from "@/app/actions/verify-link";
import Button from "@/app/components/ui/button"
import TextInput from "@/app/components/ui/text-input"
import { sanitizeLink } from "@/app/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateLinkForm() {
    const router = useRouter();

    const [link, setLink] = useState("");
    const [error, setError] = useState("");

    function handleLink (e: ChangeEvent<HTMLInputElement>) {
        setLink(sanitizeLink(e.target.value));
        setError("");
    }

    async function handleSubmit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Quando o usuário não escreve um link
        if(link.length === 0) return setError("Escolha um link primeiro 😅");

        // Quando o usuário escolhe um link que já existe
        const isLinkTaken = await verifyLink(link);
        if(isLinkTaken) return setError("Esse link já existe 😢");

        // Criar o perfil
        const isLinkCreated = await createLink(link);

        if (!isLinkCreated) {
            return setError("Ocorreu um erro ao criar o link 😢");
        }

        router.push(`/${link}`);
    }

return (
    <>
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span>projectinbio.com/</span>
        <TextInput
            value={link}
            onChange={handleLink}/>
        <Button className="w-[126px]">Criar</Button>
    </form>
    <div>
      <span className="text-accent-pink">{error}</span>
    </div>
    </>
)
}