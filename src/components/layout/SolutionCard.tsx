import { JSX } from "solid-js";
import { A } from "@solidjs/router";

// 테마 타입 정의
type ThemeColor = 'blue' | 'green' | 'purple' | 'red';

interface SolutionCardProps {
  icon: JSX.Element;
  badge: string;
  title: string;
  description: string;
  href: string;
  themeColor: ThemeColor;
}

const SolutionCard = (props: SolutionCardProps) => {
  // 테마별 클래스 맵 (TypeScript의 Record 사용)
  const themeClasses: Record<ThemeColor, { 
    iconBg: string; 
    iconText: string; 
    badge: string; 
    titleHover: string; 
    link: string; 
  }> = {
    blue: {
      iconBg: "bg-blue-50 group-hover:bg-blue-600",
      iconText: "text-blue-600 group-hover:text-white",
      badge: "bg-blue-100 text-blue-800",
      titleHover: "group-hover:text-blue-600",
      link: "text-blue-600 hover:text-blue-800"
    },
    green: {
      iconBg: "bg-green-50 group-hover:bg-green-600",
      iconText: "text-green-600 group-hover:text-white",
      badge: "bg-green-100 text-green-800",
      titleHover: "group-hover:text-green-600",
      link: "text-green-600 hover:text-green-800"
    },
    purple: {
      iconBg: "bg-purple-50 group-hover:bg-purple-600",
      iconText: "text-purple-600 group-hover:text-white",
      badge: "bg-purple-100 text-purple-800",
      titleHover: "group-hover:text-purple-600",
      link: "text-purple-600 hover:text-purple-800"
    },
    red: {
      iconBg: "bg-red-50 group-hover:bg-red-600",
      iconText: "text-red-600 group-hover:text-white",
      badge: "bg-red-100 text-red-800",
      titleHover: "group-hover:text-red-600",
      link: "text-red-600 hover:text-red-800"
    }
  };

  const style = () => themeClasses[props.themeColor];

  return (
    <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-200 group flex flex-col h-full">
      <div class="flex items-center justify-between mb-6">
        <div class={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${style().iconBg}`}>
          <svg class={`w-8 h-8 transition-colors duration-300 ${style().iconText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {props.icon}
          </svg>
        </div>
        <span class={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full ${style().badge}`}>
          {props.badge}
        </span>
      </div>
      
      <h3 class={`text-2xl font-bold text-gray-900 mb-3 transition-colors ${style().titleHover}`}>
        {props.title}
      </h3>
      
      <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
        {props.description}
      </p>
      
      <A href={props.href} class={`inline-flex items-center font-bold transition-colors mt-auto ${style().link}`}>
        자세히 보기
        <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </A>
    </div>
  );
};

export default SolutionCard;