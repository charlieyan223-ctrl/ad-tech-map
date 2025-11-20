const definitions = {
    // --- ENTITIES ---
    "user": { type: "entity", label: "User", icon: "👤", title: "User / Consumer", pdfName: "User", desc: "The individual consuming content. Their visit triggers the ad opportunity." },
    "publisher": { type: "entity", label: "Publisher", icon: "📰", title: "Publisher", pdfName: "Publisher", desc: "The content creator/owner (e.g., NYTimes, Roku, App). They sell ad space." },
    "advertiser": { type: "entity", label: "Advertiser", icon: "💼", title: "Advertiser", pdfName: "Advertiser", desc: "The brand (e.g., Nike, Coke) buying ad space to reach the user." },
    "agency": { type: "entity", label: "Agency", icon: "🖊️", title: "Media Agency", pdfName: "Agency", desc: "Manages ad buying strategy and execution on behalf of advertisers." },

    // --- TECH: SUPPLY SIDE ---
    "ssp": { type: "tech", label: "SSP", icon: "📦", title: "Supply-Side Platform", pdfName: "Supply-Side Platform (SSP)", desc: "Platform for publishers to manage, sell, and optimize inventory yield." },
    "ad_server": { type: "tech", label: "Ad Server", icon: "🖥️", title: "Ad Server", pdfName: "Ad Server", desc: "Decides which ad to serve (Direct vs Programmatic) and hosts the creative." },
    "prebid": { type: "tech", label: "Prebid", icon: "⚡", title: "Prebid.js", pdfName: "Prebid", desc: "Open-source header bidding wrapper allowing simultaneous auctions." },
    "header_bidding": { type: "tech", label: "Header Bidding", icon: "🔨", title: "Header Bidding", pdfName: "Header Bidding", desc: "Technique to offer inventory to multiple exchanges before the ad server." },
    "demand_manager": { type: "tech", label: "Demand Mgr", icon: "⚙️", title: "Demand Manager", pdfName: "Demand Manager", desc: "Magnite's wrapper management solution for Prebid optimization." },
    "cms": { type: "tech", label: "CMS", icon: "📝", title: "Content Management System", pdfName: "Content Management System (CMS)", desc: "Where publishers manage their content and video assets." },

    // --- TECH: DEMAND SIDE ---
    "dsp": { type: "tech", label: "DSP", icon: "💾", title: "Demand-Side Platform", pdfName: "Demand-Side Platform (DSP)", desc: "Platform for buyers to bid on inventory across multiple exchanges." },
    "dmp": { type: "tech", label: "DMP", icon: "📊", title: "Data Management Platform", pdfName: "Data Management Platform (DMP)", desc: "Warehouses audience data for targeting (cookie-based)." },

    // --- MARKETPLACES ---
    "ad_exchange": { type: "market", label: "Ad Exchange", icon: "⇄", title: "Ad Exchange", pdfName: "Ad Exchange", desc: "The digital marketplace where SSPs and DSPs transact." },
    "open_marketplace": { type: "market", label: "Open Market", icon: "🌐", title: "Open Marketplace (OMP)", pdfName: "Open Marketplace", desc: "Public auction open to all buyers. High scale, lower transparency." },
    "pmp": { type: "market", label: "PMP", icon: "🔒", title: "Private Marketplace", pdfName: "Private Marketplace (PMP)", desc: "Invite-only auction with curated inventory and higher transparency." },
    "prog_guaranteed": { type: "market", label: "Prog. Gtd", icon: "🤝", title: "Programmatic Guaranteed (PG)", pdfName: "Programmatic Guaranteed", desc: "Direct deal executed programmatically. Fixed price, guaranteed volume." },

    // --- DATA & IDENTITY ---
    "first_party_data": { type: "data", label: "1st Party Data", icon: "🔑", title: "First-Party Data", pdfName: "First-Party Data", desc: "Data collected directly by the publisher or advertiser from their users." },
    "third_party_data": { type: "data", label: "3rd Party Data", icon: "🌍", title: "Third-Party Data", pdfName: "Third-Party Data", desc: "Data aggregated from various sources, often sold by data providers." },
    "cookies": { type: "data", label: "Cookies", icon: "🍪", title: "Cookies", pdfName: "Cookies", desc: "Browser-based identifiers used for tracking and targeting (deprecating)." },
    "universal_ids": { type: "data", label: "Universal IDs", icon: "🆔", title: "Universal IDs", pdfName: "Universal IDs", desc: "Shared identity solutions (e.g., UID2) to replace cookies." },
    "clean_room": { type: "data", label: "Clean Room", icon: "🛡️", title: "Data Clean Room", pdfName: "Data Clean Room", desc: "Secure environment to match user data without sharing PII." },
    "contextual": { type: "data", label: "Contextual", icon: "👁️", title: "Contextual Targeting", pdfName: "Contextual Targeting", desc: "Targeting based on the content being consumed, not user identity." },
    "idfa": { type: "data", label: "IDFA", icon: "📱", title: "ID for Advertisers", pdfName: "IDFA", desc: "Apple's mobile device identifier (requires user opt-in)." },

    // --- METRICS & CONCEPTS ---
    "cpm": { type: "metric", label: "CPM", icon: "💲", title: "Cost Per Mille", pdfName: "CPM (Cost Per Mille)", desc: "Cost per 1,000 impressions. The standard pricing model." },
    "fill_rate": { type: "metric", label: "Fill Rate", icon: "📈", title: "Fill Rate", pdfName: "Fill Rate", desc: "Percentage of ad requests that are successfully filled with an ad." },
    "yield": { type: "metric", label: "Yield", icon: "💰", title: "Yield", pdfName: "Yield", desc: "Total revenue generated from inventory." },
    "floor_price": { type: "metric", label: "Floor Price", icon: "🛑", title: "Floor Price", pdfName: "Floor Price", desc: "Minimum price a publisher will accept for an impression." },
    "rtb": { type: "concept", label: "RTB", icon: "⏱️", title: "Real-Time Bidding", pdfName: "Real-Time Bidding (RTB)", desc: "The protocol for auctioning impressions in milliseconds." },
    "programmatic": { type: "concept", label: "Programmatic", icon: "🤖", title: "Programmatic Advertising", pdfName: "Programmatic", desc: "Automated buying and selling of ad inventory." },
    "dpo": { type: "concept", label: "DPO", icon: "📉", title: "Demand Path Optimization", pdfName: "Demand Path Optimization (DPO)", desc: "Publishers optimizing which demand sources they work with." },
    "spo": { type: "concept", label: "SPO", icon: "🔍", title: "Supply Path Optimization", pdfName: "Supply Path Optimization (SPO)", desc: "Buyers optimizing the most efficient path to inventory." },
    "walled_garden": { type: "concept", label: "Walled Garden", icon: "🏰", title: "Walled Garden", pdfName: "Walled Garden", desc: "Closed ecosystems (Google, Facebook) that control their own data/tech." },

    // --- REGULATION ---
    "gdpr": { type: "reg", label: "GDPR", icon: "🇪🇺", title: "GDPR", pdfName: "GDPR", desc: "EU privacy regulation requiring user consent for data collection." },
    "ccpa": { type: "reg", label: "CCPA", icon: "🇺🇸", title: "CCPA", pdfName: "CCPA", desc: "California privacy law giving consumers control over their data." },
};

