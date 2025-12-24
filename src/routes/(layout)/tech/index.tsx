import { A } from "@solidjs/router";
import styles from "./index.module.css";
import HeroSection from "~/components/layout/HeroSection";
import CTASection from "~/components/layout/CTA";

export default function TechIndex() {
  return (
    <div class="min-h-screen flex flex-col">

      {/* 공통 히어로 컴포넌트 사용 */}
      <HeroSection
        badgeText="Uncompromising Tech Stack"
        title={<> 현장을 지탱하는<br /> <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-400">타협 없는 핵심 기술</span> </>}
        description={<> 제조 현장은 0.1초의 지연도, 한 번의 멈춤도 허용되지 않습니다.<br /> 그래서 제통재는 쉽고 편한 길 대신, <strong>가장 빠르고 안전한 길</strong>을 택했습니다. </>}
      />      

      {/* 2. Rust Section */}
      <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
              <div class="md:w-1/2">
                  <div class="text-orange-600 font-bold tracking-wider uppercase mb-2">Back-end / Firmware</div>
                  <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Rust<span class="text-gray-400 text-2xl font-normal ml-2">메모리 안전성의 기준</span></h2>
                  <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                      C/C++의 고성능을 유지하면서도, 메모리 오류를 원천 차단하는 유일한 언어입니다. 
                      제통재의 모든 엣지 디바이스와 서버는 Rust로 작성되어, <strong>'Garbage Collection(GC)'으로 인한 멈춤 현상(Stop-the-world)이 절대 발생하지 않습니다.</strong>
                  </p>
                  <ul class="space-y-3 text-gray-700 mb-8">
                      <li class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>예기치 않은 시스템 셧다운 0% 도전</li>
                      <li class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>저사양 하드웨어에서도 최고의 퍼포먼스</li>
                      <li class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>동시성 처리에 최적화된 데이터 수집 엔진</li>
                  </ul>
                  
                  {/* Rust 상세 보기 버튼 추가 */}
                  <A href="/tech/rust" class="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group">
                      Rust 기술 상세 보기
                      <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                  </A>
              </div>
              <div class="md:w-1/2 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div class="rounded-lg bg-gray-900 p-4 font-mono text-sm text-gray-300 shadow-inner overflow-x-auto">
                      <div class="flex gap-2 mb-2"><span class="w-3 h-3 rounded-full bg-red-500"></span><span class="w-3 h-3 rounded-full bg-yellow-500"></span><span class="w-3 h-3 rounded-full bg-green-500"></span></div>
                      <p><span class="text-pink-400">fn</span> <span class="text-blue-400">monitor_system</span>() -&gt; Result&lt;(), Error&gt; &#123;</p>
                      <p class="pl-4"><span class="text-gray-500">// Zero-cost abstractions</span></p>
                      <p class="pl-4"><span class="text-pink-400">let</span> data = sensor.<span class="text-blue-400">read_safe</span>().await?;</p>
                      <p class="pl-4"><span class="text-pink-400">match</span> data &#123;</p>
                      <p class="pl-8">Ok(val) =&gt; control_plc(val),</p>
                      <p class="pl-8">Err(e) =&gt; <span class="text-yellow-400">log::error!</span>(<span class="text-green-300">"Safe Error Handling"</span>),</p>
                      <p class="pl-4">&#125;</p>
                      <p>&#125;</p>
                  </div>
                  <p class="text-center text-sm text-gray-500 mt-4">안전하지 않은 코드는 컴파일조차 되지 않습니다.</p>
              </div>
          </div>
      </section>

      {/* 3. Tauri Section */}
      <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-12">
              <div class="md:w-1/2">
                  <div class="text-teal-600 font-bold tracking-wider uppercase mb-2">Application Engine</div>
                  <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Tauri<span class="text-gray-400 text-2xl font-normal ml-2">극강의 가벼움</span></h2>
                  <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                      Electron 기반의 무거운 공장 프로그램은 이제 잊으십시오. 
                      Tauri는 OS의 웹 렌더러를 직접 사용하여, <strong>설치 파일 크기가 1/20 수준</strong>으로 작고 메모리 사용량이 획기적으로 적습니다. 
                      구형 윈도우 PC에서도 쾌적하게 돌아갑니다.
                  </p>
                  <div class="space-y-4 font-medium text-sm mb-8">
                      <div>
                          <div class="flex justify-between mb-1"><span>Electron App (Others)</span><span>100MB+</span></div>
                          <div class="w-full bg-gray-300 rounded-full h-4"><div class="bg-gray-500 h-4 rounded-full" style={{width: "100%"}}></div></div>
                      </div>
                      <div>
                          <div class="flex justify-between mb-1"><span class="text-teal-700 font-bold">Jetong App (Tauri)</span><span class="text-teal-700 font-bold">~3MB</span></div>
                          <div class="w-full bg-teal-100 rounded-full h-4"><div class="bg-teal-500 h-4 rounded-full" style={{width: "5%"}}></div></div>
                      </div>
                  </div>

                  {/* Tauri 상세 보기 버튼 추가 */}
                  <A href="/tech/tauri" class="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors group">
                      Tauri 기술 상세 보기
                      <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                  </A>
              </div>
              <div class="md:w-1/2 flex justify-center">
                  <div class="w-full h-64 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center p-6">
                      <div class="text-center">
                          {/* 이미지 대신 아이콘 사용 */}
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-teal-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div class="mt-2">
                              <p class="text-gray-500 font-bold">Lightweight Rust Backend <br/>+ Native Webview</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. SolidJS Section */}
      <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
              <div class="md:w-1/2">
                  <div class="text-blue-600 font-bold tracking-wider uppercase mb-2">Frontend Interface</div>
                  <h2 class="text-4xl font-extrabold text-gray-900 mb-6">SolidJS<span class="text-gray-400 text-2xl font-normal ml-2">압도적인 반응 속도</span></h2>
                  <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                      가상 돔(Virtual DOM)이 없는 진정한 리액티브 프로그래밍. 
                      데이터가 변하는 그 부분만 콕 집어 업데이트합니다. 수천 개의 센서 데이터가 쏟아져도 
                      <strong>브라우저 렉(Lag) 없이 부드러운 대시보드</strong>를 경험할 수 있습니다.
                  </p>
                  <div class="grid grid-cols-2 gap-4 mb-8">
                      <div class="p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div class="text-2xl font-bold text-blue-600 mb-1">No V-DOM</div>
                          <div class="text-sm text-gray-600">불필요한 비교 연산 제거</div>
                      </div>
                      <div class="p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div class="text-2xl font-bold text-blue-600 mb-1">Fine-Grained</div>
                          <div class="text-sm text-gray-600">입자 단위의 정밀한 업데이트</div>
                      </div>
                  </div>

                  {/* SolidJS 상세 보기 버튼 추가 */}
                  <A href="/tech/solidjs" class="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group">
                      SolidJS 기술 상세 보기
                      <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                  </A>
              </div>
              <div class="md:w-1/2 flex justify-center">
                  <div class="relative w-full h-64 bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center border border-gray-700">
                      <div class="absolute inset-0 bg-[url('https://www.solidjs.com/assets/logo.123b04bc.svg')] bg-no-repeat bg-center opacity-10 blur-sm bg-cover"></div>
                      <div class="z-10 text-center">
                          <span class="text-6xl font-black text-white block mb-2">High FPS</span>
                          <span class="text-blue-400 font-medium">Real-time Data Visualization</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. CTO Note */}
      <section class="py-20 bg-gray-900 text-white border-t border-gray-800">
          <div class="max-w-4xl mx-auto px-4 text-center">
              <svg class="w-12 h-12 text-gray-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H11.983C10.8784 16 9.983 16.8954 9.983 18L9.983 21H5V13C5 12.4477 5.44772 12 6 12C6.55228 12 7 12.4477 7 13V19H8.983L8.983 12C8.983 10.3431 10.3261 9 11.983 9H12.017C13.6739 9 15.017 10.3431 15.017 12L15.017 19H17V13C17 12.4477 17.4477 12 18 12C18.5523 12 19 12.4477 19 13V21H14.017ZM12 4C9.23858 4 7 6.23858 7 9C7 10.0575 7.32896 11.0379 7.89249 11.8453C7.39169 11.2335 6.74418 10.7449 6 10.4556C4.26915 9.78207 3 8.0583 3 6C3 3.23858 5.23858 1 8 1C9.69536 1 11.2036 1.84279 12.128 3.14175C13.0525 1.84279 14.5607 1 16.2561 1C19.0175 1 21.2561 3.23858 21.2561 6C21.2561 8.0583 19.9869 9.78207 18.2561 10.4556C17.5119 10.7449 16.8644 11.2335 16.3636 11.8453C16.9271 11.0379 17.2561 10.0575 17.2561 9C17.2561 6.23858 15.0175 4 12.2561 4H12Z"></path></svg>
              <h3 class="text-2xl font-bold mb-4">"왜 쉬운 길을 놔두고 어려운 기술을 쓰냐고 묻습니다."</h3>
              <blockquote class="text-xl text-gray-400 italic mb-8">
                  "개발자가 조금 고생하면, 사용자는 평생 편안합니다.<br />
                  우리가 Rust와 Tauri를 고집하는 이유는 단 하나입니다.<br />
                  고객의 공장이 단 1초도 멈추지 않아야 하기 때문입니다."
              </blockquote>
              <div class="text-sm font-bold text-blue-400 tracking-wider">ENGINEERING PHILOSOPHY</div>
          </div>
      </section>

      <CTASection 
        title="기술력, 눈으로 직접 확인하세요."
        subtitle="초기창업패키지 및 디딤돌 과제와 연계된 맞춤형 도입 상담을 제공합니다."
        primaryAction={{ label: "제품 상세 보기", href: "/product" }}
        secondaryAction={{ label: "기술 미팅 신청", href: "/contact" }}
      />          
    </div>

    
  );
}