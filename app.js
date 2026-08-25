/**
 * Shenzhen Tuodi Electronics - Enterprise Interactive Engine
 * Inspired by Pentagram / Apple / Keyence / Flex high-precision B2B standards
 */

// --- 1. PRODUCT DATABASE ---
const catalog = [
  {
    id: "td-sl-01",
    cat: "lighting",
    code: "TD-SL-8022",
    badge: "PATENTED PRIVATE MOLD",
    nameEn: "Ultra-Thin Tri-Color Magnetic Motion Cabinet Light",
    nameCn: "超薄三色温磁吸人体感应橱柜灯",
    descEn: "Engineered with seamless edge-lit diffuse optics encased in a 9.0mm aircraft aluminum chassis. Tri-color CCT tuning with wide-angle PIR auto-sensing.",
    descCn: "专为高端全屋定制、衣帽间打造，侧发光超薄全面屏，磁吸免打孔安装，三档色温随心切换。",
    img: "https://www.tuodi.com/static/upload/image/20240608/1717815887230502.jpg",
    specs: {
      "Detection Angle": "120° Wide-Angle PIR",
      "Sensor Range": "0 - 3.5 Meters",
      "Battery Capacity": "900mAh - 2200mAh Li-Po",
      "Chassis Thickness": "9.0 mm Aircraft Aluminum",
      "Color Temperature": "3000K / 4500K / 6500K CCT",
      "Standby Quiescent": "< 18 μA (180 Days Standby)",
      "Certifications": "CE, FCC, RoHS, PSE, UN38.3"
    },
    leadTime: "10-15 Days",
    moq: "500 pcs"
  },
  {
    id: "td-sw-02",
    cat: "switch",
    code: "TD-MW-360B",
    badge: "INDUSTRIAL GRADE",
    nameEn: "360° Ceiling Mount 5.8GHz Microwave Doppler Sensor Switch",
    nameCn: "360° 吸顶式 5.8GHz 高频微波雷达感应开关",
    descEn: "High-penetration Doppler CW radar capable of sensing motion through non-metallic walls, wood, and glass for smart corridors and parking complexes.",
    descCn: "高灵敏度高频微波多普勒雷达，可穿透非金属介质，专为地下车库、商业楼宇、智能走廊设计。",
    img: "https://www.tuodi.com/static/upload/image/20240608/1717817190641560.jpg",
    specs: {
      "Operating Frequency": "5.8 GHz ISM Band (CW Radar)",
      "Max Load Capacity": "1200W Incandescent / 300W LED",
      "Detection Radius": "1 - 8 Meters (Adjustable)",
      "Time Delay": "10s to 30min (DIP Switch)",
      "Lux Threshold": "2 - 2000 Lux Adjustable",
      "Input Voltage": "AC 85 - 265V 50/60Hz",
      "Certifications": "CE-EMC, CE-LVD, RoHS, UKCA"
    },
    leadTime: "12-18 Days",
    moq: "1,000 pcs"
  },
  {
    id: "td-ws-04",
    cat: "wellness",
    code: "TD-WS-401",
    badge: "PATENTED HYDRO-ENGINE",
    nameEn: "0.25s Instant Response Smart Touchless Tap Controller",
    nameCn: "0.25秒超快响应智能感应节水器",
    descEn: "Transforms standard kitchen and bathroom faucets into smart infrared touchless fixtures. Built-in overflow safety shutdown and 9-month battery life.",
    descCn: "双感应区设计（底部即开即停/侧面长出水），通用6款转接头，IPX6级防水，打造零接触洁净生活。",
    img: "https://www.tuodi.com/static/upload/image/20240608/1717815907758085.jpg",
    specs: {
      "Actuation Speed": "0.25 Seconds Dual Sensor",
      "Water Efficiency": "Level 1 Efficiency (0.07L/s)",
      "Battery Life": "Up to 9 Months Single Charge",
      "Sensing Modes": "Bottom Instant / Side Continuous (3min)",
      "Connector Kit": "M20 / M22 / M24 Universal Adapters",
      "Waterproof Rating": "IPX6 Splash-proof",
      "Certifications": "CE, RoHS, WaterSense Compliance"
    },
    leadTime: "10-14 Days",
    moq: "500 pcs"
  },
  {
    id: "td-ec-05",
    cat: "switch",
    code: "TD-KC-505",
    badge: "HOSPITALITY STANDARD",
    nameEn: "Hotel Intelligent High-Frequency RFID Card Power Switch",
    nameCn: "酒店智能高频RFID专用插卡取电节能开关",
    descEn: "Recognizes room-specific RFID cards only, preventing ordinary paper bypass and slashing hotel HVAC and lighting power waste by up to 35%.",
    descCn: "专用高频识别卡片，杜绝普通纸片代插，内置30A-40A超大功率继电器，有效节约酒店客房能耗30%以上。",
    img: "https://www.tuodi.com/static/upload/image/20240608/1717815915639912.jpg",
    specs: {
      "Supported Card Type": "Mifare-1 (13.56MHz) / Temic (125kHz)",
      "Rated Current": "30A / 40A Heavy Load Relay",
      "Max Power Rating": "Max 6600W / 8800W",
      "Delay Shutoff": "15 Seconds Intelligent Delay",
      "Housing Material": "Fireproof PC V-0 Grade",
      "Locator LED": "Blue Ambient Soft Light",
      "Certifications": "CE, ISO9001, GB16915"
    },
    leadTime: "7-12 Days",
    moq: "1,000 pcs"
  },
  {
    id: "td-wn-03",
    cat: "wellness",
    code: "TD-WN-901",
    badge: "TIER-1 ODM EXPORT",
    nameEn: "Clinical-Grade Bio-Acoustic White Noise Sleep Therapy Device",
    nameCn: "自然情景多音频生物声学白噪音睡眠仪",
    descEn: "Engineered with patented soothing acoustic wave algorithms for deep sleep therapy, nursery soothing, and focused office environments.",
    descCn: "内置28种母婴及深睡级无损自然原声，配备柔光七彩呼吸小夜灯，支持无缝循环声学算法。",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Sound Profiles": "28 High-Fidelity Lossless Tracks",
      "Speaker Driver": "52mm 5W Rare-Earth Neodymium",
      "Night Light": "RGB 7-Color Breathing Lamp",
      "Timer Modes": "30 / 60 / 90 min Auto Shutoff",
      "Memory Function": "Retains volume, sound & light settings",
      "Interface": "Type-C 5V/1A Fast Charge",
      "Certifications": "FCC, CE, RoHS, Prop65"
    },
    leadTime: "15-20 Days",
    moq: "1,000 pcs"
  },
  {
    id: "td-pir-06",
    cat: "switch",
    code: "TD-MD-08",
    badge: "DIRECT PCBA COMPONENT",
    nameEn: "Micro-Miniature PIR Human Infrared Motion Sensor Module",
    nameCn: "微型嵌入式双元热释电PIR红外感应模块",
    descEn: "Compact turnkey sensor PCBA module for seamless integration into smart bathroom mirrors, cabinet strips, solar garden lights, and IoT appliances.",
    descCn: "体积小巧、功耗极低，支持定制PCB尺寸与引脚定义，广泛适配智能卫浴镜、太阳能灯具及IoT物联设备。",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    specs: {
      "Supply Voltage": "DC 3.3V - 12V Wide Input",
      "Quiescent Current": "< 12 μA (Ultra-low sleep)",
      "Lens Options": "Micro 10mm / Standard 23mm Fresnel",
      "Trigger Mode": "Repeatable / Non-repeatable",
      "Output Signal": "High/Low 3.3V TTL Level or Open Drain",
      "Detection Cone": "100° Cone Angle",
      "Certifications": "RoHS, REACH"
    },
    leadTime: "5-10 Days",
    moq: "2,000 pcs"
  }
];

