import { isProd, isServerSide } from '@utils';

export function getNextAppURL(): string {
  return 'https://www.web3-monorepo.app';
  let vercelURL = '';
  if (process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL)
    vercelURL = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  if (isProd()) {
    if (vercelURL) return vercelURL;
    return isServerSide()
      ? (process.env.NEXTAUTH_URL as string)
      : (process.env.NEXT_PUBLIC_SITE_URL as string);
  } else {
    return vercelURL || 'http://localhost:3000';
  }
}
