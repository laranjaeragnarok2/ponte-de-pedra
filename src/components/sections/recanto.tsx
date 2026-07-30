import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Compass, ShieldCheck, TreePine, Sparkles } from "lucide-react";

export function RecantoSection() {
  return (
    <section id="recanto" className="w-full py-16 md:py-28 bg-gradient-to-b from-background via-emerald-950/10 to-background relative overflow-hidden">
      {/* Subtle decorative background circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Ecossistema & Projeto Irmão
          </span>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Projeto Recanto: Preservação & Ecoturismo
          </h2>
          <div className="section-divider w-16 mt-6 mb-6"></div>
          <p className="max-w-[750px] text-muted-foreground text-base md:text-lg leading-relaxed">
            Uma iniciativa complementar focada no desenvolvimento sustentável, na valorização do ecoturismo consciente e na conservação ambiental da região da Ponte de Pedra.
          </p>
        </div>

        {/* Featured Card */}
        <Card className="border-emerald-500/30 bg-card/80 backdrop-blur-md shadow-2xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold font-headline text-foreground">
                    Recanto Ponte de Pedra
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    O <strong>Recanto</strong> conecta visitantes, comunidade local e pesquisadores. O projeto desenvolve soluções de ecoturismo responsável, promovendo o respeito à biodiversidade e salvaguardando a área no entorno do Rio Ponte de Pedra.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border/40">
                    <Compass className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider">Ecoturismo</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Guias e trilhas sustentáveis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border/40">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider">Proteção</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Preservação do bioma</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border/40">
                    <TreePine className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider">Comunidade</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Conscientização ambiental</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-md">
                    <a href="https://github.com/laranjaeragnarok2/Recanto" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Ver Repositório no GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-emerald-500/40 hover:bg-emerald-500/10">
                    <a href="https://pontedepedra.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Acessar Portal do Recanto
                    </a>
                  </Button>
                </div>
              </div>

              {/* Graphic Box */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-900/40 border border-emerald-500/20 text-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <TreePine className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold font-headline text-white mb-2">Código Aberto & Iniciativa Comunitária</h4>
                <p className="text-xs text-emerald-200/80 leading-relaxed max-w-xs mb-4">
                  Acompanhe o desenvolvimento do projeto Recanto no GitHub e contribua para a valorização deste ecossistema.
                </p>
                <span className="inline-block text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                  github.com/laranjaeragnarok2/Recanto
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
