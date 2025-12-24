import { Component } from "solid-js";
import { A } from "@solidjs/router";

const Footer: Component = () => {
  return (
    <footer class="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span class="text-xl font-bold text-white">JetongAI</span>
          <p class="text-sm mt-2 leading-relaxed">
            Rust & Tauri 기반의 고성능 산업용 IoT 솔루션.<br />
            데이터로 세상을 제어하고 통일하여 가치를 만듭니다.
          </p>
        </div>

        <div>
          <h4 class="text-white text-sm font-bold uppercase mb-4">
            Quick Links
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <A href="/solution/power-peak" class="hover:text-blue-400">
                전력 피크 알리미
              </A>
            </li>
            <li>
              <A href="/solution/monitoring" class="hover:text-blue-400">
                가동률 모니터링
              </A>
            </li>
            <li>
              <A href="/solution/haccp" class="hover:text-blue-400">
                Smart HACCP
              </A>
            </li>
            <li>
              <A href="/solution/safety" class="hover:text-blue-400">
                안전관리 시스템
              </A>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white text-sm font-bold uppercase mb-4">
            Contact
          </h4>
          <p class="text-sm">Email: contact@jetongai.com</p>
          <p class="text-xs mt-4 text-gray-500">
            Copyright © 2025 JetongAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
