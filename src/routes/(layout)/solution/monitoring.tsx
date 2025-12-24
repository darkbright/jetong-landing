import { A } from "@solidjs/router";
import styles from "./monitoring.module.css";
import HeroSection from "~/components/layout/HeroSection";
import CTASection from "~/components/layout/CTA";

export default function Monitoring() {
  return (
    <div class="flex flex-col min-h-screen">

      <HeroSection
        badgeText="Maximize Productivity"
        title={<> 잠들어 있는 시간을 깨우는<br /> <span class={styles.gradientText}>설비 가동률 모니터링</span> </>}
        description={<> 기계는 거짓말을 하지 않지만, 데이터가 없으면 침묵합니다.<br /> 0.1초 단위의 정밀한 카운팅으로 공장의 진짜 효율(OEE)을 찾아드립니다. </>}
      />


      {/* 2. 메인 콘텐츠 */}
      <main class="flex-grow">
        {/* 핵심 기능 3가지 */}
        <section class={styles.featureSection}>
          <div class={styles.container}>
            <div class={styles.featureGrid}>
              
              {/* Feature 1 */}
              <div class={styles.featureCard}>
                <div class={styles.iconWrapper}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3>정확한 생산 카운팅</h3>
                <p>단순 센서 감지를 넘어, 채터링을 필터링한 정확한 수량을 집계합니다. 목표 대비 달성률을 실시간으로 확인하세요.</p>
              </div>

              {/* Feature 2 */}
              <div class={styles.featureCard}>
                <div class={styles.iconWrapper}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3>비가동 원인 분석</h3>
                <p>설비가 멈추면 원인을 즉시 입력합니다. 유휴 시간의 '이유'를 알면 공정 개선의 '해결책'이 보입니다.</p>
              </div>

              {/* Feature 3 */}
              <div class={styles.featureCard}>
                <div class={styles.iconWrapper}>
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
                </div>
                <h3>OEE 자동 산출</h3>
                <p>가동률, 성능, 양품률을 종합한 설비 종합 효율(OEE)을 엑셀 없이 자동으로 실시간 계산합니다.</p>
              </div>

            </div>
          </div>
        </section>

        {/* 상세 설명 (Andon) */}
        <section class={styles.detailSection}>
          <div class={styles.container}>
            <div class={styles.detailFlex}>
              <div class={styles.detailContent}>
                <h2>현장이 한눈에 들어오는<br /><span class={styles.greenText}>ANDON(안돈) 시스템</span></h2>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                  가동(초록), 비가동(빨강), 대기(노랑) 상태를 직관적으로 시각화하여 관리자가 현장에 없어도 공장의 흐름을 읽을 수 있습니다.
                </p>
                <ul class={styles.detailList}>
                  <li class={styles.listItem}>
                    <svg class={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    설비별 실시간 RPM / 온도 / 전류 데이터 연동
                  </li>
                  <li class={styles.listItem}>
                    <svg class={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    일간/주간/월간 생산 리포트 자동 발송
                  </li>
                  <li class={styles.listItem}>
                    <svg class={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    ERP / MES 시스템과의 유연한 API 연동
                  </li>
                </ul>
              </div>

              <div class={styles.detailImageArea}>
                <div class={styles.imageBlurBg}></div>
                <div class={styles.imagePlaceholder}>
                  <p class="text-green-600 font-bold">설비 종합 효율(OEE) 대시보드</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <CTASection 
        title="우리 공장 가동률, 얼마나 될까요?"
        subtitle={<>Jetong Box를 설치하고 딱 하루만 지켜보세요.<br /> 놀라운 데이터의 차이를 직접 경험하실 수 있습니다.</>}
        primaryAction={{ label: "무료 진단 신청하기", href: "/contact" }}
        secondaryAction={{ label: "다른 솔루션 보기", href: "/solution" }}
      />   

    </div>
  );
}