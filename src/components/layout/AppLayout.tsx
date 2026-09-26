import { useState } from 'react'
import { Outlet } from 'react-router'

import { AppHeader } from '@/components/layout/AppHeader'
import { AppSidebar } from '@/components/layout/AppSidebar'

export function AppLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)

  return (
    <div className="flex min-h-svh bg-background text-foreground">
      {isMobileNavigationOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          aria-label="Cerrar navegación"
          onClick={() => setIsMobileNavigationOpen(false)}
        />
      )}

      <AppSidebar
        collapsed={isSidebarCollapsed}
        mobileOpen={isMobileNavigationOpen}
        onClose={() => setIsMobileNavigationOpen(false)}
        onNavigate={() => setIsMobileNavigationOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader
          sidebarCollapsed={isSidebarCollapsed}
          onOpenMobileNavigation={() => setIsMobileNavigationOpen(true)}
          onToggleSidebar={() => setIsSidebarCollapsed((current) => !current)}
        />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
