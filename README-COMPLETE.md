# Wynaxa Website - Complete Project Documentation

**The Future, Connected Locally** - A modern Next.js website for the Wynaxa ecosystem with integrated forms, email notifications, and Google Sheets data collection.

---

## 🚀 **Project Overview**

This is the official website for **Wynaxa** - a people-powered technology platform connecting communities through four innovative products:
- 🟣 **Wynaxa Pay** - Local payment solutions
- 🔵 **Wynaxa One** - Community management platform
- 🟢 **Wynaxa Eco** - Sustainability initiatives
- 🟠 **Wynaxa Foundry** - Innovation hub

**Live URL:** https://wynaxa-website.vercel.app

---

## ✨ **Features**

### **Public Pages**
- ✅ Homepage with animated stats and ecosystem preview
- ✅ About page with team profiles and company timeline
- ✅ Ecosystem showcase (all 4 products)
- ✅ Investors page with Series A details
- ✅ Products/Partnerships page
- ✅ Careers page with 6 job listings
- ✅ Contact page with Dublin & Surat offices
- ✅ Gated Investor Access portal

### **Form Features (NEW!)**
- ✅ **Contact Form** - Sends emails to team + user confirmation + saves to Google Sheets
- ✅ **Investor Access Form** - Unlocks investor deck + sends notifications + saves leads
- ✅ **Career Application Form** - Sends applications + confirmations + saves to sheets
- ✅ Real-time form validation
- ✅ Loading states and error handling
- ✅ Success/error messages

### **Integrations**
- ✅ **Resend** - Email delivery service
- ✅ **Google Sheets** - Automatic data collection in 3 separate tabs
- ✅ **Environment Variables** - Secure configuration

---

## 🛠️ **Tech Stack**

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Component library |
| **Lucide Icons** | Icon system |
| **Resend** | Email service |
| **Google Sheets API** | Data storage |
| **Google Auth Library** | Service account authentication |

---

## 📂 **Project Structure**

```
wynaxa-final-tested/
├── src/
│   ├── app/
│   │   ├── api/                    # API routes
│   │   │   ├── contact/            # Contact form API
│   │   │   ├── investor-access/    # Investor access API
│   │   │   └── careers/            # Career applications API
│   │   ├── about/                  # About page
│   │   ├── careers/                # Careers page
│   │   ├── contact/                # Contact page
│   │   ├── ecosystem/              # Ecosystem page
│   │   ├── investor-access/        # Investor portal
│   │   ├── investors/              # Public investors page
│   │   ├── products/               # Products page
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   └── ui/                     # shadcn/ui components
│   └── lib/
│       └── utils.ts                # Utility functions
├── public/                         # Static assets
├── .env.local                      # Environment variables (not in git)
├── .gitignore                      # Git ignore rules
├── next.config.js                  # Next.js configuration
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies
└── README.md                       # This file
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager
- Git
- Resend account (for emails)
- Google Cloud project with Sheets API enabled

### **1. Clone the Repository**

```bash
git clone <your-repo-url>
cd wynaxa-final-tested
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Set Up Environment Variables**

Create a `.env.local` file in the root directory:

