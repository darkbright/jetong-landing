import { A } from "@solidjs/router";
import styles from "./safety.module.css";
import CTASection from "~/components/layout/CTA";
import HeroSection from "~/components/layout/HeroSection";

export default function Safety() {
  return (
    <div class="min-h-screen flex flex-col">
      <HeroSection
        badgeText="Zero Accident"
        title={<> 타협할 수 없는 가치,<br /> <span class={styles.gradientTitle}>AI 산업 안전관리 시스템</span> </>}
        description={<> 중대재해처벌법 대응은 선택이 아닌 필수입니다.<br /> 위험을 감지하는 순간, 설비를 멈추고 사람을 살립니다. </>}
      />      

      {/* 2. 메인 콘텐츠 */}
      <main class="grow bg-white">
        
        {/* 핵심 기능 3가지 (Grid) */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* Feature 1 */}
              <div class={styles.featureCard}>
                <div class={styles.iconCircle}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">위험 구역 접근 감지</h3>
                <p class="text-gray-600 leading-relaxed">
                  지게차 이동 경로, 프레스 장비 근처 등 Red Zone에 작업자가 접근하면 센서가 즉시 인식하고 경고 방송을 송출합니다.
                </p>
              </div>

              {/* Feature 2 */}
              <div class={styles.featureCard}>
                <div class={styles.iconCircle}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">설비 인터락(Interlock) 연동</h3>
                <p class="text-gray-600 leading-relaxed">
                  단순 경고를 넘어 협착 위험이나 끼임 사고가 예상될 때, **Jetong Box**가 설비 전원을 물리적으로 차단하여 사고를 방지합니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div class={styles.featureCard}>
                <div class={styles.iconCircle}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">비상 호출 및 증거 기록</h3>
                <p class="text-gray-600 leading-relaxed">
                  SOS 버튼과 연동되며, 사고 전후 상황을 CCTV 영상과 센서 데이터로 자동 저장하여 법적 면책을 위한 증거 자료를 확보합니다.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 상세 설명 (AI 기술 강조) */}
        <section class="py-24 bg-gray-50 overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class={styles.sideBySide}>
              
              {/* 왼쪽: 텍스트 영역 */}
              <div class={styles.textSide}>
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  24시간 깨어있는<br />
                  <span class="text-red-600">AI 안전 관리자</span>
                </h2>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  사람은 실수하지만 시스템은 실수하지 않습니다.
                  LIDAR 센서와 비전 AI 기술을 융합하여 현장의 사각지대 없는 완벽한 안전망을 구축합니다.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start text-gray-700">
                    <svg class="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>보호구 미착용 식별:</strong> 안전모 미착용 시 즉시 경고</span>
                  </li>
                  <li class="flex items-start text-gray-700">
                    <svg class="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>위험 구역 통제:</strong> 비인가자 진입 시 설비 즉시 정지</span>
                  </li>
                  <li class="flex items-start text-gray-700">
                    <svg class="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>환경 모니터링:</strong> 유해가스 및 산소 농도 실시간 관제</span>
                  </li>
                </ul>
              </div>

              {/* 오른쪽: 이미지 영역 */}
              <div class={`${styles.imageSide} relative`}>
                <div class={styles.glowEffect}></div>
                <div class={styles.imageArea}>
                  <div class="text-center">
                    
                    <p class="text-red-600 font-bold mt-4">제통재 통합 안전 관제 화면</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <CTASection 
        title="안전은 비용이 아니라, 가장 큰 투자입니다."
        subtitle={<>중대재해 발생 시 예상되는 손실액은 시스템 도입 비용의 수십 배입니다.<br /> 지금 바로 Jetong AI의 전문가에게 안전 진단을 받으세요.</>}
        primaryAction={{ label: "무료 진단 신청하기", href: "/contact" }}
        secondaryAction={{ label: "다른 솔루션 보기", href: "/solution" }}
      /> 
      
    </div>
  );
}