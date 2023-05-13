import { twMerge } from "tailwind-merge"

interface PrimaryButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className, onClick } = props
  return (
    <button
      className={twMerge("font-medium ff-rounded-md ff-bg-primary ff-px-4 ff-py-2 ff-text-sm ", className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
