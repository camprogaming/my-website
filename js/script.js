document.addEventListener('DOMContentLoaded', () => {
  // Track “Call” clicks
  const callBtn = document.querySelector('.btn-primary');
  if (callBtn) {
    callBtn.addEventListener('click', () => {
      // Replace with your analytics call
      console.log('Analytics: call button clicked');
      // e.g. gtag('event', 'click', { 'event_category': 'Contact', 'event_label': 'Call Us' });
    });
  }

  // Lazy-load the map iframe on demand
  const mapBtn = document.querySelector('.btn-outline');
  const mapContainer = document.querySelector('.contact-map');
  if (mapBtn && mapContainer) {
    let loaded = false;
    mapBtn.addEventListener('click', (e) => {
      if (!loaded) {
        e.preventDefault();  // prevent opening a new tab
        const iframe = document.createElement('iframe');
        iframe.src = 'https://maps.google.com/maps?q=46+Fleetwood+Close+Chalfont+St+Giles+HP8+4DR&output=embed';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        mapContainer.innerHTML = '';   // clear any placeholder
        mapContainer.appendChild(iframe);
        loaded = true;
      }
      // Optionally smooth-scroll to the map
      mapContainer.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
