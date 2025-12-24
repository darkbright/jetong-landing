import { A } from "@solidjs/router";

export default function GmpCampaign() {
  // GMP 핵심 페인 포인트 vs 솔루션 매칭 데이터
  const painPoints = [
    {
      title: "Data Integrity(데이터 무결성) 이슈",
      desc: "수기 기록은 '지우고 다시 쓰는' 행위가 가능합니다. 이는 감사(Audit)에서 가장 치명적인 지적 사항입니다.",
      solution: "센서 데이터가 사람을 거치지 않고 서버로 직행하여 위변조가 원천 차단됩니다 (ALCOA+ 원칙 준수)"
    },
    {
      title: "클린룸 환경 관리의 어려움",
      desc: "차압, 온습도 기록을 위해 작업자가 방진복을 입고 수시로 드나들며 오염 위험을 높이고 있지는 않습니까?",
      solution: "무선 IoT 센서로 밀폐된 클린룸 내부 환경을 외부에서 24시간 실시간 모니터링"
    },
    {
      title: "휴먼 에러(Human Error) 발생",
      desc: "복잡한 SOP와 제조 기록서 작성 중 발생하는 오기, 누락은 품질 부적합의 주원인입니다.",
      solution: "디지털화된 제조 지시와 인터락(Interlock) 기능으로 작업자의 실수를 시스템이 방지"
    },
    {
      title: "Audit Trail(감사 추적) 부재",
      desc: "누가, 언제, 무엇을 변경했는지 증명할 수 없다면 그 데이터는 효력이 없습니다.",
      solution: "모든 시스템 조작 이력과 데이터 변경 내역이 수정 불가능한 로그로 자동 저장"
    }
  ];

  return (
    <div class="bg-slate-900 text-white min-h-screen font-[sans-serif] selection:bg-sky-500 selection:text-white">
      
      {/* 네비게이션 */}
      <nav class="fixed top-0 left-0 p-6 w-full flex justify-between items-center z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <A href="/" class="text-slate-400 hover:text-white font-bold transition-colors flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Home
        </A>
        <div class="hidden md:block text-slate-500 text-sm font-medium">
            GMP Data Integrity & Monitoring
        </div>
      </nav>

      {/* Hero Section: 문제 제기 */}
      <section class="pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center min-h-[85vh]">
        <div class="max-w-6xl mx-auto w-full text-center">
            
            <div class="inline-block py-1 px-4 rounded-full bg-sky-600/10 text-sky-400 text-sm font-bold mb-8 border border-sky-600/30 animate-pulse">
                🧬 제약·바이오·화장품 제조 품질 혁신
            </div>
            
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                데이터 무결성(Data Integrity),<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                    타협할 수 없는 생존 조건입니다.
                </span>
            </h1>
            
            <p class="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                <strong class="text-white text-2xl block mb-2">FDA 21 CFR Part 11 준수.</strong>
                종이 기록서는 더 이상 규제 기관의 신뢰를 얻지 못합니다.<br />
                가장 완벽한 GMP는 <strong>'사람의 손을 거치지 않는 기록'</strong>에서 시작됩니다.
                <span class="text-sky-400 font-bold text-2xl block mt-4">"Jetong Box는 완벽한 Audit Trail을 제공합니다."</span>
            </p>

            {/* 리스크 카드 */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
                <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-sky-500 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-slate-300 mb-2">Warning Letter</h3>
                    <p class="text-5xl font-extrabold text-red-500 mb-2">심각</p>
                    <p class="text-slate-400 text-sm">FDA 등 규제 기관 실사 시<br />데이터 조작 의심은 치명적 결과 초래</p>
                </div>
                <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-sky-500 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-slate-300 mb-2">문서 관리 비용</h3>
                    <p class="text-5xl font-extrabold text-orange-500 mb-2">30%<span class="text-2xl text-slate-400">↓</span></p>
                    <p class="text-slate-400 text-sm">연간 발생하는 방대한<br />종이 문서 보관 및 관리 비용</p>
                </div>
                <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-sky-500 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-slate-300 mb-2">클린룸 오염</h3>
                    <p class="text-5xl font-extrabold text-sky-400 mb-2">Zero</p>
                    <p class="text-slate-400 text-sm">기록을 위한 작업자 출입 최소화로<br />교차 오염 위험 원천 차단</p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 2: GMP 방어 논리 (ALCOA+) */}
      <section class="py-20 bg-slate-800 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             {/* Grid Pattern */}
             <svg class="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    글로벌 규격에 맞는 <span class="text-sky-400">디지털 제조 환경</span>
                </h2>
                <p class="text-slate-400">
                    Jetong Box는 의약품 및 화장품 제조 기준(GMP)을 충족하는 <br class="md:hidden" />
                    <strong>가장 강력한 환경 모니터링 시스템(EMS)</strong>입니다.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {painPoints.map((item, index) => (
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col justify-between hover:border-sky-500 transition-colors">
                        <div>
                            <div class="flex items-center mb-4">
                                <span class="bg-sky-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold mr-3 text-sm">
                                    {index + 1}
                                </span>
                                <h3 class="text-xl font-bold text-white">{item.title}</h3>
                            </div>
                            <p class="text-slate-400 mb-6 pl-11 text-sm border-l-2 border-slate-700">
                                {item.desc}
                            </p>
                        </div>
                        <div class="pl-11">
                            <div class="bg-sky-900/20 p-4 rounded-lg border border-sky-500/30">
                                <span class="text-xs text-sky-400 font-bold uppercase block mb-1">Jetong Solution</span>
                                <p class="text-sky-100 text-sm font-medium flex items-start">
                                    <svg class="w-4 h-4 text-sky-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    {item.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Section 3: Jetong Box 기능 상세 */}
      <section class="py-24 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Jetong Box, <br />
                    <span class="text-sky-400">품질 관리(QC/QA)의 눈</span>이 됩니다.
                </h2>
                <p class="text-slate-400 max-w-2xl mx-auto">
                    눈에 보이지 않는 차압부터 민감한 온습도까지.<br />
                    모든 환경 데이터는 암호화되어 클라우드에 안전하게 보관됩니다.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-sky-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">정밀 환경 모니터링 (EMS)</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        온도, 습도는 물론 클린룸의 핵심인 <strong>차압(Differential Pressure)</strong>까지 초정밀 센서로 관리합니다.
                    </p>
                </div>
                {/* Feature 2 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-sky-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">완벽한 데이터 보안</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        모든 데이터는 생성 즉시 암호화되며, 관리자 권한에 따른 접근 제어 및 변경 이력(Audit Trail)이 자동 생성됩니다.
                    </p>
                </div>
                {/* Feature 3 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-sky-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                         <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">실시간 일탈 분석</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        설정된 관리 기준(Upper/Lower Limit)을 벗어나는 즉시 알람이 발생하며, 해당 시점의 데이터가 별도 마킹됩니다.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 px-4">
        <div class="max-w-5xl mx-auto bg-gradient-to-r from-sky-900 to-blue-900 rounded-3xl p-8 md:p-16 text-center border border-sky-500/50 shadow-2xl relative overflow-hidden">
             {/* Glow effect */}
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-sky-500/20 blur-3xl rounded-full -z-0"></div>
            
            <div class="relative z-10">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    다음 실사(Audit)가 걱정되시나요?<br />
                    <span class="text-sky-300">Jetong Box로 완벽한 리포트를 준비하세요.</span>
                </h2>
                <p class="text-sky-100 mb-10 text-lg">
                    제약, 바이오, 화장품, 건강기능식품까지.<br class="md:hidden"/>
                    각 산업별 규제에 최적화된 모니터링 솔루션을 제안해 드립니다.
                </p>
                
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                    <A href="/solution/gmp" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-sky-600 rounded-full hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/25 transform hover:-translate-y-1">
                        무료 데모 신청하기
                    </A>
                    <A href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-700 rounded-full hover:bg-slate-600 transition-all border border-slate-500">
                        GMP 구축 비용 문의
                    </A>
                </div>
                <p class="mt-6 text-sm text-sky-300/60">
                    * 스마트 공장 고도화 사업 지원 가능 여부 상담 환영
                </p>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-8 text-center text-slate-600 text-sm border-t border-slate-800">
        &copy; {new Date().getFullYear()} Jetong AI. All rights reserved.
      </footer>
    </div>
  );
}