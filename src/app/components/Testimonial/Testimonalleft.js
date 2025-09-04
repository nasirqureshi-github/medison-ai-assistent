import Image from "next/image";

const murqeeImage = [
  { id: 1, image: "/assets/images/stories-1.png" },
  { id: 2, image: "/assets/images/stories-2.png" },
  { id: 3, image: "/assets/images/stories-3.png" },
  { id: 4, image: "/assets/images/stories-4.png" },
  { id: 5, image: "/assets/images/stories-5.png" },
  { id: 6, image: "/assets/images/stories-6.png" },
];

const TestimonialLeft = () => {
  return (
    <div className="relative  overflow-hidden mt-10">
      <div className="flex animate-marquee">
        {/* First set */}
        {murqeeImage.map((marqee) => (
          <div key={`first-${marqee.id}`} className="mx-5">
            <Image src={marqee.image} width={200} height={400} alt="img" />
          </div>
        ))}
        {/* Duplicate set for smooth loop */}
        {murqeeImage.map((marqee) => (
          <div key={`second-${marqee.id}`} className="mx-5">
            <Image src={marqee.image} width={200} height={400} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialLeft;





