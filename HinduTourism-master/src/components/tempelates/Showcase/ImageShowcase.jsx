import Image from "next/image";
import Link from "next/link";
const contentList = [
  {
    id: 1,
    title: "Pashupatinath Temple",
    subtitle: "The Place of Lord Shiva Worship",
    description:
      "One of the most sacred Hindu temples in the world, Pashupatinath Temple stands as a symbol of faith and devotion.",
    ctaText: "Know More",
    buttonlink:"pashupatinath-temple" ,
    images: [
      "/images/pashupati.svg",
      "/images/funeral.svg",
      "/images/aarati.svg",
      "/images/jogi.svg",
    ],
  },
  {
    id: 2,
    title: "Muktinath Temple",
    subtitle: "The Place of Liberation",
    description:
      "Muktinath Temple is a sacred site revered by both Hindus and Buddhists, known for its eternal flames and 108 water spouts.",
    ctaText: "Know More",
    buttonlink:"pashupatinath-temple" ,
    images: [
      "/images/muktinath.svg",
      "/images/water.svg",
      "/images/tilicho.svg",
      "/images/muktinathbike.svg",
    ],
  },
  {
    id: 3,
    title: "Manakamana Temple",
    subtitle: "Wish-Fulfilling Goddess",
    description:
      "Manakamana Temple is a revered pilgrimage site, known for its historic cable car ride and spiritual significance.",
    ctaText: "Know More",
    buttonlink:"pashupatinath-temple" ,
    images: [
      "/images/manakamana.svg",
      "/images/cablecar.svg",
      "/images/manakamanagate.svg",
      "/images/viewmankamana.svg",
    ],
  },
];
const ImageShowcase = ({ title }) => {
  // Find the content based on the title prop
  const content = contentList.find(item => item.title === title);

  // Handle case where content isn't found
  if (!content) return null;

  return (
    <div className="w-full md:w-1/2 sm:w-4/6">
      {/* Large Image */}
      <div className="mb-4 group relative">
        <Image
          src={content.images[0]}
          alt={`${content.title} main image`}
          width={672}
          height={290}
          layout="responsive"
          priority
          className="w-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-light/20"
        />
      </div>

      {/* Smaller Images */}
      <div className="grid grid-cols-3 gap-4">
        {content.images.slice(1).map((src, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-lg hover:z-10"
          >
            <Image
              src={src}
              alt={`${content.title} image ${idx + 2}`}
              width={200}
              height={200}
              layout="responsive"
              priority
              className="rounded-lg object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-500 ease-in-out group-hover:border-orange-light group-hover:shadow-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;