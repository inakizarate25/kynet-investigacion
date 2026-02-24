import FaqCard from "../components/FaqCard.jsx";
import { faqs } from "../data/faqs.js";
import PageHero from "../components/PageHero.jsx";
import PageTransition from "../components/PageTransition.jsx";

const Preguntas = () => {
  return (
    <PageTransition>
      {/* Title */}
      {/* <section className="relative h-[40vh] w-full bg-gray-800">
        <div className="absolute inset-0 bg-gray-900/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h2 className="text-4xl font-bold text-white">
            Preguntas Frecuentes
          </h2>
        </div>
      </section> */}
      <PageHero
        title="Preguntas"
        highlight="Frecuentes"
        subtitle="Despeja tus dudas sobre los procesos de investigación y participación."
        image="/assets/bg-qya.jpg"
      />
      <section className="bg-muted px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq) => (
              <FaqCard
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Preguntas;
