import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  className?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, className, light }: SectionHeadingProps) {
  return (
    <div className={cn('mb-8 text-center', className)}>
      <p className={cn('eyebrow mb-2', light && 'text-butter')}>{eyebrow}</p>
      <h2 className={cn('font-display text-4xl font-bold leading-tight sm:text-5xl', light ? 'text-white' : 'text-plum')}>
        {title}
      </h2>
    </div>
  )
}
