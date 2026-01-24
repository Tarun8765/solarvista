import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Building2, Home, Heart } from "lucide-react";
import { useState } from "react";

interface VideoTestimonial {
  name: string;
  location: string;
  customerType: "Residential" | "Commercial" | "Non-Profit";
  videoId: string;
  platform: "youtube" | "vimeo";
  thumbnail?: string;
  title: string;
  duration: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    name: "The Johnson Family",
    location: "Los Angeles, CA",
    customerType: "Residential",
    videoId: "dQw4w9WgXcQ", // Replace with actual video IDs
    platform: "youtube",
    title: "How Solar Changed Our Lives",
    duration: "3:45",
  },
  {
    name: "Rodriguez Restaurant",
    location: "Austin, TX",
    customerType: "Commercial",
    videoId: "76979871", // Replace with actual Vimeo ID
    platform: "vimeo",
    title: "Going Green for Our Business",
    duration: "4:20",
  },
  {
    name: "Hope Community Center",
    location: "Portland, OR",
    customerType: "Non-Profit",
    videoId: "dQw4w9WgXcQ", // Replace with actual video IDs
    platform: "youtube",
    title: "Solar Powers Our Mission",
    duration: "5:12",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "Commercial":
      return Building2;
    case "Non-Profit":
      return Heart;
    default:
      return Home;
  }
};

const VideoCard = ({ video }: { video: VideoTestimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const IconComponent = getIcon(video.customerType);

  const getEmbedUrl = () => {
    if (video.platform === "youtube") {
      return `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;
    }
    return `https://player.vimeo.com/video/${video.videoId}?autoplay=1`;
  };

  const getThumbnail = () => {
    if (video.thumbnail) return video.thumbnail;
    if (video.platform === "youtube") {
      return `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
    }
    // Vimeo thumbnails require API call, using placeholder
    return `https://images.unsplash.com/photo-1509391366360-2e959784a276?w=640&h=360&fit=crop`;
  };

  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-video">
        {isPlaying ? (
          <iframe
            src={getEmbedUrl()}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        ) : (
          <>
            <img
              src={getThumbnail()}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors group-hover:scale-110 duration-300"
                aria-label={`Play video: ${video.title}`}
              >
                <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
              </button>
            </div>
            <Badge className="absolute top-4 left-4 bg-black/60 text-white border-none">
              {video.duration}
            </Badge>
            <Badge className="absolute top-4 right-4 bg-primary">
              <IconComponent className="h-3 w-3 mr-1" />
              {video.customerType}
            </Badge>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
        <p className="text-sm text-muted-foreground">
          {video.name} • {video.location}
        </p>
      </div>
    </Card>
  );
};

export const VideoTestimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Video Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our customers about their solar journey and the impact it's made on their lives and businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videoTestimonials.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};
