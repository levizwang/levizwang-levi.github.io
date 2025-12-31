export function GridBackground() {
  const GridSide = ({ side }: { side: 'left' | 'right' }) => (
    <div className={`absolute top-0 ${side}-0 w-1/2 h-auto bg-neutral-100 dark:bg-neutral-800`}>
      <div className={`absolute inset-0 z-30 w-full h-full pointer-events-none bg-gradient-to-${side === 'left' ? 'tl' : 'tr'} from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent`}></div>
      <div className="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-neutral-700 border-neutral-300 dark:border-neutral-900">
        {[...Array(6)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="relative flex w-full divide-x h-[30px] sm:h-[45px] md:h-[60px] xl:h-[88px] divide-neutral-300 dark:divide-neutral-700 divide-dashed"
          >
            {[...Array(9)].map((_, colIndex) => (
              <div
                key={colIndex}
                className="w-full h-auto bg-white dark:bg-neutral-950 aspect-square"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="absolute w-full h-auto" style={{ zIndex: -1 }}>
      <GridSide side="left" />
      <GridSide side="right" />
    </div>
  );
}
