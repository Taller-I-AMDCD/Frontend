import { Cpu } from 'lucide-react'

import { PageHeader } from '@/components/common/PageHeader'
import { SectionCard } from '@/components/common/SectionCard'
import { StatusBadge } from '@/components/common/StatusBadge'

export function MultiagentPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-6 p-4 md:p-6 lg:p-8">
      <PageHeader
        title="Centro de Comando Multiagente"
        description="Supervisión de agentes distribuidos, comunicación y negociación de restricciones."
      >
        <StatusBadge status="neutral" label="Vista preliminar" />
      </PageHeader>

      <section className="grid gap-4 xl:grid-cols-[minmax(18rem,1fr)_minmax(0,2fr)]">
        <SectionCard
          title="Agentes distribuidos"
          description="Inventario y estado operativo de agentes."
        >
          <AgentPlaceholder label="Agentes pendientes de integración" />
        </SectionCard>
        <SectionCard
          title="Coordinación y negociación"
          description="Actividad futura de comunicación y resolución de restricciones."
        >
          <AgentPlaceholder label="Canal de coordinación pendiente de integración" />
        </SectionCard>
      </section>
    </div>
  )
}

function AgentPlaceholder({ label }: { label: string }) {
  return (
    <div className="grid min-h-64 place-items-center rounded-lg border border-dashed bg-muted/20 p-8 text-center">
      <div>
        <Cpu className="mx-auto size-8 text-primary" aria-hidden="true" />
        <p className="mt-4 text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}
