/* ==========================================
   ▼▼▼ 変わらないデータ・設定エリア ▼▼▼
========================================== */
const proxyUrl = "https://broken-disk-2256.tennis03061996.workers.dev/?url=";

let astroEvents = [
    { date: "4月22日", name: "こと座流星群が極大", type: "流星群" },
    { date: "8月13日", name: "ペルセウス座流星群が極大", type: "流星群" },
    { date: "10月6日", name: "中秋の名月", type: "月" }
];

// ✨全国47都道府県のマスターデータ
const regionsData = {
    "北海道": [
        {name: "宗谷", code: "011000"}, {name: "上川・留萌", code: "012000"}, {name: "網走・北見・紋別", code: "013000"},
        {name: "十勝", code: "014030"}, {name: "釧路・根室", code: "014100"}, {name: "胆振・日高", code: "015000"},
        {name: "石狩・空知・後志", code: "016000"}, {name: "渡島・檜山", code: "017000"}
    ],
    "東北": [
        {name: "青森", code: "020000"}, {name: "岩手", code: "030000"}, {name: "宮城", code: "040000"},
        {name: "秋田", code: "050000"}, {name: "山形", code: "060000"}, {name: "福島", code: "070000"}
    ],
    "関東甲信": [
        {name: "茨城", code: "080000"}, {name: "栃木", code: "090000"}, {name: "群馬", code: "100000"},
        {name: "埼玉", code: "110000"}, {name: "千葉", code: "120000"}, {name: "東京", code: "130000"},
        {name: "神奈川", code: "140000"}, {name: "山梨", code: "190000"}, {name: "長野", code: "200000"}
    ],
    "東海": [
        {name: "岐阜", code: "210000"}, {name: "静岡", code: "220000"}, {name: "愛知", code: "230000"}, {name: "三重", code: "240000"}
    ],
    "北陸": [
        {name: "新潟", code: "150000"}, {name: "富山", code: "160000"}, {name: "石川", code: "170000"}, {name: "福井", code: "180000"}
    ],
    "近畿": [
        {name: "滋賀", code: "250000"}, {name: "京都", code: "260000"}, {name: "大阪", code: "270000"},
        {name: "兵庫", code: "280000"}, {name: "奈良", code: "290000"}, {name: "和歌山", code: "300000"}
    ],
    "中国": [
        {name: "鳥取", code: "310000"}, {name: "島根", code: "320000"}, {name: "岡山", code: "330000"}, {name: "広島", code: "340000"}
    ],
    "四国": [
        {name: "徳島", code: "360000"}, {name: "香川", code: "370000"}, {name: "愛媛", code: "380000"}, {name: "高知", code: "390000"}
    ],
    "九州北部": [
        {name: "山口", code: "350000"}, {name: "福岡", code: "400000"}, {name: "佐賀", code: "410000"},
        {name: "長崎", code: "420000"}, {name: "熊本", code: "430000"}, {name: "大分", code: "440000"}
    ],
    "九州南部・奄美": [
        {name: "宮崎", code: "450000"}, {name: "鹿児島", code: "460100"}, {name: "奄美", code: "460040"}
    ],
    "沖縄": [
        {name: "沖縄本島", code: "471000"}, {name: "大東島", code: "472000"}, {name: "宮古島", code: "473000"}, {name: "八重山", code: "474000"}
    ]
};

const prefCoordinates = {
    "宗谷":{lat:45.415,lon:141.673},"上川・留萌":{lat:43.770,lon:142.364},"網走・北見・紋別":{lat:44.020,lon:144.273},"十勝":{lat:42.923,lon:143.196},"釧路・根室":{lat:42.984,lon:144.381},"胆振・日高":{lat:42.315,lon:140.973},"石狩・空知・後志":{lat:43.062,lon:141.354},"渡島・檜山":{lat:41.768,lon:140.728},
    "青森":{lat:40.824,lon:140.740},"岩手":{lat:39.703,lon:141.152},"宮城":{lat:38.268,lon:140.871},"秋田":{lat:39.718,lon:140.102},"山形":{lat:38.240,lon:140.363},"福島":{lat:37.760,lon:140.467},
    "茨城":{lat:36.341,lon:140.446},"栃木":{lat:36.565,lon:139.883},"群馬":{lat:36.391,lon:139.060},"埼玉":{lat:35.856,lon:139.648},"千葉":{lat:35.604,lon:140.123},"東京":{lat:35.689,lon:139.691},"神奈川":{lat:35.447,lon:139.642},"山梨":{lat:35.663,lon:138.568},"長野":{lat:36.651,lon:138.181},
    "岐阜":{lat:35.423,lon:136.760},"静岡":{lat:34.975,lon:138.382},"愛知":{lat:35.181,lon:136.906},"三重":{lat:34.730,lon:136.508},
    "新潟":{lat:37.902,lon:139.023},"富山":{lat:36.695,lon:137.211},"石川":{lat:36.594,lon:136.625},"福井":{lat:36.064,lon:136.221},
    "滋賀":{lat:35.017,lon:135.854},"京都":{lat:35.011,lon:135.768},"大阪":{lat:34.693,lon:135.502},"兵庫":{lat:34.690,lon:135.195},"奈良":{lat:34.685,lon:135.804},"和歌山":{lat:34.230,lon:135.170},
    "鳥取":{lat:35.501,lon:134.235},"島根":{lat:35.472,lon:133.050},"岡山":{lat:34.661,lon:133.934},"広島":{lat:34.385,lon:132.455},
    "徳島":{lat:34.070,lon:134.554},"香川":{lat:34.340,lon:134.043},"愛媛":{lat:33.839,lon:132.765},"高知":{lat:33.559,lon:133.531},
    "山口":{lat:34.185,lon:131.471},"福岡":{lat:33.590,lon:130.401},"佐賀":{lat:33.263,lon:130.300},"長崎":{lat:32.750,lon:129.872},"熊本":{lat:32.803,lon:130.707},"大分":{lat:33.239,lon:131.612},
    "宮崎":{lat:31.907,lon:131.420},"鹿児島":{lat:31.596,lon:130.538},"奄美":{lat:28.374,lon:129.493},
    "沖縄本島":{lat:26.212,lon:127.680},"大東島":{lat:25.843,lon:131.231},"宮古島":{lat:24.805,lon:125.281},"八重山":{lat:24.344,lon:124.155}
};

