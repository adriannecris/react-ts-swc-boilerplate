import { PrimaryButton } from "@/Buttons"
import { FluxFireLogo } from "."

export default function Header() {
  return (
    <div className="ff-flex ff-w-full ff-justify-between ff-border-b ff-border-solid ff-border-b-white ff-border-opacity-5 ff-p-4">
      <FluxFireLogo />
      <PrimaryButton>Launch app</PrimaryButton>
    </div>
  )
}