// Horizontal Layout Coordinates (x, y)
const nodePositions = {
    // Main Pipeline (Y ~ 400)
    "advertiser": { x: 100, y: 400 },
    "agency": { x: 300, y: 300 },
    "dsp": { x: 500, y: 400 },
    "ad_exchange": { x: 800, y: 400 },
    "ssp": { x: 1100, y: 400 },
    "publisher": { x: 1400, y: 400 },
    "user": { x: 1700, y: 400 },

    // Supply Tech (Around Publisher/SSP)
    "ad_server": { x: 1400, y: 250 },
    "cms": { x: 1400, y: 550 },
    "prebid": { x: 1250, y: 300 },
    "header_bidding": { x: 1250, y: 120 },
    "demand_manager": { x: 1100, y: 250 },

    // Demand Tech (Around DSP)
    "dmp": { x: 500, y: 550 },

    // Marketplaces (Around Exchange)
    "open_marketplace": { x: 800, y: 250 },
    "pmp": { x: 800, y: 550 },
    "prog_guaranteed": { x: 950, y: 550 },

    // Data (Top/Bottom Periphery)
    "first_party_data": { x: 100, y: 200 },
    "third_party_data": { x: 300, y: 600 },
    "cookies": { x: 500, y: 700 },
    "universal_ids": { x: 700, y: 700 },
    "clean_room": { x: 300, y: 150 },
    "contextual": { x: 1100, y: 550 },
    "idfa": { x: 1700, y: 550 },

    // Concepts & Metrics (Scattered meaningfully)
    "rtb": { x: 800, y: 150 },
    "programmatic": { x: 650, y: 150 },
    "cpm": { x: 950, y: 150 },
    "fill_rate": { x: 1550, y: 250 },
    "yield": { x: 1100, y: 100 },
    "floor_price": { x: 1250, y: 550 },
    "spo": { x: 650, y: 550 },
    "dpo": { x: 1250, y: 700 },
    "walled_garden": { x: 100, y: 600 },

    // Regulation
    "gdpr": { x: 1700, y: 250 },
    "ccpa": { x: 1850, y: 250 }
};