const jmaIconMap = {
    "100":"100", "101":"101", "102":"102", "103":"102", "104":"104", "105":"104", "106":"102", "107":"102", "108":"102",
    "110":"110", "111":"110", "112":"112", "113":"112", "114":"112", "115":"114", "116":"114", "117":"114", "118":"112", "119":"112",
    "120":"102", "121":"102", "122":"112", "123":"112", "124":"112", "125":"112", "126":"112", "127":"112", "128":"112", "129":"112",
    "130":"100", "131":"100", "132":"101", "140":"102", "160":"104", "170":"104",
    "200":"200", "201":"201", "202":"202", "203":"202", "204":"204", "205":"204", "206":"202", "207":"202", "208":"202", "209":"200",
    "210":"210", "211":"210", "212":"212", "213":"212", "214":"212", "215":"214", "216":"214", "217":"214", "218":"212", "219":"212",
    "220":"202", "221":"202", "222":"212", "223":"212", "224":"212", "225":"212", "226":"212", "227":"212", "228":"212", "229":"212",
    "230":"200", "231":"200", "240":"202", "250":"204", "260":"204", "270":"204",
    "300":"300", "301":"301", "302":"302", "303":"303", "304":"300", "306":"300", "308":"300", "309":"303",
    "311":"311", "313":"313", "314":"314", "315":"314", "316":"311", "317":"313", "320":"311", "321":"313", "322":"303", "323":"311", "324":"311", "325":"311", "328":"300", "329":"303",
    "340":"400", "350":"300", "361":"411", "371":"413",
    "400":"400", "401":"401", "402":"402", "403":"403", "405":"400", "406":"400", "407":"400", "409":"403",
    "411":"411", "413":"413", "414":"414", "420":"411", "421":"413", "422":"414", "423":"411", "425":"411", "426":"411", "427":"414",
    "450":"400"
};

const warnMap = {
    "02":"暴風雪警報","03":"大雨警報","04":"洪水警報","05":"暴風警報","06":"大雪警報","07":"波浪警報","08":"高潮警報","09":"レベル3土砂災害警報",
    "10":"大雨注意報","12":"大雪注意報","13":"風雪注意報","14":"雷注意報","15":"強風注意報","16":"波浪注意報","17":"融雪注意報","18":"洪水注意報","19":"高潮注意報","20":"濃霧注意報","21":"乾燥注意報","22":"なだれ注意報","23":"低温注意報","24":"霜注意報","25":"着氷注意報","26":"着雪注意報",
    "32":"暴風雪特別警報","33":"大雨特別警報","35":"暴風特別警報","36":"大雪特別警報","37":"波浪特別警報","38":"高潮特別警報"
};

function decodeWMO(code) {
    if(code === 0) return {text: "快晴", icon: "☀️"};
    if(code <= 3) return {text: "晴れ/曇り", icon: "⛅"};
    if(code >= 45 && code <= 48) return {text: "霧", icon: "🌫️"};
    if(code >= 51 && code <= 67) return {text: "雨", icon: "🌧️"};
    if(code >= 71 && code <= 77) return {text: "雪", icon: "❄️"};
    if(code >= 80 && code <= 82) return {text: "にわか雨", icon: "🌦️"};
    if(code >= 95) return {text: "雷雨", icon: "⛈️"};
    return {text: "不明", icon: "❓"};
}

function telopToText(code) {
    const c = String(code);
    const codeMap = {
        "100":"晴れ", "101":"晴時々曇", "102":"晴一時雨", "104":"晴一時雪", "110":"晴後時々曇", "111":"晴のち曇", "112":"晴のち雨", "115":"晴のち雪", "130":"晴朝夕曇",
        "200":"曇り", "201":"曇時々晴", "202":"曇一時雨", "204":"曇一時雪", "210":"曇後時々晴", "211":"曇のち晴", "212":"曇のち雨", "215":"曇のち雪",
        "300":"雨", "301":"雨時々晴", "302":"雨時々止む", "303":"雨時々雪", "311":"雨のち晴", "313":"雨のち曇", "314":"雨のち雪",
        "400":"雪", "401":"雪時々晴", "402":"雪時々止む", "403":"雪時々雨", "411":"雪のち晴", "413":"雪のち曇", "414":"雪のち雨"
    };
    if (codeMap[c]) return codeMap[c];
    const first = c.charAt(0);
    if(first === "1") return "晴れ";
    if(first === "2") return "曇り";
    if(first === "3") return "雨";
    if(first === "4") return "雪";
    return "不明";
}

