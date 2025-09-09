type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([cls]) => cls)
  ]
    .join(' ')
}