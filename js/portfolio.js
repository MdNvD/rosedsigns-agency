/* ==========================================================================
   ROSEDSIGNS - PORTFOLIO & CASE STUDY MODAL SYSTEM
   ========================================================================== */

const caseStudiesData = {
  'a2b-perth': {
    title: 'A2B Perth: Digital Footprint & Localized Culinary Experience',
    client: 'Adyar Ananda Bhavan (Perth, WA)',
    category: 'Hospitality & F&B',
    heroImage: 'assets/a2b-perth.svg',
    summary: 'Establishing a beloved traditional South Indian vegetarian hospitality icon into Perth’s vibrant dining scene across Harrisdale and Yokine with high-converting web and viral social presence.',
    challenge: 'A2B is a legendary household name in India, but establishing brand resonance and footfall in Western Australia required balancing authentic cultural heritage with modern, mobile-first dining habits, online reservations, and hyper-local Perth discovery.',
    solution: 'RoseDsigns crafted a high-speed, appetizing responsive website integrated with Google Business Map Pack optimization, streamlined digital menu browsing, and produced weekly high-engagement video reels capturing sizzling dosas and artisan sweets.',
    results: [
      { metric: '+185%', label: 'Local Footfall & Dine-in Growth' },
      { metric: '4.9★', label: 'Average Customer Rating across 2.4k+ Reviews' },
      { metric: '150K+', label: 'Organic Reel Impressions in Perth' }
    ],
    deliverables: ['Custom Responsive Web Portal', 'Local SEO & Google Profile Domination', 'Cinematic Foodie Video Production', 'Social Media Strategy & Content Calendars']
  },
  'thirai-flicks': {
    title: 'Thirai Flicks: Australasian Cinema & Live Concert Marketing',
    client: 'Thirai Flicks Entertainment',
    category: 'Entertainment & Cinema',
    heroImage: 'assets/thirai-flicks.svg',
    summary: 'Powering blockbuster theatrical releases and premier music concerts across Australia, New Zealand, Fiji, and Papua New Guinea with high-octane digital campaigns.',
    challenge: 'Theatrical distribution operates on fierce timelines where opening weekend ticket sales dictate box-office success. Thirai Flicks needed a centralized digital hub and aggressive multi-region ad targeting that could convert cinephiles into advance ticket holders.',
    solution: 'We engineered dynamic event landing pages with automated theater-locator widgets, synchronized multi-platform trailer drops, and high-conversion retargeting ad campaigns tailored by city (Perth, Sydney, Melbourne, Auckland).',
    results: [
      { metric: '50K+', label: 'Advance Tickets Sold Across ANZ' },
      { metric: '4.4x', label: 'Verified Return On Ad Spend (ROAS)' },
      { metric: '100%', label: 'Sold-Out Premiere Shows' }
    ],
    deliverables: ['Dynamic Box-Office Event Pages', 'Multi-Region Meta & YouTube Ad Funnels', 'Motion Graphics & Promotional Cutdowns', 'Press & Influencer Amplification Kits']
  },
  'biriyani-box': {
    title: 'Biriyani Box: Visual Identity & Cloud Kitchen Delivery Launch',
    client: 'Biriyani Box Australia',
    category: 'Hospitality & F&B',
    heroImage: 'assets/biriyani-box.svg',
    summary: 'A spicy, distinctive brand system and ultra-smooth mobile ordering interface built for an innovative takeaway and cloud-kitchen concept.',
    challenge: 'Standing out in a competitive takeaway market required an unmistakable visual identity—from biodegradable food packaging to the Instagram grid—coupled with a frictionless mobile ordering experience that bypassed high third-party aggregator commissions.',
    solution: 'RoseDsigns conceived an energetic brand identity featuring bespoke typography, vibrant color palettes, appetizing eco-packaging guidelines, and an instant-loading progressive web ordering experience.',
    results: [
      { metric: '3.4x', label: 'Direct Online Order Volume Lift' },
      { metric: '26%', label: 'Repeat Customer Retention Rate' },
      { metric: '42K+', label: 'Organic Social Community Reach' }
    ],
    deliverables: ['Comprehensive Visual Brand Identity', 'Custom Takeaway Packaging Architecture', 'Mobile-First Ordering Web Experience', 'Local Foodie Influencer Campaigns']
  },
  'aura-living': {
    title: 'Aura Living & Decor: Editorial Architecture & E-Commerce Showcase',
    client: 'Aura Living Studio',
    category: 'Web Development',
    heroImage: 'assets/aura-living.svg',
    summary: 'A minimalist, architectural digital showroom designed for luxury home decor, bespoke furniture, and private interior design consultations.',
    challenge: 'Aura needed a digital presence that mirrored the tactile elegance of their physical gallery, with flawless high-res photography loading without compromising Core Web Vitals or mobile performance.',
    solution: 'We developed an ultra-minimalist, editorial website utilizing modern CSS grid, buttery-smooth fluid transitions, and a direct inquiry drawer for high-ticket bespoke commissions.',
    results: [
      { metric: '99/100', label: 'Google Lighthouse Performance Score' },
      { metric: '64%', label: 'Consultation Inquiry Conversion' },
      { metric: '1.2s', label: 'Average Page Load on Mobile' }
    ],
    deliverables: ['Editorial UI/UX Design System', 'High-Performance Web Development', 'Micro-Interactions & Virtual Catalog', 'Search Engine Optimization']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Portfolio Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 2. Case Study Modal System
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalDynamicContent');

  function openCaseStudy(studyId) {
    const data = caseStudiesData[studyId];
    if (!data || !modalOverlay || !modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-header-meta">
        <span class="project-tag" style="background: var(--rose-500);">${data.category}</span>
        <h4 style="font-size: 0.95rem; text-transform: uppercase; color: var(--rose-500); margin-top: 0.75rem; font-weight: 700;">${data.client}</h4>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin-bottom: 1.2rem; margin-top: 0.4rem;">${data.title}</h2>
      </div>

      <img src="${data.heroImage}" alt="${data.title}" class="modal-hero-img" loading="lazy" />

      <div class="modal-metrics-row">
        ${data.results.map(r => `
          <div class="modal-metric-box">
            <h4>${r.metric}</h4>
            <p>${r.label}</p>
          </div>
        `).join('')}
      </div>

      <div class="modal-body-section" style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.3rem; margin-bottom: 0.75rem;">The Challenge</h3>
        <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">${data.challenge}</p>

        <h3 style="font-size: 1.3rem; margin-bottom: 0.75rem;">The RoseDsigns Solution</h3>
        <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">${data.solution}</p>

        <h3 style="font-size: 1.3rem; margin-bottom: 0.75rem;">Core Deliverables</h3>
        <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.6rem; margin-top: 0.5rem;">
          ${data.deliverables.map(d => `
            <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.92rem; color: var(--text-main);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--rose-500)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${d}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="border-top: 1px solid var(--border-hairline); padding-top: 1.8rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span style="font-size: 0.9rem; color: var(--text-muted);">Want similar bloom for your brand?</span>
        <button class="btn btn-primary" onclick="document.getElementById('caseStudyModal').classList.remove('open'); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});">
          Discuss Your Project
        </button>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const studyId = card.getAttribute('data-project-id');
      openCaseStudy(studyId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