/* ==========================================
   ⚙️ カスタマイズ設定エリア（NEW!）
========================================== */
let currentCode = '270000';
let currentName = '大阪';

const DEFAULT_PREFS = ["滋賀", "京都", "大阪", "兵庫", "奈良", "和歌山"];
let savedPrefs = [];
let savedDefault = "大阪";

// 🛡️ 壊れたデータでも絶対にクラッシュしない「超・安全な」設定読み込み
function loadSettings() {
    try {
        const storedPrefs = localStorage.getItem('sorapoke_prefs');
        const storedDefault = localStorage.getItem('sorapoke_default');
        
        const parsedPrefs = storedPrefs ? JSON.parse(storedPrefs) : null;
        if (Array.isArray(parsedPrefs) && parsedPrefs.length > 0) {
            savedPrefs = parsedPrefs;
        } else {
            savedPrefs = [...DEFAULT_PREFS];
        }
        
        savedDefault = storedDefault ? storedDefault : "大阪";
        if (!savedPrefs.includes(savedDefault) && savedPrefs.length > 0) {
            savedDefault = savedPrefs[0];
        }
    } catch(e) {
        console.warn("設定の読み込みエラー。初期設定に戻します。");
        savedPrefs = [...DEFAULT_PREFS];
        savedDefault = "大阪";
    }
}

// ユーザーの設定に合わせて、地方ごとのタブを作る魔法の関数
function initTabs() {
    const regionContainer = document.getElementById('regionTabs');
    const prefContainer = document.getElementById('prefTabs');

    // ユーザーが選んだ県が含まれている「地方」だけを抽出するよ！
    const activeRegions = {};
    for (const region in regionsData) {
        const activePrefsInRegion = regionsData[region].filter(p => savedPrefs.includes(p.name));
        if (activePrefsInRegion.length > 0) {
            activeRegions[region] = activePrefsInRegion;
        }
    }

    const regionNames = Object.keys(activeRegions);
    if (regionNames.length === 0) return;

    // 「ホーム」の県がどの地方にあるかを探す
    let defaultRegion = regionNames[0];
    for (const region in activeRegions) {
        if (activeRegions[region].some(p => p.name === savedDefault)) {
            defaultRegion = region;
            break;
        }
    }

    let regionHtml = '<div class="tabs">';
    regionNames.forEach((regionName) => {
        const isActive = regionName === defaultRegion ? "active" : "";
        regionHtml += `<div class="tab ${isActive}" onclick="selectRegion('${regionName}', this)">${regionName}</div>`;
    });
    regionHtml += '</div>';
    regionContainer.innerHTML = regionHtml;

    // 最初の地方タブをセットアップ！
    const defaultRegionTab = regionContainer.querySelector('.tab.active');
    selectRegion(defaultRegion, defaultRegionTab, savedDefault);
}

function selectRegion(regionName, el, initialPrefName = null) {
    if(el) {
        document.querySelectorAll('#regionTabs .tab').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    const prefContainer = document.getElementById('prefTabs');
    const activePrefsInRegion = regionsData[regionName].filter(p => savedPrefs.includes(p.name));

    let prefHtml = '<div class="tabs">';
    activePrefsInRegion.forEach(p => {
        prefHtml += `<div class="sub-tab" data-code="${p.code}" data-name="${p.name}" onclick="updateArea('${p.code}', '${p.name}', this)">${p.name}</div>`;
    });
    prefHtml += '</div>';
    prefContainer.innerHTML = prefHtml;

    // 次にクリックする県（サブタブ）を決める！
    let targetSubTab;
    if (initialPrefName) {
        targetSubTab = prefContainer.querySelector(`.sub-tab[data-name="${initialPrefName}"]`);
    }
    if (!targetSubTab && activePrefsInRegion.length > 0) {
        targetSubTab = prefContainer.querySelector('.sub-tab');
    }

    if (targetSubTab) {
        // ✨ ここが超重要！ボタンを「プログラムで強制的にクリック」して、データを自動で持ってくる！
        setTimeout(() => targetSubTab.click(), 10);
    }
}

function openSettingsModal() {
    document.getElementById('settingsModal').style.display = 'flex';
    const container = document.getElementById('regionSettingsContainer');
    const select = document.getElementById('defaultPrefSelect');
    
    container.innerHTML = "";
    select.innerHTML = "";

    for (const regionName in regionsData) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'region-group';
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'region-header';
        
        const regionCheck = document.createElement('input');
        regionCheck.type = 'checkbox';
        regionCheck.className = 'custom-checkbox';
        
        const prefsInRegion = regionsData[regionName];
        const allChecked = prefsInRegion.every(p => savedPrefs.includes(p.name));
        regionCheck.checked = allChecked;
        
        const regionLabel = document.createElement('span');
        regionLabel.innerText = `${regionName}を一括選択`;
        
        headerDiv.appendChild(regionCheck);
        headerDiv.appendChild(regionLabel);
        groupDiv.appendChild(headerDiv);
        
        const gridDiv = document.createElement('div');
        gridDiv.className = 'pref-grid';
        
        const prefCheckboxes = [];
        
        prefsInRegion.forEach(p => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'pref-item';
            
            const prefCheck = document.createElement('input');
            prefCheck.type = 'checkbox';
            prefCheck.className = 'custom-checkbox pref-cb';
            prefCheck.value = p.name;
            prefCheck.checked = savedPrefs.includes(p.name);
            prefCheck.addEventListener('change', updateDefaultSelectOptions);
            
            const prefLabel = document.createElement('span');
            prefLabel.innerText = p.name;
            
            itemDiv.appendChild(prefCheck);
            itemDiv.appendChild(prefLabel);
            gridDiv.appendChild(itemDiv);
            prefCheckboxes.push(prefCheck);
        });
        
        regionCheck.addEventListener('change', (e) => {
            prefCheckboxes.forEach(cb => { cb.checked = e.target.checked; });
            updateDefaultSelectOptions();
        });
        
        groupDiv.appendChild(gridDiv);
        container.appendChild(groupDiv);
    }
    updateDefaultSelectOptions();
}

function closeSettingsModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

function updateDefaultSelectOptions() {
    const select = document.getElementById('defaultPrefSelect');
    const prevSelected = select.value || savedDefault;
    select.innerHTML = "";
    
    const allChecks = document.querySelectorAll('.pref-cb:checked');
    if (allChecks.length === 0) {
        select.innerHTML = '<option value="">1つ以上選択してください</option>';
        return;
    }
    
    allChecks.forEach(cb => {
        const opt = document.createElement('option');
        opt.value = cb.value;
        opt.innerText = cb.value;
        select.appendChild(opt);
    });
    
    if (Array.from(allChecks).some(cb => cb.value === prevSelected)) {
        select.value = prevSelected;
    }
}

function saveSettings() {
    const allChecks = document.querySelectorAll('.pref-cb:checked');
    if (allChecks.length === 0) {
        alert("表示する県を1つ以上選んでね！");
        return;
    }
    
    const newPrefs = Array.from(allChecks).map(cb => cb.value);
    const newDefault = document.getElementById('defaultPrefSelect').value;
    
    localStorage.setItem('sorapoke_prefs', JSON.stringify(newPrefs));
    localStorage.setItem('sorapoke_default', newDefault);
    
    savedPrefs = newPrefs;
    savedDefault = newDefault;
    
    closeSettingsModal();
    initTabs(); // 設定を保存したら画面のタブを作り直すよ！
}

// --- 手動更新ボタン用 ---
function manualRefresh() {
    updateArea(currentCode, currentName, null);
    loadWeatherMap();
    fetchNAOJEvents();
}

/* ==========================================
   🌑 月・天文イベント・天気関連エンジン
========================================== */
function getLunarDetails(date) {
    const refDate = new Date(2000, 0, 6, 18, 14);
    const diff = (date - refDate) / (1000 * 60 * 60 * 24);
    const age = diff % 29.53;
    let icon = age < 1 ? "🌑" : age < 7 ? "🌒" : age < 9 ? "🌓" : age < 14 ? "🌔" : age < 16 ? "🌕" : age < 22 ? "🌖" : age < 24 ? "🌗" : "🌘";
    return { age: age.toFixed(1), icon, name: age < 1 ? "新月" : age < 15 ? "満月へ向かう月" : "満月" , desc: "月の満ち欠けを表示しています。" };
}

function updateMoonHeader() {
    const info = getLunarDetails(new Date());
    document.getElementById('headerMoonIcon').innerText = info.icon;
    document.getElementById('headerMoonName').innerText = `月齢 ${info.age}`;
}

function openMoonModal() {
    document.getElementById('moonModal').style.display = 'flex';
    const info = getLunarDetails(new Date());
    document.getElementById('moonLargeIcon').innerText = info.icon;
    document.getElementById('moonPhaseName').innerText = `月齢 ${info.age}`;
    renderAstroEvents();
}
function closeMoonModal() { document.getElementById('moonModal').style.display = 'none'; }

function renderAstroEvents() {
    const container = document.getElementById('eventContainer');
    if(!container) return;
    
    // 今日の日付を境にして、終わったイベントは見せないようにするよ！
    const today = new Date().toISOString().split('T')[0];
    let upcomingEvents = [];

    astroEvents.forEach(e => {
        // "4月22日" のような文字を、比較できるように "04-22" に変換する魔法
        const match = e.date.match(/(\d{1,2})月(\d{1,2})日/);
        if (match) {
            const m = String(match[1]).padStart(2, '0');
            const d = String(match[2]).padStart(2, '0');
            const eventDateStr = `2026-${m}-${d}`; 
            if (eventDateStr >= today) upcomingEvents.push(e);
        } else {
            upcomingEvents.push(e); // 日付がわからないものはとりあえず表示
        }
    });

    if(upcomingEvents.length === 0) {
        container.innerHTML = "今後のイベントは今のところないみたい！";
        return;
    }

    container.innerHTML = upcomingEvents.slice(0, 5).map(e => `
        <div class="event-item">
            <span class="event-tag">${e.type}</span>
            <div style="color:white;"><b>${e.name}</b><br><small style="color:#4ade80;">${e.date}</small></div>
        </div>
    `).join('');
}

