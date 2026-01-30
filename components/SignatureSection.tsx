"use client";



export function SignatureSection() {
  return (
    <section 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-foreground text-background transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            
            <div className="space-y-8">
                <h2 className="font-sans font-black text-5xl sm:text-6xl tracking-tighter leading-none">
                    TECHNICAL<br/>SKILLS
                </h2>
                <div className="font-mono text-sm uppercase tracking-widest text-[#FF5722]">
                    [ WHAT I UTILIZE TO BUILD ]
                </div>
            </div>

            <div className="border-l-2 border-primary/50 pl-6 sm:pl-8 space-y-8 sm:space-y-12">
                <div>
                    <h3 className="font-sans font-bold text-primary mb-4 tracking-widest uppercase text-sm">Languages</h3>
                    <p className="font-serif text-xl leading-relaxed text-background/90">
                        JavaScript, TypeScript, Python, Java, SQL, HTML/CSS
                    </p>
                </div>
                <div>
                     <h3 className="font-sans font-bold text-primary mb-4 tracking-widest uppercase text-sm">Frameworks & Platforms</h3>
                    <p className="font-serif text-xl leading-relaxed text-background/90">
                        React, React Native, Angular, Node.js, Expo, Firebase, MongoDB, REST APIs, Salesforce Apex
                    </p>
                </div>
                 <div>
                     <h3 className="font-sans font-bold text-primary mb-4 tracking-widest uppercase text-sm">Tools & Practices</h3>
                    <p className="font-serif text-xl leading-relaxed text-background/90">
                        Git, Docker, CI/CD, Agile, Scrum, NPM, Gradle, Tableau
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
