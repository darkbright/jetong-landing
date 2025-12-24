import { A } from "@solidjs/router";

export default function HaccpCampaign() {
  // HACCP 핵심 페인 포인트 vs 솔루션 매칭 데이터
  const painPoints = [
    {
      title: "CCP 모니터링 기록 위변조",
      desc: "사람이 수기로 작성하는 기록은 신뢰할 수 없고, 적발 시 즉시 인증 취소 사유가 됩니다.",
      solution: "IoT 센서가 데이터를 서버로 직접 전송하여 원천적으로 수정 불가능 (Data Integrity)"
    },
    {
      title: "불시 점검 및 심사 준비 스트레스",
      desc: "심사 때마다 과거 서류를 급조하거나 빈칸을 채우느라 야근하고 계십니까?",
      solution: "클릭 한 번으로 식약처 제출용 일지(PDF) 자동 생성 및 즉시 열람"
    },
    {
      title: "이탈 사고 늑장 대응",
      desc: "냉동고 고장이나 금속 검출을 나중에 알게 되어 전량 폐기한 적이 있습니까?",
      solution: "한계 기준 이탈 즉시 관리자 스마트폰으로 알림 발송 및 현장 경광등 작동"
    },
    {
      title: "복잡한 서류 관리와 분실 위험",
      desc: "습기 찬 현장에서 젖은 종이 서류를 관리하는 것은 비효율의 극치입니다.",
      solution: "모든 데이터는 클라우드에 영구 보관되며, 태블릿으로 전자 서명 가능"
    }
  ];

  return (
    <div class="bg-slate-900 text-white min-h-screen font-[sans-serif] selection:bg-emerald-500 selection:text-white">
      
      {/* 네비게이션 */}
      <nav class="fixed top-0 left-0 p-6 w-full flex justify-between items-center z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <A href="/" class="text-slate-400 hover:text-white font-bold transition-colors flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Home
        </A>
        <div class="hidden md:block text-slate-500 text-sm font-medium">
            Smart HACCP 자동화 솔루션
        </div>
      </nav>

      {/* Hero Section: 문제 제기 */}
      <section class="pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center min-h-[85vh]">
        <div class="max-w-6xl mx-auto w-full text-center">
            
            <div class="inline-block py-1 px-4 rounded-full bg-emerald-600/10 text-emerald-500 text-sm font-bold mb-8 border border-emerald-600/30 animate-pulse">
                🌱 식품 안전 데이터 무결성 보장
            </div>
            
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                아직도 볼펜으로<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                    가짜 온도를 적고 계십니까?
                </span>
            </h1>
            
            <p class="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                <strong class="text-white text-2xl block mb-2">Smart HACCP, 선택이 아닌 필수.</strong>
                수기 기록은 실수와 조작의 위험을 항상 안고 있습니다.<br />
                식약처는 이제 <strong>'데이터의 위변조 방지'</strong>를 가장 중요하게 봅니다.
                <span class="text-emerald-400 font-bold text-2xl block mt-4">"Jetong Box는 거짓말을 하지 않습니다."</span>
            </p>

            {/* 리스크 카드 */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
                <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-emerald-500 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-slate-300 mb-2">행정 처분</h3>
                    <p class="text-5xl font-extrabold text-red-500 mb-2">인증 취소</p>
                    <p class="text-slate-400 text-sm">기록 위변조 적발 시<br />즉시 HACCP 인증 취소 (One-Strike)</p>
                </div>
                <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-emerald-500 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-slate-300 mb-2">폐기 손실</h3>
                    <p class="text-5xl font-extrabold text-orange-500 mb-2">100%</p>
                    <p class="text-slate-400 text-sm">한계 기준 이탈 미인지 시<br />생산 제품 전량 폐기 리스크</p>
                </div>
                <div class="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-emerald-500 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-slate-300 mb-2">브랜드 신뢰</h3>
                    <p class="text-5xl font-extrabold text-slate-400 mb-2">치명타</p>
                    <p class="text-slate-400 text-sm">이물 혼입 사고 발생 시<br />회복 불가능한 이미지 타격</p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 2: Smart HACCP 방어 논리 */}
      <section class="py-20 bg-slate-800 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 0 L100 100" stroke="white" stroke-width="0.5" />
             </svg>
        </div>

        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    심사관이 신뢰하는 <span class="text-emerald-400">자동화 시스템</span>
                </h2>
                <p class="text-slate-400">
                    Jetong Box는 식약처 Smart HACCP 표준 모듈을 준수하며,<br class="md:hidden" />
                    <strong>사람의 개입 없는 순수한 데이터</strong>만을 기록합니다.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {painPoints.map((item, index) => (
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col justify-between hover:border-emerald-500 transition-colors">
                        <div>
                            <div class="flex items-center mb-4">
                                <span class="bg-emerald-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold mr-3 text-sm">
                                    {index + 1}
                                </span>
                                <h3 class="text-xl font-bold text-white">{item.title}</h3>
                            </div>
                            <p class="text-slate-400 mb-6 pl-11 text-sm border-l-2 border-slate-700">
                                {item.desc}
                            </p>
                        </div>
                        <div class="pl-11">
                            <div class="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/30">
                                <span class="text-xs text-emerald-400 font-bold uppercase block mb-1">Jetong Solution</span>
                                <p class="text-emerald-100 text-sm font-medium flex items-start">
                                    <svg class="w-4 h-4 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
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
                    Jetong Box로 <br />
                    <span class="text-emerald-400">위생과 품질을 동시에</span> 잡으세요.
                </h2>
                <p class="text-slate-400 max-w-2xl mx-auto">
                    온도, 금속검출, 세척 등 중요관리점(CCP) 데이터를 실시간으로 수집하고,<br />
                    이상 발생 시 즉시 알려주어 골든타임을 지켜줍니다.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">자동화된 CCP 기록</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        온도 센서, 금속 검출기 등 장비와 직접 연동됩니다. 2시간마다 돌아다니며 적을 필요 없이, 1초 단위로 정밀하게 기록됩니다.
                    </p>
                </div>
                {/* Feature 2 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">실시간 이탈 알림</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        냉동창고 문이 열려있거나 온도가 상승하면 즉시 담당자에게 카카오톡/문자를 발송합니다. 퇴근 후에도 안심할 수 있습니다.
                    </p>
                </div>
                {/* Feature 3 */}
                <div class="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors text-center group">
                    <div class="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">원클릭 일지 생성</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        복잡한 HACCP 일지를 자동으로 생성합니다. 태블릿 전자서명 기능으로 페이퍼리스(Paperless) 공장을 구현합니다.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 px-4">
        <div class="max-w-5xl mx-auto bg-gradient-to-r from-emerald-900 to-teal-900 rounded-3xl p-8 md:p-16 text-center border border-emerald-500/50 shadow-2xl relative overflow-hidden">
             {/* Glow effect */}
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/20 blur-3xl rounded-full -z-0"></div>
            
            <div class="relative z-10">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    HACCP 심사, 두려워하지 마세요.<br />
                    <span class="text-emerald-300">Jetong Box가 완벽하게 증명합니다.</span>
                </h2>
                <p class="text-emerald-100 mb-10 text-lg">
                    정부의 '스마트 HACCP' 보급 지원 사업을 통해 <br class="md:hidden"/>
                    구축 비용의 <span class="text-white font-bold underline decoration-yellow-400 underline-offset-4">최대 50%</span>를 지원받을 수 있습니다.
                </p>
                
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                    <A href="/solution/haccp" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1">
                        무료 현장 컨설팅 신청
                    </A>
                    <A href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-700 rounded-full hover:bg-slate-600 transition-all border border-slate-500">
                        Smart HACCP 견적 문의
                    </A>
                </div>
                <p class="mt-6 text-sm text-emerald-300/60">
                    * 지원 사업 예산 소진 시 조기 마감될 수 있습니다. 지금 바로 문의하세요.
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