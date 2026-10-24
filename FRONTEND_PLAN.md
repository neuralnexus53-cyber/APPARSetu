# 🎓 SIH26263: Frontend Implementation & Component Blueprint
**Project:** APAAR ID-Based Student Data Management & Verification Platform for AICTE-Approved Institutions  
**Team:** neuroneurz  
**Tech Stack:** React 19 + Vite + Bootstrap 5 + Tailwind CSS v4 + Chart.js + Bootstrap Icons  
**Design Philosophy:** Kid & Student-Friendly Wording • High Clarity • Dual Theme (Light & Dark) • AICTE Rigor  

---

## 1. Executive Summary

This blueprint outlines the complete frontend architecture for the **SIH26263** platform based on your architectural wireframe and project goals. 

The application is structured into two interconnected experiences:
1. **Public Student & Parent Portal (No Login):** Simple words, friendly illustrations, easy FAQs, and an APAAR status checker tailored to kids, students, and parents.
2. **Authenticated Multi-Role Dashboard:** Streamlined workflows for **Institutions**, **AICTE Reviewers**, **Administrators**, and **Auditors** to manage batch uploads, catch duplicate enrollments, enforce approved seat intakes, and audit verified data.

---

## 2. Design System & Theme Architecture

### Color Palette (from Wireframe Specification)
| Token | Light Mode Hex | Dark Mode Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `#12345A` (Deep Navy) | `#1E3A8A` / `#38BDF8` | Navbar, Primary Buttons, Headings |
| **Secondary** | `#2563EB` (Vibrant Blue) | `#3B82F6` | Accent links, Active tabs, Hero highlights |
| **Teal** | `#0F766E` (Warm Teal) | `#14B8A6` | Verification badges, Status confirmation |
| **Background** | `#F5F7FB` (Soft Blue-Gray) | `#0F172A` (Deep Slate) | Overall application canvas |
| **Card / Surface** | `#FFFFFF` (Pure White) | `#1E293B` (Slate Card) | Component containers, modals, panels |
| **Text Main** | `#172B4D` (High Contrast) | `#F8FAFC` (Off-white) | Body copy and primary labels |
| **Text Muted** | `#64748B` (Cool Gray) | `#94A3B8` (Soft Gray) | Secondary descriptions, timestamps |
| **Success** | `#15803D` (Forest Green) | `#22C55E` (Emerald) | Valid rows, approved batches |
| **Warning** | `#D97706` (Amber) | `#F59E0B` (Bright Amber) | Quota warnings, pending reviews |
| **Error / Alert** | `#DC2626` (Bright Red) | `#EF4444` (Vibrant Coral) | Duplicate records, invalid formats |

### Typography & Kid-Friendly Style
- **Headings (`h1` - `h6`):** `Poppins` — rounded, friendly, modern, and inviting.
- **Body & Data Tables:** `Inter` — clean, highly readable, and optimal for data density.
- **Tone of Voice:** Clear, welcoming, zero-jargon. Instead of complex technical phrasing, we use:
  - *"Verify Student ID"* instead of *"Identity Ingestion Pipeline"*
  - *"Double Check List"* instead of *"Cross-Entity Discrepancy Queue"*
  - *"College Quota Health"* instead of *"Statutory Intake Capacity Analysis"*

---

## 3. Current Completed Foundation (Phase 1)

As requested, the 3 initial foundational components are now built and active:
1. `src/components/Navbar.jsx`:
   - Kid-friendly APAAR branding with graduate cap emblem.
   - Active navigation links (Home, Verify ID, Institutions, How It Works, Student Help).
   - One-click Dark / Light Mode toggle with smooth icon transitions.
   - Responsive Bootstrap collapsible mobile menu.
2. `src/components/PlaceholderCanvas.jsx`:
   - Clean, uncluttered middle workspace canvas.
   - Status indicators showing Phase 1 readiness.
   - Overview cards previewing upcoming page modules.
3. `src/components/Footer.jsx`:
   - Government credibility badge (AICTE & Ministry of Education).
   - Dedicated **24x7 Student Helpline (1800-111-2026)** and support email.
   - Quick navigation links for Students, Institutions, and Parents.
   - Official SIH26263 / Team neuroneurz attribution.

---

## 4. Complete List of Components to Add (Phased Roadmap)

Once you review and approve this document, we will build out the following modular components:

### A. Core Reusable UI Library (`src/components/ui/`)
1. **`StatCard.jsx`**
   - Displays key numbers (Total Enrolls, Validated, Warnings, Duplicate Conflicts).
   - Micro-trend indicator (e.g., `+12% from last batch`) and color-coded background.
2. **`DataTable.jsx`**
   - Clean data table with search bar, severity filter, pagination, and row action triggers.
3. **`StatusBadge.jsx`**
   - Kid-friendly status pills: `Valid` (Green), `Duplicate` (Red), `Intake Full` (Orange), `Pending` (Blue).
4. **`FileDropzone.jsx`**
   - Drag-and-drop CSV / Excel file uploader with file validation, size limits, and sample template download button.
5. **`ThemeToggle.jsx`**
   - Dedicated toggle button switch for light/dark mode.
6. **`ChartIntake.jsx`**
   - Interactive Chart.js bar chart comparing Enrolled Students vs Approved Intake across departments (CSE, ECE, ME, CE, IT).

---

