import clsx from 'clsx';

export const SECTION_DATA_TESTID = 'Section';

// Full static strings per stage so Tailwind's scanner picks up every class.
const stageHeadingClass: Record<string, string> = {
  '00': '[&_h2]:bg-theme-black [&_h2]:text-theme-cyan   [&_h2]:rounded-br-3xl [&_h2]:px-6 [&_h2]:py-3 [&_h2]:inline-block [&_h2]:-ml-6 sm:[&_h2]:-ml-16',
  '01': '[&_h2]:bg-theme-black [&_h2]:text-theme-green  [&_h2]:rounded-br-3xl [&_h2]:px-6 [&_h2]:py-3 [&_h2]:inline-block [&_h2]:-ml-6 sm:[&_h2]:-ml-16',
  '02': '[&_h2]:bg-theme-black [&_h2]:text-theme-orange [&_h2]:rounded-br-3xl [&_h2]:px-6 [&_h2]:py-3 [&_h2]:inline-block [&_h2]:-ml-6 sm:[&_h2]:-ml-16',
  '03': '[&_h2]:bg-theme-black [&_h2]:text-theme-purple [&_h2]:rounded-br-3xl [&_h2]:px-6 [&_h2]:py-3 [&_h2]:inline-block [&_h2]:-ml-6 sm:[&_h2]:-ml-16',
  '04': '[&_h2]:bg-theme-black [&_h2]:text-theme-magenta [&_h2]:rounded-br-3xl [&_h2]:px-6 [&_h2]:py-3 [&_h2]:inline-block [&_h2]:-ml-6 sm:[&_h2]:-ml-16',
  '05': '[&_h2]:bg-theme-black [&_h2]:text-theme-yellow [&_h2]:rounded-br-3xl [&_h2]:px-6 [&_h2]:py-3 [&_h2]:inline-block [&_h2]:-ml-6 sm:[&_h2]:-ml-16',
};

interface SectionProps {
  id?: string;
  className?: string;
  stage?: keyof typeof stageHeadingClass;
  children: React.ReactNode;
}

export default function Section({ id, className, stage, children }: SectionProps) {
  const styles = clsx('my-8', stage && stageHeadingClass[stage], className);

  return (
    <section data-testid={SECTION_DATA_TESTID} id={id} className={styles}>
      {children}
    </section>
  );
}
