interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  heading?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  heading,
}: YouTubeEmbedProps) {
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {heading && (
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
            {heading}
          </h2>
        )}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
