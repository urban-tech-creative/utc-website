import FaceGrid from './FaceGrid';
import {
  Cell,
  GridLines,
  ImageBlock,
  TextBlock,
  VerticalTextBlock,
  IconSingle,
  StripeBars,
} from './primitives';

// Preserved source — restore this as the Showcase() return to redesign and re-bake
const ShowcaseDesign = () => (
  <FaceGrid className="bg-theme-black!">
    {/* Both images screen-blended for neon composite */}
    <Cell col={1} row={1} colSpan={6} rowSpan={6}>
      <ImageBlock src="/images/games/hopping-haify.png" alt="Hopping Haify" mixBlendMode="screen" opacity={0.75} />
    </Cell>
    <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={1}>
      <ImageBlock src="/images/games/haify-v-kraftwerk.png" alt="Haify v Kraftwerk" mixBlendMode="screen" opacity={0.5} />
    </Cell>

    {/* Grid lines give a digital feel */}
    <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={2}>
      <GridLines color="var(--theme-cyan)" opacity={0.18} />
    </Cell>

    {/* Left vertical label */}
    <Cell col={1} row={1} rowSpan={5} zIndex={4}>
      <VerticalTextBlock fontSize={3.5} direction="up" mono uppercase letterSpacing="0.25em" color="var(--theme-cyan)" opacity={0.7}>
        WEB GAMES
      </VerticalTextBlock>
    </Cell>

    {/* Right vertical label */}
    <Cell col={6} row={2} rowSpan={4} zIndex={4}>
      <VerticalTextBlock fontSize={3.5} direction="down" mono uppercase letterSpacing="0.25em" color="var(--theme-magenta)" opacity={0.7}>
        PLAY NOW
      </VerticalTextBlock>
    </Cell>

    {/* Large centred type */}
    <Cell col={2} row={3} colSpan={4} rowSpan={2} zIndex={5}>
      <TextBlock
        fontSize={22}
        color="var(--theme-cyan)"
        fontWeight={900}
        letterSpacing="-0.04em"
      >
        GAMES
      </TextBlock>
    </Cell>

    {/* Icon — bottom centre */}
    <Cell col={3} row={5} colSpan={2} rowSpan={2} zIndex={5}>
      <IconSingle name="play-circle" color="var(--theme-magenta)" weight="duotone" iconSize={9} />
    </Cell>

    <Cell col={1} row={1} colSpan={6} zIndex={6}>
      <StripeBars colors={['var(--theme-cyan)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-green)']} thickness={2} />
    </Cell>
  </FaceGrid>
);

export default function Showcase() {
  return <img src="/faces/showcase.jpg" alt="" className="w-full h-full object-cover block" />;
}

export { ShowcaseDesign };
