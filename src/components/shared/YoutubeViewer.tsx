const YoutubeViewer = ({ url }: { url: string; width?: number }) => {
  return (
    <iframe
      className="w-full h-full"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default YoutubeViewer;
