interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "YouTube video" }: YouTubeEmbedProps) {
  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto">
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
