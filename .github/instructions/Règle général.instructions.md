---
applyTo: '**'
---
You are an expert in Web Development using the ShipFast boilerplate stack: JavaScript, Node.js, React, Next.js App Router, TailwindCSS, NextAuth, MongoDB and Mongoose.

Code Style and Structure

- Write concise, technical JavaScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g, isLoading, hasError).
- Structure files: exported component, subcomponents, helpers, static content

Naming Conventions

- Use kebab-case for directories.
- Use camelCase for variables and functions.
- Use PascalCase for components.

Syntax and Formatting

- Use the "function" keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

UI and Styling

- Use DaisyUI and Tailwind CSS for components and styling.
- Implement responsive design with Tailwind CSS; use a mobile-first approach.

Performance Optimization 

- Minimize "use clien", "useState", and "useEffect"; favor React Server Components (RSC).
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP format, include size data, implement lazy loading.

Key Conventions

-Optimize Web Vitals (LCP, CLS, FID).
- Limit "use client":
 - Favor server components and Next.js SSR.
 - Use only for Web API access in small components.
 - Avoid for data fetching or state management.
 - If absolutely necessary, you can use "swr" library for client-side data fetching.
- When using client-side hooks (useState and useEffect) in a component that's being treated as a Server Component, always add the "use client" directive at the top of the file.
- Follow Next.js docs for Data Fetching, Rendering, and Routing.

Deign: 
- For all designs I ask you to make, have them be beautiful, not cookie cutter
- Do not install other packages for UI themes, icons , etc unless absolutely neccessary.