async function fetchNAOJEvents() {
    const statusEl = document.getElementById('naojStatus');
    if (!statusEl) return;
    try {
        const now = new Date();
        const year1 = now.getFullYear();
        const month1 = now.getMonth() + 1; 
        let year2 = year1;
        let month2 = month1 + 1; 
        if (month2 > 12) { month2 = 1; year2 += 1; }

        const m1Str = String(month1).padStart(2, '0');
        const m2Str = String(month2).padStart(2, '0');
        const url1 = `https://www.nao.ac.jp/astro/sky/${year1}/${m1Str}.html`;
        const url2 = `https://www.nao.ac.jp/astro/sky/${year2}/${m2Str}.html`;

        const [res1, res2] = await Promise.all([
            fetch(proxyUrl + url1),
            fetch(proxyUrl + url2).catch(() => null) 
        ]);

        let newEvents = [];
        const keywords = ['流星群', '月食', '日食', 'スーパームーン', '接近', '彗星', '満月', '新月', '極大', '最大光度'];

        async function parseMonthlyPage(res, targetMonth) {
            if (!res || !res.ok) return;
            const arrayBuffer = await res.arrayBuffer();
            const textData = new TextDecoder("utf-8").decode(arrayBuffer);
            const parser = new DOMParser();
            const doc = parser.parseFromString(textData, "text/html");
            
            doc.querySelectorAll('header, footer, nav, .local-nav, .breadcrumb').forEach(el => el.remove());
            const fullText = doc.body.textContent.replace(/\s+/g, ' ');
            const parts = fullText.split(/(?:^|[^\d])(\d{1,2})日/); 

            for (let i = 1; i < parts.length; i += 2) {
                const day = parts[i];
                let rawDesc = (parts[i+1] || "").trim();
                
                if (rawDesc.length > 40) {
                    const puncMatch = rawDesc.match(/^[^。！？]*[。！？]/);
                    if (puncMatch && puncMatch[0].length < 40) { rawDesc = puncMatch[0]; } 
                    else { rawDesc = rawDesc.substring(0, 40) + "..."; }
                }

                const hasKeyword = keywords.some(kw => rawDesc.includes(kw));
                const isNoise = rawDesc.includes("カレンダー") || rawDesc.includes("星空") || rawDesc.includes("参照") || rawDesc.includes("特集");

                if (hasKeyword && !isNoise) {
                    let cleanName = rawDesc.replace(/^[\/／には、\s]+/, '').trim();
                    if(!cleanName) continue;
                    let typeTag = "星空";
                    if (cleanName.includes("流星群")) typeTag = "流星群";
                    else if (cleanName.includes("食")) typeTag = "天文現象";
                    else if (cleanName.includes("月") || cleanName.includes("満月") || cleanName.includes("新月")) typeTag = "月";
                    else if (cleanName.includes("接近")) typeTag = "惑星";
                    else if (cleanName.includes("彗星")) typeTag = "彗星";

                    const isDuplicate = newEvents.some(e => e.name === cleanName || e.name.includes(cleanName));
                    if (!isDuplicate) {
                        newEvents.push({ date: `${targetMonth}月${day}日`, name: cleanName, type: typeTag });
                    }
                }
            }
        }

        await parseMonthlyPage(res1, month1);
        if (res2) await parseMonthlyPage(res2, month2);

        if (newEvents.length > 0) {
            astroEvents = newEvents;
            renderAstroEvents();
            statusEl.innerHTML = `✅ ${month1}月・${month2}月の詳細データを取得成功！`;
            statusEl.style.color = "#4ade80";
        } else {
            statusEl.innerHTML = `⚠️ キーワードが見つからなかったよ（予備データを表示）`;
        }
    } catch (err) {
        console.error("NAOJデータ取得エラー:", err);
        statusEl.innerHTML = `⚠️ 通信エラー: 予備のイベントデータを表示中`;
    }
}

