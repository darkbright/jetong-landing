import { A } from "@solidjs/router";
import { Title, Meta } from "@solidjs/meta";
import { createSignal, onMount, For } from "solid-js";
import HeroSection from "~/components/layout/HeroSection";

// 타임라인 아이템 타입 정의
interface TimelineItemProps {
  year: string;
  title: string;
  color: string;
  children: string;
  active?: boolean;
  highlight?: boolean;
}

// 컴포넌트: 타임라인 아이템
const TimelineItem = (props: TimelineItemProps) => {
  return (
    <div class="relative pl-12">
      <div
        class={`absolute left-[-9px] top-2 h-4 w-4 rounded-full border-2 border-[#0f172a] ${props.color} ${
          props.active ? "shadow-[0_0_15px_rgba(56,189,248,0.6)]" : ""
        }`}
      />
      <div class="mb-2 flex flex-col gap-2 md:flex-row md:items-center">
        <span class="font-mono text-sm text-slate-500">{props.year}</span>
        <h3
          class={`font-bold ${
            props.active
              ? "text-sky-400 text-2xl"
              : props.highlight
              ? "text-white text-xl"
              : "text-slate-400 text-xl"
          }`}
        >
          {props.title}
        </h3>
      </div>
      <p class={props.active ? "text-slate-200" : "text-slate-400"}>
        {props.children}
      </p>
    </div>
  );
};

