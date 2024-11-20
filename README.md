# Sample pages for frontend developers

## Stack

- Next.js + Typescript
- Tailwind CSS
- Ant Design (Design System)

## Atomic Design Pattern

- page.tsx
  - contains Container
- Container
  - contains Template
  - handle all props
  - handle business logics
- Template
  - contains Modules
  - set layout
- Module
  - contains Components and Atoms
- Component
- Atom
  - Basic component declared in Figma

## Sample pages

- /sample/empty : to understand design pattern
- /sample/home : default page with header and footer
- /sample/pageWithModal
- /sample/pageWithForm

## Your Mission

- [Figma Link - My Figma Design](https://www.figma.com/design/woh625WWLkXky7J5aqsD3P/Cyrus-Tabji---NamuSoft-Test?node-id=0-1&node-type=canvas&t=7jqCK5SIZWAuhBpy-0)
- No questions allowed before your mission is done
  - This is part of our process
  - You can ask question after your misssion is completed
- Use ESLint required
- Step 1.
  - Request your github account to be invited
- Step 2.
  - Analyze the given code pattern
  - Understand the structure and functionality of the code
- Step 3.
  - Create a folder with a short name under the `/app` directory.
  - Example: `/app/david`
  - make your own branch from dev
    - git checkout dev
    - (dev) git checkout -b david
    - (david) git push origin david
- Step 4.
  - Create one Pull Request (PR) for each route
  - /app/david/testPage1
    - branchName : david_testPage1
    - Create a PR when your work is done
  - /app/david/testPage2
    - branchName : david_testPage2
    - Create a PR when your work is done
