// Shared "image not yet supplied" treatment used across the site so every
// placeholder looks and behaves the same until real photography lands.

export const OCTAGON_CLIP =
  'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'

export const PLACEHOLDER_PATTERN = {
  backgroundImage:
    'repeating-linear-gradient(135deg, var(--color-border) 0px, var(--color-border) 1px, transparent 1px, transparent 14px)',
  backgroundColor: 'var(--color-surface)',
}