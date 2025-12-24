import { A } from "@solidjs/router";
import CTASection from "~/components/layout/CTA";
import HeroSection from "~/components/layout/HeroSection";

export default function GovernmentPrograms() {
  return (
    <>
      <HeroSection
        badgeText="Government Support Programs"
        title={<> 중대재해 예방을 위한<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">맞춤형 정부지원사업</span> </>}
        description={<> 비용 부담은 줄이고 안전은 높이세요.<br /> 귀사의 실시간 모니터링 솔루션 도입을 위한<br /> 재정 지원 혜택을 정리해 드립니다. </>}
      />      

      {/* 2. 메인 콘텐츠 (그리드 카드 섹션) */}
      <main class="flex-grow bg-white">
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* 사업 1: 스마트 안전장비 지원 */}
              <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-200 group flex flex-col h-full">
                <div class="flex items-center justify-between mb-6">
                  <div class="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                    {/* Icon: Cpu/Hardware */}
                    <svg class="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                  </div>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wide rounded-full">최대 3,000만원</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">스마트 안전장비 지원사업</h3>
                <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                  AI CCTV, 스마트 센서 등 <strong>JetongBox 하드웨어</strong> 도입 비용의 80%를 지원합니다. 고위험 공정의 실시간 모니터링 체계를 구축할 수 있는 가장 직접적인 방법입니다.
                </p>
                <ul class="mb-6 space-y-2 text-sm text-gray-500">
                  <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>재정지원 보조율 80% (자부담 20%)</li>
                  <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>중소기업 및 상시근로자 50인 미만 우선</li>
                </ul>
                <A href="/contact" class="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors mt-auto">
                  도입 가능 장비 문의
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </A>
              </div>

              {/* 사업 2: 중소기업 혁신바우처 */}
              <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-200 group flex flex-col h-full">
                <div class="flex items-center justify-between mb-6">
                  <div class="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                    {/* Icon: Ticket/Voucher */}
                    <svg class="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                  </div>
                  <span class="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide rounded-full">최대 5,000만원</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">혁신바우처 (중대재해예방형)</h3>
                <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                  전문 컨설팅과 함께 <strong>모니터링 시스템 구축</strong>을 패키지로 지원받으세요. 단순 장비 구매를 넘어 우리 공장에 최적화된 안전관리 프로세스를 설계해 드립니다.
                </p>
                <ul class="mb-6 space-y-2 text-sm text-gray-500">
                  <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>컨설팅 + 기술지원 + 마케팅 통합 지원</li>
                  <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>매출액 1,500억 이하 제조 중소기업</li>
                </ul>
                <A href="/contact" class="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-800 transition-colors mt-auto">
                  바우처 신청 가이드
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </A>
              </div>

              {/* 사업 3: 산재예방시설 융자금 */}
              <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-200 group flex flex-col h-full">
                <div class="flex items-center justify-between mb-6">
                  <div class="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                    {/* Icon: Bank/Scale */}
                    <svg class="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                  </div>
                  <span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wide rounded-full">연리 1.5% 저리</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">산재예방시설 융자 지원</h3>
                <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                  대규모 관제 시스템 구축이나 노후 기계 전면 교체가 필요하신가요? <strong>최대 10억 원</strong>까지 저금리 융자를 지원하여 초기 투자 부담을 획기적으로 낮춰드립니다.
                </p>
                <ul class="mb-6 space-y-2 text-sm text-gray-500">
                  <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>3년 거치 7년 분할상환</li>
                  <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>스마트 안전시설 및 방호장치 대상</li>
                </ul>
                <A href="/contact" class="inline-flex items-center text-amber-600 font-bold hover:text-amber-800 transition-colors mt-auto">
                  융자 한도 확인하기
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </A>
              </div>

              {/* 사업 4: 클린사업장/안전동행 */}
              <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-200 group flex flex-col h-full">
                <div class="flex items-center justify-between mb-6">
                  <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    {/* Icon: Shield Check */}
                    <svg class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide rounded-full">공정 개선 지원</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">안전동행 지원사업</h3>
                <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                  노후화된 위험 공정을 근본적으로 개선합니다. <strong>실시간 위험 감지 시스템</strong>과 연계한 설비 개보수를 통해 중대재해 발생 가능성을 원천 차단하십시오.
                </p>
                <ul class="mb-6 space-y-2 text-sm text-gray-500">
                  <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>위험공정 자동화 및 설비 교체</li>
                  <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>안전진단 전문가 컨설팅 연계</li>
                </ul>
                <A href="/contact" class="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors mt-auto">
                  지원 자격 확인
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </A>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <CTASection 
        title="복잡한 지원사업 신청, JetongAI가 함께합니다."
        subtitle={<>우리 기업에 맞는 최적의 사업 매칭부터 서류 준비, 시스템 구축까지<br />
              <strong>초기창업패키지 선정 경험</strong>을 바탕으로 밀착 지원해 드립니다.</>}
        primaryAction={{ label: "무료 지원사업 상담", href: "/contact" }}
        secondaryAction={{ label: "솔루션 자세히 보기", href: "/solution" }}
      />           
    </>
  );
}