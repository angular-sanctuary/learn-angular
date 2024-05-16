---
title: 'Add a favicon to your Storybook application'
date: 2023-02-21
excerpt: 'Take this small but impactful step today and give your Storybook application that extra touch of visual appeal and professionalism!'
tags: 
    - storybook
---

Favicons, short for "favorite icons," are small images or icons that appear in the browser tab, bookmarks, and other areas of the browser UI. Adding a favicon to your Storybook application can help to:

- Improve branding and visual appeal: A well-designed favicon can help to reinforce your brand and make your Storybook application more visually appealing.

- Enhance user experience: Favicons can make it easier for users to find and recognize your Storybook application among multiple tabs or bookmarks, enhancing the user experience.

- Build trust and credibility: A favicon can also help build trust and credibility with your users by demonstrating attention to detail and a commitment to providing a professional and high-quality application.

Adding a favicon is a small but significant step that can help improve the user experience and make your Storybook application more memorable and distinctive.

So why not take this small but impactful step today and give your Storybook application that extra touch of visual appeal and professionalism?

---

To add a favicon for Storybook, follow these steps:

1. **Create or obtain** a favicon file matching the [supported formats](https://en.wikipedia.org/wiki/Favicon#Image_file_format_support).

2. **Place** the favicon file in the public folder of your Storybook project as defined in your [configuration](https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook-configuration).

3. **Open** the _.storybook/manager-head.html_ file in your project, or create it if it doesn't exist.

4. **Add** the following code to the file to reference the favicon file:

```html
<link rel="shortcut icon" href="/favicon.ico" />
```

5. **Save** the file and restart your Storybook server. Your favicon should now be visible in the browser tab for your Storybook application.

**Warning**: The default Storybook favicon overrides the new one with Chrome by running the application locally.
