import { type ComponentProps } from "solid-js"
import icon from "../assets/megaladata/megaladata-icon.svg"

export const Mark = (props: { class?: string }) => (
  <svg
    data-component="logo-mark"
    class={props.class}
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Mega AI Agent"
  >
    <image href={icon} width="1024" height="1024" />
  </svg>
)

export const Splash = (props: Pick<ComponentProps<"svg">, "ref" | "class">) => (
  <svg
    ref={props.ref}
    data-component="logo-splash"
    class={props.class}
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Mega AI Agent"
  >
    <image href={icon} width="1024" height="1024" />
  </svg>
)

export const Logo = (props: { class?: string }) => (
  <svg class={props.class} viewBox="0 0 220 42" xmlns="http://www.w3.org/2000/svg" aria-label="Mega AI Agent">
    <text x="0" y="31" fill="var(--icon-base)" font-family="system-ui, sans-serif" font-size="30" font-weight="600">
      Mega AI Agent
    </text>
  </svg>
)
