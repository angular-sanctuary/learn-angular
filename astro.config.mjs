import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Learn Angular',
            favicon: '/favicon.ico',
            social: {
                github: 'https://github.com/angular-sanctuary/learn-angular',
                youtube: 'https://github.com/angular-sanctuary/learn-angular',
            },
            sidebar: [
                {
                    label: 'Practical Course',
                    items: [
                        {label: 'Introduction', link: '/practical-course/introduction'},
                        {label: 'Learning process', link: '/practical-course/learning-process'},
                        {label: 'Prerequisites', link: '/practical-course/prerequisites'},
                        {label: 'Getting started', link: '/practical-course/getting-started'},
                        {
                            label: 'Display tasks', collapsed: true, items: [
                                {label: 'UI Library', link: '/practical-course/display-content/ui-library'},
                                {
                                    label: 'Component introduction',
                                    link: '/practical-course/display-content/component-introduction'
                                },
                                {
                                    label: 'Your first component',
                                    link: '/practical-course/display-content/task-list-component'
                                },
                                {
                                    label: 'Typescript introduction',
                                    link: '/practical-course/display-content/typescript-introduction'
                                },
                                {label: 'First interface', link: '/practical-course/display-content/first-interface'},
                                {label: 'Displaying list', link: '/practical-course/display-content/display-list'},
                                {label: 'Interpolation', link: '/practical-course/display-content/interpolation'},
                                {
                                    label: '🏁 Display review',
                                    link: '/practical-course/read-interlude',
                                    attrs: {style: 'font-weight: bold'}
                                },
                            ]
                        },
                        {
                            label: 'Create task', collapsed: true, items: [
                                {label: 'Add form component', link: '/practical-course/add-form-component'},
                                {label: 'Routing introduction', link: '/practical-course/routing-introduction'},
                                {label: 'HTML form', link: '/practical-course/html-form'},
                                {label: 'Form binding', link: '/practical-course/form-binding'},
                                {label: 'Event binding', link: '/practical-course/event-binding'},
                                {label: 'Angular service', link: '/practical-course/angular-service'},
                                {label: 'Application state', link: '/practical-course/application-state'},
                                {label: 'Dependency injection', link: '/practical-course/dependency-injection'},
                                {label: 'Service communication', link: '/practical-course/service-communication'},
                                {label: 'Add task in service', link: '/practical-course/add-task-service'},
                                {label: 'Inject service in form', link: '/practical-course/inject-service-form'},
                                {label: 'Programmatical routing', link: '/practical-course/programmatical-routing'},
                                {
                                    label: '🏁 Form review',
                                    link: '/practical-course/form-review',
                                    attrs: {style: 'font-weight: bold'}
                                },
                            ]
                        },
                        {
                            label: 'Delete task', collapsed: true, items: [
                                {label: 'Create uuids', link: '/practical-course/create-uuids'},
                                {label: 'Advanced Typescript', link: '/practical-course/advanced-typescript'},
                                {label: 'Add delete function', link: '/practical-course/add-delete-function'},
                                {label: 'Add delete button', link: '/practical-course/add-delete-button'},
                                {label: 'Add empty list', link: '/practical-course/add-empty-list'},
                                {
                                    label: '🏁 Delete review',
                                    link: '/practical-course/delete-review',
                                    attrs: {style: 'font-weight: bold'}
                                },
                            ]
                        },
                        {
                            label: 'Update task', collapsed: true, items: [
                                {label: '🚀 Update overview', link: '/practical-course/update-overview'},
                                {label: 'Update task route', link: '/practical-course/update-task-route'},
                                {label: 'Update form', link: '/practical-course/update-task-form'},
                                {label: 'Submit update form', link: '/practical-course/submit-update-form'},
                                {
                                    label: '🏁 Update review',
                                    link: '/practical-course/update-review',
                                    attrs: {style: 'font-weight: bold'}
                                },
                            ]
                        },
                        {
                            label: 'API server', collapsed: true, items: [
                                {label: '🚀 API overview', link: '/practical-course/api-server/api-overview'},
                                {
                                    label: 'JSON server installation',
                                    link: '/practical-course/api-server/json-server-installation'
                                },
                                {label: 'Add HTTP client', link: '/practical-course/api-server/add-http-client'},
                                {label: 'Get tasks', link: '/practical-course/api-server/get-tasks'},
                            ]
                        },
                        {
                            label: '🏁 Final review',
                            link: '/practical-course/final-review',
                            attrs: {style: 'font-weight: bold'}
                        },
                        {label: '🎉 Congratulations', link: '/practical-course/congratulations'},
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
        tailwind({applyBaseStyles: false}),
    ],
});