// --- 2. TEARDOWN LAYERS DATA ---
const teardownLayers = [
  {
    code: "SPEC: TD-OPT-F120",
    badge: "OPTICAL FRESNEL LENS ARRAY",
    title: "Micro-Facet Optical Transmission",
    desc: "Features 32 high-refraction micro-zones configured to partition thermal infrared radiation into discrete sensing cones, preventing accidental triggers from pets and ambient air currents.",
    specs: [
      { k: "Transmission Efficiency", v: "> 92.4% (8-14μm Wavelength)" },
      { k: "Focal Length / Angle", v: "12.5mm / 120° Multi-Zone" },
      { k: "Thermal Resistance", v: "-40°C to +110°C Continuous" }
    ]
  },
  {
    code: "SPEC: TD-RAD-5800",
    badge: "5.8GHz / 24GHz DOPPLER TRANSCEIVER",
    title: "High-Penetration Electromagnetic Cavity",
    desc: "Proprietary planar antenna array emitting ultra-low power continuous waves. Capable of detecting microscopic human displacement through acrylic, drywall, and glass barriers.",
    specs: [
      { k: "Transmission Power", v: "< 0.2 mW (Safe & Non-ionizing)" },
      { k: "Beam Aperture", v: "360° Circular / 180° Hemispherical" },
      { k: "Interference Rejection", v: "Integrated 50Hz/60Hz Notch Filter" }
    ]
  },
  {
    code: "SPEC: TD-SMT-0201",
    badge: "HIGH-DENSITY SMT CONTROLLER PCBA",
    title: "Sub-Micron 4-Layer Controller Circuit",
    desc: "Manufactured on Yamaha high-speed SMT lines with 0201 precision components. Integrates hardware DSP filtering and sub-15μA ultra-low power logic sleep states.",
    specs: [
      { k: "Quiescent Sleep Current", v: "< 14.2 μA (Industry-leading)" },
      { k: "ESD Protection", v: "± 15kV Air / ± 8kV Contact" },
      { k: "PCB Finish", v: "Immersion Gold (ENIG) 2u\"" }
    ]
  },
  {
    code: "SPEC: TD-ENC-V0",
    badge: "FLAME-RETARDANT POWER CHASSIS",
    title: "V-0 Fireproof Structural Enclosure",
    desc: "Constructed with Bayer high-impact polycarbonate rated UL94 V-0 flame-retardant. Houses a 40A high-capacity silver alloy relay engineered for 100,000+ switching cycles.",
    specs: [
      { k: "Relay Endurance", v: "> 100,000 Mechanical Cycles" },
      { k: "Flammability Rating", v: "UL94 V-0 Self-extinguishing" },
      { k: "Surge Immunity", v: "4kV Lightning Surge Level 4" }
    ]
  }
];

