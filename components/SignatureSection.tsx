"use client";



export function SignatureSection() {
  return (
    <section 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-foreground text-background transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
                <h2 className="font-sans font-black text-5xl sm:text-6xl tracking-tighter leading-none">
                    TECHNICAL<br/>ARSENAL
                </h2>
                <div className="font-mono text-sm uppercase tracking-widest text-primary">
                    [ Available for Internship Summer 2026 ]
                </div>
            </div>

            <div className="border-l-2 border-primary/50 pl-8 space-y-12">
                <div>
                    <h3 className="font-sans font-bold text-primary mb-4 tracking-widest uppercase text-sm">Languages</h3>
                    <p className="font-serif text-xl leading-relaxed text-background/90">
                        TypeScript, Python, Java, C++, SQL (Postgres), HTML/CSS
                    </p>
                </div>
                <div>
                     <h3 className="font-sans font-bold text-primary mb-4 tracking-widest uppercase text-sm">Frameworks & Tools</h3>
                    <p className="font-serif text-xl leading-relaxed text-background/90">
                        Next.js, React, Tailwind, Docker, LangChain, AWS (Lambda, DynamoDB), Git
                    </p>
                </div>
                 <div>
                     <h3 className="font-sans font-bold text-primary mb-4 tracking-widest uppercase text-sm">Domains</h3>
                    <p className="font-serif text-xl leading-relaxed text-background/90">
                        Distributed Systems, Human–AI Interaction, Full Stack Web, Event Safety
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