### B. Public Landing Page Experience (`src/pages/LandingPage.jsx`)
*Target audience: School/College students, parents, and public visitors.*
1. **`HeroBanner.jsx`**
   - Playful, encouraging banner: *"One Nation, One Student ID — Your Lifelong Academic Identity Made Simple!"*
   - Direct Call to Action buttons: `Check My APAAR Status` and `Explore College Portals`.
2. **`WhatIsApaarSection.jsx`**
   - Visual cards explaining APAAR ID with friendly icons:
     - 🪪 Universal Student Identity.
     - 🔒 DigiLocker integration for safe marksheets.
     - 🚀 Seamless college transfers without physical paperwork.
3. **`ThreeStepGuide.jsx`**
   - Step 1: College submits your student details.
   - Step 2: System checks for duplicate enrollments.
   - Step 3: APAAR ID is safely linked to your DigiLocker!
4. **`StudentFaqAccordion.jsx`**
   - Simple Q&A accordion addressing common kid/parent questions (e.g., *"Is my data safe?"*, *"What if my name is misspelled?"*).

---

### C. Multi-Role Authentication Modal (`src/components/LoginModal.jsx`)
1. **Role Switcher / Quick Demo Login:**
   - **Institution Operator** (`institution@demo.com`) — Upload batches, resolve intake errors.
   - **AICTE Reviewer** (`aicte@demo.com`) — Investigate cross-college duplicate alerts.
   - **Administrator** (`admin@demo.com`) — Manage colleges, users, and validation rules.
   - **Auditor** (`auditor@demo.com`) — Read-only compliance and audit history.
2. **Secure Login Form:** Email, Password, Remember Me, Forgot Password.

---

### D. Institution Portal (`src/pages/institution/`)
*For college administrators uploading student batches.*
1. **`InstitutionDashboard.jsx`**
   - 4 Top Metric Cards: Total Enrolls (1,240), Valid Records (1,150), Findings/Errors (90), Quota Usage (92.7%).
   - `Enrollment vs Approved Intake` bar chart.
   - Recent Import Batches table (Batch ID, Upload Date, Record Count, Status).
2. **`UploadValidationWizard.jsx`**
   - 3-step wizard: `1. Upload File` ➔ `2. Validate Rules` ➔ `3. View Results`.
   - Excel / CSV dropzone with downloadable AICTE template format.
3. **`ValidationResultsView.jsx`**
   - Summary statistics banner (Valid Rows: 90.5%, Errors: 6.0%, Warnings: 2.4%, Conflicts: 1.2%).
   - Findings Table with columns:
     - Masked APAAR ID (e.g., `******1234`)
     - Rule Code (`IB_FORMAT`, `DUPLICATE`, `INTAKE_LIMIT`, `CROSS_INST`, `MISSING_CAT`)
     - Severity Pill (`Error`, `Warning`, `Conflict`)
     - Message (e.g., *"Student active in another institution simultaneously"*)
     - Action (`Resolve`, `Dismiss`, `Edit`)
   - `Download Validation Report (CSV/PDF)` button.

---

### E. AICTE Reviewer Dashboard (`src/pages/aicte/`)
*For AICTE officials managing cross-institution duplicate verification.*
1. **`AicteOverview.jsx`**
   - Nationwide college intake compliance tracker.
2. **`DiscrepancyQueue.jsx`**
   - Flagged cross-college duplicate enrollment list.
   - Filter by State, University, Degree, and Severity.
3. **`EvidenceReviewModal.jsx`**
   - Side-by-side comparison of duplicate student records in College A vs College B.
   - Official resolution buttons: `Confirm Duplicate`, `Dismiss Alert`, `Request College Evidence`.

---

### F. Administrator & Auditor Workspace (`src/pages/admin/` & `src/pages/auditor/`)
1. **`UserManagement.jsx`:** Add/edit staff permissions.
2. **`RuleEngineConfig.jsx`:** Configure active validation rules and threshold limits.
3. **`AuditTimeline.jsx`:** Read-only, tamper-evident log of all system submissions and reviews.

---

## 5. Mock Data Architecture & Integration Ready

All components will be connected via a lightweight mock service layer (`src/services/mockData.js`):
- `mockStudents.json`: Realistic student records with APAAR IDs, names, branches, and statuses.
- `mockValidationFindings.json`: Formatted errors and warnings matching the wireframe.
- `mockInstitutions.json`: AICTE-approved colleges with seat quotas and enrollment counts.

This ensures seamless future integration with **FastAPI** backend endpoints without rewriting UI components!

---

## 6. How We Will Proceed (Your Approval)

| Milestone | Scope | Status |
| :--- | :--- | :--- |
| **Milestone 1** | Navbar + Footer + Blank Canvas + Dark/Light Mode | **COMPLETED & READY** |
| **Milestone 2** | Public Landing Page (Kid-friendly Hero, Features, 3-Step Guide, FAQs) | Awaiting Your Approval |
| **Milestone 3** | Login Modal with 4 Demo Roles + Role Switching | Awaiting Your Approval |
| **Milestone 4** | Institution Flow (Dashboard, CSV Drag & Drop, Validation Results) | Awaiting Your Approval |
| **Milestone 5** | AICTE Discrepancy Queue + Auditor Timeline | Awaiting Your Approval |

---
**Please review this plan. You can approve it as is, or request any additions, changes, or reorderings!**
