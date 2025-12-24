import { A } from "@solidjs/router";
import HeroSection from "~/components/layout/HeroSection";

export default function RustTech() {
  return (
    <>
      {/* Scoped Style: 해당 컴포넌트에서만 쓰이는 호버 효과입니다.
        Global CSS(Tailwind)가 있다면 @apply 등으로 옮겨도 좋습니다.
      */}
      <style>
        {`
          .card-hover {
            transition: all 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>

      {/* Main Container */}
      <div class="bg-[#0f172a] text-slate-300 antialiased selection:bg-orange-500 selection:text-white min-h-screen">
        
      <HeroSection
        badgeText="The Engine for Real-time AI"
        title={<> 멈추지 않는 지성,<br /> <span class="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-200">타협하지 않는 안전.</span> </>}
        description={<> AI 제조 현장은 0.1초의 지연도, 단 한 번의 멈춤도 허용하지 않습니다.<br />
              Jetong AI는 <strong class="text-white">Rust</strong>를 통해 실시간 관제 시스템의<br class="md:hidden" /> 새로운 기준을 제시합니다. </>}
      />         

        {/* 3 Key Features */}
        <section class="px-6 py-20 bg-slate-900">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover">
                <div class="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Zero Runtime Overhead</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  Java나 Python과 달리 가비지 컬렉터(GC)가 없습니다. 메모리 정리를 위한 멈춤(Stop-the-world) 현상 없이, 기계어로 직접 실행되어 예측 가능한 반응 속도를 보장합니다.
                </p>
              </div>

              {/* Feature 2 */}
              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover">
                <div class="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Memory Safety</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  엄격한 컴파일러가 메모리 누수와 데이터 경합(Data Race)을 원천 차단합니다. 24시간 365일 돌아가는 공장 서버가 갑자기 셧다운될 확률을 극적으로 낮춥니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover">
                <div class="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Edge AI Native</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  무거운 런타임 없이 AI 모델(ONNX)을 엣지 디바이스에서 직접 구동합니다. 저사양 IPC에서도 서버급 추론 성능을 이끌어내어 하드웨어 비용을 절감합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section class="px-6 py-24 bg-[#0B1120]">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-20">
              <h2 class="text-4xl font-bold text-white mb-6">Why Rust in Smart Factory?</h2>
              <p class="text-slate-400 text-lg">익숙함과 타협하지 않고, 오직 성능과 안정성만을 보고 선택했습니다.</p>
            </div>

            <div class="space-y-8">
              {/* VS Python */}
              <div class="flex flex-col md:flex-row gap-8 p-8 border border-slate-800 rounded-2xl hover:bg-slate-800/50 transition-colors">
                <div class="md:w-1/4">
                  <span class="text-base font-bold text-blue-400 block mb-2">VS. Python</span>
                  <h4 class="text-xl font-bold text-white">AI 학습 vs 실전 추론</h4>
                </div>
                <div class="md:w-3/4">
                  <p class="text-slate-300 text-base leading-relaxed">
                    <strong class="text-white">"학습은 Python, 구동은 Rust"</strong><br />
                    Python은 모델 학습에는 최고지만, 실제 공장에서 돌리기엔 너무 무겁습니다. 우리는 학습된 모델을 Rust로 가져와 수십 배 빠른 실시간 추론 시스템을 구축합니다.
                  </p>
                </div>
              </div>

              {/* VS C/C++ */}
              <div class="flex flex-col md:flex-row gap-8 p-8 border border-slate-800 rounded-2xl hover:bg-slate-800/50 transition-colors">
                <div class="md:w-1/4">
                  <span class="text-base font-bold text-blue-400 block mb-2">VS. C/C++</span>
                  <h4 class="text-xl font-bold text-white">속도는 그대로, 위험은 제로</h4>
                </div>
                <div class="md:w-3/4">
                  <p class="text-slate-300 text-base leading-relaxed">
                    <strong class="text-white">"메모리 오류 없는 네이티브 성능"</strong><br />
                    C++ 수준의 압도적인 속도를 내면서도, 치명적인 메모리 오류(Segmentation Fault) 위험을 제거했습니다. 라인이 멈추면 안 되는 제조업에 가장 안전한 선택입니다.
                  </p>
                </div>
              </div>

              {/* VS Java/Go */}
              <div class="flex flex-col md:flex-row gap-8 p-8 border border-slate-800 rounded-2xl hover:bg-slate-800/50 transition-colors">
                <div class="md:w-1/4">
                  <span class="text-base font-bold text-blue-400 block mb-2">VS. Java/Go</span>
                  <h4 class="text-xl font-bold text-white">미세한 멈춤조차 없는 제어</h4>
                </div>
                <div class="md:w-3/4">
                  <p class="text-slate-300 text-base leading-relaxed">
                    <strong class="text-white">"Garbage Collection Free"</strong><br />
                    일반 웹 서비스엔 훌륭하지만, 1ms가 중요한 정밀 제어에서 GC(메모리 정리)로 인한 멈춤은 치명적입니다. Rust는 하드웨어를 직접 제어하는 듯한 즉각적인 응답성을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech/Code Section */}
        <section class="px-6 py-24 bg-slate-900 border-t border-slate-800">
          <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2">
              <h2 class="text-4xl font-bold text-white mb-10">Manufacturing Intelligence</h2>
              <div class="space-y-10">
                <div class="flex gap-6">
                  <div class="mt-1 flex-shrink-0 w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400 font-bold text-base">1</div>
                  <div>
                    <h4 class="text-white font-bold mb-3 text-lg">Edge to Cloud Pipeline</h4>
                    <p class="text-slate-400 text-base leading-relaxed">현장 엣지 디바이스부터 클라우드 서버까지 Rust 단일 언어로 통합. 데이터 변환 비용이 없고 유지보수가 간결합니다.</p>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div class="mt-1 flex-shrink-0 w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400 font-bold text-base">2</div>
                  <div>
                    <h4 class="text-white font-bold mb-3 text-lg">Resource Efficiency (Green Tech)</h4>
                    <p class="text-slate-400 text-base leading-relaxed">경쟁 언어 대비 1/10 수준의 메모리 사용량. 더 적은 전력과 저렴한 장비로 고도화된 AI 관제 시스템을 운용합니다.</p>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div class="mt-1 flex-shrink-0 w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400 font-bold text-base">3</div>
                  <div>
                    <h4 class="text-white font-bold mb-3 text-lg">Future-Proof Reliability</h4>
                    <p class="text-slate-400 text-base leading-relaxed">한 번 배포하면 수년간 재부팅 없이도 동작하는 견고함. 개발자가 실수할 여지를 남기지 않는 엄격한 시스템입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Code Window with Syntax Highlighting Mockup */}
            <div class="lg:w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-slate-700 w-full shadow-2xl">
              <div class="font-mono text-sm md:text-base text-slate-300 space-y-3 leading-relaxed">
                <div class="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                  <div class="w-4 h-4 rounded-full bg-red-500"></div>
                  <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                  <span class="ml-3 text-slate-500">jetong-core.rs</span>
                </div>
                {/* Rust Code Snippet (JSX Escaped) */}
                <p><span class="text-purple-400">fn</span> <span class="text-blue-400">main</span>() {"{"}</p>
                <p class="pl-6"><span class="text-slate-500">// Zero-cost abstractions</span></p>
                <p class="pl-6"><span class="text-purple-400">let</span> sensors = <span class="text-yellow-300">Factory::connect_all</span>();</p>
                <p class="pl-6">&nbsp;</p>
                <p class="pl-6"><span class="text-slate-500">// Fearless concurrency</span></p>
                <p class="pl-6">sensors.<span class="text-blue-400">par_iter</span>().<span class="text-blue-400">for_each</span>(|sensor| {"{"}</p>
                <p class="pl-12"><span class="text-purple-400">if</span> sensor.<span class="text-blue-400">detect_anomaly</span>() {"{"}</p>
                <p class="pl-16"><span class="text-yellow-300">Alert::send_realtime</span>(sensor);</p>
                <p class="pl-12">{"}"}</p>
                <p class="pl-6">{"}"});</p>
                <p class="pl-6">&nbsp;</p>
                <p class="pl-6"><span class="text-green-400">println!</span>(<span class="text-orange-300">"System Secure. No Downtime."</span>);</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}