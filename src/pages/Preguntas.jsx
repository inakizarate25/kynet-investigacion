import FaqCard from "./../components/FaqCard";
import { faqs } from "./../data/faqs";

const Preguntas = () => {
  return (
    <section className="bg-muted px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark">Preguntas frecuentes</h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#e2ec55]" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preguntas;
