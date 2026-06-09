import FaceGrid from './FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  TextBlock,
  IconSingle,
  StripeBars,
} from './primitives';

// Preserved source — restore this to FaceGrid return to redesign and re-bake
// Promoted from Experiments/Cube Face Working With Us story 1 – Stage numbers grid
const AIDesign = () => (
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

    {/* Title bar across rows 5–6 */}
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
);

export default function AI() {
  return <img src="/faces/ai.jpg" alt="" className="w-full h-full object-cover block" />;
}
