import { moreActionsLabels } from './actionLabel.js';

let lastHoveredVideo = null;

const userLanguage = document.documentElement.lang.slice(0, 2);

document.addEventListener('mouseover', (e) => {
  const videoContainer = e.target.closest(
    'ytd-rich-item-renderer, ytd-rich-grid-media, ytd-video-renderer, ytd-grid-video-renderer'
  );
  if (videoContainer) {
    lastHoveredVideo = videoContainer;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'w' && lastHoveredVideo) {
    const menuBtn = lastHoveredVideo.querySelector(
      `button[aria-label="${moreActionsLabels[userLanguage]}"]`
    );
    if (menuBtn) {
      menuBtn.click();
      // Wait a short time for the menu to appear
      setTimeout(() => {
        // Select all menu items using the correct class
        let menuItems = document.querySelectorAll(
          '.yt-list-item-view-model-wiz'
        );

        if (menuItems.length >= 2) {
          menuItems[1].click();
          setTimeout(() => {
            document.body.click();
          }, 100);
        }
      }, 200); // Increased timeout
    }
  }
});
