export const maybePrefix = (s: string, prefix?: string) => 
  prefix === undefined
    ? s
    : `${prefix}: ${s}`