export default function SolidTechPage() {
  const [temp, setTemp] = createSignal(24.5);

  // Tauri 등 외부 이벤트 시뮬레이션 (데모용)
  onMount(() => {
    const interval = setInterval(() => {
      setTemp(parseFloat((24 + Math.random() * 2).toFixed(1)));
    }, 2000);
    return () => clearInterval(interval);
  });

  const features = [
    {
      title: "Top Performance",
      desc: "JS Framework Benchmark 상위권. 바닐라 JS에 근접한 속도.",
    },
    {
      title: "Fine-Grained Reactivity",
      desc: "컴포넌트 전체가 아닌 변경된 DOM 노드만 갱신.",
    },
    {
      title: "Small Bundle Size",
      desc: "내부망·저사양 환경에서도 즉각적인 로딩.",
    },
  ];

  return (
    <div class="min-h-screen bg-[#0f172a] pb-20 text-slate-300 antialiased selection:bg-sky-500 selection:text-white">
      <Title>SolidJS UI - Jetong AI Technology</Title>
      <Meta name="description" content="SolidJS의 세밀한 반응성을 활용한 제통 AI의 기술 스택" />

      {/* 공통 히어로 컴포넌트 사용 */}
      <HeroSection
        badgeText="True Reactivity, No VDOM"
        title={<> 가상(Virtual)은 버리고, <br /> <span class="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"> 진짜(Real) 반응성만 남겼습니다. </span> </>}
        description={<> 공장의 데이터는 1초에도 수십 번 변합니다. <br /> SolidJS는 변화가 필요한 <strong class="text-sky-400">단 하나의 숫자</strong>만 직접 업데이트합니다. </>}
      />     

        {/* Timeline Section */}
        <section class="px-6 py-20 bg-[#0B1120]">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-bold text-white mb-4">The Evolution of Efficiency</h2>
              <p class="text-slate-400 text-lg">우리는 왜 수많은 선택지를 거쳐 SolidJS에 도달했는가?</p>
            </div>

            <div class="relative border-l-2 border-slate-800 ml-6 md:ml-12 space-y-12">
              
              {/* jQuery */}
              <div class="relative pl-12">
                <div class="timeline-dot bg-slate-600"></div>
                <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                  <span class="text-sm font-mono text-slate-500">2006</span>
                  <h3 class="text-xl font-bold text-slate-400">jQuery</h3>
                </div>
                <p class="text-slate-500">
                  <strong>"DOM 직접 제어의 시대"</strong><br />
                  간단한 웹사이트에는 좋았지만, 데이터가 복잡해지면 코드가 뒤엉키는 '스파게티 코드' 문제가 발생합니다. 대규모 관제 시스템 유지보수에는 부적합했습니다.
                </p>
              </div>

              {/* AngularJS */}
              <div class="relative pl-12">
                <div class="timeline-dot bg-red-900/50"></div>
                <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                  <span class="text-sm font-mono text-slate-500">2010</span>
                  <h3 class="text-xl font-bold text-slate-400">AngularJS</h3>
                </div>
                <p class="text-slate-500">
                  <strong>"양방향 바인딩의 시대"</strong><br />
                  프레임워크의 구조를 갖췄지만, 데이터 변화를 감지하기 위한 'Dirty Checking' 방식이 너무 무거웠습니다. 센서 데이터가 많아지면 브라우저가 느려집니다.
                </p>
              </div>

              {/* React & Vue */}
              <div class="relative pl-12">
                <div class="timeline-dot bg-blue-900/50"></div>
                <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                  <span class="text-sm font-mono text-slate-500">2013-2015</span>
                  <h3 class="text-xl font-bold text-white">React & Vue.js</h3>
                </div>
                <p class="text-slate-400">
                  <strong>"가상 돔(Virtual DOM)의 시대"</strong><br />
                  혁신적이었습니다. 하지만 메모리 상에 가상의 화면을 만들고 비교(Diffing)하는 과정이 필요합니다. 1ms가 급한 스마트팩토리에서는 이 '비교 연산'조차 낭비입니다.
                </p>
              </div>

              {/* SolidJS */}
              <div class="relative pl-12">
                <div class="timeline-dot bg-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
                <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                  <span class="text-sm font-mono text-sky-400">Present</span>
                  <h3 class="text-2xl font-bold text-sky-400">SolidJS (The Compiler)</h3>
                </div>
                <div class="p-6 bg-slate-800/50 border border-sky-500/30 rounded-2xl shadow-lg shadow-sky-900/20">
                  <p class="text-slate-200 leading-relaxed mb-4">
                    <strong>"컴파일러와 반응형의 완성"</strong><br />
                    가상 돔을 버렸습니다. 코드를 미리 컴파일하여, 데이터가 변하면 해당 DOM 노드만 <strong class="text-sky-400">직접(Direct)</strong> 타격합니다. <br />
                    Svelte의 간결함에 React의 유연함을 더해, <strong class="text-white">이론상 가장 빠른 성능</strong>을 구현했습니다.
                  </p>
                  <div class="flex gap-2">
                    <span class="text-xs font-mono bg-sky-500/10 text-sky-300 px-2 py-1 rounded">No VDOM</span>
                    <span class="text-xs font-mono bg-sky-500/10 text-sky-300 px-2 py-1 rounded">Direct Update</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section class="px-6 py-20 bg-slate-900">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover">
                <div class="w-14 h-14 solid-bg-accent rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 solid-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Top Performance</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  JS Framework Benchmark에서 압도적인 1위를 기록했습니다. 무거운 런타임 없이 바닐라 JS에 근접한 속도를 냅니다.
                </p>
              </div>

              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover">
                <div class="w-14 h-14 solid-bg-accent rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 solid-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Fine-Grained Reactivity</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  컴포넌트 전체를 다시 그리지 않습니다. 텍스트 노드, 스타일 속성 등 <strong class="text-white">변경된 부분만</strong> 정밀하게 타격하여 수정합니다.
                </p>
              </div>

              <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 card-hover">
                <div class="w-14 h-14 solid-bg-accent rounded-xl flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 solid-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Small Bundle Size</h3>
                <p class="text-slate-400 text-base leading-relaxed">
                  컴파일 후 크기가 매우 작습니다. 네트워크 환경이 좋지 않은 공장 내부망에서도 즉각적인 로딩 속도를 보장합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section class="px-6 py-24 bg-[#0B1120]">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-20">
              <h2 class="text-4xl font-bold text-white mb-6">Why SolidJS?</h2>
              <p class="text-slate-400 text-lg">전 세계가 사랑하는 React, 혁신적인 Svelte.<br />하지만 극한의 성능이 필요한 제조 현장에서는 '최적의 도구'가 다릅니다.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div class="p-8 border border-slate-800 rounded-2xl opacity-60 hover:opacity-100 transition-opacity">
                <div class="flex items-center mb-6">
                  <span class="text-2xl font-bold text-slate-500">vs React</span>
                </div>
                <div class="space-y-4 text-slate-400">
                  <p class="leading-relaxed">
                    "데이터 하나가 변하면, 가상 돔(Virtual DOM)을 만들고 전체 트리를 비교(Diffing)합니다. 일반 웹엔 충분하지만, 실시간 관제 시스템에선 이 비교 연산조차 낭비입니다."
                  </p>
                  <div class="bg-slate-800/50 p-4 rounded text-sm font-mono text-red-400">
                    Warning: High CPU usage on rapid updates.
                  </div>
                </div>
              </div>

              <div class="p-8 border-2 border-sky-500/30 bg-slate-800/30 rounded-2xl shadow-2xl shadow-sky-500/10">
                <div class="flex items-center mb-6">
                  <span class="text-2xl font-bold text-sky-400">SolidJS Way</span>
                </div>
                <div class="space-y-4 text-slate-300">
                  <p class="leading-relaxed">
                    "컴포넌트는 <strong class="text-white">오직 한 번만</strong> 실행됩니다. 그 이후엔 데이터와 연결된 화면 조각만 구독하여, 값이 변하는 순간 그곳만 즉시 업데이트합니다."
                  </p>
                  <div class="bg-slate-800 p-4 rounded text-sm font-mono text-green-400">
                    Status: Optimal Performance. Zero Waste.
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-slate-900 rounded-2xl p-8 border border-slate-700 flex flex-col md:flex-row items-center gap-8">
              <div class="md:w-1/3">
                <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span class="text-orange-400">vs Svelte</span>
                  <span class="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded-full border border-slate-600">The Other Compiler</span>
                </h3>
                <p class="text-slate-400 text-sm">Svelte 역시 가상 돔이 없는 훌륭한 도구입니다.</p>
              </div>
              <div class="md:w-2/3 border-l border-slate-700 pl-0 md:pl-8 pt-4 md:pt-0">
                <p class="text-slate-300 leading-relaxed mb-4">
                  "Svelte는 훌륭하지만, <strong>반응성이 컴포넌트 내부에 묶여 있습니다.</strong><br />
                  SolidJS는 <strong>JSX를 사용하여 TypeScript 호환성</strong>이 더 뛰어나며, 컴포넌트 경계를 넘어 데이터(Signal) 단위로 작동하는 <strong>'Fine-Grained Reactivity'</strong> 덕분에 복잡한 대시보드에서 더 예측 가능한 성능을 보여줍니다."
                </p>
                <div class="flex gap-2">
                  <span class="text-xs font-mono bg-orange-500/10 text-orange-400 px-2 py-1 rounded">Svelte: Great DX</span>
                  <span class="text-xs font-mono bg-sky-500/10 text-sky-400 px-2 py-1 rounded">Solid: Better TS & Raw Speed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code/Primitives Section */}
        <section class="px-6 py-24 bg-slate-900 border-t border-slate-800">
          <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold text-white mb-6">Reactive Primitives</h2>
              <p class="text-slate-400 text-lg mb-6">
                SolidJS의 <code class="bg-slate-800 px-2 py-1 rounded text-sky-400">createSignal</code>은 Rust 백엔드에서 오는 Tauri 이벤트와 완벽하게 결합됩니다.
              </p>
              <ul class="space-y-4 text-slate-400">
                <li class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Rust에서 센서 데이터 수신 (WebSocket/Serial)</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Tauri가 프론트엔드로 이벤트 방출 (Emit)</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>SolidJS Signal이 UI를 즉시 갱신</span>
                </li>
              </ul>
            </div>
            
            {/* Mock Code Block */}
            <div class="md:w-1/2 w-full">
              <div class="bg-[#0B1120] p-6 rounded-xl border border-slate-700 shadow-lg font-mono text-sm leading-relaxed overflow-x-auto">
                <div class="flex gap-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p><span class="text-purple-400">const</span> [temp, setTemp] = <span class="text-yellow-300">createSignal</span>(0);</p>
                <p>&nbsp;</p>
                <p><span class="text-slate-500">// Listen to Rust backend</span></p>
                <p><span class="text-yellow-300">listen</span>(<span class="text-green-300">'sensor-data'</span>, (e) ={">"} {"{"}</p>
                <p class="pl-4"><span class="text-slate-500">// Updates DOM directly, no diffing</span></p>
                <p class="pl-4"><span class="text-blue-400">setTemp</span>(e.payload.value);</p>
                <p>{"}"});</p>
                <p>&nbsp;</p>
                <p><span class="text-purple-400">return</span> (</p>
                <p class="pl-4">&lt;<span class="text-red-400">div</span>&gt;</p>
                <p class="pl-8">Current Temperature:</p>
                {/* JSX에서 중괄호가 해석되지 않도록 처리했습니다 */}
                <p class="pl-8 text-sky-400">{"{"}temp(){"}"}°C</p>
                <p class="pl-4">&lt;/<span class="text-red-400">div</span>&gt;</p>
                <p>);</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}