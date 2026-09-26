# AMDCD Frontend

Frontend del centro de comando analítico de **Arquitectura Multiagente para el Descubrimiento Causal Distribuido: Filtrado de Relaciones Espurias y Negociación Dinámica de Restricciones**.

La aplicación permitirá visualizar métricas, grafos causales, auditoría XAI y el estado del ecosistema multiagente.

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0`
- npm (verificado con la versión 11.6.2)

## Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

## Desarrollo local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Compilación

Genera una compilación de producción:

```bash
npm run build
```

## Estructura principal

```text
src/
├── app/                 # Configuración y componente raíz
├── router/              # Definición de rutas
├── assets/              # Recursos estáticos importados por la aplicación
├── components/
│   ├── common/          # Componentes compartidos
│   ├── layout/          # Estructuras de página
│   └── ui/              # Primitivas de interfaz
├── features/
│   ├── dashboard/       # Panel analítico
│   ├── causal-graph/    # Visualización del grafo causal
│   ├── causal-audit/    # Auditoría y explicabilidad
│   └── multiagent/      # Estado del ecosistema multiagente
├── hooks/               # Hooks reutilizables
├── lib/                 # Configuración de bibliotecas
├── mocks/               # Datos simulados para desarrollo
├── services/            # Acceso a servicios externos
├── store/               # Estado global
├── styles/              # Estilos globales
├── types/               # Tipos compartidos
└── utils/               # Utilidades generales
```

El alias `@` apunta a `src/` para simplificar los imports internos.
