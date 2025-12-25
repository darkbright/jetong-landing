import { A } from "@solidjs/router";
import { Title, Meta } from "@solidjs/meta";
import styles from "./jetong-box.module.css";

export default function JetongBox() {
  return (
    <>
      <Title>Jetong Box - 스마트팩토리 실시간 제어 솔루션</Title>
      <Meta name="description" content="공장 PC를 대체하는 단 하나의 박스. PLC, 로봇, 센서 데이터를 Jetong Box로 통합하세요." />

      <div class={`${styles.fontNoto} text-slate-800 bg-white`}>
        <HeroSection />
        <FeaturesSection />
        <IndustriesSection />
        <CompatibilitySection />
        <SystemDiagramSection />
        <BomSection />
        <SocSection />
        <SomSection />
        <CustomBoardSection />
        <DataSection />
        <CarrierSection />
        <ConnectionSection />
        <TakachiSection />
        <OsSection />
        <DashboardSection />
      </div>
    </>
  );
}

function HeroSection(props: any) {
  return (
        <header id="product" class={`${styles.heroPattern} relative text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden`}>
          <div class={`${styles.blob} bg-[#ea580c] w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2`}></div>
          <div class={`${styles.blob} bg-blue-600 w-96 h-96 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2`}></div>

          <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-center lg:text-left">
              <div class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-orange-300 uppercase bg-orange-900/50 rounded-full border border-orange-500/30">
                Smart Factory Real-time Control Box
              </div>
              
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
                공장 PC 치우세요.<br />
                <span class={styles.brandBoxPrimary}>"박스 하나"</span>면 끝납니다.
              </h1>
              
              <p class="text-lg text-slate-400 mb-8 leading-relaxed">
                <strong>HACCP부터 일반 제조 설비 관제까지.</strong><br />
                PLC, 로봇, 센서 데이터를 <strong>Jetong Box</strong> 하나로 통합하세요.<br />
                OS 오류 없는 실시간 데이터 처리와 사장님 모바일 관제를 동시에 해결합니다.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button class="px-8 py-4 rounded-lg bg-[#ea580c] text-white font-bold text-lg hover:bg-orange-600 transition shadow-lg shadow-orange-900/50 flex items-center justify-center gap-2">
                  <i class="fa-solid fa-file-arrow-down"></i> 브로슈어 다운로드
                </button>
                <A href="/contact" class="px-8 py-4 rounded-lg bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 transition border border-slate-700 text-center">
                  1:1 도입 상담
                </A>
              </div>
            </div>
            
            {/* 3D Box CSS Art */}
            <div class="relative flex justify-center">
              <div class="w-72 h-72 md:w-80 md:h-80 bg-slate-800 rounded-3xl border border-slate-700 flex flex-col items-center justify-center shadow-2xl relative transform rotate-3 hover:rotate-0 transition duration-500">
                <div class="absolute -top-10 right-10 w-2 h-16 bg-slate-600 rounded-full"></div>
                <div class="absolute top-6 left-6 flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                  <div class="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                </div>
                <i class="fa-brands fa-rust text-8xl text-white/10 absolute"></i>
                <h2 class="text-4xl font-black text-white tracking-widest z-10">JETONG</h2>
                <p class={`${styles.brandBoxPrimary} font-bold tracking-[0.3em] text-sm z-10 uppercase`}>Control Box</p>
                
                <div class="absolute bottom-0 w-full h-12 bg-slate-900 rounded-b-3xl flex justify-center items-center gap-4 border-t border-slate-700">
                  <div class="w-8 h-3 bg-slate-700 rounded-sm"></div>
                  <div class="w-8 h-3 bg-slate-700 rounded-sm"></div>
                  <div class={`w-8 h-3 bg-[#ea580c] rounded-sm`}></div>
                </div>
              </div>
              
              <FloatingBadge top="top-0" right="-right-8" icon="fa-industry" color="text-gray-300">PLC/설비 연동</FloatingBadge>
              <FloatingBadge bottom="bottom-10" left="-left-12" icon="fa-microchip" color="text-yellow-400">IoT/HACCP 센서</FloatingBadge>
              <div class={`absolute top-1/2 -right-12 bg-[#ea580c] p-3 rounded-lg text-white text-sm font-bold shadow-[0_0_20px_rgba(234,88,12,0.5)]`}>
                <i class="fa-solid fa-chart-line mr-2"></i>실시간 관제
              </div>
            </div>
          </div>
        </header>    
  );
}

function FeaturesSection(props: any) {
  return (
        <section id="features" class="py-20 bg-slate-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class={`text-base font-bold tracking-wide uppercase ${styles.brandBoxPrimary}`}>All-in-One Control Box</h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                모든 현장을 하나로 제어합니다
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard icon="🔗" title="범용 인터페이스 연결">
                HACCP은 기본. **PLC, 전압, 진동 센서**까지. RS-232/485, Modbus 완벽 지원으로 공장의 모든 데이터를 수집합니다.
              </FeatureCard>
              <FeatureCard icon="🛡️" badge="Core Tech" title="무중단 데이터 키퍼">
                국방급 **Rust 엔진**이 네트워크 단절 시에도 로컬에 데이터를 안전하게 보호하고 연결 시 자동 복구합니다.
              </FeatureCard>
              <FeatureCard icon="📱" title="모바일 통합 대시보드">
                라인 가동 현황과 불량률을 실시간으로 파악하는 **사장님 전용 상황실**을 모바일로 제공합니다.
              </FeatureCard>
            </div>
          </div>
        </section>    
  );
}