const connections = [
    { from: "user", to: "publisher", desc: "Visits website/app" },
    { from: "cms", to: "publisher", desc: "Content metadata" },
    { from: "publisher", to: "ad_server", desc: "Ad decision request" },
    { from: "publisher", to: "header_bidding", desc: "Yield optimization" },
    { from: "header_bidding", to: "prebid", desc: "Wrapper tech" },
    { from: "prebid", to: "demand_manager", desc: "Management wrapper" },
    { from: "demand_manager", to: "ssp", desc: "Demand access" },
    { from: "prebid", to: "ssp", desc: "Bid requests" },
    { from: "ad_server", to: "programmatic", desc: "Prog. decision" },
    { from: "ssp", to: "ad_exchange", desc: "Inventory access" },
    { from: "ssp", to: "open_marketplace", desc: "Open auction" },
    { from: "ssp", to: "pmp", desc: "Private deals" },
    { from: "ssp", to: "prog_guaranteed", desc: "Guaranteed deals" },
    { from: "ad_exchange", to: "dsp", desc: "Bid requests" },
    { from: "open_marketplace", to: "dsp", desc: "Open bids" },
    { from: "pmp", to: "dsp", desc: "Deal ID bids" },
    { from: "prog_guaranteed", to: "dsp", desc: "Guaranteed fulfillment" },
    { from: "dsp", to: "agency", desc: "Execution" },
    { from: "agency", to: "advertiser", desc: "Strategy & Reporting" },
    { from: "first_party_data", to: "advertiser", desc: "CRM onboarding" },
    { from: "dmp", to: "dsp", desc: "Audience segments" },
    { from: "clean_room", to: "advertiser", desc: "Safe matching" },
    { from: "contextual", to: "ssp", desc: "Content signals" },
    { from: "universal_ids", to: "prebid", desc: "ID resolution" },
    { from: "gdpr", to: "user", desc: "Privacy rights" },
    { from: "rtb", to: "ad_exchange", desc: "Auction protocol" }
];

