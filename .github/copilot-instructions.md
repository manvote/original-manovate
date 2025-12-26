# Manovate.co - AI Agent Instructions

## Project Overview
React 19 corporate website for Manovate IT services company. Built with Create React App, featuring a public marketing site, admin dashboard for job/application management, and service catalog system.

## Architecture & Key Patterns

### Dual API Structure
- **`api.js`**: Admin endpoints with auto-attached JWT token from `localStorage.getItem("adminToken")`
  - Base: `https://manovatebackend.onrender.com/`
  - Used for: Admin auth, job CRUD, application management
- **`publicApi.js`**: Public endpoints without auth
  - Base: `http://127.0.0.1:8000/`
  - Used for: Job listings, contact forms, public data

**Critical**: Always use `API` (from api.js) for admin operations, `PublicAPI` (from publicApi.js) for public operations.

### Component Organization
- **Public Pages**: Direct route components in `src/components/` (Home.js, About.js, Contact.js, etc.)
- **Admin Section**: Nested routes under `/admin` with layout wrapper `AdminDashboard.js` + `<Outlet />` for children
- **Service Details**: Dynamic routing with URL params:
  - `/itservices/:categoryId/:serviceId` → reads from `ITservicesData.js`
  - `/nonitservices/:categoryId/:serviceId` → reads from `Non-ITservicesData.js`

### Styling Convention
- **Global theme**: `src/styles/global.css` defines CSS variables (`:root`) - imported in index.js
  - `--primary-blue: #0A66C2`, `--dark-blue: #063970`, `--light-grey: #f5f8fd`
- **Component styles**: Co-located `.css` files (kebab-case) e.g., `admin-login.css` for `AdminLogin.js`
- **Shared service styles**: Centralized in `src/styles/` directory:
  - `service-detail.css`: Detail page templates
  - `service-category-advanced.css`: Category listings
  - `services.css`: Service overview pages

**Pattern**: Use CSS variables for colors. No CSS-in-JS or styled-components.

### Data-Driven Service System
Services defined as static JS exports in `src/data/`:
```javascript
// ITservicesData.js structure
export const ITservicesData = [
  {
    categoryId: "website-web-application-services",
    categoryTitle: "Website & Web Application Services",
    services: [
      {
        id: "website-design-development",
        title: "Website Design & Development",
        heroImage: "/itservices/wdhero.jpg",
        overviewImage: "/itservices/wdover.jpg",
        capabilities: [...],
        tools: [...],
        outcomes: [...]
      }
    ]
  }
]
```

**To add new services**: Edit data files, add images to `public/itservices/` or `public/nonitservices/`, restart dev server.

### Authentication Flow
1. Login via `AdminLogin.js` → `API.post("api/admin/auth/login/", { username, password })`
2. Store token: `localStorage.setItem("adminToken", res.data.access)`
3. Auto-inject in `api.js` interceptor for all subsequent admin requests
4. Logout: `localStorage.removeItem("adminToken")` + redirect to `/admin/login`

### Navigation Behavior
- **Conditional Navbar Styling**: On homepage (`location.pathname === "/"`) navbar is transparent until scroll, turns blue on scroll. All other pages have solid blue navbar.
- **SplashScreen Wrapper**: Displays 2s logo animation on first load, wraps entire app in `App.js`
- **ScrollToTop Component**: Auto-scrolls to top on route change (included in `App.js`)

## Development Workflows

### Local Development
```bash
npm start  # Runs on localhost:3000
```
- Hot reloading enabled
- Public API defaults to `http://127.0.0.1:8000/` (check `.env` for overrides)
- Admin API points to production backend on Render

### Building for Production
```bash
npm run build  # Creates optimized build/ folder
```
- Includes React 19 optimizations
- Outputs to `build/` directory
- Netlify redirects configured in `public/_redirects`

### Testing
```bash
npm test  # Runs Jest in watch mode
```
- Testing Library configured (@testing-library/react, jest-dom)
- Test files: `App.test.js`, `setupTests.js`

## Critical Conventions

1. **File Naming**:
   - Components: PascalCase (AdminLogin.js)
   - CSS: kebab-case (admin-login.css)
   - Data files: PascalCase + "Data" suffix (ITservicesData.js)

2. **Routing**:
   - Admin routes use nested `<Outlet />` pattern, not full page reloads
   - Use `useNavigate()` for programmatic navigation, `<Link>` for declarative

3. **Image Paths**:
   - Public images: Absolute paths from `/public` (e.g., `/itservices/hero.jpg`)
   - Component assets: Import from `src/assets/` (e.g., `import logo from "../assets/manovate-logo.png"`)

4. **Error Handling**:
   - Admin API errors display inline error messages (see AdminLogin.js pattern)
   - Missing services show error with back link (see ITServiceDetail.js pattern)

5. **React Version**:
   - Using React 19.2.1 - ensure compatibility with new JSX transform
   - No need to `import React` in components that only use JSX

## Common Tasks

**Add new service**: Edit `src/data/ITservicesData.js` or `Non-ITservicesData.js`, follow existing object structure.

**Update theme colors**: Modify `:root` variables in `src/styles/global.css`.

**Add admin route**: Insert `<Route>` inside AdminDashboard's routes in `App.js`, create component in `src/components/`.

**Modify navbar links**: Edit `Navbar.js` menu items and dropdown structure.

**Change API endpoints**: Update baseURL in `api.js` or `publicApi.js`, or set `REACT_APP_API_BASE_URL` in `.env`.