function selectLayer(idx) {
  document.querySelectorAll('.layer-card').forEach((card, i) => {
    if (i === idx) {
      card.classList.add('active', 'border-cyan-400');
    } else {
      card.classList.remove('active', 'border-cyan-400');
    }
  });

  const layer = teardownLayers[idx];
  if (!layer) return;

  document.getElementById('layer-code').textContent = layer.code;
  document.getElementById('layer-badge').textContent = layer.badge;
  document.getElementById('layer-title').textContent = layer.title;
  document.getElementById('layer-desc').textContent = layer.desc;

  const specsTbody = document.getElementById('layer-specs');
  if (specsTbody) {
    specsTbody.innerHTML = layer.specs.map(s => `
      <tr>
        <td class="py-3 px-4 text-slate-400 bg-white/[0.02]">${s.k}</td>
        <td class="py-3 px-4 text-cyan-300 font-semibold">${s.v}</td>
      </tr>
    `).join('');
  }
}

// --- 3. PRODUCT CATALOG RENDERING ---
function renderCatalog(filteredProducts) {
  const container = document.getElementById('product-grid');
  if (!container) return;

  container.innerHTML = filteredProducts.map(p => `
    <div class="titanium-panel rounded-2xl p-6 relative group transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/40 flex flex-col justify-between overflow-hidden">
      
      <!-- Card Image with Mockup Tag -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">${p.code}</span>
          <span class="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">${p.badge}</span>
        </div>

        <div class="h-48 rounded-xl bg-black border border-white/[0.08] mb-5 relative overflow-hidden group-hover:border-cyan-500/30 transition-all">
          <img src="${p.img}" alt="${p.code}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen" crossorigin="anonymous" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#070a10] via-transparent to-transparent"></div>
          <div class="absolute bottom-2 right-2 text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/50">MOQ: ${p.moq}</div>
        </div>

        <h3 class="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
          ${p.nameEn}
        </h3>
        <p class="text-xs text-slate-400 mb-6 leading-relaxed line-clamp-2">
          ${p.descEn}
        </p>
      </div>

      <!-- Footer specs & actions -->
      <div>
        <div class="border-t border-white/[0.08] pt-4 mb-4 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
          <div>Lead Time: <span class="text-cyan-300 font-semibold">${p.leadTime}</span></div>
          <div class="text-right text-emerald-400">Turnkey OEM Ready</div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="openSpecModal('${p.id}')" class="flex-1 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-white/10">
            <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span>Datasheet & CAD</span>
          </button>
          <button onclick="openRfqModal('${p.code}')" class="py-2.5 px-4 rounded-lg bg-white text-black text-xs font-bold hover:bg-slate-200 transition-colors shadow-lg">
            Sample
          </button>
        </div>
      </div>

    </div>
  `).join('');
}

