import { For } from 'solid-js';
import HeroSection from '~/components/layout/HeroSection';

const SensorsPage = () => {
  const sensorData = [
    {
      id: "01",
      title: "환경 센서",
      engTitle: "ENVIRONMENTAL MONITORING",
      link: "/sensors/environment", // 상세 페이지 경로
      description: "공정의 정밀도와 작업자의 안전을 결정짓는 미세한 대기 변화를 실시간으로 포착합니다.",
      icon: "🌡️",
      accent: "text-emerald-500",
      btnBg: "bg-emerald-500",
      line: "bg-emerald-500",
      metrics: [
        { name: "온도 (℃)", detail: "장비 과열 및 공정 이상 감지" },
        { name: "습도 (%RH)", detail: "결로 방지 및 제품 품질 관리" },
        { name: "기압 (hPa)", detail: "클린룸 압력 및 공정 안정성 유지" },
        { name: "가스 (CO/VOC)", detail: "유해 물질 모니터링 및 자동 환기" }
      ],
      strengths: [
        "±0.3℃ 오차 범위 내 초정밀 계측 시스템",
        "IP65 등급 이상의 강력한 방진·방수 설계",
        "극한의 현장에서도 변함없는 정밀도 유지"
      ]
    },
    {
      id: "02",
      title: "에너지 센서",
      engTitle: "ENERGY MANAGEMENT",
      link: "/sensors/energy",
      description: "에너지 흐름을 투명하게 시각화하여 불필요한 손실을 줄이고 전기적 안전 사고를 차단합니다.",
      icon: "⚡",
      accent: "text-amber-500",
      btnBg: "bg-amber-500",
      line: "bg-amber-500",
      metrics: [
        { name: "전력량 (kWh)", detail: "실시간 에너지 비용 분석 및 관리" },
        { name: "전류 (A)", detail: "설비 부하량 상시 감시 및 과부하 방지" },
        { name: "전압 (V)", detail: "전압 불평형 및 품질 이상 탐지" },
        { name: "역률 (PF)", detail: "전력 사용 효율 분석 및 최적화" }
      ],
      strengths: [
        "비침습 CT 적용으로 생산 중단 없는 즉시 설치",
        "Class 1.0 이상의 산업용 고정밀 계측 등급",
        "국내외 다양한 전력 규격 완벽 대응"
      ]
    },
    {
      id: "03",
      title: "장비 상태 모니터링",
      engTitle: "EQUIPMENT HEALTH",
      link: "/sensors/equipment",
      description: "설비의 물리적 신호를 분석하여 고장의 전조 증상을 사전에 예고하고 가동률을 극대화합니다.",
      icon: "🛠️",
      accent: "text-blue-600",
      btnBg: "bg-blue-600",
      line: "bg-blue-600",
      metrics: [
        { name: "진동 (mm/s)", detail: "베어링 마모 및 축 정렬 이상 진단" },
        { name: "가속도 (g)", detail: "비정상적인 충격 및 미세 진동 감지" },
        { name: "표면 온도 (℃)", detail: "구동부 및 모터 하우징 과열 모니터링" },
        { name: "소음 (dB)", detail: "기계적 마찰음 및 아크 소음 분석" }
      ],
      strengths: [
        "초고속 샘플링 기반의 AI 예지 보전 알고리즘",
        "Edge-Inference를 통한 실시간 이상 포착",
        "최적의 센서 마운팅 솔루션 제공"
      ]
    },
    {
      id: "04",
      title: "식품 HACCP 솔루션",
      engTitle: "FOOD SAFETY (SMART HACCP)",
      link: "/sensors/haccp",
      description: "먹거리의 안전을 지키는 엄격한 기준, 스마트 HACCP 자동화 기록 체계로 신뢰를 구축합니다.",
      icon: "🍱",
      accent: "text-rose-500",
      btnBg: "bg-rose-500",
      line: "bg-rose-500",
      metrics: [
        { name: "중심 온도 (℃)", detail: "가열 공정 내 식중독균 사멸 확인" },
        { name: "저장 온도 (℃)", detail: "냉장·냉동고 법적 온도 상시 감시" },
        { name: "작업장 습도", detail: "미생물 증식 억제 환경 실시간 관리" },
        { name: "디지털 로그", detail: "수기 기록 없는 자동 이력 관리 시스템" }
      ],
      strengths: [
        "STS316 위생 소재 및 IP69K 방수 인증",
        "수정 불가능한 데이터로 법적 증빙 완벽 대응",
        "국가 공인 교정 성적서 지원 센서 라인업"
      ]
    }
  ];

  return (
    <>
      <HeroSection
        badgeText="JetongBox Sensor Ecosystem"
        title={<>현장의 숨소리까지 읽어내는<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">흔들림 없는 감각 체계</span> </>}
        description={<> 현장의 모든 신호는 생존의 데이터입니다.<br /> Jetong Box는 단 하나의 오차도 방관하지 않습니다. </>}
      />      

      {/* Vertical Sensor Categories with Links */}
      <section class="py-20 px-6 max-w-6xl mx-auto">
        <div class="space-y-32">
          <For each={sensorData}>
            {(cat) => (
              <div class="group grid lg:grid-cols-12 gap-12 items-center">
                {/* Left: Category Info & Link */}
                <div class="lg:col-span-5">
                  <div class="flex items-center gap-4 mb-4">
                    <span class={`text-6xl opacity-20 font-black italic ${cat.accent}`}>{cat.id}</span>
                    <div class={`h-[2px] flex-grow ${cat.line}`}></div>
                  </div>
                  <h2 class="text-4xl font-bold mb-2">{cat.title}</h2>
                  <p class={`text-sm font-bold tracking-[0.2em] mb-6 uppercase ${cat.accent}`}>{cat.engTitle}</p>
                  <p class="text-lg text-slate-600 leading-relaxed mb-8">{cat.description}</p>
                  
                  <div class="space-y-6">
                    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Technical Points</h4>
                      <ul class="space-y-3">
                        <For each={cat.strengths}>
                          {(strength) => (
                            <li class="flex items-start text-sm text-slate-700">
                              <svg class={`w-5 h-5 mr-3 shrink-0 ${cat.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                              </svg>
                              {strength}
                            </li>
                          )}
                        </For>
                      </ul>
                    </div>

                    {/* 상세 페이지 이동 링크 버튼 */}
                    <a href={cat.link} class={`inline-flex items-center justify-center w-full py-4 rounded-xl text-white font-bold transition-all hover:shadow-lg hover:brightness-110 active:scale-[0.98] ${cat.btnBg}`}>
                      {cat.title} 상세 솔루션 보기
                      <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Metrics Grid (이전과 동일) */}
                <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                  <For each={cat.metrics}>
                    {(metric) => (
                      <div class="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300">
                        <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                          {cat.icon}
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-slate-800">{metric.name}</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">{metric.detail}</p>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </section>
    </>
  );
};

export default SensorsPage;