```env
# Resend API Key for Email
RESEND_API_KEY=your_resend_api_key_here

# Google Sheets Configuration
GOOGLE_SHEET_ID=your_google_sheet_id_here

# Google Service Account Email
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com

# Google Private Key (from service account JSON)
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

**Where to get these:**
- **RESEND_API_KEY:** https://resend.com/api-keys
- **GOOGLE_SHEET_ID:** From your Google Sheet URL
- **Service Account:** Create in Google Cloud Console → IAM & Admin → Service Accounts

### **4. Configure Google Sheets**

1. **Create a Google Sheet** with 3 tabs:
   - Tab 1: "Contact Form"
   - Tab 2: "Investor Access"
   - Tab 3: "Career Applications"

2. **Add column headers to each tab:**
   
   **Tab 1 - Contact Form:**
   ```
   timestamp | name | email | company | subject | message | source
   ```
   
   **Tab 2 - Investor Access:**
   ```
   timestamp | name | email | company | linkedin | source | status
   ```
   
   **Tab 3 - Career Applications:**
   ```
   timestamp | name | email | position | linkedin | message | source | status
   ```

3. **Share the sheet with your service account:**
   - Click "Share" button
   - Add: `your-service-account@project.iam.gserviceaccount.com`
   - Permission: **Editor**

### **5. Start Development Server**

```bash
npm run dev
```

Open http://localhost:3000 to see the website.

---

## 📧 **Email Configuration**

### **Resend Setup**

1. **Create account:** https://resend.com
2. **Verify domain:** Add your domain (e.g., wynaxa.com)
3. **Get API key:** Settings → API Keys → Create
4. **Add to `.env.local`**

### **Email Recipients**

Forms send emails to:
- `roshanipatel94@gmail.com`
- `christian@employtec.com`

To change recipients, edit the API route files in `src/app/api/`

---

## 🧪 **Testing Forms**

### **Test Contact Form**
1. Go to: http://localhost:3000/contact
2. Fill out all fields
3. Click "Send Message"
4. Check terminal for success logs
5. Verify emails received
6. Check Google Sheet Tab 1

### **Test Investor Access**
1. Go to: http://localhost:3000/investor-access
2. Fill out form and submit
3. Deck should unlock
4. Check emails and Sheet Tab 2

### **Test Career Application**
1. Go to: http://localhost:3000/careers
2. Click "Apply Now" on any job
3. Fill and submit
4. Check emails and Sheet Tab 3

### **What to Look For**

**Terminal logs should show:**
```
📧 Contact form submission started
📝 Form data received: ...
✅ Team email sent successfully
✅ Confirmation email sent successfully
✅ Saved to Google Sheets successfully
✅ Contact form submission completed successfully
```

---

## 🚀 **Deployment**

### **Deploy to Vercel**

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel:**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Follow setup wizard

3. **Add Environment Variables:**
   - Project Settings → Environment Variables
   - Add all 4 variables from `.env.local`:
     - `RESEND_API_KEY`
     - `GOOGLE_SHEET_ID`
     - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
     - `GOOGLE_PRIVATE_KEY`
   - Enable for: Production ✓ Preview ✓ Development ✓

4. **Deploy:**
   - Vercel will auto-deploy on push
   - Or click "Deploy" manually

5. **Test Production:**
   - Visit your live URL
   - Test all 3 forms
   - Verify emails and sheets work

---

## 📝 **Important Files**

### **Environment Variables (.env.local)**
- **NEVER commit this file to Git**
- Already in `.gitignore`
- Contains sensitive API keys

### **Service Account JSON**
- `wynaxa-website-*.json` files
- **NEVER commit to Git**
- Already in `.gitignore`

### **What's Safe to Commit**
- ✅ All code files
- ✅ `.gitignore`
- ✅ `package.json` and `package-lock.json`
- ✅ Configuration files
- ❌ `.env.local`
- ❌ `*.json` (service accounts)

---

## 🐛 **Troubleshooting**

### **Forms Not Working**

**1. Check environment variables are loaded:**
```bash
# Restart the server after creating .env.local
npm run dev
```

**2. Check terminal for errors:**
Look for red ❌ messages that indicate what's failing.

**3. Common issues:**
- **RESEND_API_KEY missing** → Check .env.local file exists
- **Email sending failed** → Verify Resend domain
- **Google Sheets save failed** → Check service account has Editor permission
- **500 error** → Check terminal logs for specific error

### **Google Sheets Not Updating**

1. **Verify service account email is added to sheet**
2. **Check permission is "Editor" not "Viewer"**
3. **Verify sheet has 3 tabs with correct headers**
4. **Check GOOGLE_SHEET_ID is correct**

### **Emails Not Arriving**

1. **Check spam/junk folders**
2. **Verify Resend domain is verified**
3. **Check API key is valid**
4. **Look at Resend dashboard for delivery status**

---

## 📊 **Form Data Collection**

All form submissions are saved to Google Sheets with:
- ✅ Timestamp
- ✅ User information
- ✅ Form data
- ✅ Source tracking
- ✅ Status (for investor/career forms)

**Access your data:**
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit

---

## 🔒 **Security**

- ✅ Environment variables for sensitive data
- ✅ API routes handle validation
- ✅ Service account with limited permissions
- ✅ No secrets in Git repository
- ✅ `.gitignore` properly configured

---

## 📞 **Support & Contact**

**Offices:**
- 🇮🇪 Dublin, Ireland
- 🇮🇳 Surat, Gujarat, India

**Email:**
- info@wynaxa.com
- india@wynaxa.com
- investors@wynaxa.com

**Website:**
- Production: https://wynaxa-website.vercel.app
- Development: http://localhost:3000

---

## 📜 **License**

This project is proprietary and confidential.

---

## 🎉 **What's Working**

- ✅ All 8 pages fully functional
- ✅ Contact form with email + sheets
- ✅ Investor access portal with email + sheets
- ✅ Career applications with email + sheets
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional animations
- ✅ Brand colors (purple, blue, green, orange)
- ✅ SEO-friendly
- ✅ Fast performance
- ✅ Type-safe with TypeScript

**Ready to deploy and collect leads!** 🚀

---

## 🔄 **Recent Updates**

**October 26, 2025:**
- ✅ Fixed contact form (was incomplete)
- ✅ Added `.env.local` configuration
- ✅ Created all 3 API routes
- ✅ Added detailed logging
- ✅ Improved error handling
- ✅ Updated documentation

**All forms now working and collecting data!**
