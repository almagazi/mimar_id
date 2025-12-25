/**
 * Utility functions for handling Lucide icon names
 */

/**
 * Converts kebab-case icon name to PascalCase
 * Example: "arrow-right" -> "ArrowRight"
 * Example: "check-circle-2" -> "CheckCircle2"
 */
export function toPascalCase(kebabCase: string): string {
  return kebabCase
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Converts PascalCase icon name to kebab-case
 * Example: "ArrowRight" -> "arrow-right"
 * Example: "CheckCircle2" -> "check-circle-2"
 */
export function toKebabCase(pascalCase: string): string {
  return pascalCase
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}
