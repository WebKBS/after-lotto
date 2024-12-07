import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'After Lotto',
  description: 'Welcome to After Lotto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services,clusterer,drawing`}
          strategy='beforeInteractive'
        />
      </head>
      <body className='w-screen flex justify-center'>
        <div className='h-screen w-[600px] min-w-[320px] bg-black'>{children}</div>
      </body>
    </html>
  );
}
