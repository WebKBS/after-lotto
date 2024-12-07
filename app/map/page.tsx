import KakaoMap from '@/components/kakao/KakaoMap';

const MapPage = () => {
  return (
    <main className='text-white'>
      <h2>명당 지도</h2>
      <div className='bg-gray'>
        <KakaoMap />
      </div>
    </main>
  );
};

export default MapPage;
