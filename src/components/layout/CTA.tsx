import { Component, JSX } from "solid-js";
import { A } from "@solidjs/router"; // SolidStart의 라우터 링크 컴포넌트

interface CTAProps {
  /** 메인 질문 또는 제목 */
  title?: JSX.Element;
  /** 보조 설명 (정부지원사업 등) */
  subtitle?: JSX.Element;
  /** 주 버튼 텍스트와 링크 */
  primaryAction?: { label: string; href: string };
  /** 보조 버튼 텍스트와 링크 */
  secondaryAction?: { label: string; href: string };
}

const CTASection: Component<CTAProps> = (props) => {
  return (
    <section class="bg-blue-900 py-16">
      <div class="max-w-4xl mx-auto text-center px-4">
        
        {/* 타이틀 영역 */}
        <h2 class="text-3xl font-bold text-white mb-6">
          {props.title || "내 공장에 딱 맞는 솔루션이 궁금하신가요?"}
        </h2>
        
        {/* 서브 타이틀 영역 */}
        <p class="text-blue-100 mb-8 text-lg">
          {props.subtitle || "초기창업패키지 및 정부지원사업 연계 상담이 가능합니다."}
        </p>
        
        {/* 버튼 그룹 */}
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          {/* 주 버튼: 무료 견적 문의 */}
          <A 
            href={props.primaryAction?.href || "/contact"} 
            class="px-8 py-3 bg-white text-blue-900 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg active:scale-95"
          >
            {props.primaryAction?.label || "무료 견적 문의"}
          </A>
          
          {/* 보조 버튼: 기술력 확인하기 */}
          <A 
            href={props.secondaryAction?.href || "/tech"} 
            class="px-8 py-3 border border-blue-400 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors active:scale-95"
          >
            {props.secondaryAction?.label || "기술력 확인하기"}
          </A>
        </div>

      </div>
    </section>
  );
};

export default CTASection;