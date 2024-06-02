import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-[1400px] px-8 md:px-10', className)}
      {...props}
    />
  )
}

export function SectionContainer({
  id,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'section'>) {
  return (
    <section id={id} className={clsx('pb-20 pt-24 ', className)} {...props} />
  )
}

interface SectionTitleProps extends React.ComponentPropsWithoutRef<'h2'> {
  label: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <h2
      className={clsx(
        'bg-gradient-to-b text-center md:text-left from-white to-highlight-primary bg-clip-text text-[1.9rem] font-bold leading-tight text-transparent md:text-[2.4rem]',
        className,
      )}
      {...props}
    >
      {label}
    </h2>
  );
};
