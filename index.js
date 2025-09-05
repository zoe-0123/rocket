import React from 'react';
import Image from 'next/image';
import SajuTable from '../components/SajuTable';

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* 전체 컨테이너: max-w-md (448px), 중앙 정렬 */}
      <div className="max-w-md w-full flex flex-col items-center bg-[#f5f3ec]">

        {/* 첫 번째 이미지와 텍스트 - chapter_top.png + balloon_01.png */}
        <div className="relative w-full">
          <Image
            src="/chapter_top.png"
            alt="Chapter top"
            layout="responsive"
            width={448}
            height={750}
            className="w-full h-auto"
          />
        {/* 그라데이션 (Rectangle 47.png) 오버레이 */}
        <div className="absolute bottom-0 w-full">
          <Image
            src="/Rectangle 47.png"
            alt="Gradient overlay"
            layout="responsive"
            width={448}
            height={100}
            className="w-full h-auto"
          />
        </div>
          <div className="absolute bottom-[-9%] z-20 w-[90%] left-[35%] transform -translate-x-1/2 w-[250px] h-[140px]">
            <div className="relative">
              <Image
                src="/balloon_01.png"
                alt="Balloon 1"
                layout="responsive"
                width={300}
                height={150}
                className="w-full h-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[30%] text-center">
                <p className="text-sm font-regular text-gray-800" style={{ fontSize: '16px', lineHeight: '150%', letterSpacing: '-0.025em' }}>
                  <span className="font-regular">이제 본격적으로<br /> OO님</span>의 사주팔자를<br /> 분석해볼 차례네요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 두 번째 이미지와 텍스트 - image02.png + balloon_02.png */}
        <div className="relative w-full z-10 pt-[114px] pb-[40px] pr-[24px] bg-[#f5f3ec]">
          <Image
            src="/image02.png"
            alt="Writing on paper"
            layout="responsive"
            width={448}
            height={500}
            className="w-full h-auto"
          />
          <div className="absolute bottom-[-5%] w-[90%] left-[35%] transform -translate-x-1/2 w-[260px] h-[130px]">
            <div className="relative">
              <Image
                src="/balloon_02.png"
                alt="Balloon 2"
                layout="responsive"
                width={300}
                height={150}
                className="w-full h-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[42%] text-center">
                <p className="text-sm font-regular text-gray-800" style={{ fontSize: '16px', lineHeight: '150%', letterSpacing: '-0.025em' }}>
                  제가 <span className="font-regular">OO님</span>의 사주를<br /> 보기 쉽게 표로 정리했어요.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 세 번째 이미지 - image03.png */}
        <div className="relative w-full z-0">
          <Image
            src="/image03.png"
            alt="Smiling character"
            layout="responsive"
            width={448}
            height={500}
            className="w-full h-auto"
          />
        </div>
        {/* 사주팔자 표 컴포넌트 */}
        <div className="mt-8 mb-8 w-full mt-[-20px] z-10">
          <SajuTable />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
