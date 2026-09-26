import { ShieldCheck } from 'lucide-react'

import { PageHeader } from '@/components/common/PageHeader'
import { SectionCard } from '@/components/common/SectionCard'
import { StatusBadge } from '@/components/common/StatusBadge'

export function CausalAuditPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-6 p-4 md:p-6 lg:p-8">
      <PageHeader
        title="Auditoría Causal y Explicabilidad"
        description="Análisis de relaciones descartadas, factores de confusión y decisiones XAI."
      >
        <StatusBadge status="neutral" label="Vista preliminar" />
      </PageHeader>

      <section className="grid gap-4 xl:grid-cols-2">
        <SectionCard
          title="Trazabilidad de relaciones"
          description="Espacio reservado para revisar decisiones y evidencias causales."
        >
          <AuditPlaceholder label="Registro de auditoría pendiente de integración" />
        </SectionCard>
        <SectionCard
          title="Explicabilidad del modelo"
          description="Espacio reservado para factores de confusión y criterios XAI."
        >
          <AuditPlaceholder label="Explicaciones causales pendientes de integración" />
        </SectionCard>
      </section>
    </div>
  )
}

function AuditPlaceholder({ label }: { label: string }) {
  return (
    <div className="grid min-h-64 place-items-center rounded-lg border border-dashed bg-muted/20 p-8 text-center">
      <div>
        <ShieldCheck className="mx-auto size-8 text-primary" aria-hidden="true" />
        <p className="mt-4 text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}
