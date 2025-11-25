"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

interface AnimatedCounterProps extends React.ComponentProps<"pre"> {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  play?: boolean;
  from?: number;
  onComplete?: (finalValue: number) => void;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  to,
  duration = 3,
  prefix = '',
  suffix = '',
  play = true,
  from = 0,
  onComplete,
  ...props
}) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    if (!play) return

    const controls = animate(count, to, {
      duration,
      onComplete: () => onComplete?.(to)
    })

    return controls.stop
  }, [count, to, duration, play, onComplete])

  return <pre {...props}>
    {prefix}
    <motion.span>{rounded}</motion.span>
    {suffix}
  </pre>
}