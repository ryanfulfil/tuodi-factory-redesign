/**
 * Tuodi Electronics Enterprise Interactive Script
 * High-precision sensor visualization, RFQ calculator, bilingual engine, and factory tour
 */

// --- 1. TRANSLATION DICTIONARY ---
const i18n = {
  en: {
    nav_products: "Products & Sensors",
    nav_oem: "OEM / ODM Pipeline",
    nav_factory: "Factory & Labs",
    nav_tech: "Sensor Tech",
    nav_certs: "Patents & Certs",
    nav_rfq: "Instant RFQ / Samples",
    hero_badge: "ISO 9001:2015 CERTIFIED • 18+ YEARS PRECISION HARDWARE",
    hero_title: "Intelligent Sensor Lighting & Precision OEM/ODM Manufacturing",
    hero_desc: "Powering global smart home brands with tier-1 PIR infrared, 5.8GHz/24GHz Doppler radar sensors, cabinet lighting, and acoustic wellness devices. 6,500m² modernized manufacturing base in Shenzhen & Zhaoqing.",
    btn_rfq: "Launch Instant RFQ",
    btn_tour: "Virtual Factory Audit",
    metric_area: "Plant & Lab Area",
    metric_daily: "Daily Production Capacity",
    metric_patents: "Global & Domestic Patents",
    metric_years: "Precision Manufacturing",
    sec_tech_title: "Proprietary Sensor & Optical Architecture",
    sec_tech_subtitle: "Ultra-low power micro-radar, dual-element pyroelectric PIR, and precision Fresnel optics engineered for zero false triggers.",
    sec_products_title: "Enterprise Product Catalog & Sensor Modules",
    sec_products_subtitle: "Industrial grade, CE/FCC/RoHS certified, turnkey customizable for global brands and electrical contractors.",
    sec_oem_title: "Turnkey OEM / ODM Manufacturing Pipeline",
    sec_oem_subtitle: "From industrial CAD concept to mass production delivery in as fast as 25 business days.",
    sec_factory_title: "6,500m² Modernized Production & QA Cleanrooms",
    sec_factory_subtitle: "Equipped with Yamaha high-speed SMT lines, Everfine optical integrating spheres, and 48-hour burn-in thermal chambers.",
    sec_trust_title: "Global Compliance, Certifications & Patent Vault",
    sec_trust_subtitle: "Fully certified for North American, European, Japanese, and global electrical standards.",
    tab_all: "All Hardware",
    tab_lighting: "Sensor Lighting",
    tab_switch: "Motion Switches",
    tab_wellness: "Consumer Tech",
    tab_energy: "Energy Management",
    rfq_modal_title: "Enterprise RFQ & Custom Sample Dispatch",
    rfq_modal_sub: "Direct factory pricing with BOM review, custom laser engraving, and DDP air/ocean shipping.",
    submit_rfq: "Submit Request for Quotation (Fast 2h Response)",
    footer_tagline: "Shenzhen Tuodi Electronics Co., Ltd. • High-Tech Enterprise",
    footer_addr: "Bldg 29, Northern Yongfa Tech Park, Shajing, Bao'an District, Shenzhen, China",
    footer_rights: "© 2005-2026 Shenzhen Tuodi Electronics Co., Ltd. All Rights Reserved. ICP: Yue ICP Bei 20009965"
  },
  cn: {
    nav_products: "产品与传感器",
    nav_oem: "OEM/ODM定制",
    nav_factory: "智能工厂与实验室",
    nav_tech: "核心传感技术",
    nav_certs: "专利与资质",
    nav_rfq: "询价 / 免费打样",
    hero_badge: "国家高新技术企业 • ISO 9001:2015 认证 • 18年精密制造",
    hero_title: "智能感应照明与高精密电子 OEM/ODM 智造基地",
    hero_desc: "深耕人体红外PIR、5.8G/24G微波雷达感应、超薄橱柜照明与声学健康消费电子。深圳宝安与肇庆两大制造基地，超6,500㎡现代化洁净产线，服务全球知名品牌与跨境跨境龙头。",
    btn_rfq: "立即获取出厂报价与样品",
    btn_tour: "360° 线上验厂",
    metric_area: "自有产线基地",
    metric_daily: "日均标准化产能",
    metric_patents: "国内外发明/实用专利",
    metric_years: "专注传感与智能控制",
    sec_tech_title: "拓迪自主研发：核心传感与光学架构",
    sec_tech_subtitle: "微安级超低功耗微波雷达、双元高灵敏PIR热释电红外、高透菲涅尔光学阵列，实现零误触、毫秒级疾速响应。",
    sec_products_title: "旗舰产品矩阵与传感器模块",
    sec_products_subtitle: "工业级品质，全系通过 CE / FCC / RoHS 认证，支持深度私模定制、参数调校与贴牌生产。",
    sec_oem_title: "一站式 OEM / ODM 协同智造全流程",
    sec_oem_subtitle: "从工业外观ID设计、结构开模、PCBA贴片到成品量产，最快25个工作日交付全球。",
    sec_factory_title: "6,500㎡ 现代化生产基地与高精度实验室",
    sec_factory_subtitle: "配备雅马哈高速SMT贴片机、远方高精度积分球光谱仪、48小时全负载高低温老化房与ESD防静电洁净车间。",
    sec_trust_title: "国际权威认证、质量体系与专利壁垒",
    sec_trust_subtitle: "严苛品控，满足欧美、日本等全球主要市场电气安全与环保准入标准。",
    tab_all: "全部硬件",
    tab_lighting: "智能感应灯具",
    tab_switch: "微波/红外感应开关",
    tab_wellness: "声学与健康电子",
    tab_energy: "酒店与楼宇节能",
    rfq_modal_title: "工厂直通快速询价与工程样品申领",
    rfq_modal_sub: "源头工厂直接对接工程总监与外贸采购，提供BOM审核、激光标刻、定制彩盒及全球DDP物流方案。",
    submit_rfq: "提交询价意向（2小时内极速响应）",
    footer_tagline: "深圳市拓迪电子有限公司 • 国家级高新技术企业",
    footer_addr: "中国广东省深圳市宝安区沙井街道共和社区第一工业区北方永发科技园29栋3楼",
    footer_rights: "© 2005-2026 深圳市拓迪电子有限公司 版权所有 备案号：粤ICP备20009965号"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
  
  // Toggle active button style
  const btnEn = document.getElementById('lang-btn-en');
  const btnCn = document.getElementById('lang-btn-cn');
  if (btnEn && btnCn) {
    if (lang === 'en') {
      btnEn.className = "px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40 text-xs";
      btnCn.className = "px-2 py-1 rounded text-slate-400 hover:text-white text-xs";
    } else {
      btnCn.className = "px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40 text-xs";
      btnEn.className = "px-2 py-1 rounded text-slate-400 hover:text-white text-xs";
    }
  }
  
  // Re-render products to update texts
  const currentTab = document.querySelector('.prod-tab-btn.bg-cyan-500\\\\/20') || document.querySelector('.prod-tab-btn');
  const category = currentTab ? currentTab.dataset.category : 'all';
  filterProducts(category);
}

// --- 2. PRODUCT DATABASE & MODAL ---
const products = [
  {
    id: "td-sl-01",
    category: "lighting",
    nameEn: "Ultra-Thin Tri-Color Magnetic Motion Cabinet Light",
    nameCn: "超薄三色温磁吸人体感应橱柜灯",
    code: "TD-SL-8022",
    badge: "Bestseller Private Mold",
    leadTime: "10-15 Days",
    moq: "500 pcs",
    specs: {
      "Detection Angle": "120° Wide-Angle PIR",
      "Sensor Range": "0 - 3.5 Meters",
      "Battery Capacity": "900mAh - 2200mAh Li-Po",
      "Thickness": "9.0 mm Ultra-slim Aircraft Aluminum",
      "Color Temp": "3000K Warm / 4500K Neutral / 6500K Cool",
      "Standby Current": "< 18 uA (180 Days Standby)",
      "Certifications": "CE, FCC, RoHS, PSE, UN38.3"
    },
    descEn: "Designed for premium under-cabinet and wardrobe lighting with seamless edge-lit diffuse optics and dual auto/manual modes.",
    descCn: "专为高端橱柜、衣帽间打造，侧发光超薄全面屏，磁吸免打孔安装，三档色温随心切换。",
    img: "https://www.tuodi.com/static/upload/image/20240608/1717815887230502.jpg"
  },
  {
    id: "td-sw-02",
    category: "switch",
    nameEn: "360° Ceiling Mount 5.8GHz Microwave Doppler Sensor Switch",
    nameCn: "360° 吸顶式 5.8GHz 高频微波雷达感应开关",
    code: "TD-MW-360B",
    badge: "Industrial Grade",
    leadTime: "12-18 Days",
    moq: "1,000 pcs",
    specs: {
      "Operating Frequency": "5.8 GHz ISM band (CW radar)",
      "Max Load Capacity": "1200W Incandescent / 300W LED",
      "Detection Area": "1 - 8m Radius (Adjustable)",
      "Time Delay": "10s to 30min (DIP Switch)",
      "Lux Threshold": "2 - 2000 Lux Adjustable",
      "Operating Voltage": "AC 85 - 265V 50/60Hz",
      "Certifications": "CE-EMC, CE-LVD, RoHS, UKCA"
    },
    descEn: "High-penetration Doppler radar sensor capable of detecting motion through non-metallic walls, wood, and glass for smart corridors and parking complexes.",
    descCn: "高灵敏度高频微波多普勒雷达，可穿透非金属介质，专为地下车库、商业楼宇、智能走廊设计。",
    img: "https://www.tuodi.com/static/upload/image/20240608/1717817190641560.jpg"
  },
  {
    id: "td-wn-03",
    category: "wellness",
    nameEn: "Clinical-Grade Bio-Acoustic White Noise Sound Machine",
    nameCn: "自然情景多音频生物声学白噪音睡眠仪",
    code: "TD-WN-901",
    badge: "Amazon Top Tier ODM",
    leadTime: "15-20 Days",
    moq: "1,000 pcs",
    specs: {
      "Sound Profiles": "28 High-Fidelity Lossless Tracks",
      "Speaker Driver": "52mm 5W Rare-Earth Neodymium",
      "Night Light": "RGB 7-Color Breathing Mood Lamp",
      "Timer Modes": "30 / 60 / 90 min Auto Shutoff",
      "Memory Function": "Retains volume, sound & light settings",
      "Interface": "Type-C 5V/1A Fast Charge",
      "Certifications": "FCC, CE, RoHS, Prop65"
    },
    descEn: "Engineered with patented soothing acoustic wave algorithms for deep sleep therapy, nursery soothing, and focused office environments.",
    descCn: "内置28种母婴及深睡级无损自然原声，配备柔光七彩呼吸小夜灯，支持无缝循环声学算法。",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "td-ws-04",
    category: "wellness",
    nameEn: "0.25s Instant Response Smart Touchless Tap Controller",
    nameCn: "0.25秒超快响应智能感应节水器",
    code: "TD-WS-401",
    badge: "Patented Hydro-Engine",
    leadTime: "10-14 Days",
    moq: "500 pcs",
    specs: {
      "Response Time": "0.25 Seconds Dual Sensor",
      "Water Efficiency": "Level 1 Water Efficiency (0.07L/s)",
      "Battery Life": "Up to 9 Months on Single Charge",
      "Detection Modes": "Bottom Instant / Side Continuous (3min)",
      "Connector Adapters": "M20 / M22 / M24 Universal Kit",
      "Waterproof Level": "IPX6 Splash-proof",
      "Certifications": "CE, RoHS, WaterSense Compliance"
    },
    descEn: "Transforms standard kitchen and bathroom faucets into smart infrared touchless fixtures. Built-in overflow safety shutdown.",
    descCn: "双感应区设计（底部即开即停/侧面长出水），通用6款转接头，IPX6级防水，打造零接触洁净生活。",
    img: "https://www.tuodi.com/static/upload/image/20240608/1717815907758085.jpg"
  },
  {
    id: "td-ec-05",
    category: "energy",
    nameEn: "Hotel Intelligent High-Frequency RFID Card Power Switch",
    nameCn: "酒店智能高频RFID专用插卡取电节能开关",
    code: "TD-KC-505",
    badge: "Hospitality Standard",
    leadTime: "7-12 Days",
    moq: "1,000 pcs",
    specs: {
      "Supported Card Type": "Mifare-1 (13.56MHz) / Temic (125kHz)",
      "Rated Current": "30A / 40A Heavy Load Relay",
      "Power Rating": "Max 6600W / 8800W",
      "Delay Time": "15 Seconds Intelligent Delayed Off",
      "Housing Material": "Fireproof PC V0 Grade",
      "Indicator": "LED Blue Ambient Locator Light",
      "Certifications": "CE, ISO9001, GB16915"
    },
    descEn: "Recognizes room-specific RFID cards only, preventing ordinary paper/business card bypass, slashing hotel HVAC and lighting power waste by up to 35%.",
    descCn: "专用高频识别卡片，杜绝普通纸片代插，内置30A-40A超大功率继电器，有效节约酒店客房能耗30%以上。",
    img: "https://www.tuodi.com/static/upload/image/20240608/1717815915639912.jpg"
  },
  {
    id: "td-pir-06",
    category: "switch",
    nameEn: "Micro-Miniature PIR Human Infrared Motion Sensor Module",
    nameCn: "微型嵌入式双元热释电PIR红外感应模块",
    code: "TD-MD-08",
    badge: "Direct PCBA Component",
    leadTime: "5-10 Days",
    moq: "2,000 pcs",
    specs: {
      "Supply Voltage": "DC 3.3V - 12V Wide Input",
      "Quiescent Current": "< 12 uA (Ultra-low sleep)",
      "Lens Option": "Micro 10mm / Standard 23mm Fresnel",
      "Trigger Mode": "Repeatable / Non-repeatable",
      "Output Signal": "High/Low 3.3V TTL Level or Open Drain",
      "Detection Angle": "100° Cone Angle",
      "Certifications": "RoHS, REACH"
    },
    descEn: "Compact turnkey sensor PCBA module for integration into smart mirrors, cabinet strips, solar garden lights, and IoT appliances.",
    descCn: "体积小巧、功耗极低，支持定制PCB尺寸与引脚定义，广泛适配智能卫浴镜、太阳能灯具及IoT物联设备。",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

function filterProducts(category) {
  const container = document.getElementById('product-grid');
  if (!container) return;
  
  // Highlight active tab
  document.querySelectorAll('.prod-tab-btn').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.className = "prod-tab-btn px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/50 text-sm transition-all";
    } else {
      btn.className = "prod-tab-btn px-4 py-2 rounded-lg bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 text-sm transition-all";
    }
  });

  const filtered = category === 'all' ? products : products.filter(p => p.category === category);
  
  container.innerHTML = filtered.map(p => \`
    <div class="glass-panel rounded-2xl p-6 relative group transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 flex flex-col justify-between overflow-hidden">
      
      <!-- Background Image Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="\${p.img}" alt="\${p.code}" class="w-full h-full object-cover opacity-10 mix-blend-luminosity group-hover:opacity-20 group-hover:scale-105 transition-all duration-700" crossorigin="anonymous" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/95 to-[#0f172a]/70"></div>
      </div>
      
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-4">
          <span class="px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/60 text-xs font-mono font-medium shadow-md">\${p.code}</span>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono backdrop-blur-md flex items-center gap-1">
             <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> \${p.badge}
          </span>
        </div>
        
        <div class="h-44 rounded-xl bg-[#0a1019] border border-slate-700/50 mb-5 relative overflow-hidden group-hover:border-cyan-500/50 transition-all shadow-inner">
          <img src="\${p.img}" alt="\${p.code}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" crossorigin="anonymous" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1019]/90"></div>
          
          <div class="absolute bottom-2 right-2 text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/50">MOQ: \${p.moq}</div>
        </div>

        <h3 class="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors drop-shadow-md">
          \${currentLang === 'en' ? p.nameEn : p.nameCn}
        </h3>
        <p class="text-xs text-slate-300 mb-4 line-clamp-2 leading-relaxed relative z-10">
          \${currentLang === 'en' ? p.descEn : p.descCn}
        </p>
      </div>

      <div class="relative z-10">
        <div class="border-t border-slate-700/80 pt-4 mb-4 grid grid-cols-2 gap-2 text-xs font-mono">
          <div class="text-slate-400">Lead Time: <span class="text-cyan-400 font-semibold">\${p.leadTime}</span></div>
          <div class="text-slate-400 text-right">Factory Direct</div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="openSpecModal('\${p.id}')" class="flex-1 py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-600 backdrop-blur-sm">
            <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>\${currentLang === 'en' ? 'Full Datasheet' : '技术规格书'}</span>
          </button>
          <button onclick="openRfqModal('\${p.code}')" class="py-2 px-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            \${currentLang === 'en' ? 'Sample' : '打样'}
          </button>
        </div>
      </div>
    </div>
  \`).join('');
}

function openSpecModal(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById('spec-modal');
  const modalBody = document.getElementById('spec-modal-content');
  if (!modal || !modalBody) return;

  const specRows = Object.entries(p.specs).map(([k, v]) => \`
    <tr class="border-b border-slate-800/80">
      <td class="py-2.5 px-4 text-xs font-mono text-slate-400 bg-slate-950/40">\${k}</td>
      <td class="py-2.5 px-4 text-xs font-mono text-cyan-300 font-semibold">\${v}</td>
    </tr>
  \`).join('');

  modalBody.innerHTML = \`
    <div class="flex items-start justify-between border-b border-slate-800 pb-4 mb-6">
      <div>
        <div class="flex items-center gap-3 mb-1">
          <span class="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono">\${p.code}</span>
          <span class="text-xs text-amber-400 font-mono">\${p.badge}</span>
        </div>
        <h2 class="text-xl font-bold text-white">\${currentLang === 'en' ? p.nameEn : p.nameCn}</h2>
      </div>
      <button onclick="closeSpecModal()" class="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <h4 class="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono mb-3">Electrical & Physical Specifications</h4>
        <div class="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
          <table class="w-full text-left">
            <tbody>\${specRows}</tbody>
          </table>
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <h4 class="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono mb-3">OEM / ODM Customization Options</h4>
          <div class="space-y-2.5 text-xs text-slate-300">
            <div class="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5">
              <span class="text-cyan-400 font-bold font-mono">01.</span>
              <div><strong class="text-white">Custom Laser Silkscreen:</strong> Add your brand logo, regulatory compliance icons, barcode.</div>
            </div>
            <div class="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5">
              <span class="text-cyan-400 font-bold font-mono">02.</span>
              <div><strong class="text-white">Firmware Tuning:</strong> Adjust trigger sensitivity, daylight lux threshold, hold timer duration.</div>
            </div>
            <div class="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5">
              <span class="text-cyan-400 font-bold font-mono">03.</span>
              <div><strong class="text-white">Retail Packaging:</strong> OEM giftbox, blister clamshell, Amazon FBA master carton palletization.</div>
            </div>
          </div>
        </div>

        <div class="pt-4 mt-4 border-t border-slate-800 flex items-center gap-3">
          <button onclick="downloadDatasheet('\${p.code}')" class="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-all">
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Download Engineering .PDF
          </button>
          <button onclick="closeSpecModal(); openRfqModal('\${p.code}');" class="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-lg shadow-cyan-500/20">
            Request Engineering Sample
          </button>
        </div>
      </div>
    </div>
  \`;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeSpecModal() {
  const modal = document.getElementById('spec-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function downloadDatasheet(code) {
  alert(\`[Engineering Spec Download] Technical Datasheet for model \${code} (Rev 3.2, PDF & Step 3D CAD) has been prepared for download.\`);
}

// --- 3. INTERACTIVE RFQ & SAMPLE CALCULATOR ---
function openRfqModal(prefillCode = "") {
  const modal = document.getElementById('rfq-modal');
  if (!modal) return;
  
  if (prefillCode && document.getElementById('rfq-product')) {
    document.getElementById('rfq-product').value = prefillCode;
  }
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  updateRfqEstimator();
}

function closeRfqModal() {
  const modal = document.getElementById('rfq-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function updateRfqEstimator() {
  const qtySlider = document.getElementById('rfq-qty');
  const qtyDisplay = document.getElementById('rfq-qty-val');
  const unitEst = document.getElementById('rfq-unit-price');
  const leadTimeEst = document.getElementById('rfq-leadtime-est');
  
  if (!qtySlider || !qtyDisplay) return;
  const qty = parseInt(qtySlider.value, 10);
  qtyDisplay.textContent = qty.toLocaleString() + " pcs";
  
  let unitPrice = 0;
  let leadDays = 0;
  
  if (qty < 1000) {
    unitPrice = 4.80;
    leadDays = 12;
  } else if (qty < 5000) {
    unitPrice = 3.65;
    leadDays = 18;
  } else if (qty < 20000) {
    unitPrice = 2.95;
    leadDays = 25;
  } else {
    unitPrice = 2.40;
    leadDays = 30;
  }
  
  if (unitEst) unitEst.textContent = \`$\${unitPrice.toFixed(2)} USD / pc\`;
  if (leadTimeEst) leadTimeEst.textContent = \`\${leadDays} Days (FOB/DDP)\`;
}

function handleRfqSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name ? form.name.value : 'Partner';
  const code = form.product ? form.product.value : 'TD-Hardware';
  
  alert(\`Thank you, \${name}! Your Request for Quotation (RFQ) for \${code} has been routed directly to Shenzhen Tuodi Electronics Senior Engineering & Export Director. Formal quotation and sample dispatch confirmation will be emailed within 2 hours.\`);
  closeRfqModal();
}

// --- 4. INTERACTIVE RADAR & SENSOR VISUALIZER CANVAS ---
let sensorMode = 'radar'; // 'radar', 'pir', 'hydro'
let canvasAnimId = null;

function initSensorCanvas() {
  const canvas = document.getElementById('sensor-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 360;
  }
  resize();
  window.addEventListener('resize', resize);
  
  let mouse = { x: canvas.width / 2, y: canvas.height / 2, active: false };
  
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  let angle = 0;
  let waves = [];

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background Grid
    ctx.strokeStyle = "rgba(0, 240, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    const originX = canvas.width / 2;
    const originY = 60;

    // Draw Sensor Origin Device
    ctx.fillStyle = "#0f172a";
    ctx.strokeStyle = "#00f0ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(originX - 35, originY - 30, 70, 30, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#00f0ff";
    ctx.font = "10px JetBrains Mono";
    ctx.textAlign = "center";
    ctx.fillText(sensorMode.toUpperCase() + " SENSOR", originX, originY - 12);

    // Sensor Field Cone
    const maxRadius = Math.max(canvas.height - 80, 200);
    const spreadAngle = sensorMode === 'radar' ? Math.PI * 0.75 : Math.PI * 0.55;

    ctx.save();
    ctx.translate(originX, originY);
    
    // Radar Arc Lines
    for (let r = 50; r <= maxRadius; r += 50) {
      ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
      ctx.beginPath();
      ctx.arc(0, 0, r, Math.PI / 2 - spreadAngle / 2, Math.PI / 2 + spreadAngle / 2);
      ctx.stroke();
    }

    // Cone Boundaries
    ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(Math.PI / 2 - spreadAngle / 2) * maxRadius, Math.sin(Math.PI / 2 - spreadAngle / 2) * maxRadius);
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(Math.PI / 2 + spreadAngle / 2) * maxRadius, Math.sin(Math.PI / 2 + spreadAngle / 2) * maxRadius);
    ctx.stroke();
    ctx.setLineDash([]);

    // Animated Sweeping Wave
    angle += 0.03;
    if (Math.random() < 0.05) {
      waves.push({ r: 10, maxR: maxRadius, alpha: 0.8 });
    }

    waves.forEach((w, i) => {
      w.r += 2.5;
      w.alpha -= 0.01;
      if (w.r > w.maxR || w.alpha <= 0) {
        waves.splice(i, 1);
        return;
      }
      ctx.strokeStyle = \`rgba(0, 240, 255, \${w.alpha})\`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, w.r, Math.PI / 2 - spreadAngle / 2, Math.PI / 2 + spreadAngle / 2);
      ctx.stroke();
    });

    ctx.restore();

    // Target Interaction
    let targetX = mouse.active ? mouse.x : originX + Math.sin(angle * 0.8) * 120;
    let targetY = mouse.active ? mouse.y : originY + 140 + Math.cos(angle * 0.5) * 60;
    
    // Distance from sensor
    const dx = targetX - originX;
    const dy = targetY - originY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const targetAngle = Math.atan2(dy, dx);
    const inRange = dist < maxRadius && (targetAngle >= (Math.PI / 2 - spreadAngle / 2) && targetAngle <= (Math.PI / 2 + spreadAngle / 2));

    // Draw Target
    ctx.fillStyle = inRange ? "#10b981" : "#f59e0b";
    ctx.beginPath();
    ctx.arc(targetX, targetY, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = inRange ? "rgba(16, 185, 129, 0.4)" : "rgba(245, 158, 11, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(targetX, targetY, 16 + Math.sin(angle * 4) * 4, 0, Math.PI * 2);
    ctx.stroke();

    // Beam Line to Target if detected
    if (inRange) {
      ctx.strokeStyle = "rgba(16, 185, 129, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(targetX, targetY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Update Live Telemetry in UI
      const teleStatus = document.getElementById('tele-status');
      const teleDist = document.getElementById('tele-dist');
      const teleLatency = document.getElementById('tele-latency');
      if (teleStatus) teleStatus.innerHTML = '<span class="text-emerald-400 font-bold">● TARGET ACQUIRED (TRIGGER HIGH)</span>';
      if (teleDist) teleDist.textContent = \`\${(dist / 35).toFixed(2)} m\`;
      if (teleLatency) teleLatency.textContent = \`0.18 ms\`;
    } else {
      const teleStatus = document.getElementById('tele-status');
      if (teleStatus) teleStatus.innerHTML = '<span class="text-slate-400">IDLE STANDBY (< 15uA)</span>';
    }

    canvasAnimId = requestAnimationFrame(draw);
  }

  draw();
}

function setSensorMode(mode) {
  sensorMode = mode;
  document.querySelectorAll('.sensor-mode-btn').forEach(b => {
    if (b.dataset.mode === mode) {
      b.className = "sensor-mode-btn px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-semibold";
    } else {
      b.className = "sensor-mode-btn px-3 py-1.5 rounded-lg bg-slate-900/80 text-slate-400 border border-slate-800 text-xs font-mono hover:text-white";
    }
  });

  const titleEl = document.getElementById('sensor-tech-desc-title');
  const bodyEl = document.getElementById('sensor-tech-desc-body');
  
  if (mode === 'radar') {
    if (titleEl) titleEl.textContent = "5.8GHz / 24GHz Doppler Micro-Radar Technology";
    if (bodyEl) bodyEl.textContent = "High-frequency electromagnetic CW radar that penetrates plastic, glass, and wood. Impervious to environmental temperature, airflow, or dust interference.";
  } else if (mode === 'pir') {
    if (titleEl) titleEl.textContent = "Dual-Element Pyroelectric PIR & Optical Fresnel Arrays";
    if (bodyEl) bodyEl.textContent = "Detects subtle 9.4um infrared thermal wavelength variations emitted by human bodies. Integrated dual-differential optical compensation prevents false animal triggers.";
  } else if (mode === 'hydro') {
    if (titleEl) titleEl.textContent = "0.25s Fast Hydro-Pulse Dynamic Sensing";
    if (bodyEl) bodyEl.textContent = "Patented dual-zone infrared reflection sensor with sub-second magnetic valve actuation, providing 10-year battery standby without external AC wiring.";
  }
}

// --- 5. FACTORY TOUR TAB SWITCHER ---
const factoryAreas = {
  smt: {
    titleEn: "Yamaha High-Speed SMT Pick-and-Place Lines",
    titleCn: "雅马哈高速贴片机与全自动SMT贴片生产线",
    stats: "40,000 CPH Precision Placement • 0201 Chip Scale Accuracy",
    descEn: "4 dedicated surface-mount lines capable of high-density multi-layer sensor PCBA mounting, 3D SPI solder paste inspection, and automated optical inspection.",
    descCn: "配备4条全自动化高精度SMT贴片线，支持0201微型元件贴装、3D SPI锡膏测厚仪与全线AOI自动光学检测。",
    img: "https://www.tuodi.com/template/tuodi/skin/images/fzlc1.jpg"
  },
  lab: {
    titleEn: "Everfine Integrating Sphere & Darkroom Optical Testing",
    titleCn: "远方高精度积分球光学分析与暗室实验室",
    stats: "Full Spectroradiometer • CCT/CRI/Lux/SDCM Analysis",
    descEn: "Certified photometrical testing suite measuring total luminous flux, spatial luminous intensity distribution, color consistency, and flicker metrics.",
    descCn: "配备国家级标定高精度光谱积分球、空间光强分布测试系统，确保每批次灯具发光效率与色容差严格受控。",
    img: "https://www.tuodi.com/template/tuodi/skin/images/fzlc2.jpg"
  },
  aging: {
    titleEn: "48-Hour Full-Load Thermal Burn-in Chamber",
    titleCn: "48小时全负载高低温循环老化房",
    stats: "-40°C to +85°C Dynamic Thermal Stress • 100% Full-batch Test",
    descEn: "Every finished batch undergoes rigorous high-voltage on/off switching cycles and prolonged thermal exposure to ensure 0.02% ultra-low defect rate.",
    descCn: "所有成品出厂前必须通过高低压反复冲击、高温高湿循环极限测试，保障极端工况下长期稳定工作。",
    img: "https://www.tuodi.com/template/tuodi/skin/images/fzlc7.jpg"
  },
  cleanroom: {
    titleEn: "ISO Class 7 Dust-Free Optical Assembly Workshop",
    titleCn: "十万级无尘防静电光学组装洁净车间",
    stats: "ESD Grounding Control • Constant Temperature & Humidity",
    descEn: "Cleanroom environment dedicated to Fresnel lens bonding, ultrasonic welding, and optical diffuser sealing to avoid particulate contamination.",
    descCn: "专用于透镜贴合、超声波焊接及光学扩散板密封组装，全程防静电手环监控，杜绝微尘杂质污染。",
    img: "https://www.tuodi.com/template/tuodi/skin/picture/20200408191021_203203800.jpg"
  }
};

function selectFactoryArea(key) {
  const area = factoryAreas[key];
  if (!area) return;

  document.querySelectorAll('.factory-tab-btn').forEach(btn => {
    if (btn.dataset.area === key) {
      btn.className = "factory-tab-btn w-full px-5 py-4 rounded-xl bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 text-left transition-all flex items-center justify-between";
    } else {
      btn.className = "factory-tab-btn w-full px-5 py-4 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 text-left transition-all flex items-center justify-between";
    }
  });

  const titleEl = document.getElementById('factory-area-title');
  const statsEl = document.getElementById('factory-area-stats');
  const descEl = document.getElementById('factory-area-desc');
  const imgEl = document.getElementById('factory-area-img');
  
  if (titleEl) titleEl.textContent = currentLang === 'en' ? area.titleEn : area.titleCn;
  if (statsEl) statsEl.textContent = area.stats;
  if (descEl) descEl.textContent = currentLang === 'en' ? area.descEn : area.descCn;
  if (imgEl && area.img) {
    imgEl.src = area.img;
  }
}

// --- 6. INITIALIZATION ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  filterProducts('all');
  initSensorCanvas();
  selectFactoryArea('smt'); // Initialize first factory tab image
  
  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
