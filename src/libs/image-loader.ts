export default function imageLoader({ src, width, quality }: { src: string, width: number, quality: number }) {
  const s3 = "https://s3.us-east-2.amazonaws.com/christian.gg";
  const path = src.startsWith('/') ? src.slice(1) : src;
  return `${s3}/${path}?w=${width}&q=${quality || 75}`;
}