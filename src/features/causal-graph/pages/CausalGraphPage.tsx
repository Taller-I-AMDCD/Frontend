import { Network } from 'lucide-react'

import { PageHeader } from '@/components/common/PageHeader'
import { SectionCard } from '@/components/common/SectionCard'
import { StatusBadge } from '@/components/common/StatusBadge'

export function CausalGraphPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-6 p-4 md:p-6 lg:p-8">
      <PageHeader
        title="Explorador de Grafos Causales"
        description="Exploración interactiva de variables, relaciones y estructuras causales."
      >
        <StatusBadge status="neutral" label="Vista preliminar" />
      </PageHeader>

      <SectionCard
        title="Espacio de exploración causal"
        description="La visualización interactiva del grafo se incorporará en una sesión posterior."
      >
        <div className="grid min-h-[28rem] place-items-center rounded-lg border border-dashed bg-muted/20 p-8 text-center">
          <div className="max-w-md">
            <Network className="mx-auto size-8 text-primary" aria-hidden="true" />
            <p className="mt-4 text-sm font-medium text-foreground">Lienzo causal preparado</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Aquí se visualizarán variables, aristas y resultados del descubrimiento causal.
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
