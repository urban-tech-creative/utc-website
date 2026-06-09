import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  GradientBlock,
  ImageBlock,
  TextBlock,
  IconSingle,
  IconQuad,
  StripeBars,
} from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Working With Us — Experiments                           */
/*                                                                     */
/*  Layout explorations for the "Working With Us" cube face           */
/*  (formerly the AI face). Concept: process, collaboration,          */
/*  warmth. Uses the 00-06 stage numbering as a visual motif.         */
/*                                                                     */
/* ================================================================== */

const meta = {
  title: 'Experiments/Cube Face Working With Us',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for the Working With Us cube face. ' +
          '300px square frame. All sizing uses cqi units.',
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

// ─── 1 · Stage numbers grid ─────────────────────────────────────────────────
export const StageNumbersGrid: Story = {
  name: '1 – Stage numbers grid',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines color="var(--theme-white)" opacity={0.06} />

      {/* Background colour blocks — one per stage */}
      <Cell col={1} row={1} colSpan={2} rowSpan={2}><ColorBlock color="var(--theme-cyan)" opacity={0.15} /></Cell>
      <Cell col={3} row={1} colSpan={2} rowSpan={2}><ColorBlock color="var(--theme-green)" opacity={0.15} /></Cell>
      <Cell col={5} row={1} colSpan={2} rowSpan={2}><ColorBlock color="var(--theme-orange)" opacity={0.15} /></Cell>
      <Cell col={1} row={3} colSpan={2} rowSpan={2}><ColorBlock color="var(--theme-purple)" opacity={0.15} /></Cell>
      <Cell col={3} row={3} colSpan={2} rowSpan={2}><ColorBlock color="var(--theme-magenta)" opacity={0.15} /></Cell>
      <Cell col={5} row={3} colSpan={2} rowSpan={2}><ColorBlock color="var(--theme-cyan)" opacity={0.15} /></Cell>

      {/* Stage numbers */}
      <Cell col={1} row={1} colSpan={2} rowSpan={2} zIndex={2}>
        <TextBlock fontSize={16} fontWeight={800} mono color="var(--theme-cyan)" alignHorizontal="center" alignVertical="center" opacity={0.9}>00</TextBlock>
      </Cell>
      <Cell col={3} row={1} colSpan={2} rowSpan={2} zIndex={2}>
        <TextBlock fontSize={16} fontWeight={800} mono color="var(--theme-green)" alignHorizontal="center" alignVertical="center" opacity={0.9}>01</TextBlock>
      </Cell>
      <Cell col={5} row={1} colSpan={2} rowSpan={2} zIndex={2}>
        <TextBlock fontSize={16} fontWeight={800} mono color="var(--theme-orange)" alignHorizontal="center" alignVertical="center" opacity={0.9}>02</TextBlock>
      </Cell>
      <Cell col={1} row={3} colSpan={2} rowSpan={2} zIndex={2}>
        <TextBlock fontSize={16} fontWeight={800} mono color="var(--theme-purple)" alignHorizontal="center" alignVertical="center" opacity={0.9}>03</TextBlock>
      </Cell>
      <Cell col={3} row={3} colSpan={2} rowSpan={2} zIndex={2}>
        <TextBlock fontSize={16} fontWeight={800} mono color="var(--theme-magenta)" alignHorizontal="center" alignVertical="center" opacity={0.9}>04</TextBlock>
      </Cell>
      <Cell col={5} row={3} colSpan={2} rowSpan={2} zIndex={2}>
        <TextBlock fontSize={16} fontWeight={800} mono color="var(--theme-cyan)" alignHorizontal="center" alignVertical="center" opacity={0.9}>05</TextBlock>
      </Cell>

      {/* Title bar across row 5–6 */}
      <Cell col={1} row={5} colSpan={6} rowSpan={2}>
        <ColorBlock color="var(--theme-white)" opacity={0.06} />
      </Cell>
      <Cell col={1} row={5} colSpan={4} zIndex={2}>
        <TextBlock fontSize={9} fontWeight={800} color="var(--theme-white)" alignHorizontal="start" alignVertical="end" padding={3} lineHeight={1.1}>
          Working<br />With Us
        </TextBlock>
      </Cell>
      <Cell col={5} row={5} colSpan={2} rowSpan={2} zIndex={2}>
        <IconSingle name="hand-waving" color="var(--theme-white)" iconSize={14} opacity={0.5} />
      </Cell>
      <Cell col={1} row={6} colSpan={4} zIndex={2}>
        <TextBlock fontSize={4.5} fontWeight={400} mono uppercase letterSpacing="0.1em" color="var(--theme-white)" alignHorizontal="start" alignVertical="start" padding={3} opacity={0.5}>
          Urban Tech Creative
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 2 · Stripe steps + title ───────────────────────────────────────────────
export const StripeSteps: Story = {
  name: '2 – Stripe steps + title',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines color="var(--theme-white)" opacity={0.06} />

      {/* Full-face neon blob — very subtle */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock src="/faces/neon-blobs-01.webp" alt="" mixBlendMode="screen" opacity={0.15} />
      </Cell>

      {/* Each row is a stage, coloured stripe on left, label on right */}
      <Cell col={1} row={1} zIndex={2}><ColorBlock color="var(--theme-cyan)" /></Cell>
      <Cell col={2} row={1} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4.5} mono fontWeight={700} color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.9}>00 · Strategy</TextBlock>
      </Cell>

      <Cell col={1} row={2} zIndex={2}><ColorBlock color="var(--theme-green)" /></Cell>
      <Cell col={2} row={2} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4.5} mono fontWeight={700} color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.9}>01 · Discovery</TextBlock>
      </Cell>

      <Cell col={1} row={3} zIndex={2}><ColorBlock color="var(--theme-orange)" /></Cell>
      <Cell col={2} row={3} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4.5} mono fontWeight={700} color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.9}>02 · Feasibility</TextBlock>
      </Cell>

      <Cell col={1} row={4} zIndex={2}><ColorBlock color="var(--theme-purple)" /></Cell>
      <Cell col={2} row={4} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4.5} mono fontWeight={700} color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.9}>03 · Concept</TextBlock>
      </Cell>

      <Cell col={1} row={5} zIndex={2}><ColorBlock color="var(--theme-magenta)" /></Cell>
      <Cell col={2} row={5} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4.5} mono fontWeight={700} color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.9}>04 · Build</TextBlock>
      </Cell>

      <Cell col={1} row={6} zIndex={2}><ColorBlock color="var(--theme-cyan)" /></Cell>
      <Cell col={2} row={6} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4.5} mono fontWeight={700} color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.9}>05 · Deploy</TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 3 · Warm gradient + big title + icons ──────────────────────────────────
