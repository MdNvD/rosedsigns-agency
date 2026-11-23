/* ==========================================================================
   ROSEDSIGNS - INTERACTIVE FORM VALIDATION & SUBMISSION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const proposalForm = document.getElementById('proposalForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (!proposalForm) return;

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  proposalForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('clientName');
    const emailInput = document.getElementById('clientEmail');
    const phoneInput = document.getElementById('clientPhone');
    const messageInput = document.getElementById('projectMessage');
    const submitBtn = document.getElementById('submitProposalBtn');

    let isValid = true;

    // Reset styles
    [nameInput, emailInput, phoneInput, messageInput].forEach(inp => {
      if (inp) inp.style.borderColor = '';
    });

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.style.borderColor = 'var(--rose-500)';
      nameInput.focus();
      isValid = false;
    }
    // Validate Email
    else if (!validateEmail(emailInput.value.trim())) {
      emailInput.style.borderColor = 'var(--rose-500)';
      emailInput.focus();
      isValid = false;
    }
    // Validate Message
    else if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
      messageInput.style.borderColor = 'var(--rose-500)';
      messageInput.focus();
      isValid = false;
    }

    if (!isValid) return;

    // Button Loading State
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite; margin-right: 0.5rem;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10"/>
      </svg>
      Preparing Proposal Request...
    `;

    // Simulated async submission
    setTimeout(() => {
      proposalForm.style.display = 'none';
      if (formSuccessMessage) {
        formSuccessMessage.style.display = 'block';
        formSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }, 900);
  });

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      proposalForm.reset();
      proposalForm.style.display = 'block';
      if (formSuccessMessage) {
        formSuccessMessage.style.display = 'none';
      }
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input && validateEmail(input.value)) {
        const btn = newsletterForm.querySelector('button');
        btn.textContent = 'Subscribed!';
        btn.style.background = '#10B981';
        input.value = '';
        setTimeout(() => {
          btn.textContent = 'Join';
          btn.style.background = '';
        }, 3000);
      }
    });
  }
});
