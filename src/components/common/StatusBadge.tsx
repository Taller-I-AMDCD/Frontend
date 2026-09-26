import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type SystemStatus = 'online' | 'processing' | 'warning' | 'offline' | 'neutral'

interface StatusBadgeProps {
  status: SystemStatus
  label?: string
  className?: string
}

const statusStyles: Record<SystemStatus, string> = {
  online: 'border-success/25 bg-success/10 text-success',
  processing: 'border-info/25 bg-info/10 text-info',
  warning: 'border-warning/25 bg-warning/10 text-warning',
  offline: 'border-destructive/25 bg-destructive/10 text-destructive',
  neutral: 'border-border bg-muted text-muted-foreground',
}

const defaultLabels: Record<SystemStatus, string> = {
  online: 'En línea',
  processing: 'Procesando',
  warning: 'Advertencia',
  offline: 'Fuera de línea',
  neutral: 'Sin estado',
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn('h-6 gap-1.5 px-2.5', statusStyles[status], className)}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      <span className="hidden sm:inline">{label ?? defaultLabels[status]}</span>
      <span className="sr-only sm:hidden">{label ?? defaultLabels[status]}</span>
    </Badge>
  )
}
