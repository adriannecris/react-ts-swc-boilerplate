import { Footer, Header } from "@components/shared"
import { twMerge } from "tailwind-merge"

interface PrimaryLayoutProps {
  children?: React.ReactNode
  bodyClassname?: string | null
}

export default function PrimaryLayout(props: PrimaryLayoutProps) {
  const { children, bodyClassname } = props
  return (
    <main className={twMerge("ff-min-h-full ff-w-full ff-bg-background", bodyClassname)}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
