import { FluxFireLogo, SocialMediaIcon } from "."

export default function Footer() {
  return (
    <div className="ff-flex ff-h-[21.75rem] ff-flex-col ff-justify-end ff-gap-y-6 ff-p-6 md:ff-px-[10%]">
      <FluxFireLogo logoClassName="ff-w-9" />
      <div className="ff-h-px ff-w-full ff-border ff-border-solid ff-border-hr ff-border-opacity-40" />
      <div className="ff-flex ff-flex-col ff-gap-y-6 md:ff-flex-row md:ff-justify-between">
        <div className="ff-flex ff-flex-wrap ff-gap-x-5 md:ff-order-2">
          <SocialMediaIcon />
          <SocialMediaIcon icon="discord" />
          <SocialMediaIcon icon="unknown" />
        </div>
        <p className="ff-text-sm ff-font-medium ff-text-base-100 md:ff-order-1">Copyright © 2023 FluxFire All rights reserved</p>
      </div>
    </div>
  )
}
