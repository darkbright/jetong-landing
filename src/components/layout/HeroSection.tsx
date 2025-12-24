// src/components/common/HeroSection.tsx
import { Component, JSX } from "solid-js";

// 컴포넌트가 받을 Props 타입 정의
interface HeroSectionProps {
  /** 상단에 표시될 작은 배지 텍스트 (예: Jetong Solutions) */
  badgeText: string;
  /** 메인 타이틀. <br/>이나 <span> 태그를 포함할 수 있음 */
  title: JSX.Element;
  /** 하단 설명 텍스트. <br/> 태그를 포함할 수 있음 */
  description: JSX.Element;
}

/**
 * 공통 히어로 섹션 컴포넌트 (Dark Theme)
 */
const HeroSection: Component<HeroSectionProps> = (props) => {
  return (
    <header class="bg-gray-900 text-white border-b border-gray-800">
      <div class="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 text-center">
        
        {/* 배지 영역 */}
        <span class="inline-block py-1 px-3 rounded-full bg-blue-900 text-blue-300 text-sm font-semibold mb-6 border border-blue-700">
          {props.badgeText}
        </span>
        
        {/* 타이틀 영역 */}
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
          {/* SolidJS는 props.title을 그대로 렌더링하여 JSX 요소를 표현합니다 */}
          {props.title}
        </h1>
        
        {/* 설명 영역 */}
        <p class="max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          {props.description}
        </p>
        
      </div>
    </header>
  );
};

export default HeroSection;