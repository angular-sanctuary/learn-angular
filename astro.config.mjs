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
            },
            sidebar: [
                {
                    label: 'Practical Course',
                    items: [
                        {label: 'Introduction', link: '/practical-course/introduction'},
                        {label: 'Learning process', link: '/practical-course/learning-process'},
                        {label: 'Prerequisites', link: '/practical-course/prerequisites'},
                        {
                            label: 'Typescript introduction',
                            link: '/practical-course/task-listing/typescript-introduction'
                        },
                        {label: 'Getting started', link: '/practical-course/getting-started'},
                        {
                            label: 'Task listing', collapsed: true, items: [
                                {
                                    label: '🚀 Display overview',
                                    link: '/practical-course/task-listing/display-overview',
                                    attrs: {style: 'font-weight: bold'}
                                },
                                {label: 'Add an UI Library', link: '/practical-course/task-listing/add-ui-library'},
                                {
                                    label: 'Component introduction',
                                    link: '/practical-course/task-listing/component-introduction'
                                },
                                {
                                    label: 'Create your first component',
                                    link: '/practical-course/task-listing/create-task-list-component'
                                },
                                {
                                    label: 'Create the task interface',
                                    link: '/practical-course/task-listing/task-interface'
                                },
                                {label: 'Display the list', link: '/practical-course/task-listing/display-list'},
                                {label: 'Interpolation', link: '/practical-course/task-listing/interpolation'},
                                {
                                    label: '🏁 Display review',
                                    link: '/practical-course/task-listing/read-interlude',
                                    attrs: {style: 'font-weight: bold'}
                                },
                            ]
                        },
                        {
                            label: 'Create task', collapsed: true, items: [
                                {
                                    label: '🚀 Create task overview',
                                    link: '/practical-course/create-task/create-task-overview'
                                },
                                {
                                    label: 'Create form component',
                                    link: '/practical-course/create-task/create-form-component'
                                },
                                {
                                    label: 'Routing introduction',
                                    link: '/practical-course/create-task/routing-introduction'
                                },
                                {label: 'HTML form', link: '/practical-course/create-task/html-form'},
                                {label: 'Form binding', link: '/practical-course/create-task/form-binding'},
                                {label: 'Event binding', link: '/practical-course/create-task/event-binding'},
                                {label: 'Angular service', link: '/practical-course/create-task/angular-service'},
                                {label: 'Application state', link: '/practical-course/create-task/application-state'},
                                {
                                    label: 'Dependency injection',
                                    link: '/practical-course/create-task/dependency-injection'
                                },
                                {
                                    label: 'Service communication',
                                    link: '/practical-course/create-task/service-communication'
                                },
                                {label: 'Add task in service', link: '/practical-course/create-task/add-task-service'},
                                {
                                    label: 'Inject service in form',
                                    link: '/practical-course/create-task/inject-service-form'
                                },
                                {
                                    label: 'Programmatical routing',
                                    link: '/practical-course/create-task/programmatical-routing'
                                },
                                {
                                    label: 'Component destruction',
                                    link: '/practical-course/create-task/component-destruction'
                                },
                                {
                                    label: '🏁 Form review',
                                    link: '/practical-course/create-task/create-task-review',
                                    attrs: {style: 'font-weight: bold'}
                                },
                            ]
                        },

                        {
                            label: 'Update task', collapsed: true, items: [
                                {label: '🚀 Update overview', link: '/practical-course/update-task/update-overview'},
                                {label: 'Update task route', link: '/practical-course/update-task/update-task-route'},
                                {label: 'Update form', link: '/practical-course/update-task/update-task-form'},
                                {label: 'Submit update form', link: '/practical-course/update-task/submit-update-form'},
                                {
                                    label: '🏁 Update review',
                                    link: '/practical-course/update-task/update-review',
                                    attrs: {style: 'font-weight: bold'}
                                },
                            ]
                        },
                        {
                            label: 'Delete task', collapsed: true, items: [
                                {label: '🚀 Delete overview', link: '/practical-course/delete-task/delete-overview'},
                                {
                                    label: 'Add delete function',
                                    link: '/practical-course/delete-task/add-delete-function'
                                },
                                {label: 'Add delete button', link: '/practical-course/delete-task/add-delete-button'},
                                {label: 'Add empty list', link: '/practical-course/delete-task/add-empty-list'},
                                {
                                    label: '🏁 Delete review',
                                    link: '/practical-course/delete-task/delete-review',
                                    attrs: {style: 'font-weight: bold'}
                                },
                            ]
                        },
                        {
                            label: 'API Server', collapsed: true, items: [
                                {label: '🚀 API overview', link: '/practical-course/api-server/api-overview'},
                                {
                                    label: 'JSON server installation',
                                    link: '/practical-course/api-server/json-server-installation'
                                },
                                {label: 'Add HTTP client', link: '/practical-course/api-server/add-http-client'},
                                {label: 'Get tasks', link: '/practical-course/api-server/get-tasks'},
                                {label: 'Create task', link: '/practical-course/api-server/create-task'},
                                {label: 'Update task', link: '/practical-course/api-server/update-task'},
                                {label: 'Delete task', link: '/practical-course/api-server/delete-task'},
                            ]
                        },
                        {
                            label: '🏁 Final review',
                            link: '/practical-course/final-review',
                            attrs: {style: 'font-weight: bold'}
                        },
                        {label: '🎉 Congratulations', link: '/practical-course/congratulations'},
                        {label: '📚 Resources', link: '/practical-course/resources'},
                        {label: 'Glossary', link: '/practical-course/glossary'}
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
