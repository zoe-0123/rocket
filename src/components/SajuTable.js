import React from 'react';
import Image from 'next/image';

const SajuTable = () => {
  return (
    <div className="bg-[#1e293b] text-white p-4 font-sans rounded-lg shadow-xl mx-auto w-[351px]">
      {/* 타이틀 및 날짜 */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mb-1">김로켓님의 사주</h2>
        <p className="text-sm font-semibold">1980년 8월27일 08:10</p>
      </div>

      {/* 테이블 헤더 */}
      <div className="grid grid-cols-4 text-center font-bold text-gray-400 border-b border-gray-600 pb-2">
        <div>時</div>
        <div>日</div>
        <div>月</div>
        <div>年</div>
      </div>

      {/* 테이블 내용 */}
      <div className="grid grid-cols-4 text-center text-sm">
        {/* 첫 번째 행: 십성 */}
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">十星</p>
          <p className="font-semibold">傷官</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">比肩</p>
          <p className="font-semibold">比肩</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">傷官</p>
          <p className="font-semibold">傷官</p>
        </div>
        <div className="py-2">
          <p className="text-xs text-gray-400">傷官</p>
          <p className="font-semibold">傷官</p>
        </div>

        {/* 두 번째 행: 천간 */}
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">天干</p>
          <div className="bg-[#2a3c5a] rounded-lg p-2 mt-1">
            <p className="text-xl font-bold">壬</p>
            <p className="text-[10px] text-gray-400">陰水</p>
          </div>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">天干</p>
          <div className="bg-[#8b2b2b] rounded-lg p-2 mt-1">
            <p className="text-xl font-bold">丁</p>
            <p className="text-[10px] text-gray-400">陰火</p>
          </div>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">天干</p>
          <div className="bg-[#2a3c5a] rounded-lg p-2 mt-1">
            <p className="text-xl font-bold">癸</p>
            <p className="text-[10px] text-gray-400">陰水</p>
          </div>
        </div>
        <div className="py-2">
          <p className="text-xs text-gray-400">天干</p>
          <div className="bg-[#2a3c5a] rounded-lg p-2 mt-1">
            <p className="text-xl font-bold">癸</p>
            <p className="text-[10px] text-gray-400">陰水</p>
          </div>
        </div>

        {/* 세 번째 행: 지지 */}
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">地支</p>
          <div className="bg-[#2a3c5a] rounded-lg p-2 mt-1">
            <p className="text-xl font-bold">寅</p>
          </div>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">地支</p>
          <div className="bg-[#8b2b2b] rounded-lg p-2 mt-1">
            <p className="text-xl font-bold">巳</p>
          </div>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">地支</p>
          <div className="bg-[#2a3c5a] rounded-lg p-2 mt-1">
            <p className="text-xl font-bold">亥</p>
          </div>
        </div>
        <div className="py-2">
          <p className="text-xs text-gray-400">地支</p>
          <div className="bg-[#2a3c5a] rounded-lg p-2 mt-1">
            <p className="text-xl font-bold">酉</p>
          </div>
        </div>
        
        {/* 네 번째 행: 십성 */}
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">十星</p>
          <p className="font-semibold">比肩</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">劫財</p>
          <p className="font-semibold">劫財</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">食神</p>
          <p className="font-semibold">食神</p>
        </div>
        <div className="py-2">
          <p className="text-xs text-gray-400">偏財</p>
          <p className="font-semibold">偏財</p>
        </div>

        {/* 다섯 번째 행: 십이운성 */}
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">十二運星</p>
          <p className="font-semibold">帝旺 (사)</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">帝旺</p>
          <p className="font-semibold">제왕(제왕)</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">浴</p>
          <p className="font-semibold">욕(태)</p>
        </div>
        <div className="py-2">
          <p className="text-xs text-gray-400">長生</p>
          <p className="font-semibold">장생(장생)</p>
        </div>
        
        {/* 여섯 번째 행: 십이신살 */}
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">十二神殺</p>
          <p className="font-semibold">劫殺</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">地殺</p>
          <p className="font-semibold">지살(역마살)</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">驛馬殺</p>
          <p className="font-semibold">역마살</p>
        </div>
        <div className="py-2">
          <p className="text-xs text-gray-400">將星殺</p>
          <p className="font-semibold">장성살</p>
        </div>
        
        {/* 일곱 번째 행: 귀인 */}
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">貴人</p>
          <p className="font-semibold">(없음)</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">貴人</p>
          <p className="font-semibold">(없음)</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">天乙</p>
          <p className="font-semibold">천을귀인</p>
        </div>
        <div className="py-2">
          <p className="text-xs text-gray-400">太極</p>
          <p className="font-semibold">태극귀인</p>
        </div>
        <div className="py-2 border-r border-gray-700">
          <p className="text-xs text-gray-400">文昌</p>
          <p className="font-semibold">문창귀인</p>
        </div>
      </div>
    </div>
  );
};

export default SajuTable;
