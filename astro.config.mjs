import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightImageZoom from 'starlight-image-zoom';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  site: 'https://learn-angular',
  integrations: [starlight({
    title: 'Learn Angular',
    logo: {
      src: './src/assets/logo.png'
    },
    components: {
      Head: './src/components/Head.astro'
    },
    favicon: '/favicon.ico',
    social: {
      linkedin: 'https://www.linkedin.com/in/gerome-grignon/',
      twitter: 'https://twitter.com/GeromeDEV'
    },
    sidebar: [{
      label: 'Introduction Course',
      translations: { fr: 'Apprendre les bases d\'Angular' },
      items: [
      {
        label: 'Introduction',
        link: '/practical-course/introduction'
      }, {
        label: 'Learning process',
        link: '/practical-course/learning-process',
        translations: { fr: 'Processus d\'apprentissage' }
      }, {
        label: 'Prerequisites',
        link: '/practical-course/prerequisites',
        translations: { fr: 'Pré-requis' }
      }, {
        label: 'TypeScript introduction',
        link: '/practical-course/typescript-introduction',
        translations: { fr: 'Introduction à TypeScript' }
      }, {
        label: 'Getting started',
        link: '/practical-course/getting-started',
        translations: { fr: 'C\'est parti !' }
      }, {
        label: 'Task listing',
        collapsed: true,
        translations: {
          fr: 'Liste des tâches'
        },
        items: [
        //   {
        //   label: '🚀 Display overview',
        //   link: '/practical-course/task-listing/display-overview',
        //   attrs: {
        //     style: 'font-weight: bold'
        //   },
        //   translations: {
        //     fr: 'Aperçu du chapitre'
        //   }
        // }, 
        {
          label: 'Add an UI Library',
          link: '/practical-course/task-listing/add-ui-library',
          translations: {
            fr: 'Ajout d\'une librairie UI'
          }
        }, {
          label: 'Components introduction',
          link: '/practical-course/task-listing/components-introduction',
          translations: {
            fr: 'Introduction sur les composants'
          }
        }, {
          label: 'Create your first component',
          link: '/practical-course/task-listing/create-first-component',
          translations: {
            fr: 'Créez votre premier composant'
          }
        }, {
          label: 'Create the task interface',
          link: '/practical-course/task-listing/task-interface',
          translations: {
            fr: 'Créez l\'interface des tâches'
          }
        }, {
          label: 'Display the list',
          link: '/practical-course/task-listing/display-list',
          translations: {
            fr: 'Afficher la liste'
          }
        }, {
          label: 'Interpolation',
          link: '/practical-course/task-listing/interpolation'
        }, {
          label: 'Pipes',
          link: '/practical-course/task-listing/pipes'
        }
        // {
        //   label: '🏁 Display review',
        //   link: '/practical-course/task-listing/read-interlude',
        //   attrs: {
        //     style: 'font-weight: bold'
        //   }
        // }
      ]
      }, {
        label: 'Create task',
        collapsed: true,
        translations: {
          fr: 'Créer une tâche'
        },
        items: [
        //   {
        //   label: '🚀 Create task overview',
        //   link: '/practical-course/create-task/create-task-overview'
        // },
        {
          label: 'Create form component',
          link: '/practical-course/create-task/create-form-component',
          translations: {
            fr: 'Créez un composant dédié'
          }
        }, {
          label: 'Routing introduction',
          link: '/practical-course/create-task/routing-introduction',
          translations: {
            fr: 'Introduction au routage'
          }
        }, {
          label: 'HTML form',
          link: '/practical-course/create-task/html-form',
          translations: {
            fr: 'Formulaire HTML'
          }
        }, {
          label: 'Form binding',
          link: '/practical-course/create-task/form-binding',
          translations: {
            fr: 'Liaison du formulaire'
          }
        }, {
          label: 'Event binding',
          link: '/practical-course/create-task/event-binding',
          translations: {
            fr: 'Liaison d\'évènements'
          }
        }, {
          label: 'Angular service',
          link: '/practical-course/create-task/angular-service',
          translations: {
            fr: 'Service Angular'
          }
        }, {
          label: 'Dependency injection',
          link: '/practical-course/create-task/dependency-injection',
          translations: {
            fr: 'Injection de dépendances'
          }
        }, {
          label: 'Add task in service',
          link: '/practical-course/create-task/add-task-service',
          translations: {
            fr: 'Ajoutez une tâche via le service'
          }
        }, {
          label: 'Inject service in form',
          link: '/practical-course/create-task/inject-service-form',
          translations: {
            fr: 'Injectez le service'
          }
        }, {
          label: 'Programmatical routing',
          link: '/practical-course/create-task/programmatical-routing',
          translations: {
            fr: 'Routage avancé'
          }
        }, {
          label: 'Component destruction',
          link: '/practical-course/create-task/component-destruction',
          translations: {
            fr: 'Destruction du composant'
          }
        }
        // ,{
        //   label: '🏁 Form review',
        //   link: '/practical-course/create-task/create-task-review',
        //   attrs: {
        //     style: 'font-weight: bold'
        //   }
        // }
      ]
      }, {
        label: 'Update task',
        collapsed: true,
        translations: { fr: 'Mettre à jour une tâche'},
        items: [
        //   {
        //   label: '🚀 Update overview',
        //   link: '/practical-course/update-task/update-overview'
        // },
        {
          label: 'Update task route',
          link: '/practical-course/update-task/update-task-route',
          translations: { fr: 'Naviguez avec panache !' }
        }, {
          label: 'Update form',
          link: '/practical-course/update-task/update-task-form',
          translations: { fr: 'Formulaire de mise à jour' }
        }, {
          label: 'Submit update form',
          link: '/practical-course/update-task/submit-update-form',
          translations: { fr: 'Soumettez le formulaire de mise à jour' }
        }
        // ,{
        //   label: '🏁 Update review',
        //   link: '/practical-course/update-task/update-review',
        //   attrs: {
        //     style: 'font-weight: bold'
        //   }
        // }
      ]
      }, {
        label: 'Delete task',
        collapsed: true,
        translations: {
          fr: 'Supprimer une tâche'
        },
        items: [
        //   {
        //   label: '🚀 Delete overview',
        //   link: '/practical-course/delete-task/delete-overview'
        // },
        {
          label: 'Add delete function',
          link: '/practical-course/delete-task/add-delete-function',
          translations: {
            fr: 'Ajouter la fonction supprimer'
          }
        }, {
          label: 'Add delete button',
          link: '/practical-course/delete-task/add-delete-button',
          translations: {
            fr: 'Ajouter le bouton supprimer'
          }
        }, {
          label: 'Add empty list',
          link: '/practical-course/delete-task/add-empty-list',
          translations: {
            fr: 'Si liste vide'
          }
        }
        // ,{
        //   label: '🏁 Delete review',
        //   link: '/practical-course/delete-task/delete-review',
        //   attrs: {
        //     style: 'font-weight: bold'
        //   }
        // }
      ]
      }, {
        label: 'API Server',
        collapsed: true,
        translations: { fr: 'Utilisez les APIs' },
        items: [
        //   {
        //   label: '🚀 API overview',
        //   link: '/practical-course/api-server/api-overview'
        // },
        {
          label: 'JSON server installation',
          link: '/practical-course/api-server/json-server-installation',
          translations: { fr: 'Installation de JSON server' }
        }, {
          label: 'Add HTTP client',
          link: '/practical-course/api-server/add-http-client',
          translations: { fr: 'Ajoutez HTTP Client' }
        }, {
          label: 'Retrieve tasks',
          link: '/practical-course/api-server/retrieve-tasks',
          translations: { fr: 'Récupérez la liste des tâches' }
        }, {
          label: 'Create task',
          link: '/practical-course/api-server/create-task',
          translations: { fr: 'Modifiez la création' }
        }, {
          label: 'Update task',
          link: '/practical-course/api-server/update-task',
          translations: { fr: 'Modifiez la mise à jour' }
        }, {
          label: 'Delete task',
          link: '/practical-course/api-server/delete-task',
          translations: { fr: 'Modifiez la suppression' }
        }
        // ,{
        //   label: '🏁 API review',
        //   link: '/practical-course/api-server/api-review',
        //   attrs: {
        //     style: 'font-weight: bold'
        //   }
        // }
      ]
      },
      // {
      //   label: '🏁 Final review',
      //   link: '/practical-course/final-review',
      //   attrs: {
      //     style: 'font-weight: bold'
      //   }
      // },
      // {
      //   label: '🎉 Congratulations',
      //   link: '/practical-course/congratulations'
      // }
      // , {
      //   label: '📚 Resources',
      //   link: '/practical-course/resources'
      // }, {
      //   label: 'Glossary',
      //   link: '/practical-course/glossary'
      // }
    ]
    }],
    // Set English as the default language for this site.
    defaultLocale: 'root',
    locales: {
      // English docs in `src/content/docs/en/`
      root: {
        label: 'English',
        lang: 'en'
      },
      fr: {
        label: 'French',
        lang: 'fr'
      }
    },
    customCss: ['./src/tailwind.css'],
    plugins: [starlightImageZoom(), starlightBlog({
      authors: {
        geromegrignon: {
          name: 'Gerome Grignon',
          title: 'Web developer',
          picture: '/avatar.png',
          url: 'https://gerome.dev'
        }
      }
    })]
  }), tailwind({
    applyBaseStyles: false
  })]
});
