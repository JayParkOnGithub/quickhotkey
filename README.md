## Quick Hotkey for YouTube (Chrome Extension)

Quickly save the video you're hovering over to Watch Later with a single key.

### Inspiration

This extension was created out of sheer lazyness and annoyance that Youtube's Main page will frequently swap out videos that you may have wanted to watch later. With this extension, it's possible to load up all of the videos you want to watch quickly and not feel bad that you missed a video that you wanted to watch.

### What it does

- Press the "W" key while hovering a YouTube video card to open the action menu and select the Watch Later option automatically.
- Works across 34(ish) languages. I tried to include most of the common languages spoken around the world, but if the extension does not work, please create an issue on Github.

### Usage

1. Hover your mouse over any video card on YouTube (home feed, search results, etc.).
2. Press `W`.
3. The extension opens the action menu and clicks the second menu item, adding the video to Watch Later.

### Privacy & Permissions

- Runs only on `*://www.youtube.com/*`.
- No data is collected or sent anywhere.

### Development notes

- YouTube frequently changes component names and markup. If the selector for the menu button or the menu items changes, update `content.js` and/or `actionLabel.js` accordingly.
- Test in an Incognito window (with "Allow in Incognito" enabled) to avoid conflicts with other extensions.

### License

MIT