function CompatibilitySection(props: any) {
  return (
            <section id="compatibility" class="py-12 bg-orange-50 border-y border-orange-100">
          <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="shrink-0 bg-white p-4 rounded-full shadow-lg text-[#ea580c]">
                <i class="fa-solid fa-laptop-code text-4xl"></i>
              </div>
              <div class="grow text-center md:text-left">
                <h3 class="text-2xl font-bold text-slate-900 mb-2">잠깐! 굴러다니는 구형 노트북이 있으신가요?</h3>
                <p class="text-slate-700 font-medium text-lg mb-2">
                  꼭 전용 하드웨어가 아니어도 됩니다.
                </p>
                <p class="text-slate-600">
                  JetongAI의 <strong>Rust 기반 에이전트</strong>는 극도로 가벼워서 <br />
                  <span class="bg-yellow-200 px-1 font-bold">10년 된 구형 노트북이나 산업용 PC</span>에도 즉시 설치 가능합니다.<br />
                  기존 장비를 '최신 스마트팩토리 관제 허브'로 변신시켜 드립니다.
                </p>
              </div>
              <div class="shrink-0">
                <A href="/contact" class="inline-block px-6 py-3 border-2 border-[#ea580c] text-[#ea580c] font-bold rounded-lg hover:bg-[#ea580c] hover:text-white transition">
                  설치형 문의하기
                </A>
              </div>
            </div>
          </div>
        </section>
  );
}

