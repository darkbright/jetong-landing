import { A } from "@solidjs/router";
import styles from "./haccp.module.css";
import CTASection from "~/components/layout/CTA";
import HeroSection from "~/components/layout/HeroSection";

export default function Haccp() {
  return (
    <div class="min-h-screen flex flex-col">
     <HeroSection
        badgeText="Food Safety Automation"
        title={<>수기 기록 없는 완벽한<br /> <span class={styles.gradientText}>Smart HACCP </span> </>}
        description={<> 중요관리점(CCP) 데이터를 자동으로 수집하고 위변조를 원천 차단합니다.<br /> 심사 준비 스트레스에서 이제 해방되십시오. </>}
      />

      {/* 2. 메인 콘텐츠 */}
      <main class="flex-grow bg-white">
        
        {/* 핵심 기능 3가지 (Grid) */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* Feature 1 */}
              <div class={styles.featureCard}>
                <div class={styles.iconCircle}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">자동화된 데이터 기록</h3>
                <p class="text-gray-600 leading-relaxed">
                  온도, 금속 검출 등 CCP 센서 데이터를 실시간으로 서버에 저장합니다. 사람이 개입할 틈이 없어 데이터 무결성을 보장합니다.
                </p>
              </div>

              {/* Feature 2 */}
              <div class={styles.featureCard}>
                <div class={styles.iconCircle}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">위변조 방지 보안</h3>
                <p class="text-gray-600 leading-relaxed">
                  수집된 데이터는 암호화된 DB에 저장되어, 사후 수정이 불가능함을 인증기관에 증명할 수 있습니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div class={styles.featureCard}>
                <div class={styles.iconCircle}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">디지털 일지 생성</h3>
                <p class="text-gray-600 leading-relaxed">
                  종이 일지 대신 태블릿으로 서명하고, 클릭 한 번으로 식약처 제출용 보고서(PDF)를 즉시 생성합니다.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 상세 설명 (이미지 + 텍스트) */}
        <section class="py-20 bg-gray-50 overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-16">
              
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-extrabold text-gray-900 mb-6">
                  이탈 즉시 알림으로<br />
                  <span class="text-purple-600">폐기 손실을 0%로</span>
                </h2>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                  냉동고 온도가 기준치를 벗어나면 관리자 스마트폰으로 즉시 알림을 보냅니다. 사고가 터진 후 수습하지 말고, 터지기 전에 예방하세요.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-700">
                    <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    카카오톡 / SMS / 앱 푸시 실시간 알림
                  </li>
                  <li class="flex items-center text-gray-700">
                    <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    이탈 시점 전후 CCTV 영상 자동 매칭 및 저장
                  </li>
                  <li class="flex items-center text-gray-700">
                    <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    개선 조치 결과 모바일 즉시 입력 지원
                  </li>
                </ul>
              </div>

              <div class="lg:w-1/2 relative">
                <div class={styles.glowEffect}></div>
                <div class={styles.imageContainer}>
                   <div class="text-center">
                     [Image: Smart HACCP real-time monitoring dashboard with sensor log charts]
                     <p class="text-purple-600 font-bold mt-4">제통재 Smart HACCP 관제 화면</p>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <CTASection 
        title="스마트 공장 구축 지원사업 상담"
        subtitle={<>초Smart HACCP 도입 비용의 최대 50%를 정부지원금으로 해결할 수 있습니다.<br />
              Jetong AI가 복잡한 서류 작업부터 시스템 구축까지 책임집니다.</>}
        primaryAction={{ label: "도입 상담 신청하기", href: "/contact" }}
        secondaryAction={{ label: "다른 솔루션 보기", href: "/solution" }}
      />      
    </div>
  );
}