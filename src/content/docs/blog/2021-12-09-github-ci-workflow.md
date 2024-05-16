---
title: 'GitHub CI-CD javascript workflow'
date: 2021-12-09
excerpt: 'Create a complete CI-CD GitHub Action workflow for Javascript projects'
tags:
  - GitHub
  - CI-CD
---

## Features

This workflow includes common **continuous integration/deployment** tasks you can easily reuse for any web javascript project.

It includes:

- collaboration comments
- quality tests
- deployment on **Netlify**
- audit with **Lighthouse**

It works on push and pull request situations.

---

To showcase this workflow, i chose the [Dojo RealWorld](https://github.com/gothinkster/dojo-realworld-example-app) implementation.

![RealWorld Dojo banner](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ey0bk932mqxvjz9s4kl3.png)

---

### My Workflow

[Repository workflows](https://github.com/gothinkster/dojo-realworld-example-app/tree/main/.github/workflows)

![Workflow](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5qsh60x2ahchzi8de1b2.png)

---

#### Collaboration first!

> Alone we can do so little; together we can do so much.
> _Helen Keller_

![Communication workflow](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ci4fj4rb2n3cbp7eefph.png)

Open source contributions are not just about code.
**That's all about people** collaborating to move a project forward.

If the contributor is making their first pull request to the project, **welcome them** accordingly. First open source contributions can be overwhelming as there so many considerations: code of conduct, license, guidelines...

Even if GitHub makes it easy by onboarding new contributors when they land on a project, don't hesitate to provide additional context:

```yaml
first_interaction:
  if: github.event_name == 'pull_request'
  name: 'first interaction'
  runs-on: ubuntu-latest
  steps:
    - uses: actions/first-interaction@v1
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
        pr-message: |
          Thanks for your first pull request on this project!
          This is a kindly reminder to read the following resources:
          - [code of conduct]()
          - [contribution guidelines]()
          It'll help us to review your contribution and to ensure it's aligned with our standards.
```

---

> I'm not a new contributor! Who cares?

Not being a new contributor doesn't mean you should be ignored. As a review can be delayed, provide an instant comment to welcome new contributions. Even an automated one shows **how much you care**:

```yaml
greetings:
  if: github.event_name == 'pull_request'
  runs-on: ubuntu-latest
  steps:
    - uses: kerhub/saved-replies@v1.0.0
      with:
        token: '${{ secrets.GITHUB_TOKEN }}'
        reply: |
          Hi @${{ github.event.pull_request.user.login }}, thanks for being part of the community :heart:
          We'll review your contribution as soon as possible!
```

---

#### Reusable workflows

When i started this workflow, i used `actions/cache` to cache dependencies and speed up the workflows.

```yaml
- name: Cache node modules
  uses: actions/cache@v2
  env:
    cache-name: cache-node-modules
    with:
      path: ~/.npm
      key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
      restore-keys: |
        ${{ runner.os }}-build-${{ env.cache-name }}-
        ${{ runner.os }}-build-
        ${{ runner.os }}-
```

Meanwhile i discovered some changes happened to `actions/setup-node` in July, removing the need of the previous boilerplate

![GitHub Actions: Setup-node now supports dependency caching](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jw6z5495upo5lcduzaqz.png)

---

> Time to refactor? Not so much!

Such change didn't affect my workflow as such implementation detail was already hidden in a dedicated and reusable job by using the GitHub new feature: [Reusable Workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)

This reusable workflow is isolated in a [dedicated repository](https://github.com/kerhub/reusable-workflows).

```yaml
on:
  workflow_call:
    inputs:
      command:
        required: true
        type: string

jobs:
  node_job:
    name: 'node job'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2.4.1
        with:
          node-version: '14'
          cache: 'npm'
      - run: npm ci
      - run: ${{inputs.command}}
```

---

#### Automate quality checks

![Quality checks](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1rbzu5nr6o55mubu59x5.png)

**Note:** The quality checks use the previous reusable workflow

---

> Make your code **Prettier**

[Prettier](https://prettier.io/) is a famous code formatter.
It removes all original styling\* and ensures that all outputted code conforms to a consistent style.

```yaml
prettier:
  uses: kerhub/reusable-workflows/.github/workflows/node-job.yml@main
  with:
    command: npm run prettier --check \"**\"
```

---

> Ensure maintainability with a **linter**

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

```yaml
linter:
  uses: kerhub/reusable-workflows/.github/workflows/node-job.yml@main
  with:
    command: npx eslint --fix src/**/*.ts
```

---

> Quality means doing it right even when no one is looking.
> _Henry Ford_

The future yourself will thank you for being able to push code with confidence thanks to tests.

```yaml
unit_tests:
  name: 'unit tests'
  uses: kerhub/reusable-workflows/.github/workflows/node-job.yml@main
  with:
    command: npm run test
```

---

#### Deployment

![Deployment workflow](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dqezqatpwtlwzb1o3seq.png)

You don't want to manually deploy anymore.

---

> Review changes before they go live!

You want to preview changes due to a pull request.
Netlify provides a **preview feature** for such a need!
By running this job on a pull request, a preview url will be created.

```yaml
deploy_preview:
  name: 'deploy preview'
  if: github.event_name == 'pull_request'
  needs: [prettier, linter, unit_tests]
  uses: kerhub/workflows/.github/workflows/netlify-preview-deploy.yml@main
  with:
    build_directory: './output/dist'
  secrets:
    netlifyAuthToken: '${{ secrets.NETLIFY_AUTH_TOKEN }}'
    netlifySiteId: '${{ secrets.NETLIFY_SITE_ID }}'
    repoToken: '${{ secrets.GITHUB_TOKEN }}'
```

It uses a [reusable workflow](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/netlify-preview-deploy.yml) once again:

```yaml
on:
  workflow_call:
    inputs:
      build_directory:
        required: true
        type: string
      build_command:
        required: false
        type: string
        default: 'npm run build'
    secrets:
      repoToken:
        required: true
      netlifyAuthToken:
        required: true
      netlifySiteId:
        required: true

jobs:
  netlify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2.4.1
        with:
          node-version: '14'
          cache: 'npm'
      - run: npm ci
      - run: ${{inputs.build_command}}
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './output/dist'
          github-token: ${{ secrets.repoToken }}
          deploy-message: 'Deploy from GitHub Actions'
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.netlifyAuthToken }}
          NETLIFY_SITE_ID: ${{ secrets.netlifySiteId }}
```

---

> Push to production!

By pushing code directly or by merging a pull request, this job will deploy a **new version of your web app**.

```yaml
deploy_live:
  name: 'deploy live'
  if: github.event_name == 'push'
  needs: [prettier, linter, unit_tests]
  uses: kerhub/workflows/.github/workflows/netlify-live-deploy.yml@main
  with:
    build_directory: './output/dist'
  secrets:
    netlifyAuthToken: '${{ secrets.NETLIFY_AUTH_TOKEN }}'
    netlifySiteId: '${{ secrets.NETLIFY_SITE_ID }}'
```

It uses a [reusable workflow](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/netlify-live-deploy.yml) once again:

```yaml
on:
  workflow_call:
    inputs:
      build_directory:
        required: true
        type: string
      build_command:
        required: false
        type: string
        default: 'npm run build'
    secrets:
      netlifyAuthToken:
        required: true
      netlifySiteId:
        required: true

jobs:
  netlify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2.4.1
        with:
          node-version: '14'
          cache: 'npm'
      - run: npm ci
      - run: ${{inputs.build_command}}
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './output/dist'
          production-deploy: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.netlifyAuthToken }}
          NETLIFY_SITE_ID: ${{ secrets.netlifySiteId }}
```

---

#### Audit

![Audit workflow](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qpmn5rxhxs120a0gblji.png)

[Lighthouse](https://github.com/GoogleChrome/lighthouse) analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

By pushing changes to your repository, it shouldn't affect performance and common best practices.

The workflow includes 2 jobs for such a need:

- a preview one for the custom preview url ([related reusable workflow](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/lighthouse-preview.yml))
- a live one using the production url ([related reusable workflow](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/lighthouse-live.yml))

```yaml
lighthouse_preview:
    name: 'lighthouse preview'
    needs: deploy_preview
    uses: kerhub/reusable-workflows/.github/workflows/lighthouse-preview.yml@main
    with:
      siteName: 'dojo-realworld'
    secrets:
      netlifyAuthToken: "${{ secrets.NETLIFY_AUTH_TOKEN }}"
  lighthouse_live:
    name: 'lighthouse live'
    needs: deploy_live
    uses: kerhub/reusable-workflows/.github/workflows/lighthouse-live.yml@main
    with:
      siteUrl: 'https://dojo-realworld.netlify.app/'
```

---

> Are we really done yet?

Open source contribution requires to spend significant time on it as you need to:

- understand its goal to ensure your contribution will match
- to read all guidelines
- to wait for a review before your contribution

Such dedication on a project worths to greet the contributor, not to just merge their work.

But...there is no pull_request merged event.
To identify a merged content, you need **2 informations**:

- the event (push)
- the merged status of the pull request

Here is the solution i used in a dedicated workflow:

```yaml
on:
  pull_request:
    types: closed

jobs:
  contribution-greetings:
    if: github.event.pull_request.merged
    runs-on: ubuntu-latest
    steps:
      - name: greet the contributor
        uses: kerhub/saved-replies@v1.0.0
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          reply: |
            Thanks @${{ github.event.pull_request.user.login }}!
            Your contribution is now fully part of this project :rocket:
```

---

### Submission Category:

Maintainer Must-Haves

### Yaml File or Link to Code

Workflow YAML Files:

- [CI - CD](https://github.com/gothinkster/dojo-realworld-example-app/blob/main/.github/workflows/ci-cd.yml)
- [Merge Greetings](https://github.com/gothinkster/dojo-realworld-example-app/blob/main/.github/workflows/merge-greetings.yml)

### Additional Resources / Info

GitHub Actions used:

- [actions/checkout](https://github.com/actions/checkout)
- [actions/setup-node](https://github.com/actions/setup-node)
- [actions/first-interaction](https://github.com/actions/first-interaction)
- [kerhub/saved-replies](https://github.com/kerhub/saved-replies)
- [treosh/lighthouse-ci-action](https://github.com/treosh/lighthouse-ci-action)
- [kamranayub/wait-for-netlify-action](https://github.com/kamranayub/wait-for-netlify-action)
- [nwtgck/actions-netlify](https://github.com/nwtgck/actions-netlify)

GitHub Reusable Workflows created:

- [node-job](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/node-job.yml)
- [netlify-preview-deploy](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/netlify-preview-deploy.yml)
- [netlify-live-deploy](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/netlify-live-deploy.yml)
- [lighthouse-preview](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/lighthouse-preview.yml)
- [lighthouse-live](https://github.com/kerhub/reusable-workflows/blob/main/.github/workflows/lighthouse-live.yml)