export const WarmGradientTitle: Story = {
  name: '3 – Warm gradient + big title + icons',
  render: () => (
    <FaceGrid>
      {/* Warm gradient background — green → orange */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <GradientBlock
          stops={[
            { color: 'var(--theme-green)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
          direction="to bottom right"
        />
      </Cell>

      <GridLines color="var(--theme-black)" opacity={0.08} />

      {/* Dark overlay for text legibility */}
      <Cell col={1} row={1} colSpan={6} rowSpan={4}>
        <ColorBlock color="var(--theme-black)" opacity={0.35} />
      </Cell>

      {/* Icon quad — collaboration icons */}
      <Cell col={1} row={1} colSpan={2} rowSpan={2} zIndex={2}>
        <IconQuad
          icons={{ tl: 'hand-waving', tr: 'users', bl: 'chat', br: 'path' }}
          color="var(--theme-white)"
          opacity={0.7}
          showDivider={false}
        />
      </Cell>

      {/* Stage numbers — small top right */}
      <Cell col={5} row={1} colSpan={2} zIndex={2}>
        <TextBlock fontSize={4} mono fontWeight={700} color="var(--theme-white)" alignHorizontal="end" alignVertical="center" padding={3} opacity={0.6}>00→06</TextBlock>
      </Cell>

      {/* Main title */}
      <Cell col={1} row={3} colSpan={6} rowSpan={2} zIndex={2}>
        <TextBlock fontSize={11} fontWeight={800} color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} lineHeight={1.05}>
          Working<br />With Us
        </TextBlock>
      </Cell>

      {/* Stripe across row 5 */}
      <Cell col={1} row={5} colSpan={6} zIndex={2}>
        <StripeBars colors={['var(--theme-cyan)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-green)', 'var(--theme-purple)', 'var(--theme-cyan)']} />
      </Cell>

      {/* Tagline */}
      <Cell col={1} row={6} colSpan={6} zIndex={2}>
        <TextBlock fontSize={4} fontWeight={500} mono uppercase letterSpacing="0.1em" color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.8}>
          Collaborative · Transparent · Iterative
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 4 · Dark process timeline ──────────────────────────────────────────────
export const DarkProcessTimeline: Story = {
  name: '4 – Dark process timeline',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines color="var(--theme-white)" opacity={0.05} />

      {/* Top accent — thin colour bars */}
      <Cell col={1} row={1} colSpan={6} zIndex={2}>
        <StripeBars colors={['var(--theme-cyan)', 'var(--theme-green)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-magenta)', 'var(--theme-cyan)']} />
      </Cell>

      {/* Big "Working" */}
      <Cell col={1} row={1} colSpan={6} rowSpan={2} zIndex={2}>
        <TextBlock fontSize={14} fontWeight={800} color="var(--theme-white)" alignHorizontal="start" alignVertical="end" padding={3} lineHeight={1.0}>
          Working
        </TextBlock>
      </Cell>

      {/* "With Us" in cyan */}
      <Cell col={1} row={3} colSpan={5} zIndex={2}>
        <TextBlock fontSize={14} fontWeight={800} color="var(--theme-cyan)" alignHorizontal="start" alignVertical="start" padding={3} lineHeight={1.0}>
          With Us
        </TextBlock>
      </Cell>

      {/* Hand-waving icon bottom right */}
      <Cell col={5} row={3} colSpan={2} rowSpan={2} zIndex={2}>
        <IconSingle name="hand-waving" color="var(--theme-cyan)" iconSize={16} opacity={0.8} />
      </Cell>

      {/* Stage number pills — row 4 */}
      <Cell col={1} row={4} colSpan={4} zIndex={2}>
        <TextBlock fontSize={4.5} mono fontWeight={600} color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.55} letterSpacing="0.15em">
          00 · 01 · 02 · 03 · 04 · 05 · 06
        </TextBlock>
      </Cell>

      {/* Bottom accent bar + tagline */}
      <Cell col={1} row={5} colSpan={6} zIndex={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.1} />
      </Cell>
      <Cell col={1} row={5} colSpan={6} zIndex={3}>
        <TextBlock fontSize={4} fontWeight={500} mono color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.7} uppercase letterSpacing="0.08em">
          Strategy to deployment
        </TextBlock>
      </Cell>

      <Cell col={1} row={6} colSpan={6} zIndex={2}>
        <TextBlock fontSize={3.5} mono color="var(--theme-white)" alignHorizontal="start" alignVertical="center" padding={3} opacity={0.4} uppercase letterSpacing="0.12em">
          Urban Tech Creative
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};
