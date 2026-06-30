import { useEffect, useState } from "react";

interface Estado {
    id: number;
    sigla: string;
    nome: string;
}

interface Cidade {
    id: number;
    nome: string;
}

export function useLocalidades() {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [loadingEstados, setLoadingEstados] = useState(false);
  const [loadingCidades, setLoadingCidades] = useState(false);

  useEffect(() => {
    buscarEstados();
  }, []);

  async function buscarEstados() {
    setLoadingEstados(true);

    const response = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );

    const data = await response.json();

    data.sort((a: Estado, b: Estado) =>
      a.nome.localeCompare(b.nome)
    );

    setEstados(data);
    setLoadingEstados(false);
  }

  async function buscarCidades(uf: string) {
    setLoadingCidades(true);

    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    );

    const data = await response.json();

    setCidades(data);
    setLoadingCidades(false);
  }

  return {
    estados,
    cidades,
    loadingEstados,
    loadingCidades,
    buscarCidades,
  };
}