import { A } from "@solidjs/router";
import { Title, Meta } from "@solidjs/meta";
import styles from "./jetong-view.module.css";

export default function JetongView() {
  return (
    <>
      <Title>Jetong View - 실시간 모니터링 대시보드</Title>
      <Meta name="description" content="SolidJS 기반의 초경량 실시간 관제 대시보드, Jetong View를 소개합니다." />

      <div class={`${styles.fontNoto} text-slate-800 bg-white`}>

        {/* Header (Hero Section) */}
        <header id="product" class={`${styles.heroPattern} relative text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden`}>
          {/* Blobs */}
          <div class={`${styles.blob} bg-[#0ea5e9] w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2`}></div>
          <div class={`${styles.blob} bg-green-500 w-96 h-96 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2`}></div>

          <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-center lg:text-left">
              <div class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-sky-300 uppercase bg-sky-900/50 rounded-full border border-sky-500/30">
                Real-time Data Visualization & Monitoring
              </div>
              
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
                공장 데이터를<br />
                <span class={styles.brandViewPrimary}>"실시간"</span>으로 보세요.
              </h1>
              
              <p class="text-lg text-slate-400 mb-8 leading-relaxed">
                운전실 PC, 태블릿, 모바일 모두에서 <strong class="text-white">단 하나의 화면</strong>을 공유합니다.<br />
                Jetong Box가 수집한 모든 데이터를 **SolidJS + Tauri** 기반의<br />
                초경량 대시보드로 지연 없이 직관적으로 파악할 수 있습니다.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <A href="/contact" class="px-8 py-4 rounded-lg bg-[#0ea5e9] text-white font-bold text-lg hover:bg-sky-600 transition shadow-lg shadow-sky-900/50 flex items-center justify-center gap-2 text-center">
                  <i class="fa-solid fa-desktop"></i> 라이브 데모 신청
                </A>
                <A href="/product" class="px-8 py-4 rounded-lg bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 transition border border-slate-700 text-center">
                  다른 제품 보기
                </A>
              </div>
            </div>
            
            {/* Dashboard Mockup */}
            <div class="relative flex justify-center">
              <div class={`${styles.shadowViewNeon} w-full max-w-lg bg-slate-900 rounded-3xl border border-slate-700 flex flex-col items-center justify-center relative transform -rotate-2 hover:rotate-0 transition duration-500 overflow-hidden aspect-video`}>
                <div class="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-80"></div>
                <div class="z-10 text-center p-8">
                  <i class={`fa-solid fa-chart-area text-8xl ${styles.brandViewPrimary} mb-4`}></i>
                  <p class="text-2xl font-black text-white uppercase tracking-wider">Real-Time HMI</p>
                  <p class="text-sky-400 font-bold text-sm italic">Fine-Grained UI by SolidJS</p>
                </div>
                
                {/* Floating Badges */}
                <div class="absolute top-8 -right-16 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 text-white text-sm font-bold shadow-lg transform rotate-3">
                    <i class="fa-solid fa-bolt text-yellow-400 mr-2"></i>반응 속도: 10ms
                </div>
                <div class="absolute bottom-4 -left-12 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 text-white text-sm font-bold shadow-lg transform -rotate-3">
                    <i class="fa-solid fa-tablet-screen-button text-green-400 mr-2"></i>Web & Desktop App
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" class="py-20 bg-slate-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class={`text-base font-bold tracking-wide uppercase ${styles.brandViewPrimary}`}>Key Functions</h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                경영진이 원하는 핵심 정보만 담았습니다
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-brand-view-primary text-2xl">
                  <i class="fa-solid fa-chart-line"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">종합 가동률 및 생산 현황</h3>
                <p class="text-slate-600">
                  라인별/설비별 가동 상태를 실시간 OEE(종합효율) 그래프로 제공합니다.<br />
                  가장 비효율적인 공정을 즉시 파악하여 개선점을 찾을 수 있습니다.
                </p>
              </div>

              <div class="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-brand-view-secondary text-2xl">
                  <i class="fa-solid fa-bell"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">스마트 알림 및 경고 시스템</h3>
                <p class="text-slate-600">
                  온도 이탈, 설비 정지, 불량률 임계치 초과 등<br />
                  사전에 정의된 위험 상황 발생 시 **앱 푸시, 카카오톡, SMS**로 즉시 알림을 발송합니다.
                </p>
              </div>

              <div class="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition">
                <div class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-500 text-2xl">
                  <i class="fa-solid fa-lock"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">안전한 데이터 보관 및 관리</h3>
                <p class="text-slate-600">
                  GMP/HACCP 인증을 위한 모든 기록을 암호화하여 클라우드(또는 로컬 서버)에 보관합니다.<br />
                  필요 시 언제든 법적 요구사항에 맞는 보고서 형태로 출력 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" class="py-20 bg-white border-t border-slate-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-base brand-view-primary font-bold tracking-wide uppercase">Built for Performance</h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                타협 없는 쾌적함, SolidJS + Tauri
              </p>
              <p class="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                가벼운 데스크톱 앱 크기, 빠른 웹 반응성. 현장 환경에 최적화된 조합입니다.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* SolidJS Feature */}
              <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                    <i class="fa-solid fa-rocket"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-slate-900">SolidJS: 랙(Lag) 없는 UI</h3>
                </div>
                <p class="text-slate-600 mb-4">
                  가상 DOM 없이 데이터 변경 즉시 해당 DOM 노드만 업데이트합니다. 
                  수천 개의 데이터 포인트가 화면에서 실시간으로 변해도 브라우저는 부하 없이 가볍습니다.
                </p>
                <div class="flex gap-2">
                  <span class="text-xs font-mono bg-blue-500/10 text-blue-500 px-2 py-1 rounded">최고의 벤치마크 점수</span>
                  <span class="text-xs font-mono bg-blue-500/10 text-blue-500 px-2 py-1 rounded">V-DOM Free</span>
                </div>
              </div>

              {/* Tauri Feature */}
              <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-slate-900">Tauri: 초경량 네이티브 앱</h3>
                </div>
                <p class="text-slate-600 mb-4">
                  대시보드 앱 크기가 5MB 미만입니다. 구형 산업용 PC에 설치해도 리소스를 거의 사용하지 않아, 
                  뒤에서 돌아가는 Rust 기반 AI 추론 엔진에 자원을 온전히 할당할 수 있습니다.
                </p>
                <div class="flex gap-2">
                  <span class="text-xs font-mono bg-teal-500/10 text-teal-500 px-2 py-1 rounded">크기 &lt; 5MB</span>
                  <span class="text-xs font-mono bg-teal-500/10 text-teal-500 px-2 py-1 rounded">Rust API 연결</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section class="py-12 bg-gray-900 text-white text-center">
          <h3 class={`text-2xl font-bold mb-4 ${styles.brandViewSecondary}`}>Jetong Box가 엔진이라면, Jetong View는 핸들입니다.</h3>
          <p class="text-slate-400 mb-8">두 제품의 완벽한 통합으로 스마트팩토리의 진정한 가치를 발견하세요.</p>
          <A href="/product/jetong-box" class="inline-flex items-center px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition">
            <i class="fa-solid fa-cube mr-2"></i> Jetong Box (하드웨어) 상세 보기
          </A>
        </section>
      </div>
    </>
  );
}

// 내부 헬퍼 컴포넌트
function FeatureCard(props: any) {
  return (
    <div class="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition">
      <div class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
        <i class={`fa-solid ${props.icon} ${props.color}`}></i>
      </div>
      <h3 class="text-xl font-bold text-slate-900 mb-3">{props.title}</h3>
      <p class="text-slate-600 leading-relaxed">{props.children}</p>
    </div>
  );
}

function TechCard(props: any) {
  return (
    <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-left">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-xl shadow-sm">
          <i class={`fa-solid ${props.icon}`}></i>
        </div>
        <h3 class="text-2xl font-bold text-slate-900">{props.title}</h3>
      </div>
      <p class="text-slate-600">{props.children}</p>
    </div>
  );
}