function IndustriesSection(props: any) {
  return (
        <section id="industries" class="py-20 bg-white border-t border-slate-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-base text-[#ea580c] font-bold tracking-wide uppercase">Target Industries</h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                어떤 현장에 필요한가요?
              </p>
              <p class="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                습기, 진동, 고온, 먼지. <br />일반 PC가 견디지 못하는 극한 환경에서 진가를 발휘합니다.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Food & HACCP */}
              <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#ea580c]/50 hover:shadow-xl transition duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                    <i class="fa-solid fa-utensils"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900">식품 가공 및 제조</h3>
                    <span class="text-xs font-bold text-[#ea580c] bg-orange-100 px-2 py-1 rounded">Smart HACCP 필수</span>
                  </div>
                </div>
                
                <div class="space-y-4 mb-6 text-slate-600">
                  <p><strong class="text-slate-900">적용 대상:</strong> 김치, 육가공(소세지/햄), 두부/어묵, 소스 공장</p>
                  <p><strong class="text-slate-900">현장 환경:</strong> 잦은 물청소로 인한 습기, 멸균/가열 공정의 고온 (PC 고장률 1위 환경)</p>
                  <div class="bg-white p-4 rounded-lg border border-slate-200">
                    <h4 class="font-bold text-sm mb-2 text-slate-800">Jetong Box 활용</h4>
                    <ul class="text-sm space-y-1 list-disc list-inside text-slate-500">
                      <li>냉동/냉장 창고 온도 24시간 기록 및 이탈 알림</li>
                      <li>포장 직전 금속 검출기 데이터 자동 수집 (수기 대체)</li>
                    </ul>
                  </div>
                </div>
                <div class="bg-[#0f172a]/5 p-4 rounded-xl border-l-4 border-[#ea580c]">
                  <p class="text-sm font-medium italic text-slate-700">
                    "습기 때문에 PC 고장 나면 HACCP 데이터 다 날아갑니다. 이건 밀폐형이라 물 튀어도 끄떡없습니다."
                  </p>
                </div>
              </div>

              {/* Manufacturing & Injection */}
              <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#ea580c]/50 hover:shadow-xl transition duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-xl">
                    <i class="fa-solid fa-gears"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900">사출·프레스 및 금속 가공</h3>
                    <span class="text-xs font-bold text-slate-500 bg-slate-200 px-2 py-1 rounded">뿌리산업 디지털화</span>
                  </div>
                </div>
                
                <div class="space-y-4 mb-6 text-slate-600">
                  <p><strong class="text-slate-900">적용 대상:</strong> 플라스틱 사출, 자동차 부품 프레스, CNC 가공</p>
                  <p><strong class="text-slate-900">현장 환경:</strong> 심한 기계 진동, 절삭유 미스트, 쇳가루 (팬 달린 PC는 먼지 흡입 후 사망)</p>
                  <div class="bg-white p-4 rounded-lg border border-slate-200">
                    <h4 class="font-bold text-sm mb-2 text-slate-800">Jetong Box 활용</h4>
                    <ul class="text-sm space-y-1 list-disc list-inside text-slate-500">
                      <li>사출기/프레스 샷(Shot) 신호로 생산량 자동 카운팅</li>
                      <li>전류 센서(CT) 연동으로 실시간 가동률 체크</li>
                    </ul>
                  </div>
                </div>
                <div class="bg-[#0f172a]/5 p-4 rounded-xl border-l-4 border-slate-600">
                  <p class="text-sm font-medium italic text-slate-700">
                    "기름때 낀 PC 치우세요. 사장님이 낚시터에 계셔도 공장 돌아가는지 폰으로 다 보입니다."
                  </p>
                </div>
              </div>

              {/* Bio & Pharma */}
              <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#ea580c]/50 hover:shadow-xl transition duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl">
                    <i class="fa-solid fa-flask"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900">바이오·화장품·제약</h3>
                    <span class="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">GMP 품질관리</span>
                  </div>
                </div>
                
                <div class="space-y-4 mb-6 text-slate-600">
                  <p><strong class="text-slate-900">적용 대상:</strong> 화장품 제조, 건강기능식품, 의약품 창고</p>
                  <p><strong class="text-slate-900">현장 환경:</strong> 정밀한 온·습도 유지 필수, 법적으로 데이터 기록 및 보관이 요구됨</p>
                  <div class="bg-white p-4 rounded-lg border border-slate-200">
                    <h4 class="font-bold text-sm mb-2 text-slate-800">Jetong Box 활용</h4>
                    <ul class="text-sm space-y-1 list-disc list-inside text-slate-500">
                      <li>원료 보관실 온습도 센서 연동 24시간 기록</li>
                      <li>배합기(교반기) 회전수/온도 기록으로 품질 균일성 입증</li>
                    </ul>
                  </div>
                </div>
                <div class="bg-[#0f172a]/5 p-4 rounded-xl border-l-4 border-teal-500">
                  <p class="text-sm font-medium italic text-slate-700">
                    "품질 사고 나면 전량 폐기잖아요. Rust 엔진이 0.1초 누락도 없이 완벽하게 지켜드립니다."
                  </p>
                </div>
              </div>

              {/* Logistics & Cold Chain */}
              <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#ea580c]/50 hover:shadow-xl transition duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                    <i class="fa-solid fa-snowflake"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900">물류 창고 및 콜드체인</h3>
                    <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">유통/보관</span>
                  </div>
                </div>
                
                <div class="space-y-4 mb-6 text-slate-600">
                  <p><strong class="text-slate-900">적용 대상:</strong> 신선식품 물류 센터, 수산물 냉동 창고</p>
                  <p><strong class="text-slate-900">현장 환경:</strong> 영하 20도 이하 극한 환경, 유선 공사가 어려운 넓은 공간</p>
                  <div class="bg-white p-4 rounded-lg border border-slate-200">
                    <h4 class="font-bold text-sm mb-2 text-slate-800">Jetong Box 활용</h4>
                    <ul class="text-sm space-y-1 list-disc list-inside text-slate-500">
                      <li>무선 센서 게이트웨이 역할 (넓은 창고 데이터 수집)</li>
                      <li>심야/주말 냉동고 고장 시 즉시 앱 푸시 알림</li>
                    </ul>
                  </div>
                </div>
                <div class="bg-[#0f172a]/5 p-4 rounded-xl border-l-4 border-blue-500">
                  <p class="text-sm font-medium italic text-slate-700">
                    "주말에 냉동고 멈춰서 물건 다 녹으면 누가 책임집니까? 월 3만 원에 24시간 감시병을 두세요."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
  );
}

function SystemDiagramSection(props: any) {
  return (
        <section class="py-16 bg-[#0f172a] text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-2xl font-bold mb-12">복잡한 공장? 구성은 이렇게 심플합니다.</h2>
            
            <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              <DiagramNode icon="fa-industry" title="현장 설비" desc="PLC, 로봇, 각종 센서" />
              <div class="text-[#ea580c] animate-pulse text-2xl">
                <i class="fa-solid fa-arrow-right hidden md:block"></i>
                <i class="fa-solid fa-arrow-down md:hidden"></i>
              </div>
              <div class={`${styles.shadowBoxNeon} bg-[#ea580c] p-6 rounded-xl transform scale-110 z-10 w-full md:w-64`}>
                <i class="fa-solid fa-cube text-4xl text-white mb-4"></i>
                <h4 class="font-black text-xl mb-2">Jetong Box</h4>
                <p class="text-sm text-white/90">데이터 통합 + 실시간 관제</p>
              </div>
              <div class="text-[#ea580c] animate-pulse text-2xl">
                <i class="fa-solid fa-arrow-right hidden md:block"></i>
                <i class="fa-solid fa-arrow-down md:hidden"></i>
              </div>
              <DiagramNode icon="fa-mobile-screen-button" title="사장님 폰" desc="실시간 모니터링 & 알림" iconColor="text-[#0ea5e9]" />
            </div>
          </div>
        </section>
  );
}

