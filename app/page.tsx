import Image from "next/image";
import { MyChart } from "@/components/ui/mychart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
        Resultados de la pobreza en México{" "}
        <span className="text-blue-600">con una perspectiva multidimensional</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-center mb-6">
        Porcentaje de la muestra en cada criterio
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-6xl">
        <div className="moreinfo bg-white p-6 rounded-lg shadow-lg flex-1">
          <h3 className="text-xl font-semibold mb-4">Criterios:</h3>
          <ul className="lista list-disc list-inside text-lg space-y-2">
            <li>
              Criterio 1.- Tiene de tres a 21 años, no cuenta con la educación obligatoria y no asiste a un centro de educación formal.
            </li>
            <li>
              Criterio 2.- Tiene 22 años o más, nació a partir del año 1998 y no ha terminado la educación obligatoria (media superior).
            </li>
            <li>
              Criterio 3.- Tiene 16 años o más, nació entre 1982 y 1997 y no cuenta con el nivel de educación obligatorio vigente en el momento en que debía haberlo cursado (secundaria completa).
            </li>
            <li>
              Criterio 4.- Tiene 16 años o más, nació antes de 1982 y no cuenta con el nivel de educación obligatorio vigente en el momento en que debía haberlo cursado (primaria completa).
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <MyChart />
        </div>
      </div>
    </main>
  );
}
