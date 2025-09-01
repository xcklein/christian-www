export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) {
  const base =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://christian.gg';
  const path = src.split('/').at(-1);

  return `${base}/${path}`;
}
