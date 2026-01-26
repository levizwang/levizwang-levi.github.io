interface SectionDividerProps {
  label: string;
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="relative my-10">
      <div className="relative w-full pl-5 overflow-x-hidden md:pl-0">
        <div className="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>
      </div>
    </div>
  );
}