const demandTourSteps = [
    { id: "advertiser", text: "DEMAND TOUR: We start with the **Advertiser** (e.g., Nike) who wants to reach a specific audience." },
    { id: "agency", text: "They hire an **Agency** to create the campaign strategy and creative assets." },
    { id: "dsp", text: "The Agency uses a **DSP** (Demand-Side Platform) to set up targeting and bid on inventory." },
    { id: "dmp", text: "The DSP uses data from a **DMP** to find the right audience (e.g., 'Running Enthusiasts')." },
    { id: "ad_exchange", text: "The DSP connects to an **Ad Exchange** to find available ad slots in real-time." },
    { id: "ssp", text: "The winning bid is passed to the **SSP** (Supply-Side Platform), which represents the Publisher." },
    { id: "publisher", text: "The **Publisher** receives the ad creative to display on their site or app." },
    { id: "user", text: "Finally, the **User** sees the ad, completing the cycle from Advertiser to Consumer." }
];

const supplyTourSteps = [
    { id: "user", text: "SUPPLY TOUR: It begins with the **User** visiting a website or app." },
    { id: "publisher", text: "The **Publisher** (e.g., NYTimes) creates the content and has ad slots to fill." },
    { id: "ssp", text: "Publishers use an **SSP** to put their inventory up for sale to multiple buyers." },
    { id: "ad_server", text: "The **Ad Server** makes the final decision on which ad to show (Direct vs. Programmatic)." },
    { id: "ad_exchange", text: "The SSP connects to the **Ad Exchange** to auction the inventory to DSPs." }
];

let currentTourSteps = [];
let currentStepIndex = -1;
let autoPlayInterval = null;

// Zoom & Pan State
let scale = 1;
let panning = false;
let pointX = 0;
let pointY = 0;
let startX = 0;
let startY = 0;

document.addEventListener('DOMContentLoaded', () => {
    renderFlowChart();
    setupZoomPan();

    // Initial Draw
    setTimeout(() => {
        drawConnections();
    }, 100);

    // UI Events
    document.getElementById('close-info').addEventListener('click', () => {
        deselectAll();
    });

    document.getElementById('clear-selection').addEventListener('click', () => {
        deselectAll();
    });

    // Tour Buttons
    document.getElementById('btn-tour-demand').addEventListener('click', () => startTour('demand'));
    document.getElementById('btn-tour-supply').addEventListener('click', () => startTour('supply'));

    document.getElementById('btn-next').addEventListener('click', nextStep);
    document.getElementById('btn-prev').addEventListener('click', prevStep);
    document.getElementById('btn-play').addEventListener('click', toggleAutoPlay);
    document.getElementById('btn-exit').addEventListener('click', exitTour);
});

function renderFlowChart() {
    const canvas = document.getElementById('canvas');

    Object.keys(nodePositions).forEach(nodeId => {
        const pos = nodePositions[nodeId];
        const def = definitions[nodeId];
        if (!def) return;

        const el = document.createElement('div');
        el.className = `node node-${def.type}`;
        el.id = `node-${nodeId}`;
        el.dataset.id = nodeId;
        el.style.left = `${pos.x}px`;
        el.style.top = `${pos.y}px`;

        el.innerHTML = `
            <div class="node-icon">${def.icon || ''}</div>
            <div class="node-label">${def.label}</div>
            <div class="node-sub">${def.type.toUpperCase()}</div>
        `;

        el.addEventListener('mousedown', (e) => e.stopPropagation()); // Prevent drag start on click
        el.addEventListener('click', () => {
            // Toggle behavior
            if (el.classList.contains('active')) {
                deselectAll();
            } else {
                stopAutoPlay();
                showInfo(nodeId);
            }
        });

        canvas.appendChild(el);
    });
}

