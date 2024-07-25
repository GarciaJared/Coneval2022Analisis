"use client";

import { Pie, PieChart, Cell, Tooltip } from "recharts";
import { useEffect, useState } from 'react';
import { ChartContainer } from "@/components/ui/chart";

type CriterioName = 'criterio1' | 'criterio2' | 'criterio3' | 'criterio4';

const chartConfig: Record<CriterioName, { label: string; color: string }> = {
  criterio1: {
    label: "Criterio 1",
    color: "#2563eb",
  },
  criterio2: {
    label: "Criterio 2",
    color: "#60a5fa",
  },
  criterio3: {
    label: "Criterio 3",
    color: "#34d399",
  },
  criterio4: {
    label: "Criterio 4",
    color: "#f87171",
  },
};

export function MyChart() {
  const [data, setData] = useState<{ name: CriterioName; value: number; }[]>([]);

  useEffect(() => {
    console.log("Fetching data from /api/resultados");
  
    fetch("/api/resultados")
      .then((res) => {
        console.log("Received response", res);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Parsed JSON data", data);
  
        // Verifica la estructura de los datos antes de usar
        if (data.Porcentaje && Array.isArray(data.Porcentaje) && data.Porcentaje.length >= 4) {
          const chartData: { name: CriterioName; value: number }[] = [
            { name: "criterio1", value: parseFloat(data.Porcentaje[0].toFixed(2)) },
            { name: "criterio2", value: parseFloat(data.Porcentaje[1].toFixed(2)) },
            { name: "criterio3", value: parseFloat(data.Porcentaje[2].toFixed(2)) },
            { name: "criterio4", value: parseFloat(data.Porcentaje[3].toFixed(2)) },
          ];
  
          setData(chartData);
          console.log("Chart data set in state", chartData);
        } else {
          console.error("Unexpected data structure", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);
  

  if (data.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-[450px] w-full">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label={({ name, value }) => `${chartConfig[name as CriterioName].label}: ${value}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={chartConfig[entry.name].color} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
      </PieChart>
    </ChartContainer>
  );
}
