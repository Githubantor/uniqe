"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { CactusSmall, PoolFloatSmall } from "@/components/svg-illustrations";

const photos = [
  {
    id: 1,
    src: "https://picsum.photos/seed/uniqe-interior-1/800/600",
    span: "md:col-span-2 md:row-span-2",
    alt: "Bright coworking space with plants and warm lighting",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/uniqe-interior-2/400/300",
    span: "",
    alt: "Communal table with laptops and coffee cups",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/uniqe-interior-3/400/500",
    span: "md:row-span-2",
    alt: "Comfortable lounge area with natural light",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/uniqe-interior-4/400/400",
    span: "",
    alt: "Meeting room with glass walls and greenery",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/uniqe-interior-5/400/300",
    span: "",
    alt: "Open plan workspace with high ceilings",
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/uniqe-interior-6/800/300",
    span: "md:col-span-2",
    alt: "Cozy reading nook with warm golden-hour light",
  },
];

export function PhotoGallery() {
  return (
    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
      {photos.map((photo, i) => (
        <StaggerItem
          key={photo.id}
          className={`relative overflow-hidden rounded-xl ${photo.span}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          {i % 2 === 0 && (
            <div className="absolute bottom-2 right-2 z-10">
              <CactusSmall className="w-8 h-10 opacity-70" />
            </div>
          )}
          {i % 3 === 0 && (
            <div className="absolute top-2 left-2 z-10">
              <PoolFloatSmall className="w-12 h-8 opacity-70" />
            </div>
          )}
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
