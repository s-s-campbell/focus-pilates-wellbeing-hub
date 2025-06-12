// This file contains utility functions that are used throughout our application

// Import clsx - a library that helps us combine CSS class names conditionally
import { clsx, type ClassValue } from "clsx"
// Import twMerge - a library that merges Tailwind CSS classes and removes conflicts
import { twMerge } from "tailwind-merge"

// This function combines multiple CSS class names intelligently
// It handles conditional classes and merges Tailwind classes properly
// Example: cn("bg-red-500", "hover:bg-blue-500", someCondition && "font-bold")
export function cn(...inputs: ClassValue[]) {
  // First use clsx to handle conditional classes, then twMerge to resolve Tailwind conflicts
  return twMerge(clsx(inputs))
}
