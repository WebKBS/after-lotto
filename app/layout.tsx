import { Metadata } from 'next';
import Script from 'next/script';
import { getLottoData } from './_apis/get-lotto-data';
import { getCurrentLottoRound } from './_utils/get-current-lotto-round';
import LottoProvider from './contexts/LottoProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'After Lotto',
  description: 'Welcome to After Lotto',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getLottoData(getCurrentLottoRound());

  return (
    <html lang='ko'>
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services,clusterer,drawing`}
          strategy='beforeInteractive'
        />
      </head>
      <body className='w-screen flex justify-center'>
        <LottoProvider initialData={data}>
          <div className='h-screen w-[600px] min-w-[320px] bg-black'>{children}</div>
        </LottoProvider>
      </body>
    </html>
  );
}
