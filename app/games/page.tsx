import Breadcrumbs from '@/components/Breadcrumbs';
import Page from '@/components/Page/Page';
import Heading from '@/components/Heading';
import { Button } from '@/components/Button';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

function GameCard({ title, description, imageSrc, imageAlt, href }: GameCardProps) {
  return (
    <div className="mb-10">
      <div className="relative w-full aspect-video overflow-hidden rounded-sm mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <Heading level={2}>{title}</Heading>
      <p className="text-theme-black/70 leading-relaxed mt-2 mb-4">{description}</p>
      <Button
        variant="primary"
        label="Play"
        icon="arrow-right"
        href={href}
      />
    </div>
  );
}

export default function GamesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Games', current: true },
        ]}
      />
      <Page>
        <Heading level={1}>Web Games</Heading>
        <div className="mt-8">
          <GameCard
            title="Hopping Haify"
            description="Help Haify the AI Hamster navigate the digital realm! Avoid Pac-Man, Ghosts, Light Cycles and more!"
            imageSrc="/images/games/hopping-haify.png"
            imageAlt="Hopping Haify game — Haify the hamster navigating a neon digital world"
            href="https://hoppinghaify.lovable.app/"
          />
          <GameCard
            title="Haify v Kraftwerk"
            description="Death metal fanatic HAIFY must defend Earth from the invading electronic music forces of KRAFTWERK!"
            imageSrc="/images/games/haify-v-kraftwerk.png"
            imageAlt="Haify v Kraftwerk game"
            href="https://haifyvsekraftwerk.lovable.app"
          />
        </div>
      </Page>
    </>
  );
}
