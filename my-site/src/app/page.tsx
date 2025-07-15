import ImageLink from "../components/ImageLink";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pl-8 pr-8 pb-20 pt-0 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="text-4xl text-center m-auto">
          Adam Collins
        </h1>
        <ImageLink
          href="https://travel.adamcollins.io"
          imageSrc="/caving.jpg"
          alt="Travel website"
          description="Travel Adventures"
          parallaxSpeed={0.3}
        />
        <ImageLink
          href="https://wedding.adamcollins.io"
          imageSrc="/wedding.jpg"
          alt="Wedding website"
          description="Wedding Photos"
          className="mt-8"
          parallaxSpeed={0.5}
        />
        <ImageLink
          href="https://linkedin.com/in/adc613"
          imageSrc="/headshot3.jpg"
          alt="Professional"
          description="LinkedIn Profile"
          parallaxSpeed={0.7}
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>
          An Adam Collins Production
        </p>
      </footer>
    </div>
  );
}
