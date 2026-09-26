import { ChevronLeft, ChevronRight, Menu, UserRound } from 'lucide-react'
import { useLocation } from 'react-router'

import { navigationItems } from '@/app/router/navigation'
import { StatusBadge } from '@/components/common/StatusBadge'
import { Button } from '@/components/ui/button'

interface AppHeaderProps {
  sidebarCollapsed: boolean
  onOpenMobileNavigation: () => void
  onToggleSidebar: () => void
}

export function AppHeader({
  sidebarCollapsed,
  onOpenMobileNavigation,
  onToggleSidebar,
}: AppHeaderProps) {
  const { pathname } = useLocation()
  const currentSection = navigationItems.find((item) => pathname.startsWith(item.path))

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur md:px-6">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label="Abrir navegación"
        onClick={onOpenMobileNavigation}
      >
        <Menu />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="hidden lg:inline-flex"
        aria-label={sidebarCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
        onClick={onToggleSidebar}
      >
        {sidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </Button>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">
          {currentSection?.label ?? 'AMDCD'}
        </p>
        <p className="hidden truncate text-xs text-muted-foreground sm:block">
          Centro de comando analítico
        </p>
      </div>

      <StatusBadge status="online" label="Sistema operativo" />

      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Perfil de usuario"
        title="Perfil de usuario"
      >
        <UserRound />
      </Button>
    </header>
  )
}
