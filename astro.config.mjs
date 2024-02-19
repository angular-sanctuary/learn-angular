import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs with Tailwind',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Practical Course',
					items: [
						{ label: 'Introduction', link: '/practical-course/introduction' },
						{ label: 'Prerequisites', link: '/practical-course/prerequisites' },
						{ label: 'Getting started', link: '/practical-course/getting-started' },
						{ label: 'UI Library', link: '/practical-course/ui-library' },
						{ label: 'Component introduction', link: '/practical-course/component-introduction' },
						{ label: 'Your first component', link: '/practical-course/task-list-component' },
						/**
						{ label: 'Routing', link: '/practical-course/routing' },
						{ label: 'Layouts', link: '/practical-course/layouts' },
						{ label: 'Data', link: '/practical-course/data' },
						{ label: 'Deploy', link: '/practical-course/deploy' },
						*/
					],
				},
			],
			// Set English as the default language for this site.
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				root: {
					label: 'English',
					lang: 'en',
				},
				fr: {
					label: 'French',
					lang: 'fr',
				},
			},
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
