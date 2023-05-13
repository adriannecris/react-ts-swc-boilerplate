import { twMerge } from "tailwind-merge"

interface ConfluxLogoProps {
  className?: string
}

export default function ConfluxLogo(props: ConfluxLogoProps) {
  const { className } = props
  return (
    <img
      className={twMerge("ff-h-6 ff-w-[7rem]", className)}
      src="/conflux.svg"
    />
  )
}
