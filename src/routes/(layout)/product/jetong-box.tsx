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
                  JetongAI의 <strong>Rust 기반 에이전트</strong>는 극도로 가벼워서, <span class="bg-yellow-200 px-1 font-bold">10년 된 구형 노트북이나 산업용 PC</span>에도 즉시 설치 가능합니다.<br />
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
                습기, 진동, 고온, 먼지. 일반 PC가 견디지 못하는 극한 환경에서 진가를 발휘합니다.
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