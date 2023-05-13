import { PrimaryButton } from "@/Buttons"
import { Dispatch, SetStateAction } from "react"
import { twMerge } from "tailwind-merge"

interface InvitationFormProps {
  onSubmit?: () => void
  onChange?: Dispatch<SetStateAction<string>>
  inputValue?: string
  containerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  inputContainerClassName?: string
  styles?: React.CSSProperties
}
export default function InvitationForm(props: InvitationFormProps) {
  const { onSubmit, onChange, inputValue, containerClassName, styles, titleClassName, descriptionClassName, inputContainerClassName } =
    props
  return (
    <form
      onSubmit={onSubmit}
      className={twMerge(
        "ff-flex ff-flex-col ff-gap-y-4 ff-rounded-xl ff-bg-white ff-bg-opacity-5 ff-px-4 ff-py-6 ff-backdrop-blur-[50px]",
        containerClassName
      )}
      style={styles}
    >
      <p className={twMerge("ff-text-2.5xl ff-font-semibold", titleClassName)}>Join FluxFire</p>
      <p className={twMerge("ff-text-sm ff-text-white ff-text-opacity-80", descriptionClassName)}>
        With FluxFire, you can trust that you have a partner dedicated to helping you achieve your goals and make an impact in the Conflux
        ecosystem. Join us today and ignite your project's potential with FluxFire.
      </p>
      <div className={twMerge("ff-relative ff-mt-4", inputContainerClassName)}>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={inputValue}
          onChange={(e) => onChange?.(e.target.value)}
          className="ff-w-full ff-rounded-lg ff-border ff-border-solid ff-border-white ff-border-opacity-[0.15] ff-bg-white ff-bg-opacity-5 ff-py-3 ff-pl-7 ff-pr-20"
        />
        <PrimaryButton className="ff-absolute ff-right-0 ff-top-0 ff-h-full">Join us</PrimaryButton>
      </div>
    </form>
  )
}
