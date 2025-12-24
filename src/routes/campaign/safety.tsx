import { A } from "@solidjs/router";

export default function SafetyLaw() {
  // 법적 의무 사항 데이터 (AI 내용 제외 및 시스템적 관점으로 수정)
  const obligations = [
    {
      title: "재해 예방에 필요한 인력·예산 구축",
      desc: "안전보건 관리체계를 갖추고 적절한 예산을 집행했는가?",
      solution: "정부 지원사업 연계 및 IoT 관제 시스템 도입으로 체계 구축 증빙"
    },
    {
      title: "재해 발생 시 재발방지 대책 수립",
      desc: "위험 요인을 확인하고 개선 절차를 마련했는가?",
      solution: "Jetong Box의 센서 감지 로그 및 설비 제어 이력 자동 저장"
    },
    {
      title: "안전보건 법령에 따른 의무 이행",
      desc: "기계·기구의 방호 조치를 적절히 취했는가?",
      solution: "위험 구역 진입 시 기계 전원을 즉시 차단하는 Interlock 구현"
    },
    {
      title: "위험성 평가 및 교육 실시",
      desc: "현장의 유해 요인을 파악하고 근로자에게 알렸는가?",
      solution: "현장 상황을 실시간으로 보여주는 통합 관제 대시보드 제공"
    }
  ];

  return (
    <div class="bg-slate-900 text-white min-h-screen font-[sans-serif] selection:bg-orange-500 selection:text-white">
      
      {/* 네비게이션 */}
      <nav class="fixed top-0 left-0 p-6 w-full flex justify-between items-center z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <A href="/" class="text-slate-400 hover:text-white font-bold transition-colors flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Home
        </A>
        <div class="hidden md:block text-slate-500 text-sm font-medium">
            중대재해처벌법 대응 IoT 관제 솔루션
        </div>
      </nav>

    {/* Hero Section: 문제 제기 */}
    <section class="pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center min-h-[85vh]">
      <div class="max-w-6xl mx-auto w-full text-center">
      
      <div class="inline-block py-1 px-4 rounded-full bg-red-600/10 text-red-500 text-sm font-bold mb-8 border border-red-600/30 animate-pulse">
          ⚠ CEO 긴급 리스크 진단
      </div>
      
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
          사고가 터진 후에는<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              변호사를 선임해도 늦습니다.
          </span>
      </h1>
      
      <p class="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {/* 수정된 부분 시작 */}
          <strong class="text-white text-2xl block mb-2">중대재해처벌법,</strong>
          2024년 1월부터 <span class="text-white font-bold border-b border-orange-500">5인 이상 사업장 전면 확대.</span><br />
          <span class="block mt-4 mb-2 text-slate-500">사람의 눈으로는 모든 사고를 막을 수 없습니다.</span>
          <span class="text-orange-400 font-bold text-2xl block">"24시간 잠들지 않는 IoT 시스템이 필요합니다."</span>
          {/* 수정된 부분 끝 */}
      </p>

      {/* 처벌 규정 카드 (기존 유지) */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          {/* ... 카드 내용 ... */}
           <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300 group">
              <h3 class="text-lg font-bold text-slate-300 mb-2">형사 처벌 (CEO)</h3>
              <p class="text-5xl font-extrabold text-red-500 mb-2">1년<span class="text-2xl text-slate-400">+</span></p>
              <p class="text-slate-400 text-sm">사망 사고 발생 시<br />1년 이상의 징역 (하한선)</p>
          </div>
          <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300 group">
              <h3 class="text-lg font-bold text-slate-300 mb-2">징벌적 손해배상</h3>
              <p class="text-5xl font-extrabold text-orange-500 mb-2">5배</p>
              <p class="text-slate-400 text-sm">피해액의 최대 5배까지<br />배상 책임 부과</p>
          </div>
          <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300 group">
              <h3 class="text-lg font-bold text-slate-300 mb-2">양벌 규정 (법인)</h3>
              <p class="text-5xl font-extrabold text-orange-500 mb-2">50억</p>
              <p class="text-slate-400 text-sm">법인에게 부과되는<br />벌금 최대 50억원</p>
          </div>
      </div>
  </div>
</section>

      {/* Section 2: 법적 방어 논리 (Checklist) */}
      <section class="py-20 bg-slate-800 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 L100 0" stroke="white" stroke-width="0.5" />
             </svg>
        </div>

        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    법적 면책을 위한 <span class="text-indigo-400">시스템적 방어</span>
                </h2>
                <p class="text-slate-400">
                    중대재해처벌법의 핵심은 사고 유무가 아니라, <br class="md:hidden" />
                    <strong>"실질적인 안전 관리 시스템이 작동하고 있는가?"</strong>입니다.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {obligations.map((item, index) => (
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col justify-between hover:border-indigo-500 transition-colors">
                        <div>
                            <div class="flex items-center mb-4">
                                <span class="bg-indigo-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold mr-3 text-sm">
                                    {index + 1}
                                </span>
                                <h3 class="text-xl font-bold text-white">{item.title}</h3>
                            </div>
                            <p class="text-slate-400 mb-6 pl-11 text-sm border-l-2 border-slate-700">
                                {item.desc}
                            </p>
                        </div>
                        <div class="pl-11">
                            <div class="bg-indigo-900/20 p-4 rounded-lg border border-indigo-500/30">
                                <span class="text-xs text-indigo-400 font-bold uppercase block mb-1">Jetong Solution</span>
                                <p class="text-indigo-100 text-sm font-medium flex items-start">
                                    <svg class="w-4 h-4 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    {item.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Section 3: Jetong Box 솔루션 상세 (AI 제거 -> 실시간 관제 강조) */}
      <section class="py-24 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Jetong Box는 <br />
                    <span class="text-indigo-400">확실한 '통제'와 '기록'</span>을 제공합니다.
                </h2>
                <p class="text-slate-400 max-w-2xl mx-auto">
                    단순 CCTV는 사고를 막지 못합니다. <br />
                    Jetong Box는 센서가 감지하는 즉시 기계를 멈추고, 모든 상황을 기록합니다.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                        {/* CCTV/Eye Icon */}
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">24/7 실시간 현장 관제</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        IoT 센서와 CCTV가 연동되어 사각지대 없는 모니터링 환경을 구축합니다. 관리자가 없어도 시스템은 24시간 현장을 감시합니다.
                    </p>
                </div>
                {/* Feature 2 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                        {/* Switch/Stop Icon */}
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Kill-Switch 자동 제어</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        위험 구역 침범이나 이상 징후 감지 시, 즉시 장비 전원을 물리적으로 차단합니다. 사람의 반응 속도보다 빠르게 사고를 예방합니다.
                    </p>
                </div>
                {/* Feature 3 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                        {/* Server/Database Icon */}
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">디지털 블랙박스</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        언제, 어디서, 어떤 위험이 있었는지, 그리고 시스템이 어떻게 조치했는지 분 단위로 기록됩니다. 가장 강력한 면책 증빙 자료입니다.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 px-4">
        <div class="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900 to-blue-900 rounded-3xl p-8 md:p-16 text-center border border-indigo-500/50 shadow-2xl relative overflow-hidden">
             {/* Glow effect */}
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/20 blur-3xl rounded-full -z-0"></div>
            
            <div class="relative z-10">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    대표님의 안전과 회사의 미래,<br />
                    <span class="text-indigo-300">Jetong Box로 지금 보호하세요.</span>
                </h2>
                <p class="text-indigo-200 mb-10 text-lg">
                    정부 지원 사업(스마트 안전 장비 보급)을 통해 <br class="md:hidden"/>
                    도입 비용의 <span class="text-white font-bold underline decoration-orange-500 underline-offset-4">최대 80%</span>를 지원받을 수 있습니다.
                </p>
                
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                    <A href="/solution/safety" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-600 rounded-full hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-1">
                        무료 현장 진단 신청하기
                    </A>
                    <A href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-700 rounded-full hover:bg-slate-600 transition-all border border-slate-500">
                        도입 비용 견적 문의
                    </A>
                </div>
                <p class="mt-6 text-sm text-indigo-300/60">
                    * 50인 미만 사업장은 우선 지원 대상입니다. 예산 소진 시 조기 마감될 수 있습니다.
                </p>
            </div>
        </div>
      </section>

      {/* Footer copyright simple */}
      <footer class="py-8 text-center text-slate-600 text-sm border-t border-slate-800">
        &copy; {new Date().getFullYear()} Jetong AI. All rights reserved.
      </footer>
    </div>
  );
}