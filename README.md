# APAARSetu (SIH26263)
### Student Data Management & Enrolment Verification Platform
> **Developed by Team neuroneurz**  
> **Problem Statement ID**: SIH26263  
> **Agency**: All India Council for Technical Education (AICTE), Ministry of Education  
> **Live Web App**: [https://neuralnexus53-cyber.github.io/APPARSetu](https://neuralnexus53-cyber.github.io/APPARSetu)  
> **GitHub Repository**: [https://github.com/neuralnexus53-cyber/APPARSetu](https://github.com/neuralnexus53-cyber/APPARSetu)

---

## 🌟 What APAARSetu Does

**APAARSetu** is a national digital control room for AICTE that leverages student **Automated Permanent Academic Account Registry (APAAR)** IDs to:

1. **Stop Cross-College Seat-Hoarding**: Instantly prevents students from holding simultaneous active admission seats across multiple universities.
2. **Prevent Statutory Over-Admissions**: Enforces approved government intake ceilings:
   - Approved Core Capacity ($100\%$)
   - Non-Resident Indian Quota (Max $5\%$)
   - Foreign National / OCI Supernumerary (Max $15\%$)
   - Tuition Fee Waiver (Max $5\%$)
3. **Resolve Clerical Typos Without Hallucinations**: RapidFuzz token reconciliation automatically matches transposed first/last names without manual rejections.
4. **Instant Tamper-Proof QR Degree Check**: Employers scan degree QR codes and verify cryptographic Ed25519 digital signatures in under $2$ seconds.
5. **DPDP Act 2023 Compliance**: Incorporates verifiable parental consent for minor students, keyed HMAC lookup tokens, and append-only audit trails.

---

## 🚀 Live Demo & Evaluation

Visit the hosted version at:  
👉 **[https://sarthakmishra200906-source.github.io/test2](https://sarthakmishra200906-source.github.io/test2)**

### 🔑 1-Click Demo Accounts
Direct dashboard access has been replaced with authentic role-based sign-in. To test the dashboard, click **Login** in the navbar and use any of the pre-configured 1-click accounts:

| Role | Demo Email | Capabilities |
|---|---|---|
| **Institution Operator** | `institution@demo.com` | Batch CSV upload, student directory, instant degree QR issuance |
| **AICTE Reviewer** | `aicte@demo.com` | National discrepancy queue, intake quota monitors, seat flags |
| **Administrator** | `admin@demo.com` | System health, institution management, audit rules |
| **Auditor** | `auditor@demo.com` | Read-only compliance inspection, immutable evidence hashes |

*Password for all accounts*: `password123` (or click the **"Enter ➔"** fast-login button).

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, React Router v7
- **Styling**: Tailwind CSS v4, Bootstrap 5 (Icons & Grid), Custom Defensive CSS
- **Design Features**: High-Contrast Dark & Light Mode, Animated Text Rotator, Glassmorphism, Micro-Animations
- **Hosting**: GitHub Pages (`gh-pages`)

---

## 💻 Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/neuralnexus53-cyber/APPARSetu.git
cd APPARSetu

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build

# 5. Deploy to GitHub Pages
npm run deploy
```

---

## 📄 Project Documentation

- [AGENT_FRONTEND.md](./AGENT_FRONTEND.md) - Comprehensive technical architecture for developers and AI agents.
- [FRONTEND_WORK.md](./FRONTEND_WORK.md) - Summary of frontend milestones, bug fixes, and components created.

---

## 👥 Team neuroneurz
Built with pride for the **Smart India Hackathon (SIH26263)** to secure and unify India's technical education admissions under NEP 2020.
