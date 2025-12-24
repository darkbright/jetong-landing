import { Component, createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const Navbar: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const location = useLocation();

  const activeClass = (path: string) =>
    location.pathname.startsWith(path)
      ? "text-blue-600 font-bold"
      : "text-gray-600 hover:text-blue-600 font-medium";

  // 모바일 메뉴 클릭 시 메뉴창 닫기
  const closeMenu = () => setIsOpen(false);

  return (
    <nav class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          {/* 로고 */}
          <div class="flex-shrink-0 flex items-center">
            <A
              href="/"
              class="text-2xl font-black text-gray-900 tracking-tighter"
              onClick={closeMenu}
            >
              Jetong<span class="text-blue-600">AI</span>
            </A>
          </div>

          {/* 데스크톱 메뉴 */}
          <div class="hidden md:flex space-x-8">
            <A href="/solution" class={activeClass("/solution")}>
              Solution
            </A>
            <A href="/product" class={activeClass("/product")}>
              Product
            </A>
            <A href="/tech" class={activeClass("/tech")}>
              Technology
            </A>
            <A href="/programs" class={activeClass("/programs")}>
              Programs
            </A>

            <A
              href="/contact"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm"
            >
              문의하기
            </A>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <div class="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen())}
              class="text-gray-600 p-2 hover:bg-gray-100 rounded-md focus:outline-none"
              aria-label={isOpen() ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isOpen()}
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={
                    isOpen()
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen() && (
        <div class="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-50">
          <div class="px-4 pt-2 pb-4 space-y-1">
            <A
              href="/solution"
              onClick={closeMenu}
              class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Solution
            </A>
            <A
              href="/product"
              onClick={closeMenu}
              class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Product
            </A>
            <A
              href="/tech"
              onClick={closeMenu}
              class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Technology
            </A>
            <A
              href="/programs"
              onClick={closeMenu}
              class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Programs
            </A>

            <div class="pt-4 mt-2 border-t border-gray-100">
              <A
                href="/contact"
                onClick={closeMenu}
                class="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-md"
              >
                문의하기
              </A>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
