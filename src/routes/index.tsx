import CampaignSection from "~/components/CompaignSection";

export default function Home() {
  return (
    <div class="bg-[#05080f] text-white min-h-screen">

      {/* 1. 히어로 섹션 */}
      <section class="min-h-screen flex flex-col justify-center items-center text-center py-12 hero-bg">
        <div class="container-custom">
          <div class="flex flex-col gap-10 mb-12 font-serif">

            <div class="slogan-group">
              <div class="text-2xl md:text-[2.5rem] font-light mb-2">실시간 데이터를 제어하고</div>
              <span class="chinese-char text-6xl md:text-[4.5rem] font-black block leading-tight text-white">制</span>
            </div>

            <div class="slogan-group">
              <div class="text-2xl md:text-[2.5rem] font-light mb-2">모든 시스템을 통합하여</div>
              <span class="chinese-char text-6xl md:text-[4.5rem] font-black block leading-tight text-white">統</span>
            </div>

            <div class="slogan-group">
              <div class="text-2xl md:text-[2.5rem] font-light mb-2">고객의 가치를 창출합니다</div>
              <span class="chinese-char char-highlight text-6xl md:text-[4.5rem] font-black block leading-tight">財</span>
            </div>

          </div>

          <p class="hero-sub text-2xl md:text-[2.2rem] font-normal mt-8 tracking-tight leading-snug">
            AI 기반 실시간 통합 관제 플랫폼,<br class="md:hidden" /> <strong>Jetong AI</strong>
          </p>
        </div>
      </section>

      {/* 2. CEO Risk Management (CampaignSection 적용) */}
      <CampaignSection
        theme="red"
        tag="CEO Risk Management"
        title={<>아직도 <span class="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">중대재해처벌법</span> 대비 안 하셨습니까?</>}
        description={<p>설마 하는 순간, <strong class="text-white">대표님이 모든 책임</strong>을 지게 됩니다. 월 3만 원으로 10억 원의 리스크를 예방하세요.</p>}
        ctaText="대응 솔루션 확인하기"
        ctaLink="/campaign/safety"
        footnote="* 5인 이상 50인 미만 사업장 필수 점검 대상"
      />

      {/* 3. Philosophy Cards */}
      <section class="py-24 bg-[#05080f]">
        <div class="container-custom">
          <div class="flex flex-col md:flex-row justify-between gap-8 mt-12">

            <div class="flex-1 card-hover p-10 border border-white/10 rounded-lg">
              <h3 class="font-serif text-[2.2rem] mb-4 text-white">制 <span class="text-sm opacity-50 font-light ml-2 font-sans">절제할 제</span></h3>
              <div class="text-[#00d2ff] font-bold text-sm tracking-widest uppercase mb-4">Control Real-time Data</div>
              <p class="text-gray-300 text-base leading-relaxed">단순한 데이터의 나열은 정보가 아닙니다.<br /><br />쏟아지는 실시간 데이터를<br />안전하게 제어하고 분석합니다.</p>
            </div>

            <div class="flex-1 card-hover p-10 border border-white/10 rounded-lg">
              <h3 class="font-serif text-[2.2rem] mb-4 text-white">統 <span class="text-sm opacity-50 font-light ml-2 font-sans">거느릴 통</span></h3>
              <div class="text-[#00d2ff] font-bold text-sm tracking-widest uppercase mb-4">Integrate Systems</div>
              <p class="text-gray-300 text-base leading-relaxed">단절된 시스템은 한계가 있습니다.<br /><br />분산된 모든 자원을 하나로 통합하여<br />관제의 새로운 기준을 세웁니다.</p>
            </div>

            <div class="flex-1 card-hover p-10 border border-[rgba(0,210,255,0.3)] rounded-lg">
              <h3 class="font-serif text-[2.2rem] mb-4 text-[#00d2ff]">財 <span class="text-sm opacity-50 font-light ml-2 font-sans text-white">재물 재</span></h3>
              <div class="text-[#00d2ff] font-bold text-sm tracking-widest uppercase mb-4">Create Value</div>
              <p class="text-gray-300 text-base leading-relaxed">기술은 결국 이익이 되어야 합니다.<br /><br />최적화된 관제 시스템으로<br />비용을 줄이고 새로운 기회를 창출합니다.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 2-1. Smart HACCP (CampaignSection 적용) */}
      <CampaignSection
        theme="green"
        tag="Smart HACCP"
        title={<>복잡한 수기 기록, <span class="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500">자동화</span>하셨습니까?</>}
        description={<p>아직도 종이 서류로 심사를 준비하시나요? IoT 센서 연동으로 <strong class="text-white">위변조 없는 데이터</strong>를 확보하세요.</p>}
        ctaText="HACCP 솔루션 확인"
        ctaLink="/campaign/haccp"
        footnote="* 식품안전관리인증기준(HACCP) 의무 적용 대상"
      />

      {/* 4. Tech Section */}
      <section class="py-24">
        <div class="container-custom">
          <div class="py-32 bg-[#f9f9f9] text-center rounded-sm">
            <div class="max-w-3xl mx-auto px-5">
              <h2 class="text-3xl font-bold mb-5 text-[#111]">Jetong AI Technology</h2>
              <p class="text-lg text-[#555] leading-relaxed mb-10 break-keep">
                화려한 겉모습보다 보이지 않는 곳의 완벽함을 추구합니다.<br />
                멈추지 않는 안정성과 가벼움을 기술적으로 증명합니다.
              </p>

              <a
                href="/tech"
                class="inline-block px-8 py-3 border border-[#111] text-[#111] font-bold rounded transition-all duration-300 hover:bg-[#111] hover:text-white"
              >
                기술 아키텍처 자세히 보기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2-2. GMP Campaign (Indigo Theme) */}
      <CampaignSection
        theme="indigo"
        tag="GMP Compliance"
        title={ <> 데이터 무결성(DI),{" "} <span class="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-500"> 선택이 아닌 필수 </span> 입니다 </> }
        description={ <p> 엄격해지는 GMP 심사 기준, <strong class="text-white">Audit Trail</strong>이 핵심입니다. <br class="hidden md:block" /> 완벽한 추적 관리 시스템을 구축하십시오. </p> }
        ctaText="GMP 솔루션 확인"
        ctaLink="/campaign/gmp"
        footnote="* 의약품/화장품 제조 및 품질관리 기준"
      />

      {/* 5. Solution Links (Highlight Jetong Box) */}
      <section class="py-32 text-center border-t border-[#1a2236] relative overflow-hidden">
        {/* Background Glow Effect */}
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="container-custom relative z-10">
          <h2 class="font-serif text-2xl font-semibold leading-relaxed mb-16 text-slate-300">
            깊이가 있는 기술<br />Jetong AI가 시작합니다
          </h2>

          <div class="mt-12">
            <a href="/product" class="group inline-flex flex-col items-center">
              <span class="text-[#00d2ff] text-sm font-bold tracking-[0.3em] mb-4 uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                Core Solution
              </span>

              <div class="relative">
                <span class="text-6xl md:text-[5.5rem] font-black leading-none text-white transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#00d2ff] group-hover:to-white group-hover:bg-[length:200%_auto] group-hover:animate-[shimmer_3s_linear_infinite]">
                  Jetong Box
                </span>
                {/* Underline Effect */}
                <span class="absolute -bottom-4 left-0 w-full h-[2px] bg-[#1a2236] overflow-hidden">
                  <span class="absolute top-0 left-0 w-full h-full bg-[#00d2ff] -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
                </span>
              </div>

              <span class="mt-10 flex items-center gap-3 text-xl md:text-2xl text-slate-400 font-light group-hover:text-white transition-colors duration-300">
                제품 상세 보기
                <span class="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-[#00d2ff] group-hover:bg-[#00d2ff]/10 transition-all duration-300">
                  <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer class="py-16 text-center text-sm text-[#55627a] border-t border-[#0f1521]">
        <div class="container-custom">
          <p class="mb-2 text-base text-white">주식회사 제동재</p>
          <p class="mt-5">Copyright © 2025 Jedongjae Inc. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}