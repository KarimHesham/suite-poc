import { createRoot } from "react-dom/client";
import "./style.css";
import { lazy, Suspense } from "react";

const Crm = lazy(() => import("crm/CrmApp"));
const Cms = lazy(() => import("cms/CmsApp"));

const App = () => (
  <div>
    <div className="card">
      <Suspense fallback={<div>Loading CRM...</div>}>
        <Crm />
      </Suspense>
      <Suspense fallback={<div>Loading CMS...</div>}>
        <Cms />
      </Suspense>
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
