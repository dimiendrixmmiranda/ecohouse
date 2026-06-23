# ⚡ EcoHouse

> **EcoHouse — Plataforma Inteligente de Monitoramento e Simulação de Consumo de Energia Residencial**

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![license](https://img.shields.io/badge/license-Acadêmico-blue)
![tech](https://img.shields.io/badge/stack-Next.js%20%7C%20TypeScript%20%7C%20Energy-informational)

---

## 📌 Sobre o Projeto

O **EcoHouse** é uma plataforma interativa desenvolvida para analisar, monitorar e simular o consumo de energia elétrica em residências.

O sistema permite que o usuário cadastre equipamentos elétricos, estime o consumo mensal de energia, acompanhe gastos e identifique oportunidades de economia através de simulações e relatórios inteligentes.

Além da parte matemática e física, o projeto busca conscientizar sobre eficiência energética e sustentabilidade, oferecendo uma experiência moderna e educativa.

---

## 🎯 Objetivo

Criar uma solução tecnológica capaz de:

* Simular o consumo de energia elétrica de uma residência;
* Calcular gastos mensais de energia;
* Identificar equipamentos com maior consumo;
* Propor estratégias de economia energética;
* Demonstrar conceitos de física e matemática aplicados ao consumo elétrico;
* Integrar conhecimentos acadêmicos em uma aplicação prática.

---

## 🧠 Abordagem Interdisciplinar

Este projeto foi desenvolvido com base nas disciplinas do curso de Engenharia da Computação, integrando conceitos matemáticos, físicos, computacionais e de inovação.

---

### 📘 Cálculo Diferencial e Integral II

Aplicação de conceitos matemáticos para modelagem e análise do consumo energético.

**No sistema:**

* Taxa de variação do consumo ao longo do tempo;
* Modelagem de crescimento do consumo;
* Representação gráfica dos dados;
* Análise de comportamento energético.

---

### 📐 Métodos Matemáticos

Utilização de ferramentas matemáticas para interpretação e previsão de dados.

**No sistema:**

* Modelos preditivos de consumo;
* Estatística aplicada;
* Médias e projeções de gastos;
* Análise de eficiência energética.

---

### ⚡ Física Geral e Experimental – Energia

Aplicação de conceitos fundamentais de eletricidade e energia.

**No sistema:**

* Potência elétrica;
* Energia consumida;
* Consumo em kWh;
* Eficiência energética;
* Conversão de unidades elétricas.

---

### 💡 Design Thinking e Inovação dos Modelos de Negócios

Desenvolvimento de uma solução voltada para problemas reais enfrentados pelos consumidores.

**No sistema:**

* Foco na experiência do usuário;
* Interface intuitiva;
* Solução para redução de custos;
* Incentivo à sustentabilidade;
* Possibilidade de expansão comercial.

---

### 🏗️ Desenho Técnico Projetivo

Representação visual da residência e distribuição elétrica.

**No sistema:**

* Planta simplificada da residência;
* Organização dos cômodos;
* Distribuição dos equipamentos;
* Representações gráficas do consumo.

---

## ⚙️ Funcionalidades

* Cadastro de cômodos;
* Cadastro de equipamentos elétricos;
* Simulação de consumo energético;
* Estimativa de gastos mensais;
* Cálculo automático em kWh;
* Dashboard com gráficos;
* Relatórios de consumo;
* Histórico de simulações;
* Sugestões de economia;
* Comparação entre cenários de consumo.

---

## 🏗️ Arquitetura do Projeto

```bash
/src
 ├── /app            # Rotas da aplicação
 ├── /components     # Componentes reutilizáveis
 ├── /contexts       # Context API
 ├── /hooks          # Hooks personalizados
 ├── /constants      # Constantes e tarifas
 ├── /utils          # Funções auxiliares
 ├── /services       # Regras de negócio
 ├── /simulations    # Motor de cálculos
 ├── /types          # Interfaces e tipagens
 └── /api            # Integração backend
```

---

## 🚀 Tecnologias

* **Frontend:** Next.js, React, TypeScript
* **Estilização:** Tailwind CSS
* **Animações:** Framer Motion
* **Gráficos:** Recharts
* **Backend:** Node.js
* **Banco de Dados:** PostgreSQL (planejado)
* **ORM:** Prisma (planejado)

---

## 🧮 Conceitos Aplicados

### Potência Elétrica

```math
P = V \cdot I
```

Onde:

* P = Potência (Watts)
* V = Tensão (Volts)
* I = Corrente (Ampères)

---

### Consumo de Energia

```math
E = P \cdot t
```

Onde:

* E = Energia consumida
* P = Potência
* t = Tempo de utilização

---

### Conversão para kWh

```math
kWh = \frac{P \cdot t}{1000}
```

---

### Cálculo de Custo

```math
C = kWh \cdot tarifa
```

---

## ▶️ Como Executar

```bash
# Clonar o projeto
git clone https://github.com/seu-usuario/ecohouse.git

# Entrar na pasta
cd ecohouse

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

Acesse:

```bash
http://localhost:3000
```

---

## 📈 Roadmap (Evolução do Projeto)

* [x] Estrutura inicial
* [ ] Cadastro de equipamentos
* [ ] Simulação de consumo
* [ ] Dashboard de gastos
* [ ] Gráficos de consumo
* [ ] Histórico de simulações
* [ ] Sistema de autenticação
* [ ] Relatórios em PDF
* [ ] Comparação entre cenários
* [ ] Integração com APIs de energia
* [ ] Monitoramento em tempo real

---

## 🔮 Melhorias Futuras

* Integração com dispositivos IoT;
* Monitoramento em tempo real;
* Simulação de energia solar;
* Inteligência artificial para previsão de gastos;
* Aplicativo mobile;
* Sistema de metas de economia;
* Alertas de consumo excessivo;
* Comparação entre diferentes residências;
* Exportação de relatórios completos.

---

## 👨‍💻 Autor

**Dimi Endrix Martins Miranda**
Estudante de Engenharia da Computação

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e portfólio.

---

# ⚡ EcoHouse

### “Transformando consumo em consciência energética.”
