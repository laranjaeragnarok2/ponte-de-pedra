import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  { name: "Ana Clara", role: "Diretora e Roteirista", image: "https://placehold.co/100x100.png", hint: "woman face" },
  { name: "Bruno Gomes", role: "Diretor de Fotografia", image: "https://placehold.co/100x100.png", hint: "man face" },
  { name: "Carla Dias", role: "Produtora Executiva", image: "https://placehold.co/100x100.png", hint: "woman face glasses" },
  { name: "Daniel Rocha", role: "Editor e Colorista", image: "https://placehold.co/100x100.png", hint: "man face beard" },
];

export function Team() {
  return (
    <section id="equipe" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            A Equipe Por Trás do Legado
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Profissionais apaixonados e dedicados que uniram seus talentos por uma causa maior.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center border-0 shadow-none">
              <CardHeader className="items-center p-4">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-primary">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
