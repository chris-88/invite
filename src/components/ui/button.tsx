import type { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * shadcn-style button: variants are exported so links (<a>) can share the
 * exact same look via `buttonVariants()` without extra wrappers.
 */
export const buttonVariants = cva(
  [
    'inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 font-display text-lg font-semibold',
    'select-none transition-[transform,box-shadow,background-color] duration-150 ease-out',
    'active:translate-y-1 active:shadow-none disabled:pointer-events-none disabled:opacity-60',
    'touch-manipulation whitespace-nowrap',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-bubblegum text-white shadow-pop-sm hover:bg-bubblegum-deep hover:-translate-y-0.5 hover:shadow-pop',
        butter:
          'bg-butter text-plum shadow-pop-sm hover:bg-[#ffd94d] hover:-translate-y-0.5 hover:shadow-pop',
        outline:
          'border-[3px] border-plum bg-white/80 text-plum shadow-pop-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-pop',
        light:
          'bg-white text-plum shadow-[0_6px_0_0_#1b0b30] hover:-translate-y-0.5 hover:shadow-[0_10px_0_0_#1b0b30] hover:bg-cream',
        ghost: 'min-h-12 bg-transparent px-4 text-base underline-offset-4 hover:underline active:translate-y-0',
      },
      size: {
        md: '',
        lg: 'min-h-16 px-9 text-xl',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
