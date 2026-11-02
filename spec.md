# Technical & Conversion Specification (`spec.md`)
**Project:** Bhagwati Dental Care — High-Conversion Clinical Web Platform  
**Target Client:** Dr. Nidhi B. Kamble (B.D.S.), Founder & Chief Dental Surgeon  
**Location:** Shop No. 24, Martin Commercial Complex, New Vasai Link Rd, Yashvant Viva Twp, Nalasopara East, Vasai-Virar 401209  
**Architecture:** Zero-Dependency Static Web App (`index.html`, `style.css`, `script.js`)  

---

## 1. Core Conversion Strategy
1. **Primary Value Proposition ("See What Your Dentist Sees"):**
   - Center the hero and diagnostic sections around Bhagwati Dental Care's **Chairside Intraoral Camera Display**.
   - Directly contrast against high-pressure corporate dental chains by locking in the #1 patient review sentiment: **"100% Transparent Diagnosis — Zero Unnecessary Treatments."**
2. **Defeating Local Link Road Competitors:**
   - Out-position nearby clinics (Dr. Pragati's Dentcure, TruDents, Saroj Dental) by combining a **5.0★ (100% Five-Star) Verified Track Record** with a frictionless **15-Second WhatsApp OPD Slot Scheduler**.
3. **Eliminating the 2:00 PM – 5:00 PM Split-OPD Lead Leak:**
   - Live `Asia/Kolkata` status engine calculates whether the clinic is in **Morning OPD (10 AM–2 PM)**, **Afternoon Sterilization Break (2 PM–5 PM)**, **Evening OPD (5 PM–9 PM)**, or **After-Hours (9 PM–10 AM)**, dynamically updating CTA copy to book the very next available session.

---

## 2. Verified Business & Clinical Data Payload
- **English Name:** Bhagwati Dental Care (Bhagwati Dental Care & Implant Center)
- **Local Script Name:** भगवती डेंटल केयर
- **Lead Clinician:** Dr. Nidhi B. Kamble, B.D.S. (Chief Dental Surgeon)
- **Regulatory & Government Verification:**
  - MPCB Bio-Medical Waste & Clinical Authorization: `MPCB-BMW_AUTH-0000058732` (`SRO-THANE II/BMW_AUTH/2602000259-2026`)
  - Practice Badges: Identifies as Women-Owned · LGBTQ+ Friendly · Sterile Chairside Display Operatory
- **Contact Endpoints:**
  - Phone: `+91 92709 06073` (`tel:+919270906073`)
  - WhatsApp API: `https://wa.me/919270906073`
  - Social Proof Handles: Instagram `@bhagwatidentalcare` | `@toothtalkswithdr.nidhi`
- **Physical Coordinates & Address:**
  - Shop No. 24, Martin Commercial Complex, New Vasai Link Rd, Yashvant Viva Twp, Nalasopara East, Vasai-Virar, Maharashtra 401209
  - Google Maps Plus Code: `CR5G+QH Nalasopara East`
  - Geo Coordinates: `19.4094264, 72.8264313`
  - Place ID: `ChIJjd4TLIWp5zsRbrhjRqKnNCY`

---

## 3. Design System & Aesthetic Tokens (`style.css`)
### Color Palette (Warm Clinical Ivory & Surgical Emerald)
- `--bg-canvas`: `#FAF8F5` (Warm Sterile Ivory)
- `--bg-card`: `#FFFFFF` (Pure Clinical White)
- `--bg-subtle`: `#F2EFE9` (Soft Sand Secondary Surface)
- `--text-primary`: `#11221F` (Deep Obsidian Pine)
- `--text-secondary`: `#4A5D58` (Muted Slate Teal)
- `--text-muted`: `#768782`
- `--brand-primary`: `#0D3B36` (Surgical Emerald)
- `--brand-accent`: `#147A6E` (Diagnostic Teal)
- `--brand-gold`: `#C89D54` (Champagne Trust Gold)
- `--status-open`: `#10B981` (Live OPD Pulse Green)
- `--status-break`: `#F59E0B` (Afternoon Break Amber)
- `--border-hairline`: `1px solid #E5E0D5`
- `--shadow-ambient`: `0 12px 32px -8px rgba(13, 59, 54, 0.07)`

### Typography & Layout Architecture
- **Display / Headings:** `'Plus Jakarta Sans'`, weight `700–800`, tight tracking (`-0.025em`).
- **Body Copy:** `'Plus Jakarta Sans'`, weight `400–500`, `1.6` line-height.
- **Technical / Timestamps / Reg IDs:** `'JetBrains Mono'`, weight `500`.
- **Grid System:** 12-column CSS Grid for the "Know Your Specialist & Chairside Tech" Bento layout; 3-column responsive grid (`minmax(300px, 1fr)`) for the 8 core treatments; mobile-first sticky bottom action bar (`z-index: 999`) below `768px`.

---

## 4. Component Architecture (`index.html` & `script.js`)
1. **SEO & Schema.org Payload:**
   - Complete `Dentist` + `MedicalClinic` JSON-LD with exact coordinates (`19.4094264, 72.8264313`), split `openingHoursSpecification` (`10:00-14:00`, `17:00-21:00`), `aggregateRating` (`5.0`, `19` reviews), and Open Graph meta tags for rich WhatsApp link previews.
2. **Live IST Split-OPD Top Bar:**
   - Real-time `Asia/Kolkata` clock + live badge showing current session status and exact countdown/next opening time.
3. **Frosted Glass Navbar:**
   - English + Marathi (`भगवती डेंटल केयर`) brand lockup, section links, and instant WhatsApp/Call triggers.
4. **Hero Section:**
   - Merit pills (`5.0★ across 19 Verified Reviews` · `Chairside Intraoral Display` · `Women-Owned Practice`).
   - Primary Headline emphasizing **Visual Chairside Transparency & Painless Root Canals**.
   - Dual CTAs: Jump to 15-Second WhatsApp Slot Scheduler or Direct Call.
5. **"Know Your Specialist & Chairside Tech" Bento Grid:**
   - Card 1: Dr. Nidhi B. Kamble (B.D.S.) clinical profile, ethical pledge (*"No Unnecessary Treatments"*), and `@toothtalkswithdr.nidhi` patient education ethos.
   - Card 2: **Chairside Intraoral Display Explainer** (how patients watch their own live dental examination on-screen before approving any procedure).
   - Card 3: **MPCB Authorized Sterilization Protocol** (citing Reg. `MPCB-BMW_AUTH-0000058732` & 2:00 PM–5:00 PM dedicated sterilization window).
   - Card 4: **Clinic Tour Visual Grid** (configured with clean `lh3.googleusercontent.com` image slots + zero-stock clinical visual fallbacks).
6. **8-Treatment Service Matrix with Deep-Linked WhatsApp Triggers:**
   - Each card pre-fills a specific WhatsApp inquiry (`?text=Hi%20Dr.%20Nidhi,%20I%20would%20like%20to%20enquire%20about%20[Treatment]...`):
     1. Painless Root Canal Treatment (Single-Sitting & Rotary RCT) — *Most Reviewed (`5 mentions`)*
     2. Chairside Intraoral Video Diagnosis & Consultation
     3. Ultrasonic Teeth Cleaning, Scaling & Polishing
     4. Dental Implants & Fixed Tooth Replacement
     5. Tooth-Colored Fillings & Restorations
     6. Zirconia / Ceramic Crowns, Bridges & BPS Dentures
     7. Cosmetic Dentistry, Teeth Whitening & Smile Design
     8. Pediatric (Kids) & Painless Wisdom Tooth Extraction
7. **Verbatim Google Reviews & Keyword Tag Wall:**
   - Displays the exact Google Maps keyword frequency pills (`root canal treatment 5`, `honest dentist 2`, `painless procedure 2`, `no unnecessary treatments 2`) and verbatim cards from **Nanhe Pal**, **Disha Prajapati**, and **Priya Goud** with owner responses.
8. **Interactive 15-Second WhatsApp OPD Slot Scheduler:**
   - Interactive inputs: Patient Name, Treatment Concern (dropdown), Preferred Day (Today / Tomorrow / Specific Date), Preferred Split-OPD Session (`Morning: 10 AM – 2 PM` vs. `Evening: 5 PM – 9 PM`), and First-Time Nervous Patient toggle.
   - Dynamically constructs a clean, formatted WhatsApp message and opens `wa.me/919270906073`.
9. **Split-OPD Timings Table & Embedded Google Map (`iframe`):**
   - Full 7-day schedule table highlighting Sunday availability (a major advantage over nearby clinics closed on Sundays like Dr. Pragati's and Smile City) + interactive map centered on Martin Commercial Complex, Vasai Link Rd.
10. **Mobile Sticky Bottom Bar:**
    - Thumb-friendly 2-button dock (`Call Clinic` + `Book on WhatsApp`) for commuters on Vasai Link Road.