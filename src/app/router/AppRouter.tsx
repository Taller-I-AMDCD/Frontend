import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import { NotFoundPage } from '@/app/router/NotFoundPage'
import { AppLayout } from '@/components/layout/AppLayout'
import { CausalAuditPage } from '@/features/causal-audit/pages/CausalAuditPage'
import { CausalGraphPage } from '@/features/causal-graph/pages/CausalGraphPage'
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage'
import { MultiagentPage } from '@/features/multiagent/pages/MultiagentPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="causal-graph" element={<CausalGraphPage />} />
          <Route path="causal-audit" element={<CausalAuditPage />} />
          <Route path="multiagent" element={<MultiagentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
