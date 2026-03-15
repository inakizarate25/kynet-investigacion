import endo from "../assets/endo.jpeg";
import cardio from "../assets/cardio.jpeg";
import gastro from "../assets/gastro.jpeg";
import diabetes1 from "../assets/diabetes1.png";
import gastro1 from "../assets/gastro1.png";
import cardio1 from "../assets/cardiologia1.png";

export const programas = [
  // programa 1
  {
    id: 1,
    slug: "Endocrinología-Diabetes-Metabolismo",
    title: "Endocrinología, Diabetes y Metabolismo",
    description: "Trastornos hormonales, diabetes y enfermedades suprarrenales",
    img: endo,
    img2: diabetes1,
    enfoque: `
El sistema endocrino es el regulador central de la homeostasis. Nuestro programa aborda desde trastornos metabólicos frecuentes como la Diabetes Tipo 2 y la Obesidad, hasta enfermedades raras y complejas de las glándulas suprarrenales y la hipófisis. Investigamos la preservación de la función de las células β pancreáticas en la Diabetes Tipo 1 y desarrollamos nuevas estrategias para el manejo del Síndrome de Cushing y la Hiperplasia Suprarrenal Congénita, donde el control del cortisol y la ACTH es crítico. El enfoque es integral, uniendo el control metabólico con la salud hormonal y la calidad de vida del paciente.
    `,
    clave: `Diabetes y preservación celular: uso de inmunoterapias para detener la progresión del daño pancreático en estadios tempranos de la enfermedad.

Eje hipotálamo-hipófisis-suprarrenal: evaluación de antagonistas de receptores y nuevas moléculas para regular el exceso de corticoides y andrógenos.

Enfermedades autoinmunes endocrinas: investigación de terapias dirigidas para la Enfermedad de Graves no controlada con fármacos antitiroideos tradicionales.
`,
    objetivo: `Proporcionar soluciones terapéuticas personalizadas para pacientes con desórdenes hormonales y metabólicos complejos, integrando la investigación clínica de vanguardia con el cuidado clínico especializado para restaurar el equilibrio endocrino y mitigar las complicaciones crónicas, buscando un beneficio en la salud de los pacientes.
`,
    lideres: [
      {
        id: 1,
        firstName: "Adrián Esteban",
        lastName: "Proietti",
        role: "MD",
        mt: "102548",
        image: null,
      },
      {
        id: 2,
        firstName: "Karina Ana",
        lastName: "Miragaya",
        role: "MD",
        mt: "108232",
        image: null,
      },
    ],
    miembros: [
      {
        id: 1,
        firstName: "Melania",
        lastName: "Pajón",
        role: "MD",
        mt: "147804",
        image: null,
      },
      {
        id: 2,
        firstName: "Lucila",
        lastName: "Guntren",
        role: "MD",
        mt: "172346",
        image: null,
      },
      {
        id: 3,
        firstName: "Valeria",
        lastName: "Landívar",
        role: "MD",
        mt: "165049",
        image: null,
      },
      {
        id: 4,
        firstName: "Anyella",
        lastName: "Posadas Guzmán",
        role: "MD",
        mt: "139822",
        image: null,
      },
      {
        id: 5,
        firstName: "Gladys",
        lastName: "Vairetta",
        role: "LIC",
        mt: "13417",
        image: null,
      },
    ],
  },

  // programa 2
  {
    id: 2,
    slug: "Gastroenterología-Digestiva",
    title: "Gastroenterología Digestiva",
    img: gastro,
    img2: gastro1,
    description:
      "Enfermedades inflamatorias e inmunomediadas del aparato digestivo",
    enfoque: `
Las enfermedades inflamatorias intestinales (EII), como la Colitis Ulcerosa y la Enfermedad de Crohn, representan un desafío creciente en la salud pública global debido a su naturaleza crónica y debilitante. Nuestro programa se dedica a desentrañar los mecanismos de la inflamación sistémica y local, evaluando terapias que van más allá del control de síntomas. Investigamos moléculas innovadoras, incluyendo inhibidores de citoquinas y nanobodies, que buscan la remisión profunda (clínica, endoscópica e histológica). Además, abordamos patologías con necesidades médicas insatisfechas, como la Enfermedad Celíaca refractaria, donde la dieta libre de gluten no es suficiente para evitar el daño vellositario.
    `,
    clave: `Modulación selectiva: evaluación de terapias que actúan sobre fenotipos específicos (ej. fenotipo eosinofílico en Colitis Ulcerosa).

Nuevas dianas terapéuticas: estudio de la eficacia de fármacos de nueva generación en el mantenimiento de la integridad de la barrera intestinal.

Inmunología de precisión: investigación de respuestas inmunitarias en pacientes con Enfermedad Celíaca no respondedora al tratamiento estándar.
`,
    objetivo: `Liderar la investigación traslacional en gastroenterología para transformar el paradigma del tratamiento, pasando del manejo paliativo de la inflamación a estrategias terapéuticas que permitan la restauración funcional completa del tracto digestivo y la prevención de complicaciones a largo plazo.
`,
    lideres: [
      {
        id: 1,
        firstName: "Juan Sebastián",
        lastName: "Lasa",
        role: "MD",
        mt: "119929",
        image: null,
      },
      {
        id: 2,
        firstName: "Sonia Isabel",
        lastName: "Niveloni",
        role: "MD",
        mt: "61395",
        image: null,
      },
    ],
    miembros: [
      {
        id: 1,
        firstName: "Agustín Izaguirre",
        lastName: "Lasa",
        role: "MD",
        mt: "123398",
        image: null,
      },
      {
        id: 2,
        firstName: "José Eduardo",
        lastName: "Stringa",
        role: "MD",
        mt: "137606",
        image: null,
      },
      {
        id: 3,
        firstName: "María Luján",
        lastName: "Espinet",
        role: "MD",
        mt: "165371",
        image: null,
      },
      {
        id: 4,
        firstName: "Soledad Emilia",
        lastName: "Martínez",
        role: "MD",
        mt: "157183",
        image: null,
      },
    ],
  },

  // programa 3
  {
    id: 3,
    slug: "Cardiología-Prevención-Cardiovascular",
    title: "Cardiología y Prevención Cardiovascular",
    img: cardio,
    img2: cardio1,
    description: "Prevención de eventos y manejo del riesgo aterosclerótico",
    enfoque: `
A pesar de los avances en el control del colesterol LDL, la Enfermedad Cardiovascular Aterosclerótica (ASCVD) sigue siendo la principal causa de mortalidad. Nuestro programa se enfoca en el "riesgo residual" cardiovascular, investigando factores genéticos y metabólicos que antes no tenían tratamiento específico. Nos centramos en estudios de resultados cardiovasculares para evaluar moléculas que impactan directamente en la reducción de MACE (Eventos Adversos Cardiovasculares Mayores), como infartos de miocardio y accidentes cerebrovasculares, especialmente en poblaciones de alto riesgo o con enfermedad establecida.
    `,
    clave: `Lípidos y lipoproteínas: investigación pionera en la reducción de la Lipoproteína(a) con fármacos que abordan un factor de riesgo genético clave.

Protección cardiovascular en diabetes: evaluación del impacto cardiovascular de nuevas terapias metabólicas.

Prevención secundaria: ensayos clínicos de Fase III destinados a estabilizar la placa aterosclerótica y prevenir recurrencias en pacientes vulnerables.
`,
    objetivo: `Desarrollar y validar intervenciones farmacológicas disruptivas que reduzcan la carga de morbimortalidad cardiovascular global, optimizando la prevención primaria y secundaria mediante el control preciso de los mecanismos aterogénicos y trombóticos.
`,
    lideres: [
      {
        id: 1,
        firstName: "Federico Daniel",
        lastName: "López",
        role: "MD",
        mt: "88389",
        image: null,
      },
      {
        id: 2,
        firstName: "Roberto Carlos",
        lastName: "Campos",
        role: "MD",
        mt: "130398",
        image: null,
      },
    ],
    miembros: [
      {
        id: 1,
        firstName: "Natalia",
        lastName: "Coria",
        role: "MD",
        mt: "143178",
        image: null,
      },
      {
        id: 2,
        firstName: "Emilio Víctor",
        lastName: "Montecchio",
        role: "MD",
        mt: "81657",
        image: null,
      },
      {
        id: 3,
        firstName: "Emiliano",
        lastName: "Levoratti",
        role: "MD",
        mt: "110208",
        image: null,
      },
      {
        id: 4,
        firstName: "Marcelo",
        lastName: "Bressan",
        role: "MD",
        mt: "159247",
        image: null,
      },
    ],
  },
];
