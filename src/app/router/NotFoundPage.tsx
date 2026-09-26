import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="grid min-h-[calc(100svh-4rem)] place-items-center px-6 py-16">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary">ERROR 404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          Página no encontrada
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          La ruta solicitada no pertenece al centro de comando AMDCD.
        </p>
        <Button asChild className="mt-7">
          <Link to="/dashboard">
            <ArrowLeft data-icon="inline-start" />
            Volver al dashboard
          </Link>
        </Button>
      </div>
    </div>
  )
}