function SocSection(props: any) {
  return (
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6 text-center">
    <h3 class="text-sm font-semibold text-blue-600 uppercase tracking-wide">The Heart of Jetong Box</h3>
    <h2 class="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">안정적인 관제의 핵심, NXP i.MX8M Mini</h2>
    <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
      Jetong Box는 산업용 표준 SoC를 채택하여 거친 현장에서도 24/7 중단 없는 실시간 관제를 보장합니다.
    </p>
    
    <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <div class="text-blue-500 mb-4">🌡️</div>
        <h4 class="font-bold text-gray-900">산업용 안정성</h4>
        <p class="text-sm text-gray-500 mt-2">극한의 온도 범위에서도 동작하는 Industrial Grade 칩셋</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <div class="text-blue-500 mb-4">⚡</div>
        <h4 class="font-bold text-gray-900">고효율 쿼드코어</h4>
        <p class="text-sm text-gray-500 mt-2">14nm 공정으로 발열은 줄이고 연산 성능은 극대화</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <div class="text-blue-500 mb-4">⏱️</div>
        <h4 class="font-bold text-gray-900">실시간 처리</h4>
        <p class="text-sm text-gray-500 mt-2">Cortex-M4 내장으로 지연 없는 데이터 수집</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <div class="text-blue-500 mb-4">🛠️</div>
        <h4 class="font-bold text-gray-900">장기 공급 보장</h4>
        <p class="text-sm text-gray-500 mt-2">향후 15년간 안정적인 부품 수급 및 유지보수 가능</p>
      </div>
    </div>

    <div class="mt-10">
      <a href="https://www.nxp.com/products/i.MX8MMINI" target="_blank" class="inline-flex items-center text-blue-600 font-medium hover:underline">
        i.MX8M Mini 상세 사양 페이지 이동
        <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="[Link Icon]"></path></svg>
      </a>
    </div>
  </div>
</section>
  );
}

