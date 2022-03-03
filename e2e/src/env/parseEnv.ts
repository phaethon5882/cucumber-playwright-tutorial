export const env = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`No environment variable found for ${key}`);
  }

  return value;
}