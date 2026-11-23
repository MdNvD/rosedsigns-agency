/* ==========================================================================
   ROSEDSIGNS - INTERACTIVE PROJECT ESTIMATOR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const serviceOptions = document.querySelectorAll('[data-estimator-service]');
  const scaleOptions = document.querySelectorAll('[data-estimator-scale]');
  const timelineOptions = document.querySelectorAll('[data-estimator-timeline]');

  const priceDisplay = document.getElementById('estimatedPrice');
  const timelineDisplay = document.getElementById('estimatedTimeline');
  const applyBtn = document.getElementById('applyEstimateBtn');

  // Pricing Matrix Models
  const serviceBasePrices = {
    'brand-identity': { base: 1800, time: '2-3 weeks', name: 'Brand Strategy & Identity' },
    'web-development': { base: 3200, time: '4-5 weeks', name: 'High-Performance Web Development' },
    'digital-marketing': { base: 2200, time: 'Monthly Retainer', name: 'Connected Digital Marketing' },
    'growth-bundle': { base: 5800, time: '6-8 weeks', name: 'All-In-One Brand & Web Growth Suite' }
  };

  const scaleMultipliers = {
    'starter': { mult: 1.0, label: 'Starter / Local Reach' },
    'growth': { mult: 1.6, label: 'Growth / Multi-Location' },
    'enterprise': { mult: 2.6, label: 'Enterprise / Australasia-Wide' }
  };

  const timelineModifiers = {
    'standard': { mult: 1.0, label: 'Standard Schedule' },
    'express': { mult: 1.25, label: 'Priority Sprint (+25%)' },
    'flexible': { mult: 0.95, label: 'Flexible Window (-5%)' }
  };

  let currentService = 'web-development';
  let currentScale = 'growth';
  let currentTimeline = 'standard';

  function updateEstimate() {
    const serviceData = serviceBasePrices[currentService] || serviceBasePrices['web-development'];
    const scaleData = scaleMultipliers[currentScale] || scaleMultipliers['growth'];
    const timelineData = timelineModifiers[currentTimeline] || timelineModifiers['standard'];

    const calculatedPrice = Math.round(serviceData.base * scaleData.mult * timelineData.mult);
    const formattedPrice = '$' + calculatedPrice.toLocaleString('en-US');

    if (priceDisplay) {
      priceDisplay.textContent = formattedPrice;
    }

    if (timelineDisplay) {
      let timelineText = serviceData.time;
      if (currentTimeline === 'express') {
        timelineText += ' (Accelerated Delivery)';
      }
      timelineDisplay.textContent = timelineText;
    }
  }

  // Event Listeners for Service Selection
  serviceOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      serviceOptions.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentService = btn.getAttribute('data-estimator-service');
      updateEstimate();
    });
  });

  // Event Listeners for Scale Selection
  scaleOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      scaleOptions.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentScale = btn.getAttribute('data-estimator-scale');
      updateEstimate();
    });
  });

  // Event Listeners for Timeline Selection
  timelineOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      timelineOptions.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentTimeline = btn.getAttribute('data-estimator-timeline');
      updateEstimate();
    });
  });

  // Synchronize Estimate to Contact Form
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });

        // Map to checkboxes in form
        const serviceCheckboxes = document.querySelectorAll('input[name="services[]"]');
        serviceCheckboxes.forEach(cb => {
          if (currentService === 'growth-bundle') {
            cb.checked = true;
          } else if (currentService === 'brand-identity' && cb.value === 'Branding') {
            cb.checked = true;
          } else if (currentService === 'web-development' && cb.value === 'Web Design') {
            cb.checked = true;
          } else if (currentService === 'digital-marketing' && cb.value === 'Digital Marketing') {
            cb.checked = true;
          }
        });

        // Set budget selector if applicable
        const budgetSelect = document.getElementById('budgetSelect');
        if (budgetSelect) {
          const serviceData = serviceBasePrices[currentService];
          const scaleData = scaleMultipliers[currentScale];
          const price = Math.round(serviceData.base * scaleData.mult);
          if (price < 3000) {
            budgetSelect.value = '$2k - $5k';
          } else if (price < 6000) {
            budgetSelect.value = '$5k - $10k';
          } else {
            budgetSelect.value = '$10k+';
          }
        }

        // Pre-fill message field
        const messageField = document.getElementById('projectMessage');
        if (messageField) {
          const serviceName = serviceBasePrices[currentService].name;
          const scaleName = scaleMultipliers[currentScale].label;
          messageField.value = `Hi RoseDsigns Team,\n\nI configured an estimate for ${serviceName} (${scaleName}) with an estimated target around ${priceDisplay ? priceDisplay.textContent : '$3,000+'}. I'd love to schedule a discovery call to discuss our brand goals.`;
        }
      }
    });
  }

  // Initialize on load
  updateEstimate();
});
