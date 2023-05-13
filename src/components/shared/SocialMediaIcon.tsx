const ICONS = {
  twitter: "twitter",
  discord: "discord",
  unknown: "unknown",
}

const ICONS_URL = {
  twitter: "/twitter-icon.svg",
  discord: "/discord-icon.svg",
  unknown: "/unknown-icon.svg",
}

type IconTypes = typeof ICONS

interface SocialMediaIconProps {
  icon?: keyof IconTypes
  url?: string
}

export default function SocialMediaIcon(props: SocialMediaIconProps) {
  const { icon = "twitter", url = "/" } = props
  return (
    <a
      href={url}
      className="ff-flex ff-h-8 ff-w-8 ff-items-center ff-justify-center ff-rounded-full ff-bg-gunmental"
    >
      <img
        src={ICONS_URL[icon]}
        className="ff-h-4 ff-w-4"
      />
    </a>
  )
}
