import { Link, Meta } from "@solidjs/meta"

export const Favicon = () => {
  return (
    <>
      <Link rel="icon" type="image/png" href="/megaladata-favicon-32-v1.png" sizes="32x32" />
      <Link rel="icon" type="image/svg+xml" href="/megaladata-favicon-v1.svg" sizes="any" />
      <Link rel="shortcut icon" href="/megaladata-favicon-v1.ico" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/megaladata-apple-touch-v1.png" />
      <Link rel="manifest" href="/megaladata-app-v1.webmanifest" />
      <Meta name="apple-mobile-web-app-title" content="Mega AI" />
    </>
  )
}
