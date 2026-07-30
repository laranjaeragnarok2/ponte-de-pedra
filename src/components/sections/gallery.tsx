import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, ShieldCheck, FileCheck, ScrollText, Landmark } from "lucide-react";

const officialRecords = [
  {
    icon: Landmark,
    title: "Tombamento Provisório Municipal",
    subtitle: "Decreto Nº 1.799 (2020)",
    description: "Reconhecimento oficial da Gruta da Ponte de Pedra como patrimônio municipal protegido por lei.",
    href: "https://drive.google.com/file/d/1AKQQTK6ZY-5TTFmgc2wTt4LhOpb2Kh7r/view?usp=drivesdk",
    badge: "Documento Oficial",
  },
  {
    icon: ScrollText,
    title: "Petição e Abaixo-Assinado",
    subtitle: "Mobilização Nacional no Change.org",
    description: "Milhares de vozes unidas pelo impedimento de impactos ambientais e arqueológicos irreversíveis na região.",
    href: "https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions",
    badge: "Engajamento Social",
  },
  {
    icon: FileCheck,
    title: "Relatório Técnico Multidisciplinar",
    subtitle: "Estudo de Impacto & Arqueologia",
    description: "Diagnóstico realizado por arqueólogos, geólogos e ambientalistas comprovando a fragilidade do sítio GO00381.",
    href: "https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions",
    badge: "Estudo Científico",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="w-full py-16 md:py-28 lg:py-36 bg-secondary/50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Acervo de Salvaguarda
          </span>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Documentação e Registros Oficiais
          </h2>
          <div className="section-divider w-16 mt-6 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed">
            Consulte os decretos, relatórios técnicos e abaixo-assinados que fundamentam a preservação da Ponte de Pedra.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officialRecords.map((record, index) => {
            const IconComp = record.icon;
            return (
              <Card key={index} className="bg-background hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group border-border/60">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComp className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary/80 mb-2">
                    {record.badge}
                  </span>
                  <h4 className="font-headline text-xl font-bold mb-1">{record.title}</h4>
                  <span className="text-xs font-mono text-muted-foreground mb-3">{record.subtitle}</span>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{record.description}</p>
                  <Button asChild variant="outline" size="sm" className="rounded-full w-full">
                    <a href={record.href} target="_blank" rel="noopener noreferrer">
                      Acessar Registro <ExternalLink className="w-3.5 h-3.5 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
