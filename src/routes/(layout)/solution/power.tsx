import { A } from "@solidjs/router";
import styles from "./power.module.css";
import CTASection from "~/components/layout/CTA";
import HeroSection from "~/components/layout/HeroSection";

export default function Power() {
  return (
    <div class="min-h-screen flex flex-col">

      <HeroSection
        badgeText="Energy Efficiency"
        title={<> 전기요금 폭탄을 막는<br /> <span class={styles.gradientTitle}>AI 전력 피크 알리미</span> </>}
        description={<> 단 한 번의 피크가 1년치 기본요금을 결정합니다.<br /> 실시간 감시와 예측으로 불필요한 전력 낭비를 차단하세요. </>}
      />

      {/* 2. 메인 콘텐츠 */}
      <main class="flex-grow bg-white">
        
        {/* 핵심 기능 3가지 (Grid) */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* Feature 1 */}
              <div class={styles.featureCard}>
                <div class={styles.iconBox}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">실시간 사용량 감시</h3>
                <p class="text-gray-600 leading-relaxed">
                  한전 i-Smart보다 빠릅니다. 메인 전력선에 CT 센서를 부착하여 1초 단위로 공장의 전력 사용 현황을 정밀하게 계측합니다.
                </p>
              </div>

              {/* Feature 2 */}
              <div class={styles.featureCard}>
                <div class={styles.iconBox}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">AI 피크 예측</h3>
                <p class="text-gray-600 leading-relaxed">
                  단순 수치 표시를 넘어 최근 패턴을 분석합니다. 15분 후 목표 전력을 초과할 가능성을 미리 계산하여 사전에 경고합니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div class={styles.featureCard}>
                <div class={styles.iconBox}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">다채널 긴급 알림</h3>
                <p class="text-gray-600 leading-relaxed">
                  위험 수위 도달 시 현장 경광등 작동은 물론, 카카오톡, 문자, 사내 방송 시스템을 통해 관리자에게 즉시 상황을 전파합니다.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 상세 설명 (Peak Cut 강조) */}
        <section class="py-20 bg-gray-50 overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-16">
              
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-extrabold text-gray-900 mb-6">
                  기본요금 절감의 핵심<br />
                  <span class="text-blue-600">Peak Cut (피크 컷)</span>
                </h2>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                  산업용 전기는 피크 수치가 갱신되는 순간 향후 1년간의 기본요금이 인상됩니다. 
                  **제통재(Jetong AI)** 솔루션은 목표치를 넘지 않도록 관리하여 고정 비용을 획기적으로 줄여줍니다.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-700">
                    <svg class="w-5 h-5 text-cyan-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    에어컴프레셔, 냉동기 등 대전력 설비의 부하 제어 연동
                  </li>
                  <li class="flex items-center text-gray-700">
                    <svg class="w-5 h-5 text-cyan-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    시간대별, 설비별 정밀 전력 사용량 분석 리포트
                  </li>
                  <li class="flex items-center text-gray-700">
                    <svg class="w-5 h-5 text-cyan-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    대기전력 자동 차단을 통한 추가 에너지 절감
                  </li>
                </ul>
              </div>

              <div class="lg:w-1/2 relative">
                <div class={styles.glow}></div>
                <div class={styles.imageWrapper}>
                  <div class="text-center">
                    [Image: Graph showing Peak Cut effect: Original high peak vs. managed lower peak through load balancing]
                    <p class="text-blue-600 font-bold mt-4">제통재 전력 피크 관리 분석</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <CTASection 
        title="우리 공장의 전력 낭비, 얼마나 될까요?"
        subtitle={<div>최근 1년치 전기요금 고지서를 보여주시면, <br />Jetong AI가 예상 절감액을 무료로 분석해 드립니다.</div>}
        primaryAction={{ label: "무료 진단 신청하기", href: "/contact" }}
        secondaryAction={{ label: "다른 솔루션 보기", href: "/solution" }}
      />      
    </div>
  );
}