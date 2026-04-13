import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  GradientBlock,
  ImageBlock,
  TextBlock,
  VerticalTextBlock,
  IconQuad,
  IconSingle,
  StripeBars,
} from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Games Experiments                                        */
/*                                                                     */
/*  Layout explorations for a Games cube face.                         */
/*  Combines hero images from Hopping Haify and Haify v Kraftwerk.    */
/*                                                                     */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/* ================================================================== */

const IMG = {
  hoppingHaify: '/images/games/hopping-haify.png',
  haifyVKraftwerk: '/images/games/haify-v-kraftwerk.png',
} as const;

const meta = {
  title: 'Experiments/Cube Face Games',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for the Games cube face. 300px square frame. ' +
          'Combines Hopping Haify and Haify v Kraftwerk hero images on a 6×6 grid. ' +
          'All sizing uses cqi units — 1cqi = 1% of the face width/height.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-75 h-75 overflow-hidden rounded border border-theme-black/20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/* ================================================================== */
/*  STORIES                                                            */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/*  1 · ARCADE POSTER                                                  */
/*  Hopping Haify full bleed, dark gradient at bottom, large PLAY     */
/*  type, icon quad top-right, stripe accent top.                     */
/* ------------------------------------------------------------------ */

// ─── 1 · Arcade Poster ──────────────────────────────────────────────────────
export const ArcadePoster: Story = {
  name: '1 – Arcade Poster',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Full bleed background */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock src={IMG.hoppingHaify} alt="Hopping Haify" mask="fade-down" opacity={0.9} />
      </Cell>

      {/* Dark scrim at bottom for legibility */}
      <Cell col={1} row={3} colSpan={6} rowSpan={4} zIndex={2}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'transparent', position: 0 },
            { color: 'var(--theme-black)', position: 100 },
          ]}
          opacity={0.85}
        />
      </Cell>

      {/* Icon quad — top-right */}
      <Cell col={5} row={1} colSpan={2} rowSpan={2} zIndex={3}>
        <IconQuad
          icons={{ tl: 'play-circle', tr: 'star', bl: 'rocket', br: 'lightning' }}
          color="var(--theme-cyan)"
          showDivider={false}
        />
      </Cell>

      {/* PLAY — large hero type */}
      <Cell col={1} row={4} colSpan={5} rowSpan={2} zIndex={4}>
        <TextBlock
          fontSize={30}
          color="var(--theme-cyan)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignHorizontal="start"
          alignVertical="end"
          padding={2}
        >
          PLAY
        </TextBlock>
      </Cell>

      {/* GAMES sub-label */}
      <Cell col={1} row={6} colSpan={5} zIndex={4}>
        <TextBlock
          fontSize={9}
          color="var(--theme-white)"
          fontWeight={700}
          letterSpacing="0.2em"
          alignHorizontal="start"
          padding={2}
        >
          WEB GAMES
        </TextBlock>
      </Cell>

      {/* Stripe top */}
      <Cell col={1} row={1} colSpan={6} zIndex={6}>
        <StripeBars colors={['var(--theme-cyan)', 'var(--theme-magenta)', 'var(--theme-green)', 'var(--theme-orange)']} />
      </Cell>

      <GridLines opacity={0.06} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  2 · ACID MARGIN — TWO GAMES                                        */
/*  Left column: magenta stripe + vertical "GAMES" label.             */
/*  Top 3 rows: Hopping Haify. Bottom 3 rows: Haify v Kraftwerk.      */
/*  Icon single bottom-right corner.                                  */
/* ------------------------------------------------------------------ */

// ─── 2 · Acid Margin ────────────────────────────────────────────────────────
export const AcidMargin: Story = {
  name: '2 – Acid Margin',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Top image — Hopping Haify */}
      <Cell col={2} row={1} colSpan={5} rowSpan={3}>
        <ImageBlock src={IMG.hoppingHaify} alt="Hopping Haify" mask="fade-down" opacity={0.9} />
      </Cell>

      {/* Bottom image — Haify v Kraftwerk */}
      <Cell col={2} row={4} colSpan={5} rowSpan={3}>
        <ImageBlock src={IMG.haifyVKraftwerk} alt="Haify v Kraftwerk" mask="fade-up" opacity={0.9} />
      </Cell>

      {/* Left accent stripe */}
      <Cell col={1} row={1} rowSpan={6} zIndex={3}>
        <ColorBlock color="var(--theme-magenta)" />
      </Cell>

      {/* Vertical label */}
      <Cell col={1} row={1} rowSpan={6} zIndex={4}>
        <VerticalTextBlock fontSize={4} direction="up" mono uppercase letterSpacing="0.2em" color="var(--theme-black)">
          GAMES
        </VerticalTextBlock>
      </Cell>

      {/* Divider between games */}
      <Cell col={2} row={3} colSpan={5} zIndex={3}>
        <div className="w-full h-px bg-theme-magenta/60 self-end" />
      </Cell>

      {/* Icon — bottom-right */}
      <Cell col={5} row={5} colSpan={2} rowSpan={2} zIndex={4}>
        <IconSingle name="play-circle" color="var(--theme-cyan)" weight="duotone" iconSize={10} />
      </Cell>

      <Cell col={1} row={1} colSpan={6} zIndex={5}>
        <StripeBars />
      </Cell>
      <GridLines opacity={0.06} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  3 · NEON SCREEN BLEND                                              */
