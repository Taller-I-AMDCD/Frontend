import {
  Cpu,
  LayoutDashboard,
  Network,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

export interface NavigationItem {
  path: string
  label: string
  icon: LucideIcon
}

export const navigationItems: NavigationItem[] = [
  { path: '/dashboard', label: 'Dashboard Global', icon: LayoutDashboard },
  { path: '/causal-graph', label: 'Grafo Causal', icon: Network },
  { path: '/causal-audit', label: 'Auditoría XAI', icon: ShieldCheck },
  { path: '/multiagent', label: 'Centro Multiagente', icon: Cpu },
]
