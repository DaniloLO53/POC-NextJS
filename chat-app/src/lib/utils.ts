import {ClassValue, clsx} from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) { // it resolves potential conflicts from clsx merge css styles
  return twMerge(clsx(input)) // clsx transforms strings array to a string
}