import ImageLink from "../components/ImageLink";

export default function Home() {
  return (
    <div className="h-full w-full items-center justify-items-center min-h-screen pl-8 pr-8 pb-20 pt-0 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <h1 className="text-4xl text-center m-auto mb-16">
          Adam Collins
        </h1>
        <div className="flex flex-col gap-[32px] mx-auto">
          <ImageLink
            href="https://travel.adamcollins.io"
            imageSrc="/caving.jpg"
            alt="Travel website"
            description="Travel Stories"
          />
          <ImageLink
            href="https://wedding.adamcollins.io"
            imageSrc="/wedding.jpg"
            alt="Wedding website"
            description="Wedding website"
          />
          <ImageLink
            href="https://linkedin.com/in/adc613"
            imageSrc="/headshot3.jpg"
            alt="Professional"
            description="LinkedIn"
          />
        </div>
      </main>
      <footer className="flex flex-col flex-wrap items-center justify-center mt-16">
        <hr className="w-full border-solid border-t" />
        <p className="mt-8">
          An Adam Collins Link Farm
        </p>
      </footer>
    </div>
  );
}