/*  Black base. Both images layered with screen blend mode,           */
/*  creating a neon composite. Grid lines. Vertical type either side. */
/* ------------------------------------------------------------------ */

// ─── 3 · Neon Screen Blend ──────────────────────────────────────────────────
export const NeonScreenBlend: Story = {
  name: '3 – Neon Screen Blend',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Both images screen-blended for neon composite */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock src={IMG.hoppingHaify} alt="Hopping Haify" mixBlendMode="screen" opacity={0.75} />
      </Cell>
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={1}>
        <ImageBlock src={IMG.haifyVKraftwerk} alt="Haify v Kraftwerk" mixBlendMode="screen" opacity={0.5} />
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
  ),
};

/* ------------------------------------------------------------------ */
/*  4 · DUOTONE SPLIT                                                  */
/*  Haify v Kraftwerk full bleed, magenta duotone blend.              */
/*  Hopping Haify as a cyan inset top-left. Icon quad bottom-right.  */
/* ------------------------------------------------------------------ */

// ─── 4 · Duotone Split ──────────────────────────────────────────────────────
export const DuotoneSplit: Story = {
  name: '4 – Duotone Split',
  render: () => (
    <FaceGrid className="bg-theme-magenta!">
      {/* Full bleed — multiply blend for duotone */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock src={IMG.haifyVKraftwerk} alt="Haify v Kraftwerk" mixBlendMode="multiply" opacity={0.85} />
      </Cell>

      {/* Dark scrim bottom */}
      <Cell col={1} row={4} colSpan={6} rowSpan={3} zIndex={2}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'transparent', position: 0 },
            { color: 'var(--theme-black)', position: 100 },
          ]}
          opacity={0.7}
        />
      </Cell>

      {/* Inset — Hopping Haify top-left */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3} zIndex={3}>
        <ImageBlock src={IMG.hoppingHaify} alt="Hopping Haify" mask="fade-right" opacity={0.9} />
      </Cell>

      {/* Cyan overlay on inset */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3} zIndex={4}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.15} />
      </Cell>

      {/* Icon quad — top-right */}
      <Cell col={5} row={1} colSpan={2} rowSpan={2} zIndex={4}>
        <IconQuad
          icons={{ tl: 'paw-print', tr: 'lightning', bl: 'star', br: 'rocket' }}
          color="var(--theme-white)"
          showDivider={false}
        />
      </Cell>

      {/* GAMES label */}
      <Cell col={1} row={5} colSpan={6} rowSpan={2} zIndex={5}>
        <TextBlock
          fontSize={22}
          color="var(--theme-white)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignVertical="end"
          padding={2}
        >
          GAMES
        </TextBlock>
      </Cell>

      <Cell col={1} row={1} colSpan={6} zIndex={6}>
        <StripeBars thickness={2} />
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  5 · TYPE FORWARD                                                   */
/*  Bold "PLAY" hero type on white. Accent corner blocks. Both game  */
/*  images small at bottom. Paw-print + play-circle icons.           */
/* ------------------------------------------------------------------ */

// ─── 5 · Type Forward ───────────────────────────────────────────────────────
export const TypeForward: Story = {
  name: '5 – Type Forward',
  render: () => (
    <FaceGrid>
      {/* Accent corner blocks */}
      <Cell col={5} row={1} colSpan={2}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>
      <Cell col={6} row={2}>
        <ColorBlock color="var(--theme-magenta)" />
      </Cell>
      <Cell col={1} row={6}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>

      {/* Hero type */}
      <Cell col={1} row={1} colSpan={4} rowSpan={3}>
        <TextBlock
          fontSize={30}
          color="var(--theme-magenta)"
          fontWeight={900}
          letterSpacing="-0.05em"
          alignHorizontal="start"
          alignVertical="start"
          padding={2}
        >
          PLAY
        </TextBlock>
      </Cell>

      {/* Sub-label */}
      <Cell col={1} row={4} colSpan={3}>
        <div className="flex flex-col justify-center gap-0.5 select-none" style={{ paddingInline: '2cqi' }}>
          <span className="text-theme-black/60 font-bold uppercase tracking-[0.15em]" style={{ fontSize: '2.5cqi' }}>Web</span>
          <span className="text-theme-cyan font-black" style={{ fontSize: '3.5cqi' }}>Games</span>
        </div>
      </Cell>

      {/* Icons */}
      <Cell col={4} row={4} colSpan={2}>
        <IconSingle name="paw-print" color="var(--theme-magenta)" weight="duotone" iconSize={8} />
      </Cell>
      <Cell col={6} row={4}>
        <IconSingle name="play-circle" color="var(--theme-cyan)" weight="duotone" iconSize={8} />
      </Cell>

      {/* Game image thumbnails — bottom row */}
      <Cell col={1} row={5} colSpan={3} rowSpan={2}>
        <ImageBlock src={IMG.hoppingHaify} alt="Hopping Haify" />
      </Cell>
      <Cell col={4} row={5} colSpan={3} rowSpan={2}>
        <ImageBlock src={IMG.haifyVKraftwerk} alt="Haify v Kraftwerk" />
      </Cell>

      <GridLines opacity={0.08} />
    </FaceGrid>
  ),
};