function filterCatalog(category) {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.cat === category) {
      btn.className = "cat-btn px-4 py-2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold";
    } else {
      btn.className = "cat-btn px-4 py-2 rounded bg-white/5 text-slate-400 border border-white/10 hover:text-white text-xs font-mono";
    }
  });

  const filtered = category === 'all' ? catalog : catalog.filter(p => p.cat === category);
  renderCatalog(filtered);
}

// --- 4. ENGINEERING SPEC & 3D CAD MODAL ---
function openSpecModal(id) {
  const p = catalog.find(x => x.id === id);
  if (!p) return;

  const modal = document.getElementById('spec-modal');
  const body = document.getElementById('spec-modal-body');
  if (!modal || !body) return;

  const specRows = Object.entries(p.specs).map(([k, v]) => `
    <tr class="border-b border-white/[0.06]">
      <td class="py-2.5 px-4 text-xs font-mono text-slate-400 bg-white/[0.02]">${k}</td>
      <td class="py-2.5 px-4 text-xs font-mono text-cyan-300 font-semibold">${v}</td>
    </tr>
  `).join('');

  body.innerHTML = `
    <div class="flex items-start justify-between border-b border-white/[0.08] pb-4 mb-6">
      <div>
        <div class="flex items-center gap-3 mb-1">
          <span class="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono">${p.code}</span>
          <span class="text-xs text-amber-400 font-mono">${p.badge}</span>
        </div>
        <h2 class="text-2xl font-bold text-white">${p.nameEn}</h2>
        <p class="text-xs text-slate-400 mt-1">${p.nameCn}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <h4 class="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono mb-3">Electrical & Physical Parameters</h4>
        <div class="overflow-hidden rounded-xl border border-white/[0.08] bg-[#05070a]">
          <table class="w-full text-left">
            <tbody>${specRows}</tbody>
          </table>
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <h4 class="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono mb-3">Engineering Deliverables</h4>
          <div class="space-y-2.5 text-xs text-slate-300">
            <div class="p-3 rounded-lg bg-black/40 border border-white/[0.08] flex items-center justify-between">
              <div>
                <strong class="text-white block">3D CAD Model (.STEP / .IGES)</strong>
                <span class="text-[11px] text-slate-400">Complete mechanical assembly & PCB clearance</span>
              </div>
              <button onclick="downloadCadSpec()" class="text-cyan-400 font-mono text-xs hover:underline">Download</button>
            </div>
            <div class="p-3 rounded-lg bg-black/40 border border-white/[0.08] flex items-center justify-between">
              <div>
                <strong class="text-white block">IES Optical Ray Photometry</strong>
                <span class="text-[11px] text-slate-400">Dialux / Relux simulation distribution files</span>
              </div>
              <button onclick="downloadCadSpec()" class="text-cyan-400 font-mono text-xs hover:underline">Download</button>
            </div>
            <div class="p-3 rounded-lg bg-black/40 border border-white/[0.08] flex items-center justify-between">
              <div>
                <strong class="text-white block">Full Engineering Datasheet (Rev 4.1)</strong>
                <span class="text-[11px] text-slate-400">Pin definitions, timing diagrams & thermal curves</span>
              </div>
              <button onclick="downloadCadSpec()" class="text-cyan-400 font-mono text-xs hover:underline">Download</button>
            </div>
          </div>
        </div>

        <div class="pt-6 mt-4 border-t border-white/[0.08] flex items-center gap-3">
          <button onclick="closeSpecModal(); openRfqModal('${p.code}')" class="btn-primary w-full justify-center">
            <span>Request Pre-Production Sample</span>
          </button>
        </div>
      </div>
    </div>
  `;

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

// --- 5. FACTORY AUDIT SWITCHER ---
const factoryStations = {
  smt: {
    title: "Yamaha High-Speed SMT Automated Lines",
    desc: "4 dedicated SMT lines featuring Yamaha YSM20R modular mounters, 10-zone nitrogen reflow ovens, and 3D SPI automated optical inspection to ensure zero cold solder joints.",
    img: "https://www.tuodi.com/template/tuodi/skin/images/fzlc1.jpg"
  },
  lab: {
    title: "Everfine Integrating Sphere Darkroom Optical Lab",
    desc: "Accredited photometrical analysis suite measuring spatial luminous intensity distribution, full spectral flux, CRI, CCT, and SDCM color tolerance consistency.",
    img: "https://www.tuodi.com/template/tuodi/skin/images/fzlc2.jpg"
  },
  aging: {
    title: "48-Hour Full-Load Thermal Stress Chamber",
    desc: "Continuous high-voltage and low-voltage on/off switching cycles under -40°C to +85°C thermal extremes. 100% of finished lots are stress-tested prior to packaging.",
    img: "https://www.tuodi.com/template/tuodi/skin/images/fzlc7.jpg"
  },
  clean: {
    title: "ISO Class 7 Optical Cleanroom Assembly",
    desc: "Strictly controlled dust-free cleanroom environment equipped with ultrasonic plastic welders and constant ESD grounding monitoring for high-precision Fresnel lens bonding.",
    img: "https://www.tuodi.com/template/tuodi/skin/picture/20200408191021_203203800.jpg"
  }
};

function setFactoryAudit(key) {
  const st = factoryStations[key];
  if (!st) return;

  document.querySelectorAll('.fac-btn').forEach(btn => {
    btn.classList.remove('border-cyan-500/50', 'bg-cyan-950/20');
  });
  const activeBtn = document.getElementById(`fac-btn-${key}`);
  if (activeBtn) activeBtn.classList.add('border-cyan-500/50', 'bg-cyan-950/20');

  const imgEl = document.getElementById('fac-image');
  const titleEl = document.getElementById('fac-title');
  const descEl = document.getElementById('fac-desc');

  if (imgEl) imgEl.src = st.img;
  if (titleEl) titleEl.textContent = st.title;
  if (descEl) descEl.textContent = st.desc;
}

// --- 6. INTERACTIVE CAD RADAR SIMULATOR ---
let simMode = 'radar';

function initCadCanvas() {
  const canvas = document.getElementById('cad-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
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
  let pulses = [];

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Coordinate Grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    const originX = canvas.width / 2;
    const originY = 50;

    // Sensor Emitter Head
    ctx.fillStyle = "#090d16";
    ctx.strokeStyle = "#00f2fe";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(originX - 45, originY - 25, 90, 30, 4);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#00f2fe";
    ctx.font = "10px JetBrains Mono";
    ctx.textAlign = "center";
    ctx.fillText(simMode.toUpperCase() + " HEAD", originX, originY - 6);

    const maxR = canvas.height - 70;
    const spread = simMode === 'radar' ? Math.PI * 0.8 : Math.PI * 0.55;

    // Range Arcs
    for (let r = 60; r <= maxR; r += 60) {
      ctx.strokeStyle = "rgba(0, 242, 254, 0.12)";
      ctx.beginPath();
      ctx.arc(originX, originY, r, Math.PI / 2 - spread / 2, Math.PI / 2 + spread / 2);
      ctx.stroke();
    }

    // Cone Boundaries
    ctx.strokeStyle = "rgba(0, 242, 254, 0.3)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + Math.cos(Math.PI / 2 - spread / 2) * maxR, originY + Math.sin(Math.PI / 2 - spread / 2) * maxR);
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + Math.cos(Math.PI / 2 + spread / 2) * maxR, originY + Math.sin(Math.PI / 2 + spread / 2) * maxR);
    ctx.stroke();
    ctx.setLineDash([]);

    // Wave Pulses
    angle += 0.02;
    if (Math.random() < 0.04) {
      pulses.push({ r: 10, maxR: maxR, alpha: 0.8 });
    }

    pulses.forEach((p, i) => {
      p.r += 3;
      p.alpha -= 0.009;
      if (p.r > p.maxR || p.alpha <= 0) {
        pulses.splice(i, 1);
        return;
      }
      ctx.strokeStyle = `rgba(0, 242, 254, ${p.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(originX, originY, p.r, Math.PI / 2 - spread / 2, Math.PI / 2 + spread / 2);
      ctx.stroke();
    });

    // Target Physics
    let targetX = mouse.active ? mouse.x : originX + Math.sin(angle * 0.9) * 160;
    let targetY = mouse.active ? mouse.y : originY + 160 + Math.cos(angle * 0.6) * 70;

    const dx = targetX - originX;
    const dy = targetY - originY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const targetAngle = Math.atan2(dy, dx);
    const inCone = dist < maxR && (targetAngle >= (Math.PI / 2 - spread / 2) && targetAngle <= (Math.PI / 2 + spread / 2));

    // Target Blip
    ctx.fillStyle = inCone ? "#10b981" : "#f59e0b";
    ctx.beginPath();
    ctx.arc(targetX, targetY, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = inCone ? "rgba(16, 185, 129, 0.5)" : "rgba(245, 158, 11, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(targetX, targetY, 14 + Math.sin(angle * 5) * 4, 0, Math.PI * 2);
    ctx.stroke();

    // Beam Line
    if (inCone) {
      ctx.strokeStyle = "rgba(16, 185, 129, 0.6)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(targetX, targetY);
      ctx.stroke();
      ctx.setLineDash([]);

      const statusEl = document.getElementById('cad-status');
      const distEl = document.getElementById('cad-dist');
      if (statusEl) statusEl.innerHTML = '<span class="text-emerald-400 font-bold">● TARGET ACQUIRED (0.18ms TRIGGER HIGH)</span>';
      if (distEl) distEl.textContent = `${(dist / 40).toFixed(2)} m`;
    } else {
      const statusEl = document.getElementById('cad-status');
      if (statusEl) statusEl.innerHTML = '<span class="text-slate-400">IDLE SCANNING (< 14.2μA)</span>';
    }

    requestAnimationFrame(animate);
  }

  animate();
}

function setSimMode(m) {
  simMode = m;
  const btnR = document.getElementById('sim-radar-btn');
  const btnP = document.getElementById('sim-pir-btn');
  const btnH = document.getElementById('sim-hydro-btn');
  const freqEl = document.getElementById('cad-freq');

  [btnR, btnP, btnH].forEach(b => {
    if (b) b.className = "px-4 py-2 rounded bg-white/5 text-slate-400 border border-white/10 hover:text-white text-xs font-mono";
  });

  if (m === 'radar') {
    if (btnR) btnR.className = "px-4 py-2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold";
    if (freqEl) freqEl.textContent = "5.80 GHz";
  } else if (m === 'pir') {
    if (btnP) btnP.className = "px-4 py-2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold";
    if (freqEl) freqEl.textContent = "9.40 μm PIR";
  } else if (m === 'hydro') {
    if (btnH) btnH.className = "px-4 py-2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold";
    if (freqEl) freqEl.textContent = "0.25s Pulse";
  }
}

// --- 7. RFQ & MODAL CONTROLS ---
function openRfqModal(code = "") {
  const modal = document.getElementById('rfq-modal');
  if (!modal) return;
  if (code && document.getElementById('rfq-model-select')) {
    document.getElementById('rfq-model-select').value = code;
  }
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeRfqModal() {
  const modal = document.getElementById('rfq-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleRfqSubmit(e) {
  e.preventDefault();
  alert("Thank you! Your Enterprise Request for Quotation (RFQ) and engineering sample request have been transmitted directly to Shenzhen Tuodi's Senior Hardware Director. You will receive an official response and mutual NDA within 2 business hours.");
  closeRfqModal();
}

function downloadCadSpec() {
  alert("[Enterprise Vault] Requested 3D CAD (.STEP) / IES photometric package has been compiled. Download starting.");
}

// --- 8. COUNTER ANIMATION & CURSOR GLOW ---
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        let count = 0;
        const step = target / 50;
        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            el.textContent = target.toLocaleString() + (target === 79 ? "+" : "");
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(count).toLocaleString();
          }
        }, 20);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;
  window.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));
}

// --- 9. BILINGUAL CONTROLS ---
function setLanguage(lang) {
  const enBtn = document.getElementById('lang-en');
  const cnBtn = document.getElementById('lang-cn');
  if (lang === 'en') {
    if (enBtn) enBtn.className = "text-cyan-400 font-bold hover:underline";
    if (cnBtn) cnBtn.className = "text-slate-400 hover:text-white transition";
  } else {
    if (cnBtn) cnBtn.className = "text-cyan-400 font-bold hover:underline";
    if (enBtn) enBtn.className = "text-slate-400 hover:text-white transition";
  }
}

// --- DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog(catalog);
  selectLayer(0);
  initCadCanvas();
  initCounters();
  initCursorGlow();
  initScrollReveals();
});
