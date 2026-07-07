import classNames from "classnames"
import { twMerge } from "tailwind-merge"

export function cn(...args: any[]) {
  return twMerge(classNames(...args))
}