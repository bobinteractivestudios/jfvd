import Image from "next/image";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav theme="light" />
      <div className="bg-[#333] p-3 sm:p-5 md:p-8">
        <div className="relative mx-auto aspect-[2/1] w-full max-w-[768px]">
          <Image
            src="/hero.jpg"
            alt="JFVD bijeenkomst"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <section className="mx-auto max-w-2xl px-4 py-12 text-center sm:py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Hier komt alles samen: politiek, gezelligheid,
          <br />
          ontwikkeling en sport!
        </h1>
        <p className="mt-6 font-serif text-lg">
          Hier wil je bijhoren! Mensen die niet alleen iets anders willen,
          maar ook bereid zijn de handen uit de mouwen te steken om dat te
          realiseren. Dat begint bij JFVD.
        </p>
        <p className="mt-4 font-serif">
          Niet voor niets zijn wij dan ook de grootste politieke
          jongerenbeweging van de Benelux! Word lid en maak vrienden op onze
          unieke events, ontwikkel jezelf tijdens lezingen en trainingen,
          schrijf mee aan ons spraakmakende tijdschrift, doe mee aan
          sportactiviteiten, organiseer de beste feesten, ontwikkel je
          debatvaardigheden, bezoek de mooiste musea en concerten, of draag
          je steentje bij door actief te worden voor onze beweging - alles
          kan, alles mag!
        </p>
      </section>
    </div>
  );
}
