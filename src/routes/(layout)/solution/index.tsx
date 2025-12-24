import { For } from "solid-js";
import CTASection from "~/components/layout/CTA";
import HeroSection from "~/components/layout/HeroSection";
import SolutionCard from "~/components/layout/SolutionCard";

export default function SolutionIndex() {

const solutionsData = [
    {
      themeColor: "blue" as const,
      badge: "Cost Saving",
      title: "전력 피크 알리미",
      description: "공장 전기요금 폭탄의 주범은 '피크 전력'입니다. 실시간 사용량을 분석하여 목표 피크치 도달 전 즉시 경고합니다.",
      href: "/solution/power",
      icon: <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    {
      themeColor: "green" as const,
      badge: "Productivity",
      title: "설비 가동률 & 카운터",
      description: "기계가 멈추면 돈도 멈춥니다. 설비의 가동/비가동 상태와 생산 수량을 0.1초 단위로 집계합니다.",
      href: "/solution/monitoring",
      icon: <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    },
    {
      themeColor: "purple" as const,
      badge: "Compliance",
      title: "Smart HACCP",
      description: "골치 아픈 수기 기록에서 해방되십시오. 온도, 금속검출 등 데이터를 자동 수집하여 실시간 심사 데이터를 생성합니다.",
      href: "/solution/haccp",
      icon: <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    },
    {
      themeColor: "red" as const,
      badge: "Safety First",
      title: "산업 안전관리 솔루션",
      description: "중대재해처벌법, 더 이상 두려워하지 마세요. 위험 구역 접근 감지부터 비상 상황 알림까지 리스크를 관리합니다.",
      href: "/solution/safety",
      icon: <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    }
  ];

  return (
    <>
      {/* 공통 히어로 컴포넌트 사용 */}
      <HeroSection
        badgeText="Jetong Solutions"
        title={<> 현장의 문제를 해결하는<br /> <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-400"> 4가지 핵심 열쇠 </span> </>}
        description={<> 데이터 수집부터 제어, 그리고 안전까지.<br /> 제통재의 기술력으로 완성된 실전형 솔루션을 만나보세요. </>}
      />

      <main class="grow bg-white">
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <For each={solutionsData}>
                {(solution) => (
                  <SolutionCard 
                    icon={solution.icon}
                    badge={solution.badge}
                    title={solution.title}
                    description={solution.description}
                    href={solution.href}
                    themeColor={solution.themeColor}
                  />
                )}
              </For>
            </div>
          </div>
        </section>
      </main>

      <CTASection 
        title="내 공장에 딱 맞는 솔루션이 궁금하신가요?"
        subtitle="초기창업패키지 및 정부지원사업 연계 상담이 가능합니다."
        primaryAction={{ label: "무료 견적 문의", href: "/contact" }}
        secondaryAction={{ label: "기술력 확인하기", href: "/tech" }}
      />
    </>
  );
}