async function fetchCurrentWeather(lat, lon, target) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FTokyo`);
        const data = await res.json();
        const info = decodeWMO(data.current_weather.weathercode);
        if(target === 'pref') {
            document.getElementById('prefCurrentDesc').innerText = `${info.icon} ${info.text}`;
            document.getElementById('prefCurrentTemp').innerText = `${data.current_weather.temperature}℃`;
        } else if(target === 'gps') {
            document.getElementById('gpsLoading').style.display = 'none';
            document.getElementById('gpsResult').style.display = 'block';
            document.getElementById('gpsIcon').innerText = info.icon;
            document.getElementById('gpsDesc').innerText = info.text;
            document.getElementById('gpsTemp').innerText = `${data.current_weather.temperature}℃`;
        }
    } catch(e) { console.error("現在の天気取得エラー:", e); }
}

function fetchGPSWeather(isAuto = false) {
    document.getElementById('gpsModal').style.display = 'flex';
    document.getElementById('gpsLoading').style.display = 'block';
    document.getElementById('gpsResult').style.display = 'none';
    
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (pos) => { fetchCurrentWeather(pos.coords.latitude, pos.coords.longitude, 'gps'); },
            (err) => { document.getElementById('gpsLoading').innerText = "GPS情報の取得に失敗しました。"; },
            { timeout: 8000 }
        );
    } else {
        document.getElementById('gpsLoading').innerText = "お使いのブラウザはGPSに対応していません。";
    }
}
function closeModal() { document.getElementById('gpsModal').style.display = 'none'; }

let mapList = [];
let currentMapIndex = 0;
let latestNowIndex = 0;

async function loadWeatherMap() {
    try {
        const res = await fetch('https://www.jma.go.jp/bosai/weather_map/data/list.json');
        const data = await res.json();
        mapList = [];
        if(data.near && data.near.now) {
            mapList.push(...data.near.now);
            latestNowIndex = mapList.length - 1; 
        }
        if(data.near && data.near.ft24) mapList.push(...data.near.ft24);
        if(data.near && data.near.ft48) mapList.push(...data.near.ft48);
        
        currentMapIndex = latestNowIndex; 
        renderMapDisplay();
    } catch(e) { document.getElementById('mapBox').innerText = "天気図の取得に失敗しました。"; }
}

function renderMapDisplay() {
    if(mapList.length === 0) return;
    const mapFile = mapList[currentMapIndex];
    document.getElementById('mapBox').innerHTML = `<img src="https://www.jma.go.jp/bosai/weather_map/data/png/${mapFile}" class="map-img" onclick="window.open(this.src)">`;
    
    let typeText = "実況";
    if (mapFile.includes("ft24") || mapFile.includes("ft48") || mapFile.includes("fsas24")) {
         typeText = "予想";
    }
    document.getElementById('mapLabel').innerText = `[${currentMapIndex + 1}/${mapList.length}] ${typeText}天気図`;
}

function prevMap() {
    if(currentMapIndex > 0) {
        currentMapIndex--;
        renderMapDisplay();
    }
}
function nextMap() {
    if(currentMapIndex < mapList.length - 1) {
        currentMapIndex++;
        renderMapDisplay();
    }
}
function latestMap() {
    currentMapIndex = latestNowIndex;
    renderMapDisplay();
}

async function updateArea(code, name, el) {
    currentCode = code;
    currentName = name;
    
    const loadingOverlay = document.getElementById('loading-overlay');
    if(loadingOverlay) loadingOverlay.style.display = 'block';
    
    const areaLabel = document.getElementById('areaLabel');
    if(areaLabel) areaLabel.innerText = name;
    
    if(el) {
        document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    const coords = prefCoordinates[name] || {lat: 35.689, lon: 139.691};
    fetchCurrentWeather(coords.lat, coords.lon, 'pref');

    try {
        const [fRes, oRes, wRes, iRes] = await Promise.all([
            fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${code}.json`),
            fetch(`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${code}.json`),
            fetch(`https://www.jma.go.jp/bosai/warning/data/warning/${code}.json`),
            fetch(`https://www.jma.go.jp/bosai/information/data/information.json`).catch(() => null)
        ]);

        const fData = await fRes.json();
        const oData = await oRes.json();
        const wData = await wRes.json();
        let iData = null;
        if(iRes && iRes.ok) { iData = await iRes.json(); }

        const mainAreas = fData[0]?.timeSeries[0]?.areas || [];
        let allShortHtml = "";
        let allWeeklyHtml = "";

        mainAreas.forEach((area) => {
            const areaCode = area.area.code;
            const areaName = area.area.name;
            let dailyData = {}; 
            let popMap = {};

            try {
                const shortPopSeries = fData[0]?.timeSeries?.find(s => s.areas && s.areas.some(a => a.pops));
                if (shortPopSeries) {
                    const targetArea = shortPopSeries.areas.find(a => a.area.code === areaCode) || shortPopSeries.areas[0];
                    shortPopSeries.timeDefines.forEach((t, i) => {
                        const dateStr = t.split('T')[0];
                        const popStr = targetArea.pops[i];
                        if (popStr !== undefined && popStr !== "") {
                            const popVal = parseInt(popStr);
                            if (!isNaN(popVal)) {
                                if (popMap[dateStr] === undefined || popVal > popMap[dateStr]) popMap[dateStr] = popVal;
                            }
                        }
                    });
                }
                const weeklyPopSeries = fData[1]?.timeSeries?.find(s => s.areas && s.areas.some(a => a.pops));
                if (weeklyPopSeries) {
                    const targetArea = weeklyPopSeries.areas.find(a => a.area.code === areaCode) || weeklyPopSeries.areas[0];
                    weeklyPopSeries.timeDefines.forEach((t, i) => {
                        const dateStr = t.split('T')[0];
                        const popStr = targetArea.pops[i];
                        if (popStr !== undefined && popStr !== "") {
                            const popVal = parseInt(popStr);
                            if (!isNaN(popVal)) {
                                if (popMap[dateStr] === undefined || popVal > popMap[dateStr]) popMap[dateStr] = popVal;
                            }
                        }
                    });
                }

                if (shortPopSeries) {
                    const targetArea = shortPopSeries.areas.find(a => a.area.code === areaCode) || shortPopSeries.areas[0];
                    shortPopSeries.timeDefines.forEach((t, i) => {
                        const dateStr = t.split('T')[0];
                        const timeHourStr = t.split('T')[1].substring(0, 2);
                        const popStr = targetArea.pops[i];
                        if (!dailyData[dateStr]) dailyData[dateStr] = { popsArray: ["-", "-", "-", "-"] };
                        if (popStr !== undefined && popStr !== "") {
                            let popIdx = -1;
                            if (timeHourStr === "00") popIdx = 0;
                            else if (timeHourStr === "06") popIdx = 1;
                            else if (timeHourStr === "12") popIdx = 2;
                            else if (timeHourStr === "18") popIdx = 3;
                            if (popIdx !== -1) dailyData[dateStr].popsArray[popIdx] = popStr + "%";
                        }
                    });
                }
            } catch (e) {}

            if (fData[0] && fData[0].timeSeries && fData[0].timeSeries[0]) {
                const shortWeather = fData[0].timeSeries[0];
                const targetArea = shortWeather.areas.find(a => a.area.code === areaCode) || shortWeather.areas[0];
                shortWeather.timeDefines.forEach((time, index) => {
                    const dateStr = time.split('T')[0];
                    const d = new Date(time);
                    let dayLabel = `${d.getMonth()+1}/${d.getDate()}`;
                    if(dateStr === new Date().toISOString().split('T')[0]) dayLabel = "今日";
                    else if(dateStr === new Date(Date.now() + 86400000).toISOString().split('T')[0]) dayLabel = "明日";
                    if (!dailyData[dateStr]) dailyData[dateStr] = {};
                    let wText = targetArea.weathers ? targetArea.weathers[index] : telopToText(targetArea.weatherCodes[index]);
                    dailyData[dateStr] = { ...dailyData[dateStr], dateText: dayLabel, weatherCode: targetArea.weatherCodes[index], weatherText: wText, minTemp: dailyData[dateStr].minTemp || "-", maxTemp: dailyData[dateStr].maxTemp || "-", popsArray: dailyData[dateStr].popsArray || ["-", "-", "-", "-"] };
                });
            }

            if (fData[0] && fData[0].timeSeries && fData[0].timeSeries.length > 2) {
                const shortTemps = fData[0].timeSeries[2];
                const targetArea = shortTemps.areas.find(a => a.area.code === areaCode) || shortTemps.areas[0];
                shortTemps.timeDefines.forEach((time, index) => {
                    const dateStr = time.split('T')[0];
                    const timeHour = time.split('T')[1].substring(0, 2);
                    if (dailyData[dateStr] && index < targetArea.temps.length) {
                        const tempValue = targetArea.temps[index];
                        if (timeHour === "00" || timeHour === "06") { dailyData[dateStr].minTemp = tempValue; }
                        else if (timeHour === "09" || timeHour === "12") { dailyData[dateStr].maxTemp = tempValue; }
                    }
                });
            }

            if (fData.length > 1 && fData[1].timeSeries) {
                const weeklyWeather = fData[1].timeSeries[0];
                const weeklyTemps = fData[1].timeSeries.length > 1 ? fData[1].timeSeries[1] : null;
                const targetAreaW = weeklyWeather.areas.find(a => a.area.code === areaCode) || weeklyWeather.areas[0];
                weeklyWeather.timeDefines.forEach((time, index) => {
                    const dateStr = time.split('T')[0];
                    const wCode = targetAreaW.weatherCodes[index];
                    if (!dailyData[dateStr]) dailyData[dateStr] = {};
                    let wText = dailyData[dateStr].weatherText || telopToText(wCode);
                    if (!dailyData[dateStr].weatherCode) {
                        const d = new Date(time);
                        dailyData[dateStr] = { ...dailyData[dateStr], dateText: `${d.getMonth()+1}/${d.getDate()}`, weatherCode: wCode, weatherText: wText, minTemp: "-", maxTemp: "-" };
                    }
                });
                if (weeklyTemps) {
                    const targetAreaT = weeklyTemps.areas.find(a => a.area.code === areaCode) || weeklyTemps.areas[0];
                    weeklyTemps.timeDefines.forEach((time, index) => {
                        const dateStr = time.split('T')[0];
                        if (dailyData[dateStr]) {
                            if (targetAreaT.tempsMin?.[index]) dailyData[dateStr].minTemp = targetAreaT.tempsMin[index];
                            if (targetAreaT.tempsMax?.[index]) dailyData[dateStr].maxTemp = targetAreaT.tempsMax[index];
                        }
                    });
                }
            }

            let shortHtml = ""; let weeklyHtml = ""; let dayCount = 0;
            Object.keys(dailyData).sort().forEach(dateStr => {
                const d = dailyData[dateStr];
                if (!d.weatherCode) return;
                const mappedCode = jmaIconMap[d.weatherCode] || (String(d.weatherCode).charAt(0) + "00");
                const iconUrl = `https://www.jma.go.jp/bosai/forecast/img/${mappedCode}.svg`;
                const popDisplay = popMap[dateStr] !== undefined ? `${popMap[dateStr]}%` : "--%";
                if (dayCount < 3) {
                    let popSectionHtml = `<div class="pop-box">☔ ${popDisplay}</div>`;
                    if (dayCount < 2 && d.popsArray) {
                        popSectionHtml = `<table class="pop-table"><tr><th>0-6</th><th>6-12</th><th>12-18</th><th>18-24</th></tr><tr><td>${d.popsArray[0]}</td><td>${d.popsArray[1]}</td><td>${d.popsArray[2]}</td><td>${d.popsArray[3]}</td></tr></table>`;
                    }
                    shortHtml += `<div class="forecast-day"><div class="forecast-date">${d.dateText}</div><img src="${iconUrl}" class="weather-img"><div class="weather-text">${d.weatherText}</div>${popSectionHtml}<div class="temp-box"><span class="temp-max">${d.maxTemp}${d.maxTemp!=="-"?"℃":""}</span> / <span class="temp-min">${d.minTemp}${d.minTemp!=="-"?"℃":""}</span></div></div>`;
                } else {
                    weeklyHtml += `<div class="forecast-day"><div class="forecast-date">${d.dateText}</div><img src="${iconUrl}" class="weather-img"><div class="weather-text">${d.weatherText}</div><div class="pop-box">☔ ${popDisplay}</div><div class="temp-box"><span class="temp-max">${d.maxTemp}${d.maxTemp!=="-"?"℃":""}</span>/<br><span class="temp-min">${d.minTemp}${d.minTemp!=="-"?"℃":""}</span></div></div>`;
                }
                dayCount++;
            });
            allShortHtml += `<div class="sub-area-card"><h3 class="sub-forecast-title">${areaName}</h3><div class="forecast-container">${shortHtml}</div></div>`;
            allWeeklyHtml += `<div class="sub-area-card"><h3 class="sub-forecast-title">${areaName}</h3><div class="forecast-container">${weeklyHtml}</div></div>`;
        });

        document.getElementById('shortForecastsWrapper').innerHTML = allShortHtml;
        document.getElementById('weeklyForecastsWrapper').innerHTML = allWeeklyHtml;
        document.getElementById('overview').innerText = oData.text || "概況なし";

        const alertBox = document.getElementById('alertContainer');
        let alertHtml = wData.headlineText ? `<div class="warning-badge">📢 ${wData.headlineText}</div>` : "";
        let alerts = [];
        function findWarn(o) {
            if(Array.isArray(o)) o.forEach(findWarn);
            else if(typeof o === 'object' && o !== null) {
                if(o.code && warnMap[o.code] && (o.status==="発表" || o.status==="継続")) alerts.push(warnMap[o.code]);
                for(let k in o) findWarn(o[k]);
            }
        }
        findWarn(wData);
        alerts = [...new Set(alerts)];
        if(alerts.length > 0) alerts.forEach(a => alertHtml += `<div class="${a.includes('警報')?'danger-badge':'warning-badge'}">${a}</div>`);
        else if(!wData.headlineText) alertHtml = `<div class="safe-badge">🟢 現在、警報・注意報はありません</div>`;
        alertBox.innerHTML = alertHtml;
        document.getElementById('linkAlert').href = `https://www.jma.go.jp/bosai/warning/#area_type=offices&area_code=${code}&lang=ja`;

        const infoBox = document.getElementById('infoContainer');
        if(iData) {
            let localInfos = iData.filter(info => {
                const title = info.title || info.headTitle || "";
                const office = info.publishingOffice || "";
                if (name === "京都" && (title.includes("東京都") || office.includes("東京"))) return false; 
                return title.includes(name) || office.includes(name);
            });
            if (localInfos.length > 0) {
                localInfos.sort((a, b) => new Date(b.reportDatetime || 0) - new Date(a.reportDatetime || 0));
                let fHtml = "", cHtml = "", fList = [], cList = [];
                localInfos.forEach(info => {
                    const extT = info.headTitle || info.title || info.controlTitle || '気象情報';
                    if (extT.includes(name) || extT.includes("府") || extT.includes("県")) fList.push(info); else cList.push(info);
                });
                function build(list) {
                    if(!list.length) return "";
                    let m = ""; let a = "";
                    list.forEach((info, index) => {
                        const time = info.reportDatetime ? new Date(info.reportDatetime).toLocaleString('ja-JP', {month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit'}) : "不明";
                        const extT = info.headTitle || info.title || info.controlTitle || '気象情報';
                        const sno = info.serialNo || "";
                        const isL = index === 0;
                        const item = `<a href="https://www.jma.go.jp/bosai/information/#area_type=offices&area_code=${code}" target="_blank" style="text-decoration:none; color:inherit;"><div class="warning-badge" style="${isL?'background:#fff5f5; border-left-color:#e53935;':'background:#e3f2fd;'}"><div style="font-size:0.75rem; color:#666;">🕒 ${time}</div><div style="font-weight:bold;">${isL?'<span style="background:#e53935; color:#fff; padding:2px 4px; border-radius:3px; font-size:0.6rem;">NEW</span> ':''}${extT}${sno?' 第'+sno+'号':''}</div></div></a>`;
                        if(isL) m += item; else a += item;
                    });
                    if(a) m += `<details class="info-accordion"><summary>過去の発表 (${list.length-1}件)</summary>${a}</details>`;
                    return m;
                }
                infoBox.innerHTML = (fList.length ? `<div style="font-size:0.8rem; font-weight:bold; color:var(--primary);">📍 府県情報</div>` + build(fList) : "") + (cList.length ? `<div style="font-size:0.8rem; font-weight:bold; color:#d97706; margin-top:10px;">🌐 地方情報</div>` + build(cList) : "");
            } else infoBox.innerHTML = `<div class="safe-badge">🟢 気象情報はありません</div>`;
        }

        fetch(`https://www.jma.go.jp/bosai/forecaster_comment/data/comments/${code}.txt`).then(res => {
            const iframe = document.getElementById('commentIframe');
            if (res.ok) {
                res.arrayBuffer().then(buf => { if(iframe) iframe.srcdoc = new TextDecoder("utf-8").decode(buf); });
            } else {
                if(iframe) iframe.srcdoc = "コメントはありません。";
            }
        });

    } catch(e) { console.error("Error:", e); }
    
    if(loadingOverlay) {
        setTimeout(() => { loadingOverlay.style.display = 'none'; }, 500);
    }
}

/* 🚀 アプリの起動！（画面との喧嘩を防ぐ「超安全版」） */
document.addEventListener('DOMContentLoaded', () => {
    // 1. 設定を読み込んで、タブを作り直す
    loadSettings();
    initTabs();
    
    // 2. 裏側でいろいろなデータを集める
    updateMoonHeader();
    loadWeatherMap();
    fetchNAOJEvents();
    
    // 3. GPS現在地天気は少し待ってから静かに読み込む
    setTimeout(() => fetchGPSWeather(false), 1000);
});