function setupZoomPan() {
    const viewport = document.getElementById('viewport');
    const canvas = document.getElementById('canvas');

    viewport.addEventListener('mousedown', (e) => {
        // If clicking on empty space, deselect
        if (e.target === viewport || e.target === canvas) {
            deselectAll();
        }

        e.preventDefault();
        startX = e.clientX - pointX;
        startY = e.clientY - pointY;
        panning = true;
    });

    document.addEventListener('mouseup', () => {
        panning = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (!panning) return;
        e.preventDefault();
        pointX = e.clientX - startX;
        pointY = e.clientY - startY;
        updateTransform();
    });

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const xs = (e.clientX - pointX) / scale;
        const ys = (e.clientY - pointY) / scale;
        const delta = -e.deltaY;

        (delta > 0) ? (scale *= 1.1) : (scale /= 1.1);

        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        updateTransform();
    });
}

function updateTransform() {
    const canvas = document.getElementById('canvas');
    canvas.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function drawConnections() {
    const svg = document.getElementById('connections-layer');
    svg.innerHTML = '';

    connections.forEach(conn => {
        const fromEl = document.getElementById(`node-${conn.from}`);
        const toEl = document.getElementById(`node-${conn.to}`);

        if (fromEl && toEl) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", calculatePath(fromEl, toEl));
            path.setAttribute("class", "connection-path");
            path.id = `conn-${conn.from}-${conn.to}`;
            svg.appendChild(path);
        }
    });
}

