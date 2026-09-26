import { BrainCircuit, PanelLeftClose, X } from 'lucide-react'
import { NavLink } from 'react-router'

import { navigationItems } from '@/app/router/navigation'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface AppSidebarProps {
  collapsed: boolean
  mobileOpen: boolean
  onClose: () => void
  onNavigate: () => void
}

export function AppSidebar({
  collapsed,
  mobileOpen,
  onClose,
  onNavigate,
}: AppSidebarProps) {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-50 flex w-72 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground transition-[width,transform] duration-200 lg:sticky lg:top-0 lg:h-svh lg:translate-x-0',
        mobileOpen ? 'translate-x-0' : '-translate-x-full',
        collapsed ? 'lg:w-20' : 'lg:w-72',
      )}
      aria-label="Navegación principal"
    >
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
          <BrainCircuit className="size-5" aria-hidden="true" />
        </div>
        <div className={cn('min-w-0', collapsed && 'lg:sr-only')}>
          <p className="font-semibold tracking-[0.14em]">AMDCD</p>
          <p className="truncate text-xs text-muted-foreground">Causal Discovery Platform</p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="ml-auto lg:hidden"
          aria-label="Cerrar navegación"
          onClick={onClose}
        >
          <X />
        </Button>
      </div>

      <nav className="flex-1 space-y-1 p-3" aria-label="Módulos AMDCD">
        {navigationItems.map(({ path, label, icon: Icon }) => (
          <Tooltip key={path}>
            <TooltipTrigger asChild>
              <NavLink
                to={path}
                onClick={onNavigate}
                aria-label={label}
                title={collapsed ? label : undefined}
                className={({ isActive }) =>
                  cn(
                    'group flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-sidebar-foreground/70 transition-colors outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring',
                    isActive &&
                      'bg-sidebar-primary/12 text-sidebar-primary ring-1 ring-sidebar-primary/20',
                    collapsed && 'lg:justify-center lg:px-0',
                  )
                }
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className={cn('truncate', collapsed && 'lg:sr-only')}>{label}</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right" hidden={!collapsed}>
              {label}
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className={cn('flex items-center gap-3', collapsed && 'lg:justify-center')}>
          <PanelLeftClose className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <div className={cn('min-w-0', collapsed && 'lg:sr-only')}>
            <p className="text-xs font-medium">Plataforma de investigación</p>
            <p className="text-xs text-muted-foreground">Entorno académico</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
