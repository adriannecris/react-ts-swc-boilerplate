import { InvitationForm } from "@components/forms"
import { PrimaryLayout } from "@components/layouts"
import { ConfluxLogo } from "@components/shared"

export default function Home() {
  return (
    <PrimaryLayout>
      <section className="ff-p-6 ff-py-6 md:ff-flex md:ff-justify-center md:ff-pb-32">
        <div className="ff-grid ff-grid-cols-1 md:ff-w-full md:ff-max-w-7xl md:ff-grid-flow-col md:ff-grid-cols-2 ">
          <div className="md:ff-order-1 md:ff-flex md:ff-items-end">
            <h1 className="ff-text-2.5xl ff-font-semibold ff-leading-[2.4375rem] md:ff-order-1 md:ff-max-w-[35.875rem] md:ff-text-5xl md:ff-leading-[4.375rem]">
              Welcome to FluxFire, the premier <span className="ff-text-primary">launchpad on Conflux. </span>
            </h1>
          </div>
          <img
            src="/home/rocket.svg"
            className="ff-mx-auto ff-aspect-square ff-w-[31.875rem] md:ff-order-3 md:ff-col-span-2 md:ff-row-span-2"
          />
          <div className="ff-flex ff-flex-col ff-gap-y-3 md:ff-order-2 md:ff-w-full md:ff-max-w-[35.875rem] md:ff-self-center">
            <p className="ff-text-lg ff-font-semibold md:ff-text-2xl">Trusted Partner</p>
            <ConfluxLogo />
            <p className="ff-text-sm md:ff-max-w-[32.3125rem] ">
              FluxFire is the trusted partner for the Conflux community, offering comprehensive support, funding, and resources to help
              builders bring their projects to life.
            </p>
          </div>
        </div>
      </section>
      <section className="ff-bg-alt-background ff-px-6 ff-py-10 md:ff-flex md:ff-justify-center">
        <div className="ff-relative md:ff-w-full md:ff-max-w-7xl">
          <h3 className="ff-mb-9 ff-text-2.5xl ff-font-semibold md:ff-text-[3.625rem]">What's Fluxfire?</h3>
          <div className="ff-flex-gap-y-5 ff-mb-20 ff-flex ff-flex-col md:ff-flex-row md:ff-items-center md:ff-gap-x-14">
            <img
              src="/home/builder.svg"
              className="ff-mx-auto ff-h-auto ff-max-h-[28.125rem] ff-w-full ff-max-w-[28.125rem]"
            />
            <div className="ff-flex ff-flex-col ff-gap-y-5 md:ff-max-w-[36.25rem]">
              <p className="ff-text-2xl ff-font-semibold ff-text-primary md:ff-text-2xl">BUILDER FRIENDLY</p>
              <p className="ff-text-xl md:ff-text-2xl md:ff-leading-[2.25rem]">
                FluxFire is the trusted partner for the Conflux community, offering comprehensive support, funding, and resources to help
                builders bring their projects to life.{" "}
              </p>
            </div>
          </div>
          <div className="ff-flex-gap-y-5 ff-flex ff-flex-col md:ff-flex-row md:ff-items-center md:ff-gap-x-14">
            <img
              src="/home/tri-shake.svg"
              className="ff-mx-auto ff-h-auto ff-max-h-[28.125rem] ff-w-full ff-max-w-[28.125rem] md:ff-order-2"
            />
            <div className="ff-flex ff-flex-col ff-gap-y-5 md:ff-order-1">
              <p className="ff-text-2xl ff-font-semibold ff-text-primary md:ff-text-2xl">COMMUNITY MINDED</p>
              <p className="ff-text-xl md:ff-max-w-[41.75rem] md:ff-text-2xl md:ff-leading-[2.25rem]">
                We're dedicated to supporting the Conflux ecosystem with a rigorous selection process that ensures we community with only
                the most promising and impactful projects.
              </p>
            </div>
          </div>
          <InvitationForm
            containerClassName="ff-relative ff-top-28 md:ff-max-w-[56rem] md:ff-mx-auto md:gap-y-5 md:ff-py-12 md:ff-top-40"
            titleClassName="md:ff-text-center md:ff-font-semibold md:ff-text-4xl"
            descriptionClassName="md:ff-text-center md:ff-text-base md:ff-max-w-[44.3125rem] md:ff-mx-auto"
            inputContainerClassName="md:ff-max-w-[21.5rem] md:ff-mx-auto"
            // styles={{ width: "calc(100% - 48px)" }}
          />
        </div>
      </section>
    </PrimaryLayout>
  )
}
