import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/layouts'
import NotFound from '@/pages/NotFound'
import { routes } from './routes.config'

function RouteFallback() {
  return (
    <div className="section-padding flex justify-center">
      <div className="skeleton" style={{ width: 240, height: 16 }} />
    </div>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<PageLayout />}>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}