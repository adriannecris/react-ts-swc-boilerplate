import { twMerge } from "tailwind-merge"

interface FluxFireLogoProps {
  containerClassName?: string
  logoClassName?: string
  labelClassName?: string
}

export default function FluxFireLogo(props: FluxFireLogoProps) {
  const { containerClassName, logoClassName, labelClassName } = props
  return (
    <div className={twMerge("ff-flex ff-items-center ff-gap-x-2", containerClassName)}>
      <img
        className={twMerge("ff-aspect-square ff-w-[1.875rem]", logoClassName)}
        src="/fluxfire-favicon.svg"
      />
      <p className={twMerge("ff-text-xl ff-font-medium ", labelClassName)}>FluxFire</p>
    </div>
  )
}
