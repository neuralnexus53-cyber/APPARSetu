# AGENT_FRONTEND.md - APAARSetu Engineering Architecture Guide
> **Problem Statement**: SIH26263 - Student Data Management & Enrolment Verification Platform  
> **Authority**: All India Council for Technical Education (AICTE), Ministry of Education, Govt. of India  
> **Team**: neuroneurz  
> **Repository**: [https://github.com/sarthakmishra200906-source/test2](https://github.com/sarthakmishra200906-source/test2)  
> **Live Demo**: [https://sarthakmishra200906-source.github.io/test2](https://sarthakmishra200906-source.github.io/test2)

---

## 1. System Vision & Objective
APAARSetu serves as the **National Digital Control Room for AICTE**, enforcing regulatory admission limits across technical education institutions across India using the 12-digit **Automated Permanent Academic Account Registry (APAAR)** ID.

### Core Problems Solved
1. **Cross-College Concurrent Seat-Hoarding**: Stops a single student from holding active, simultaneous enrollments at two or more AICTE institutions.
2. **Statutory Quota Overflow**: Enforces strict mathematical adherence to government-approved ceilings:
   - Approved Regular Sanctioned Intake (100% capacity)
   - NRI Quota (Statutory ceiling: $\le 5\%$)
   - Foreign National / OCI Supernumerary (Statutory ceiling: $\le 15\%$)
   - Tuition Fee Waiver (TFW: $\le 5\%$)
3. **Phonetic & Clerical Discrepancy Resolution**: Eliminates false rejections caused by clerical name inversions or typographical variances using token-sort fuzzy matching algorithms without non-deterministic AI hallucinations.
4. **Instant Tamper-Proof Degree Verification**: Issues W3C-standard Verifiable Credentials bearing Ed25519 digital signatures and dual identifiers (APAAR ID + Institution Roll No), verifiable by employers in $< 2.0$ seconds via QR code.
5. **DPDP Act 2023 Compliance**: Guarantees verifiable parental consent for minor students, zero-knowledge keyed HMAC lookup tokens for privacy-preserving data matching, and immutable append-only audit logs.

---

## 2. Frontend Tech Stack & Architecture

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | React 19 + Vite | Blazing fast client rendering, zero overhead build times |
| **Routing** | React Router v7 (`HashRouter`) | Ensures seamless GitHub Pages routing without server redirects |
| **Styling** | Tailwind CSS v4 + Bootstrap 5 + Inline Defensive CSS | Modern fluid responsive grids with defensive CSS against CSS specificity collisions |
| **Typography** | Inter & Poppins (Google Fonts) | High legibility for data-dense tables, metrics, and government badges |
| **Icons** | Bootstrap Icons (`bootstrap-icons`) | Comprehensive semantic icons for government and technical dashboards |
| **Deployment** | `gh-pages` | Automated SPA deployment directly onto GitHub Pages |

---

## 3. Directory Layout

```
apar2.o/
├── public/
│   ├── favicon.svg              # Graduation cap SVG icon
│   └── icons.svg
├── src/
│   ├── assets/                  # Logos and static vector graphics
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed-top navigation with Light/Dark toggle, responsive hamburger
│   │   ├── HeroCarousel.jsx     # Continuous 3.8s phrase cycler with live running indicator
│   │   ├── ReusableCard.jsx     # Multi-variant card component with guaranteed dark mode inline styles
│   │   ├── Footer.jsx           # Regulatory AICTE footer with DPDP notices and Unicode math
│   │   └── PlaceholderCanvas.jsx# Visual simulation placeholder canvas
│   ├── pages/
│   │   ├── LandingPage.jsx      # Public control room showcase, radar simulator, features, security
│   │   ├── Login.jsx            # 1-click evaluation demo accounts (Institution, Reviewer, Admin, Auditor)
│   │   ├── Register.jsx         # Institution AISHE/AICTE registration workflow
│   │   └── DashboardPlaceholder.jsx # Role-based portal preview
│   ├── App.jsx                  # Root container, dark mode class synchronizer, route manager
│   ├── index.css                # Tailwind directives, theme variables, custom scrollbar
│   └── main.jsx                 # Vite application mount point
├── vite.config.js               # Base path './' configured for GitHub Pages subpath
└── package.json                 # Project dependencies, scripts, and repository metadata
```

---

## 4. Authentication & Security Flow

### Direct Dashboard Access Deprecation
Per security directives, all direct dashboard bypasses from the public landing page have been eliminated. Access to `/dashboard` strictly requires authentication.

### Demo Evaluation Flow
The prototype provides pre-configured role-based demo credentials in `src/pages/Login.jsx`:

1. **Institution Operator** (`institution@demo.com`): CSV batch ingest, local seat validation, degree issuance.
2. **AICTE Reviewer** (`aicte@demo.com`): National anomaly review queue, seat concurrency flag disposition.
3. **Administrator** (`admin@demo.com`): System health, institution provisioning, access control.
4. **Auditor** (`auditor@demo.com`): Read-only tamper-evident audit ledger and compliance logs.

---

## 5. Defensive Dark Mode Strategy
To prevent Bootstrap's `.bg-white { background-color: #fff !important; }` from clashing with Tailwind's `dark:text-white` (which caused white-on-white text readability bugs):

1. **HTML Class Synchronizer**: `App.jsx` toggles both `data-theme="dark"` and `classList.add('dark')` on `document.documentElement`.
2. **Defensive CSS Override**: `index.css` explicitly overrides `.bg-white` and `.bg-light` under `[data-theme="dark"]` to `#1E293B !important`.
3. **Component Inline Styling**: `ReusableCard.jsx`, `HeroCarousel.jsx`, and `LandingPage.jsx` security cards evaluate the `darkMode` prop to apply guaranteed inline background, border, and text hex values.

---

## 6. Guidelines for Subsequent Agents
- When adding new components, **always pass the `darkMode` boolean prop** or consume the theme context.
- Avoid using bare `bg-white` without dark mode style overrides.
- Never add direct authentication bypasses to `/dashboard` on public routes. All evaluations must flow through the Demo Account selector on `/login`.
