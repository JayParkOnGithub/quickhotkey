let lastHoveredVideo = null;

document.addEventListener('mouseover', (e) => {
  const videoContainer = e.target.closest(
    'ytd-rich-grid-media, ytd-video-renderer, ytd-grid-video-renderer'
  );
  if (videoContainer) {
    lastHoveredVideo = videoContainer;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'w' && lastHoveredVideo) {
    const menuBtn = lastHoveredVideo.querySelector(
      'button[aria-label="Action menu"], button[aria-label="More actions"]'
    );
    if (menuBtn) {
      menuBtn.click();
      const menuItem = Array.from(
        document.querySelectorAll(
          'ytd-menu-service-item-renderer yt-formatted-string'
        )
      ).find(
        (el) => el.textContent.trim().toLowerCase() === 'save to watch later'
      );
      if (menuItem) {
        menuItem.click();
        setTimeout(() => {
          document.body.click();
        }, 100);
      }
    }
  }
});
