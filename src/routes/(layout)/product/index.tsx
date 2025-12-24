import { A } from "@solidjs/router";
import CTASection from "~/components/layout/CTA";
import HeroSection from "~/components/layout/HeroSection";

export default function Product() {
  return (
    <>
      {/* 공통 히어로 컴포넌트 사용 */}
      <HeroSection
        badgeText="Harder Hardware, Smarter Software"
        title={<> 현장과 경영을 잇는<br /> <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-400">완벽한 연결 시스템</span> </>}
        description={<> 끊김 없는 데이터 수집을 위한 Edge Device와<br /> 한눈에 들어오는 직관적인 Dashboard를 통합 제공합니다. </>}
      />

      {/* 2. 메인 콘텐츠 */}
      <main class="flex-grow bg-white">
        
        {/* Section: Jetong Box */}
        <section class="py-20 overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div class="mb-10 lg:mb-0 relative">
                <div class="absolute -inset-4 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 aspect-[4/3] flex items-center justify-center">
                  <div class="text-center p-8 w-full h-full flex flex-col items-center justify-center relative">
                    
                    
                    
                    <div class="absolute bottom-8 left-0 right-0 text-center">
                       <p class="text-gray-500 font-bold text-lg">Jetong Box v1.0</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                  Jetong Box<br />
                  <span class="text-blue-600 text-2xl">Industrial Edge Gateway</span>
                </h2>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  어떤 설비든 꽂으면 바로 연결됩니다. Rust 언어로 작성된 펌웨어는 
                  메모리 누수 없이 365일 24시간 안정적으로 데이터를 수집하고 전송합니다.
                </p>
                <ul class="space-y-4 mb-8">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-lg font-medium text-gray-900">플러그 앤 플레이 (Plug & Play)</p>
                      <p class="text-gray-500">복잡한 설정 없이 전원과 LAN선 연결 즉시 작동</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-lg font-medium text-gray-900">Edge Computing</p>
                      <p class="text-gray-500">서버 부하를 줄이는 현장 데이터 1차 가공 및 필터링</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-lg font-medium text-gray-900">다양한 프로토콜 지원</p>
                      <p class="text-gray-500">Modbus, OPC-UA, Analog/Digital I/O 완벽 호환</p>
                    </div>
                  </li>
                </ul>

                {/* Jetong Box 상세 보기 버튼 추가 */}
                <A href="/product/jetong-box" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Jetong Box 상세 보기
                  <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </A>

              </div>
            </div>
          </div>
        </section>

        {/* Section: Jetong View */}
        <section class="py-20 bg-white border-t border-gray-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center lg:flex-row-reverse">
              <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                  Jetong View<br />
                  <span class="text-green-600 text-2xl">Manager Dashboard</span>
                </h2>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  공장 밖에서도 공장이 보입니다. SolidJS와 Tauri로 제작된 대시보드는 
                  네이티브 앱 수준의 반응 속도로 실시간 현황을 보여줍니다.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 class="font-bold text-gray-900 mb-2">📊 실시간 모니터링</h4>
                    <p class="text-sm text-gray-600">0.1초 단위 데이터 갱신으로 설비 상태 즉시 확인</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 class="font-bold text-gray-900 mb-2">📱 멀티 디바이스</h4>
                    <p class="text-sm text-gray-600">PC, 태블릿, 스마트폰 어디서나 동일한 경험</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h4 class="font-bold text-gray-900 mb-2">🔔 스마트 알림</h4>
                      <p class="text-sm text-gray-600">카카오톡, 문자, 앱 푸시로 이슈 발생 즉시 전송</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h4 class="font-bold text-gray-900 mb-2">📈 자동 보고서</h4>
                      <p class="text-sm text-gray-600">일일 생산량, 가동률 리포트 자동 생성 및 발송</p>
                  </div>
                </div>

                {/* Jetong View 상세 보기 버튼 추가 */}
                <A href="/product/jetong-view" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors">
                  Jetong View 상세 보기
                  <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </A>
              </div>

              <div class="mb-10 lg:mb-0 lg:order-2 relative order-1">
                <div class="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 aspect-video flex items-center justify-center group">
                  <div class="absolute inset-0 bg-gray-800/50"></div>
                  <div class="z-10 text-center p-8 w-full h-full flex flex-col items-center justify-center relative">
                    
                    
                    
                      <div class="absolute bottom-8 left-0 right-0 text-center">
                        <p class="text-white font-bold text-lg">Jetong View v1.0</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Technical Specs */}
        <section class="py-20 bg-gray-50">
           <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <div class="text-center mb-12">
               <h2 class="text-3xl font-extrabold text-gray-900">Technical Specifications</h2>
               <p class="mt-4 text-gray-600">제조 현장의 다양한 요구사항을 충족하는 표준 규격입니다.</p>
             </div>
             
             <div class="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
               <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-100">
                       <tr>
                         <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">Category</th>
                         <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Specification details</th>
                       </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                      <tr class="bg-blue-50/50">
                        <td colspan="2" class="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider">Jetong Box (Hardware)</td>
                      </tr>
                      <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CPU / RAM</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Dual Core ARM Cortex / 4GB LPDDR4</td></tr>
                      <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Input Interface</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">RS-232, RS-485, Digital I/O (8ch), Analog In (4ch)</td></tr>
                      <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Connectivity</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Ethernet(LAN), Wi-Fi Dual Band, LTE/5G (Optional)</td></tr>
                      <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Power / Enclosure</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">DC 12V-24V / IP65 방진방수 알루미늄 바디</td></tr>
                      
                      <tr class="bg-green-50/50">
                        <td colspan="2" class="px-6 py-3 text-left text-xs font-bold text-green-800 uppercase tracking-wider">Jetong View (Software)</td>
                      </tr>
                      <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Client Platform</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Web, Windows, macOS, Android, iOS</td></tr>
                      <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Protocol Support</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">MQTT, WebSocket, REST API</td></tr>
                      <tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Security</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">TLS 1.3 암호화, 2단계 인증(2FA)</td></tr>
                  </tbody>
               </table>
             </div>
             
             <div class="mt-8 text-center">
                <a href="#" class="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center transition-colors">
                   <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                   상세 카탈로그 다운로드 (PDF)
                </a>
             </div>
           </div>
        </section>        
      </main>

      <CTASection 
        title="시제품 데모가 필요하신가요?"
        subtitle="초기창업패키지 및 디딤돌 과제와 연계된 맞춤형 도입 상담을 제공합니다."
        primaryAction={{ label: "도입 상담 신청하기", href: "/contact" }}
        secondaryAction={{ label: "기술력 확인하기", href: "/tech" }}
      />      
    </>
  );
}