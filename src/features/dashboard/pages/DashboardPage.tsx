import { Activity, Cpu, Network, ShieldCheck } from 'lucide-react'

import { MetricCard } from '@/components/common/MetricCard'
import { PageHeader } from '@/components/common/PageHeader'
import { SectionCard } from '@/components/common/SectionCard'
import { StatusBadge } from '@/components/common/StatusBadge'

export function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-6 p-4 md:p-6 lg:p-8">
      <PageHeader
        title="Dashboard Global"
        description="Visión general del procesamiento causal distribuido y el estado del sistema."
      >
        <StatusBadge status="neutral" label="Datos pendientes" />
      </PageHeader>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Métricas principales">
        <MetricCard title="Ejecuciones activas" value="—" description="Sin fuente conectada" icon={<Activity />} />
        <MetricCard title="Agentes disponibles" value="—" description="Sin fuente conectada" icon={<Cpu />} />
        <MetricCard title="Relaciones causales" value="—" description="Sin fuente conectada" icon={<Network />} />
        <MetricCard title="Auditorías XAI" value="—" description="Sin fuente conectada" icon={<ShieldCheck />} />
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
        <SectionCard
          title="Actividad de descubrimiento causal"
          description="Área reservada para la evolución de ejecuciones y métricas del sistema."
        >
          <Placeholder label="Visualización analítica pendiente de integración" />
        </SectionCard>
        <SectionCard
          title="Estado del ecosistema"
          description="Resumen futuro de agentes, servicios y comunicaciones."
        >
          <Placeholder label="Telemetría multiagente pendiente de integración" />
        </SectionCard>
      </section>
    </div>
  )
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="grid min-h-52 place-items-center rounded-lg border border-dashed bg-muted/20 p-6 text-center">
      <p className="max-w-xs text-sm leading-6 text-muted-foreground">{label}</p>
    </div>
  )
}
