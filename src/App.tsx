import { Providers, Layout } from '@/components';
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>home</div>} />
          <Route path="about" element={<div>about</div>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </Providers>
  )
}

export default App
