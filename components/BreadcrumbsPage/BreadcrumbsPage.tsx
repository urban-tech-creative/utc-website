'use client';

import { useEffect, useRef, useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Page from '@/components/Page/Page';
import type { PageProps } from '@/components/Page/Page';

interface Item {
  label: string;
  path?: string;
  current?: boolean;
}

interface BreadcrumbsPageProps {
  items: Item[];
  children: React.ReactNode;
  className?: PageProps['className'];
  style?: PageProps['style'];
}

const GAP = 20; // px gap from page bottom / viewport bottom

export default function BreadcrumbsPage({ items, children, className, style }: BreadcrumbsPageProps) {
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [showFloat, setShowFloat] = useState(false);
  const [buttonLeft, setButtonLeft] = useState(0);
  const [buttonBottom, setButtonBottom] = useState(GAP);

  useEffect(() => {
    const el = breadcrumbRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloat(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      const pageRect = pageRef.current?.getBoundingClientRect();
      if (!pageRect) return;

      // Left: flush with the white box border
      setButtonLeft(pageRect.left);

      // Bottom: float at GAP from viewport bottom normally,
      // but clamp upward once the page's bottom edge comes into view
      const constrainedBottom = window.innerHeight - pageRect.bottom + GAP;
      setButtonBottom(Math.max(GAP, constrainedBottom));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const homeItem = items.find((item) => !item.current);

  return (
    <>
      <div ref={breadcrumbRef}>
        <Breadcrumbs items={items} />
      </div>

      {homeItem && (
        <a
          href={homeItem.path ?? '/'}
          aria-label={`Back to main menu — ${homeItem.label}`}
          style={{ left: buttonLeft, bottom: buttonBottom }}
          className={[
            'hidden sm:flex',
            'fixed z-50',
            'items-center',
            'bg-theme-black text-theme-white',
            'rounded-tr-3xl',
            'px-3 py-2.5 text-xs font-medium',
            'min-h-[44px]',
            'transition-[opacity,transform] duration-300 ease-out',
            'hover:text-theme-cyan focus-visible:outline-4 focus-visible:outline-theme-magenta focus-visible:outline-offset-2',
            showFloat
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3 pointer-events-none',
          ].join(' ')}
        >
          {homeItem.label}
        </a>
      )}

      <div ref={pageRef}>
        <Page className={className} style={style}>
          {children}
        </Page>
      </div>
    </>
  );
}