function SomSection(props: any) {
  return (
<section class="py-16 bg-white border-t border-gray-100">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="w-full md:w-1/3 flex justify-center">
        <img src="https://variscite.com/wp-content/uploads/2022/02/nb_DART-MX8M-MINI-WiFi-6.png" alt="Variscite DART-MX8M-MINI SoM" class="w-full max-w-[250px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" />
      </div>
      
      <div class="w-full md:w-2/3">
        <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Engineering Excellence</h3>
        <h2 class="mt-2 text-3xl font-bold text-gray-900">초소형·고성능의 정수, DART-MX8M-MINI SoM</h2>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed">
          Jetong Box는 핵심 시스템을 글로벌 Top-tier 모듈인 Variscite DART 시리즈로 구성하여<br class="hidden md:block" /> 
          하드웨어 불량 리스크를 원천적으로 차단했습니다.
        </p>
        
        <ul class="mt-8 space-y-4">
          <li class="flex items-start">
            <span class="shrink-0 h-6 w-6 text-green-500">✔</span>
            <p class="ml-3 text-gray-700 font-medium">55x30mm 초소형 설계로 완성된 슬림한 Fanless 디자인</p>
          </li>
          <li class="flex items-start">
            <span class="shrink-0 h-6 w-6 text-green-500">✔</span>
            <p class="ml-3 text-gray-700 font-medium">의료·제조 분야에서 검증된 글로벌 산업용 신뢰성</p>
          </li>
          <li class="flex items-start">
            <span class="shrink-0 h-6 w-6 text-green-500">✔</span>
            <p class="ml-3 text-gray-700 font-medium">차세대 모델(AI 버전)과의 핀 호환성으로 지속 가능한 로드맵 제공</p>
          </li>
        </ul>

        <div class="mt-10">
          <a href="https://variscite.com/system-on-module-som/i-mx-8/i-mx-8m-mini/dart-mx8m-mini/" target="_blank" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-colors duration-200">
            DART-MX8M-MINI 상세 사양 보기
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

function CustomBoardSection(props: any) {
  return (
<section class="py-16 bg-white border-t border-gray-100">
  <div class="container mx-auto px-6">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      
      <div class="w-full lg:w-3/5 order-2 lg:order-1">
        <h3 class="text-sm font-semibold text-blue-600 uppercase tracking-widest">Proven Foundation</h3>
        <h2 class="mt-2 text-3xl font-bold text-gray-900 leading-tight">
          글로벌 표준으로 완성된 신뢰성,<br/>
          Variscite VAR-DT8MCustomBoard
        </h2>
        <p class="mt-6 text-lg text-gray-600 leading-relaxed">
          Jetong Box는 설계 안정성이 검증되지 않은 저가형 보드를 사용하지 않습니다. 
          전 세계 산업 표준인 <b>Variscite 공식 캐리어보드</b>를 채택하여, 하드웨어 리스크를 원천 차단하고 소프트웨어 성능을 극대화했습니다.
        </p>
        
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex items-start">
            <span class="text-blue-500 mr-3">🌐</span>
            <div>
              <h5 class="font-bold text-gray-900">Gigabit Ethernet</h5>
              <p class="text-sm text-gray-500">실시간 데이터 전송을 위한 고속 유선망</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-blue-500 mr-3">📶</span>
            <div>
              <h5 class="font-bold text-gray-900">LTE/5G Expansion</h5>
              <p class="text-sm text-gray-500">mini-PCIe 슬롯으로 무선 통신 확장</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-blue-500 mr-3">🖥️</span>
            <div>
              <h5 class="font-bold text-gray-900">HDMI Output</h5>
              <p class="text-sm text-gray-500">현장 모니터링을 위한 디스플레이 지원</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-blue-500 mr-3">🛠️</span>
            <div>
              <h5 class="font-bold text-gray-900">Compact Size</h5>
              <p class="text-sm text-gray-500">11.7 x 8.7 cm의 공간 최적화 설계</p>
            </div>
          </div>
        </div>

        <div class="mt-10">
          <a href="https://www.variscite.com/product/single-board-computers/var-dt8mcustomboard/" target="_blank" class="inline-flex items-center text-blue-600 font-bold hover:underline">
            VAR-DT8MCustomBoard 상세 페이지 이동
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      <div class="w-full lg:w-2/5 order-1 lg:order-2 mb-10 lg:mb-0">
        <div class="relative bg-white rounded-3xl p-6 flex items-center justify-center border border-gray-100 shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src="https://variscite.com/wp-content/uploads/2018/02/nb_DT8MCustomBoard-new.png" alt="Variscite VAR-DT8MCustomBoard" class="w-full h-auto object-contain" />
        </div>
      </div>

    </div>
  </div>
</section>
  );
}

function DataSection(props: any) {
  return (
<section class="py-16 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900">신뢰할 수 있는 데이터 저장소, eMMC</h2>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        편리함보다 중요한 것은 안정성입니다. Jetong Box는 산업 현장의 가혹한 조건을 견디기 위해 일반 SD 카드 대신 검증된 eMMC 솔루션을 사용합니다.
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
      <div class="flex-1 p-8 bg-gray-50 rounded-2xl border border-gray-200">
        <div class="flex items-center mb-6 text-gray-400">
          <span class="text-4xl mr-4">💾</span>
          <h4 class="text-xl font-bold">일반 SD 카드</h4>
        </div>
        <ul class="space-y-4 text-gray-500">
          <li class="flex items-center">✕ 진동 시 슬롯 이탈 및 접촉 불량</li>
          <li class="flex items-center">✕ 갑작스러운 정전 시 OS 커널 파손</li>
          <li class="flex items-center">✕ 읽기/쓰기 수명 한계로 인한 돌연사</li>
        </ul>
      </div>

      <div class="flex items-center justify-center text-2xl font-black text-gray-300 italic">VS</div>

      <div class="flex-1 p-8 bg-blue-50 rounded-2xl border-2 border-blue-500 relative overflow-hidden">
        <div class="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold">Jetong Box Choice</div>
        <div class="flex items-center mb-6 text-blue-600">
          <span class="text-4xl mr-4">🛡️</span>
          <h4 class="text-xl font-bold">산업용 eMMC</h4>
        </div>
        <ul class="space-y-4 text-blue-900">
          <li class="flex items-center font-semibold">✓ 보드 일체형 납땜으로 진동 완벽 방어</li>
          <li class="flex items-center font-semibold">✓ 전원 차단 보호(Power Loss Protection)</li>
          <li class="flex items-center font-semibold">✓ 고성능 컨트롤러로 10배 이상 긴 수명</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
}

function CarrierSection(props: any) {
  return (
<section class="py-16 bg-gray-900 text-white">
  <div class="container mx-auto px-6">
    <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
      <div class="w-full lg:w-1/2">
        <div class="bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
          <h4 class="text-blue-400 font-mono mb-4">// Industrial Interface Spec</h4>
          <ul class="space-y-3 text-sm font-mono">
            <li class="flex justify-between"><span class="text-gray-400">Power:</span> <span>DC 12V ~ 24V (Isolated)</span></li>
            <li class="flex justify-between"><span class="text-gray-400">Serial:</span> <span>Isolated RS-485 / RS-232</span></li>
            <li class="flex justify-between"><span class="text-gray-400">Protection:</span> <span>TVS Diode / Surge Proof</span></li>
            <li class="flex justify-between"><span class="text-gray-400">Operating Temp:</span> <span>-20°C ~ 70°C</span></li>
          </ul>
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <h3 class="text-blue-500 font-bold uppercase tracking-widest text-sm">Industrial Interface</h3>
        <h2 class="mt-2 text-3xl font-bold leading-tight">현장 맞춤형 독자 설계,<br/>안정성의 기준을 세우다</h2>
        <p class="mt-6 text-gray-400 text-lg">
          Jetong Box의 캐리어보드는 단순한 연결을 넘어 '보호'에 집중합니다. 극한의 산업 환경에서도 데이터 수집이 중단되지 않도록 모든 설계를 최적화했습니다.
        </p>
        
        <div class="mt-10 grid grid-cols-2 gap-6">
          <div>
            <span class="text-blue-500 text-2xl">⚡</span>
            <h5 class="mt-2 font-bold">절연 회로 설계</h5>
            <p class="text-xs text-gray-500 mt-1">포트 간 간섭 방지 및 메인보드 보호</p>
          </div>
          <div>
            <span class="text-blue-500 text-2xl">🛡️</span>
            <h5 class="mt-2 font-bold">서지 보호기 내장</h5>
            <p class="text-xs text-gray-500 mt-1">순간적인 과전압으로부터 시스템 보호</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

function ConnectionSection(props: any) {
  return (
    <section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-12">
      <h3 class="text-blue-600 font-bold uppercase tracking-widest text-sm">Connectivity</h3>
      <h2 class="mt-2 text-3xl font-bold text-gray-900">산업 현장에 최적화된 외부 인터페이스</h2>
    </div>

    <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b">
        
        <div class="p-8">
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">🔌</span>
            <h4 class="font-bold text-gray-900 text-lg">Power</h4>
          </div>
          <p class="text-sm text-gray-600">DC 12~24V</p>
          <p class="text-xs text-gray-400 mt-1">Terminal or Locking Jack 적용으로 전원 이탈 방지</p>
        </div>

        <div class="p-8">
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">🌐</span>
            <h4 class="font-bold text-gray-900 text-lg">Network</h4>
          </div>
          <p class="text-sm text-gray-600">1x GbE (Gigabit Ethernet)</p>
          <p class="text-xs text-gray-400 mt-1">노이즈 차단을 위한 Shielded RJ45 커넥터</p>
        </div>

        <div class="p-8">
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">📟</span>
            <h4 class="font-bold text-gray-900 text-lg">Serial</h4>
          </div>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• RS-485 x1 (Isolated)</li>
            <li>• RS-232 x1</li>
          </ul>
        </div>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        <div class="p-8">
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">⌨️</span>
            <h4 class="font-bold text-gray-900 text-lg">USB</h4>
          </div>
          <p class="text-sm text-gray-600">USB 2.0 Host x1</p>
          <p class="text-xs text-gray-400 mt-1">Service 전용 및 센서 확장용</p>
        </div>

        <div class="p-8 bg-blue-50">
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">📡</span>
            <h4 class="font-bold text-blue-900 text-lg">Antenna (Optional)</h4>
          </div>
          <p class="text-sm text-blue-800">LTE Main / Diversity</p>
          <p class="text-xs text-blue-400 mt-1">무선 통신 SKU 선택 시 제공 (안테나 홀 지원)</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

function TakachiSection(props: any) {
  return (
    <section class="py-16 bg-slate-50 border-t border-gray-200">
  <div class="container mx-auto px-6">
    <div class="flex flex-col lg:flex-row items-center gap-16">
      
      <div class="w-full lg:w-1/2 order-2 lg:order-1">
        <div class="relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-[2rem] p-10 shadow-2xl overflow-hidden">
          <div class="absolute top-0 right-0 p-4">
            <span class="text-slate-500 font-mono text-xs tracking-widest uppercase">Grade: Industrial IP40</span>
          </div>
          <div class="flex justify-center py-10">
            <div class="text-center">
              <div class="text-7xl mb-6">🏗️</div>
              <h4 class="text-white font-bold text-xl">Takachi EXP Series</h4>
              <p class="text-slate-400 text-sm mt-2">Custom CNC Machined & Laser Etched</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 justify-center mt-6">
            <span class="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-600">Aluminum 6063</span>
            <span class="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-600">Fanless Cooling</span>
            <span class="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-600">DIN-Rail Ready</span>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/2 order-1 lg:order-2">
        <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-widest">Premium Enclosure</h3>
        <h2 class="mt-4 text-3xl font-bold text-gray-900 leading-tight">
          현장의 가혹함을 견디는<br/>
          가장 견고한 보호막
        </h2>
        <p class="mt-6 text-lg text-gray-600 leading-relaxed">
          Jetong Box는 기성품의 범용성과 독자적인 가공 기술을 결합했습니다. 
          <b>Takachi EXP</b> 알루미늄 바디는 내부의 정밀 소자를 열과 먼지로부터 완벽하게 격리합니다.
        </p>

        <ul class="mt-8 space-y-4">
          <li class="flex items-center">
            <div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600 mr-4">🌡️</div>
            <div>
              <h5 class="font-bold text-gray-900">Fanless 방열 설계 & Dust-Proof</h5>
              <p class="text-sm text-gray-500">냉각팬 없는 밀폐 구조로 고장 요인을 제거하고 먼지 유입을 차단합니다.</p>
            </div>
          </li>
          <li class="flex items-center">
            <div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600 mr-4">📐</div>
            <div>
              <h5 class="font-bold text-gray-900">정밀 CNC 타공 및 각인</h5>
              <p class="text-sm text-gray-500">포트 위치에 최적화된 가공과 지워지지 않는 레이저 각인</p>
            </div>
          </li>
          <li class="flex items-center">
            <div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600 mr-4">🔗</div>
            <div>
              <h5 class="font-bold text-gray-900">DIN-Rail 마운트 시스템</h5>
              <p class="text-sm text-gray-500">표준 DIN-Rail 지원으로 공장 제어반 내부에 즉시 설치가 가능합니다.</p>
            </div>
          </li>
        </ul>

        <div class="mt-10">
          <a href="https://www.takachi-enclosure.com/products/EXP" target="_blank" class="inline-flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors">
            Takachi EXP 사양 상세 보기
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}

function BomSection(props: any) {
  return (
<section class="py-16 bg-white border-t border-gray-100">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Bill of Materials</h3>
      <h2 class="mt-2 text-3xl font-bold text-gray-900">Jetong Box 1세대 하드웨어 명세</h2>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        글로벌 파트너사의 검증된 모듈과 커스텀 가공 부품의 조합으로 최고의 안정성을 구현했습니다.
      </p>
    </div>

    <div class="overflow-x-auto shadow-2xl rounded-2xl border border-gray-100">
      <table class="w-full text-left border-collapse bg-white">
        <thead>
          <tr class="bg-indigo-600 text-white">
            <th class="px-6 py-4 font-bold uppercase text-sm">분류</th>
            <th class="px-6 py-4 font-bold uppercase text-sm">품목명</th>
            <th class="px-6 py-4 font-bold uppercase text-sm">주요 사양</th>
            <th class="px-6 py-4 font-bold uppercase text-sm">비고</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr class="hover:bg-indigo-50 transition-colors">
            <td class="px-6 py-4 font-bold text-gray-900">핵심 모듈</td>
            <td class="px-6 py-4 text-gray-700">DART-MX8M-MINI</td>
            <td class="px-6 py-4 text-gray-600 text-sm">i.MX8M Mini, 4GB RAM, 32GB eMMC</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-medium">Variscite 정품</span></td>
          </tr>
          <tr class="hover:bg-indigo-50 transition-colors">
            <td class="px-6 py-4 font-bold text-gray-900">캐리어보드</td>
            <td class="px-6 py-4 text-gray-700">VAR-DT8MCustomBoard</td>
            <td class="px-6 py-4 text-gray-600 text-sm">GbE, USB, HDMI, mPCIe 슬롯 포함</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-medium">기성 플랫폼</span></td>
          </tr>
          <tr class="hover:bg-indigo-50 transition-colors">
            <td class="px-6 py-4 font-bold text-gray-900">엔클로저</td>
            <td class="px-6 py-4 text-gray-700">Takachi EXP 시리즈</td>
            <td class="px-6 py-4 text-gray-600 text-sm">알루미늄 압출 (120x44x130mm)</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium">고방열 설계</span></td>
          </tr>
          <tr class="hover:bg-indigo-50 transition-colors">
            <td class="px-6 py-4 font-bold text-gray-900">전원/통신</td>
            <td class="px-6 py-4 text-gray-700">DC-DC & Isolated RS-485</td>
            <td class="px-6 py-4 text-gray-600 text-sm">12-24V 입력 대응 / 절연 통신 모듈</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-md font-medium">산업 현장 맞춤</span></td>
          </tr>
          <tr class="hover:bg-indigo-50 transition-colors">
            <td class="px-6 py-4 font-bold text-gray-900">통신 확장</td>
            <td class="px-6 py-4 text-gray-700">Isolated RS-485/USB</td>
            <td class="px-6 py-4 text-gray-600 text-sm">USB형 절연 RS-485 통신 모듈</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-md font-medium">전기적 노이즈 원천 차단</span></td>
          </tr>
          <tr class="hover:bg-indigo-50 transition-colors">
            <td class="px-6 py-4 font-bold text-gray-900">무선(선택)</td>
            <td class="px-6 py-4 text-gray-700">LTE Module (Quectel 등)</td>
            <td class="px-6 py-4 text-gray-600 text-sm">mini-PCIe 타입 LTE 모뎀 + 안테나</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-md font-medium">무선 모델 SKU 확장용</span></td>
          </tr>
          <tr class="hover:bg-indigo-50 transition-colors">
            <td class="px-6 py-4 font-bold text-gray-900">기타 부품</td>
            <td class="px-6 py-4 text-gray-700">Internal Wiring & Bolt</td>
            <td class="px-6 py-4 text-gray-600 text-sm">전원 잭, 피그테일 케이블 등</td>
            <td class="px-6 py-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-md font-medium">정밀 조립용 부속품</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="mt-10 text-center">
      <p class="text-sm text-gray-400">
        * Jetong Box는 고객의 요구사항에 따라 LTE 모듈 및 외부 안테나 등 커스텀 SKU 확장이 가능합니다.
      </p>
    </div>
  </div>
</section>
  );
}

function OsSection(props: any) {
  return (
<section class="py-16 bg-slate-900 text-white overflow-hidden">
  <div class="container mx-auto px-6">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      <div class="w-full lg:w-1/2">
        <h3 class="text-blue-400 font-bold uppercase tracking-widest text-sm">Edge OS Excellence</h3>
        <h2 class="mt-2 text-3xl font-bold leading-tight">개발자에게는 자유를,<br/>관리자에게는 확신을 주는 OS</h2>
        <p class="mt-6 text-slate-400 text-lg">
          Jetong Box는 현대적인 개발 워크플로우를 산업 현장에 그대로 옮겨왔습니다. 안정적인 리눅스 커널 위에 최신 클라우드 기술을 결합했습니다.
        </p>

        <div class="mt-10 space-y-6">
          <div class="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
            <span class="text-blue-400 mr-4 font-mono">01.</span>
            <div>
              <h5 class="font-bold">무중단 원격 업데이트 (OTA)</h5>
              <p class="text-xs text-slate-500">배포 실패 시 자동 롤백 기능을 포함한 안전한 원격 갱신</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
            <span class="text-blue-400 mr-4 font-mono">02.</span>
            <div>
              <h5 class="font-bold">Docker 컨테이너 지원</h5>
              <p class="text-xs text-slate-500">애플리케이션 간 간섭 없는 독립적이고 빠른 배포 환경</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
            <span class="text-blue-400 mr-4 font-mono">03.</span>
            <div>
              <h5 class="font-bold">보안 부팅 (Secure Boot)</h5>
              <p class="text-xs text-slate-500">인가되지 않은 소프트웨어의 실행을 원천 차단하는 보안 설계</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/2 bg-slate-800 rounded-xl p-2 shadow-2xl border border-slate-700">
        <div class="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <div class="flex gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p class="text-green-400">$ jetong-cli device-status</p>
          <p class="text-white">OS: Jetong Linux v1.0.4 (Industrial-Grade)</p>
          <p class="text-white">Uptime: 342 days, 14:22:05</p>
          <p class="text-white">Docker: Running (3 containers active)</p>
          <p class="text-white">OTA: Up-to-date</p>
          <p class="text-blue-400 mt-2">Checking real-time sensor bus...</p>
          <p class="text-white">[OK] Cortex-M4 Link Active (Latency: 0.8ms)</p>
        </div>
      </div>
    </div>
  </div>
</section>    
  );
}

function DashboardSection(props: any) {
  return (
    <section class="py-16 bg-white overflow-hidden">
  <div class="container mx-auto px-6">
    <div class="lg:flex items-center gap-16">
      <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
        <div class="relative">
          <div class="rounded-xl border border-gray-200 shadow-2xl overflow-hidden bg-gray-50">
            <div class="bg-gray-100 px-4 py-2 flex items-center gap-2">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span class="text-xs text-gray-400 font-mono ml-4">Jetong_AI_Monitor_v1.0</span>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="h-24 bg-blue-100 rounded animate-pulse"></div>
                <div class="h-24 bg-indigo-100 rounded animate-pulse" style="animation-delay: 0.2s"></div>
              </div>
              <div class="h-32 bg-slate-100 rounded animate-pulse" style="animation-delay: 0.4s"></div>
            </div>
          </div>
          <div class="absolute -bottom-6 -right-6 flex flex-col gap-2">
            <div class="bg-black text-white px-4 py-2 rounded-lg font-bold shadow-lg text-sm">Tauri (Rust)</div>
            <div class="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg text-sm">SolidJS</div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <h3 class="text-blue-600 font-bold text-sm tracking-widest uppercase">The Hybrid Stack</h3>
        <h2 class="mt-4 text-3xl font-extrabold text-gray-900 leading-tight">엣지의 한계를 넘어서는<br/>고성능 인터페이스</h2>
        <p class="mt-6 text-gray-600 text-lg">
          Jetong Box는 더 이상 느린 웹 대시보드에 의존하지 않습니다. Rust의 성능과 SolidJS의 반응성을 결합하여 가장 정밀한 실시간 관제 경험을 구현했습니다.
        </p>

        <ul class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <li class="flex items-center gap-3">
            <span class="p-2 bg-blue-50 text-blue-600 rounded-full text-xs">🚀</span>
            <span class="text-gray-700 font-medium text-sm">초저지연 렌더링</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="p-2 bg-blue-50 text-blue-600 rounded-full text-xs">🔒</span>
            <span class="text-gray-700 font-medium text-sm">Rust 기반 강력 보안</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="p-2 bg-blue-50 text-blue-600 rounded-full text-xs">📉</span>
            <span class="text-gray-700 font-medium text-sm">최소화된 시스템 점유</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="p-2 bg-blue-50 text-blue-600 rounded-full text-xs">⚙️</span>
            <span class="text-gray-700 font-medium text-sm">하드웨어 직접 제어</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
}

// 헬퍼 컴포넌트
function FloatingBadge(props: any) {
  return (
    <div class={`absolute ${props.top || ''} ${props.bottom || ''} ${props.left || ''} ${props.right || ''} bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 text-white text-sm font-bold shadow-lg`}>
      <i class={`fa-solid ${props.icon} ${props.color} mr-2`}></i>
      {props.children}
    </div>
  );
}

function FeatureCard(props: any) {
  return (
    <div class="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition relative overflow-hidden">
      {props.badge && <div class="absolute top-0 right-0 bg-[#ea580c] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{props.badge}</div>}
      <div class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
        {props.icon}
      </div>
      <h3 class="text-xl font-bold text-slate-900 mb-3">{props.title}</h3>
      <p class="text-slate-600">{props.children}</p>
    </div>
  );
}

function DiagramNode(props: any) {
  return (
    <div class="bg-slate-800 p-6 rounded-xl border border-slate-600 w-full md:w-64">
      <i class={`fa-solid ${props.icon} text-4xl mb-4 ${props.iconColor || 'text-slate-400'}`}></i>
      <h4 class="font-bold mb-2">{props.title}</h4>
      <p class="text-sm text-slate-400">{props.desc}</p>
    </div>
  );
}