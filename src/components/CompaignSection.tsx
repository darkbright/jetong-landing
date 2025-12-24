import { JSX, mergeProps } from "solid-js";

interface CampaignProps {
  theme: "red" | "green" | "indigo";
  tag: string;
  title: JSX.Element;
  description: JSX.Element;
  ctaText: string;
  ctaLink: string;
  footnote: string;
}

export default function CampaignSection(props: CampaignProps) {
  // 테마별 스타일 매핑
  const styles = {
    red: {
      border: "border-red-900/30",
      gradient: "from-red-900/20",
      dot: "bg-red-500",
      tagText: "text-red-400",
      button: "bg-red-600 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]",
    },
    green: {
      border: "border-green-900/30",
      gradient: "from-green-900/20",
      dot: "bg-green-500",
      tagText: "text-green-400",
      button: "bg-green-700 hover:bg-green-600 hover:shadow-[0_0_30px_rgba(21,128,61,0.4)]",
    },
    indigo: {
      border: "border-indigo-900/30",
      gradient: "from-indigo-900/20",
      dot: "bg-indigo-500",
      tagText: "text-indigo-400",
      button: "bg-indigo-700 hover:bg-indigo-600 hover:shadow-[0_0_30px_rgba(67,56,202,0.4)]",
    },
  }[props.theme];

  return (
    <section class={`relative w-full overflow-hidden bg-slate-900 border-y ${styles.border}`}>
      <div class={`absolute inset-0 bg-gradient-to-r ${styles.gradient} via-transparent to-slate-900/50 pointer-events-none`}></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="flex-1 text-center md:text-left z-10">
            <div class="inline-flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span class={`animate-pulse w-2 h-2 rounded-full ${styles.dot}`}></span>
              <span class={`${styles.tagText} font-bold tracking-wider text-sm uppercase`}>
                {props.tag}
              </span>
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {props.title}
            </h2>

            <div class="text-slate-400 text-lg">{props.description}</div>
          </div>

          <div class="flex-shrink-0 z-10 w-full md:w-auto text-center">
            {/* SolidStart에서는 A 태그를 사용하여 클라이언트 사이드 라우팅을 수행합니다 */}
            <a
              href={props.ctaLink}
              class={`group relative flex items-center justify-center w-full md:w-auto px-8 py-5 text-lg font-bold text-white ${styles.button} rounded-xl overflow-hidden transition-all duration-300`}
            >
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span class="relative flex items-center gap-2">
                {props.ctaText}
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </a>
            <p class="mt-3 text-xs text-slate-500">{props.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}