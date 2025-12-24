import { A } from "@solidjs/router";
import HeroSection from "~/components/layout/HeroSection";

export default function Tauri() {
  return (
    <>
      {/* Tauri Page Specific Styles */}
      <style>
        {`
          /* Custom Cyan/Teal accents for Tauri theme */
          .tauri-accent { color: #2dd4bf; } /* Teal-400 */
          .tauri-bg-accent { background-color: rgba(45, 212, 191, 0.1); }
          
          .card-hover {
            transition: all 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px -10px rgba(45, 212, 191, 0.2); /* Teal shadow */
          }
        `}
      </style>

      {/* Main Container */}
      <div class="bg-[#0f172a] text-slate-300 antialiased selection:bg-teal-500 selection:text-white min-h-screen pb-20">

      <HeroSection
        badgeText="The Industrial HMI Engine"
        title={<> 가장 가벼운 엔진으로,<br />
              <span class="bg-clip-text bg-linear-to-r from-teal-400 to-cyan-200">가장 무거운 현장을 제어하다.</span> </>}
        description={<> 스마트팩토리의 PC는 엑셀 하나 켜기도 버거울 때가 많습니다.<br />
              Tauri는 시스템 자원을 거의 쓰지 않으면서도,<br />
              현대적인 웹 UI와 강력한 Rust 백엔드를 제공합니다. </>}
      />      

        {/* Key Features Grid */}
        <section class="px-6 py-20 bg-slate-900">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover relative overflow-hidden">
                <div class="w-14 h-14 tauri-bg-accent rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 tauri-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">압도적인 경량화 (&lt; 5MB)</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  브라우저를 통째로 내장하는 경쟁 기술(Electron)과 달리, OS에 내장된 웹뷰(WebView)를 활용합니다. 설치 파일 크기가 1/20 수준으로 줄어들어 배포와 업데이트가 획기적으로 빨라집니다.
                </p>
              </div>

              {/* Feature 2 */}
              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover">
                <div class="w-14 h-14 tauri-bg-accent rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 tauri-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Rust 백엔드의 강력함</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  UI는 가벼운 웹 기술(HTML/JS)로 그려내고, 무거운 데이터 처리와 장비 제어는 강력한 Rust가 담당합니다. UI 스레드가 절대 멈추지 않아 쾌적한 조작감을 보장합니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover">
                <div class="w-14 h-14 tauri-bg-accent rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 tauri-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">설계된 보안 (Security by Design)</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  Node.js 런타임을 포함하지 않아 공격 표면이 매우 작습니다. Rust의 메모리 안전성과 결합되어, 폐쇄적인 산업망 환경에서도 안심하고 사용할 수 있는 최고 수준의 보안을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section class="px-6 py-24 bg-[#0B1120]">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-20">
              <h2 class="text-4xl font-bold text-white mb-6">Framework Comparison for Smart Factory</h2>
              <p class="text-slate-400 text-lg max-w-3xl mx-auto">왜 화려한 최신 프레임워크들이 제조 현장에서는 외면받을까요?<br />우리는 <strong>'현장의 제약 사항'</strong>을 기준으로 기술을 선택했습니다.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Electron Card */}
              <div class="p-10 bg-slate-800/50 rounded-3xl border border-slate-700 relative grayscale hover:grayscale-0 transition-all">
                <div class="absolute top-0 right-0 m-6 px-4 py-2 bg-slate-700 rounded-full text-sm font-bold text-slate-300">업계 표준의 함정</div>
                <div class="w-16 h-16 mb-6">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16 text-blue-400">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                  </svg>
                </div>
                <h3 class="text-3xl font-bold text-white mb-4">Electron (VS Code, Slack 등)</h3>
                <ul class="space-y-4 text-slate-300 text-lg">
                  <li class="flex items-start">
                    <svg class="h-6 w-6 text-red-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span><strong>치명적인 메모리 점유:</strong> 크롬 브라우저를 내장하여 기본적으로 수백 MB의 RAM을 사용합니다. 저사양 현장 PC에는 치명적입니다.</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="h-6 w-6 text-red-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span><strong>거대한 배포 크기:</strong> 간단한 앱도 설치 파일이 100MB를 넘습니다. 네트워크가 느린 공장 환경에서 업데이트가 어렵습니다.</span>
                  </li>
                </ul>
              </div>

              {/* Tauri Card */}
              <div class="p-10 bg-slate-800 rounded-3xl border-2 border-teal-500/50 relative shadow-2xl shadow-teal-500/10">
                <div class="absolute top-0 right-0 m-6 px-4 py-2 tauri-bg-accent rounded-full text-sm font-bold tauri-accent">Jetong's Choice</div>
                <div class="w-16 h-16 mb-6 tauri-accent">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l8 4v8.4l-8 4-8-4V8.8l8-4zM11 17h2v-4h-2v4zm0-6h2V9h-2v2z"/>
                  </svg>
                </div>
                <h3 class="text-3xl font-bold text-white mb-4">Tauri</h3>
                <ul class="space-y-4 text-slate-300 text-lg">
                  <li class="flex items-start">
                    <svg class="h-6 w-6 tauri-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>극강의 리소스 효율:</strong> OS 자원을 재사용하여 메모리 사용량이 경쟁 대비 1/10 수준입니다. 다른 공정 프로그램과 공존이 가능합니다.</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="h-6 w-6 tauri-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Rust 기반의 안정성:</strong> 백엔드가 Rust로 작동하여, AI 추론이나 시리얼 통신 같은 무거운 작업을 멈춤 없이 처리합니다.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="p-8 bg-slate-900 rounded-2xl border border-slate-800">
                <h4 class="text-xl font-bold text-white mb-3 flex items-center">
                  <span class="text-blue-400 mr-2">Flutter</span> (Google)
                </h4>
                <p class="text-slate-400 leading-relaxed">모바일 중심의 프레임워크입니다. 렌더링 성능은 좋지만, 데스크탑 OS와의 통합이 아직 부자연스럽고 Rust 백엔드와의 연동이 Tauri만큼 매끄럽지 않습니다.</p>
              </div>
              <div class="p-8 bg-slate-900 rounded-2xl border border-slate-800">
                <h4 class="text-xl font-bold text-white mb-3 flex items-center">
                  <span class="text-purple-400 mr-2">.NET MAUI</span> (Microsoft)
                </h4>
                <p class="text-slate-400 leading-relaxed">윈도우 환경에서는 강력하지만, 런타임이 무겁고 리눅스(임베디드) 지원이 약합니다. 다양한 OS가 혼재된 공장 환경에 유연하게 대응하기 어렵습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Scenario Section */}
        <section class="px-6 py-24 bg-slate-900 border-t border-slate-800">
          <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2">
              <h2 class="text-4xl font-bold text-white mb-8">Industrial Scenario: <br /><span class="tauri-accent">Shop Floor AI Dashboard</span></h2>
              <p class="text-slate-400 text-lg leading-relaxed mb-8">
                현장 키오스크 PC는 비전 검사 AI 모델을 돌리느라 이미 GPU와 CPU가 바쁩니다. 여기에 무거운 Electron 기반 대시보드를 띄우면 전체 시스템이 느려집니다.
              </p>
              
              <ul class="space-y-6">
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 tauri-bg-accent rounded-full flex items-center justify-center tauri-accent font-bold">1</div>
                  <div class="ml-4">
                    <h4 class="text-white font-bold text-lg">Tauri의 역할</h4>
                    <p class="text-slate-400">UI 렌더링에 최소한의 자원만 사용하여, AI 추론 성능에 영향을 주지 않습니다.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 tauri-bg-accent rounded-full flex items-center justify-center tauri-accent font-bold">2</div>
                  <div class="ml-4">
                    <h4 class="text-white font-bold text-lg">실시간 데이터 통신</h4>
                    <p class="text-slate-400">Rust 백엔드가 PLC/센서 데이터를 초고속으로 수집하여 웹 UI로 던져줍니다. 지연 없는 실시간 모니터링이 가능합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Visual Representation */}
            <div class="lg:w-1/2 rounded-3xl overflow-hidden border-2 border-teal-500/30 shadow-2xl shadow-teal-500/20 w-full">
              <div class="bg-slate-800 aspect-video relative flex items-center justify-center p-8">
                <div class="absolute inset-0 bg-gradient-to-tr from-teal-900/20 to-slate-900/10"></div>
                <div class="text-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 tauri-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 class="text-2xl font-bold text-white mb-2">Ultra-Light HMI Dashboard</h4>
                  <p class="text-teal-400">Powered by Tauri & Rust</p>
                  <div class="mt-6 flex gap-4 justify-center text-sm font-mono">
                    <span class="px-3 py-1 bg-slate-900 rounded">MEM: 45MB</span>
                    <span class="px-3 py-1 bg-slate-900 rounded">CPU: 1%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}