function calculatePath(el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    const canvasRect = document.getElementById('canvas').getBoundingClientRect();

    const x1 = (rect1.left - canvasRect.left + rect1.width / 2) / scale;
    const y1 = (rect1.top - canvasRect.top + rect1.height / 2) / scale;
    const x2 = (rect2.left - canvasRect.left + rect2.width / 2) / scale;
    const y2 = (rect2.top - canvasRect.top + rect2.height / 2) / scale;

    const cp1x = x1 + (x2 - x1) / 2;
    const cp1y = y1;
    const cp2x = x1 + (x2 - x1) / 2;
    const cp2y = y2;

    return `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
}

function deselectAll() {
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active', 'dimmed'));
    document.querySelectorAll('.connection-path').forEach(p => p.classList.remove('active'));
    document.getElementById('info-overlay').classList.remove('visible');
}

function showInfo(id) {
    const def = definitions[id];
    const overlay = document.getElementById('info-overlay');

    // Inject PDF Search Term
    const pdfHtml = def.pdfName ? `
        <div class="pdf-search-box">
            <span class="pdf-label">Search in PDF</span>
            <span class="pdf-term">${def.pdfName}</span>
        </div>
    ` : '';

    document.getElementById('info-title').innerHTML = `${def.title}`;
    document.getElementById('info-desc').innerHTML = `${pdfHtml}${def.desc}`;
    document.getElementById('info-type').textContent = def.type.toUpperCase();

    const relContainer = document.getElementById('info-relationships');
    relContainer.innerHTML = '';

    const rels = [];
    connections.forEach(conn => {
        if (conn.from === id) {
            rels.push({ type: 'outgoing', target: conn.to, desc: conn.desc });
        }
        if (conn.to === id) {
            rels.push({ type: 'incoming', target: conn.from, desc: conn.desc });
        }
    });

    if (rels.length > 0) {
        const list = document.createElement('div');
        list.className = 'rel-list';
        rels.forEach(rel => {
            const item = document.createElement('div');
            const targetDef = definitions[rel.target];
            const isOutgoing = rel.type === 'outgoing';
            const arrow = isOutgoing ? '→' : '←';
            const arrowClass = isOutgoing ? 'arrow-out' : 'arrow-in';

            item.className = 'rel-item';
            // Add click handler to jump to related node
            item.onclick = () => {
                showInfo(rel.target);
                centerOnNode(document.getElementById(`node-${rel.target}`));
            };

            item.innerHTML = `
                <div class="rel-icon ${arrowClass}">${arrow}</div>
                <div class="rel-details">
                    <span class="rel-target">${targetDef.label}</span>
                    <span class="rel-desc">${rel.desc}</span>
                </div>
            `;
            list.appendChild(item);
        });
        relContainer.appendChild(list);
    } else {
        relContainer.innerHTML = '<p class="no-rels">No direct connections mapped.</p>';
    }

    overlay.classList.add('visible');
    highlightNode(id);
}

function highlightNode(id) {
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active', 'dimmed'));
    document.querySelectorAll('.connection-path').forEach(p => p.classList.remove('active'));

    const relatedIds = new Set([id]);
    connections.forEach(conn => {
        if (conn.from === id) relatedIds.add(conn.to);
        if (conn.to === id) relatedIds.add(conn.from);
    });

    document.querySelectorAll('.node').forEach(n => {
        if (relatedIds.has(n.dataset.id)) {
            n.classList.add('active');
        } else {
            n.classList.add('dimmed');
        }
    });

    connections.forEach(conn => {
        if (conn.from === id || conn.to === id) {
            document.getElementById(`conn-${conn.from}-${conn.to}`)?.classList.add('active');
        }
    });
}

// --- TOUR LOGIC ---

function startTour(type) {
    if (type === 'demand') {
        currentTourSteps = demandTourSteps;
    } else {
        currentTourSteps = supplyTourSteps;
    }

    currentStepIndex = 0;

    // Toggle Buttons
    document.getElementById('tour-start-buttons').classList.add('hidden');
    document.getElementById('tour-nav-buttons').classList.remove('hidden');

    updateTourUI();
}

function updateTourUI() {
    document.getElementById('step-total').textContent = currentTourSteps.length;
    document.getElementById('step-current').textContent = currentStepIndex + 1;

    if (currentStepIndex >= 0 && currentStepIndex < currentTourSteps.length) {
        const step = currentTourSteps[currentStepIndex];
        const formattedText = step.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        document.getElementById('tour-text').innerHTML = formattedText;

        showInfo(step.id);

        const node = document.getElementById(`node - ${step.id} `);
        if (node) {
            centerOnNode(node);
        }
    }
}

function centerOnNode(node) {
    const pos = nodePositions[node.dataset.id];
    const viewport = document.getElementById('viewport');

    pointX = (viewport.clientWidth / 2) - (pos.x * scale) - 70;
    pointY = (viewport.clientHeight / 2) - (pos.y * scale) - 50;

    updateTransform();
}

function nextStep() {
    if (currentStepIndex < currentTourSteps.length - 1) {
        currentStepIndex++;
        updateTourUI();
    } else {
        stopAutoPlay();
        // Optional: Loop or End? Let's just stop at the end.
    }
}

function prevStep() {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        updateTourUI();
    }
}

function toggleAutoPlay() {
    const btn = document.getElementById('btn-play');
    if (autoPlayInterval) {
        stopAutoPlay();
    } else {
        btn.textContent = "⏸ Pause";
        btn.classList.add('active');
        if (currentStepIndex === currentTourSteps.length - 1) currentStepIndex = -1; // Restart if at end
        if (currentStepIndex === -1) nextStep();
        autoPlayInterval = setInterval(nextStep, 3500);
    }
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    const btn = document.getElementById('btn-play');
    btn.textContent = "▶ Auto Play";
    btn.classList.remove('active');
}

function exitTour() {
    stopAutoPlay();
    currentStepIndex = -1;
    currentTourSteps = [];

    document.getElementById('tour-start-buttons').classList.remove('hidden');
    document.getElementById('tour-nav-buttons').classList.add('hidden');

    document.getElementById('tour-text').textContent = "Select a tour to begin exploring the ecosystem.";
    document.getElementById('step-current').textContent = "0";
    document.getElementById('step-total').textContent = "0";

    document.querySelectorAll('.node').forEach(n => n.classList.remove('active', 'dimmed'));
    document.querySelectorAll('.connection-path').forEach(p => p.classList.remove('active'));
    document.getElementById('info-overlay').classList.remove('visible');
}
