import { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { onState, type DashboardState } from "./megaladata"

function App() {
  const [state, setState] = useState<DashboardState>()
  useEffect(() => onState(setState), [])
  if (window.parent === window) return <p role="status">Open the dashboard with the Dashboard button in Studio</p>
  const table = state?.table
  const text = !state || state.busy
    ? "Calculating"
    : state.error ?? (!table || (table.rows.length === 0 && !table.truncated)
      ? "No data"
      : `Rows in the result: ${table.rows.length}${table.truncated ? ` of ${table.totalRows}, partial view` : ""}`)
  return (
    <>
      {state && <p>{state.parameters.map(parameter => `${parameter.name} = ${parameter.value ?? "not set"}`).join(", ")}</p>}
      <p role={state && !state.busy && state.error !== null ? "alert" : "status"}>{text}</p>
    </>
  )
}

createRoot(document.getElementById("root")!).render(<App />)
