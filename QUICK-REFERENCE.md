# ⚡ **QUICK REFERENCE GUIDE - Wynaxa Website**

Quick commands and reference for common tasks.

---

## 🚀 **Quick Start Commands**

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Check TypeScript
npx tsc --noEmit
```

---

## 📂 **Important File Locations**

| File | Location |
|------|----------|
| Environment variables | `.env.local` (root) |
| Contact form page | `src/app/contact/page.tsx` |
| Contact API route | `src/app/api/contact/route.ts` |
| Investor access page | `src/app/investor-access/page.tsx` |
| Investor API route | `src/app/api/investor-access/route.ts` |
| Careers page | `src/app/careers/page.tsx` |
| Careers API route | `src/app/api/careers/route.ts` |
| Homepage | `src/app/page.tsx` |
| Root layout | `src/app/layout.tsx` |
| Global styles | `src/app/globals.css` |
| Tailwind config | `tailwind.config.ts` |
| Next.js config | `next.config.js` |

---

## 🔑 **Environment Variables Reference**

```env
# Required for forms to work
RESEND_API_KEY=re_xxxxx
GOOGLE_SHEET_ID=xxxxx
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx@xxx.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

---

## 📧 **Current Email Recipients**

**All forms send to:**
- roshanipatel94@gmail.com
- christian@employtec.com

**To change:** Edit API route files in `src/app/api/`

**Confirmation emails** sent to form submitters (Contact & Careers)

---

## 📊 **Google Sheets Structure**

**Sheet ID:** Set in `GOOGLE_SHEET_ID`

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

---

## 🌐 **Website URLs**

| Page | URL |
|------|-----|
| Homepage | `/` |
| About | `/about` |
| Ecosystem | `/ecosystem` |
| Investors | `/investors` |
| Products | `/products` |
| Careers | `/careers` |
| Contact | `/contact` |
| Investor Access | `/investor-access` |

---

## 🎨 **Brand Colors**

| Color | Hex | Usage |
|-------|-----|-------|
| Purple | `#8B5CF6` | Wynaxa Pay |
| Blue | `#3B82F6` | Wynaxa One |
| Green | `#10B981` | Wynaxa Eco |
| Orange | `#F97316` | Wynaxa Foundry |
| Dark | `#1E293B` | Text |
| Light | `#F8FAFC` | Background |

---

## 🛠️ **Common Tasks**

### **Restart Development Server**
```powershell
# Press Ctrl+C in terminal
# Then:
npm run dev
```

### **Check Forms Are Working**
```powershell
# Start server
npm run dev

# Open browser
# Go to http://localhost:3000/contact
# Submit form
# Watch terminal for success messages:
# 📧 ✅ ✅ ✅ = Working!
```

### **View Environment Variables**
```powershell
# Check if .env.local exists
Test-Path .env.local

# View contents (PowerShell)
Get-Content .env.local

# Should show 4 variables
```

### **Check Git Status**
```powershell
git status

# Should NOT see:
# .env.local
# wynaxa-website-*.json
```

### **Commit Changes**
```powershell
git add .
git commit -m "Your message"
git push origin main
```

### **Deploy to Vercel**
```powershell
# Push to GitHub
git push origin main

# Vercel auto-deploys
# Or click "Deploy" in Vercel dashboard
```

---

## 🐛 **Quick Troubleshooting**

### **Forms Not Working**
```powershell
# 1. Check .env.local exists
Test-Path .env.local

# 2. Restart server
npm run dev

# 3. Check terminal for errors
# Look for red ❌ messages
```

### **Emails Not Sending**
1. Check Resend dashboard: https://resend.com
2. Verify domain is verified
3. Check API key is correct in `.env.local`
4. Check spam folders

### **Google Sheets Not Updating**
1. Verify service account has Editor permission
2. Check sheet has 3 tabs
3. Verify GOOGLE_SHEET_ID is correct
4. Check terminal for Google API errors

### **Build Errors**
```powershell
# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Build again
npm run build
```

---

## 📞 **Important Links**

| Service | URL |
|---------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Resend Dashboard | https://resend.com/emails |
| Google Sheets | https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit |
| Google Cloud Console | https://console.cloud.google.com |
| GitHub Repo | [Your repo URL] |

---

## 🔒 **Security Reminders**

**NEVER commit:**
- ❌ `.env.local`
- ❌ `wynaxa-website-*.json`
- ❌ Any file with API keys

**Always in `.gitignore`:**
- `.env*.local`
- `*.json` (service accounts)
- `node_modules/`

---

## 📱 **Test URLs**

**Local Development:**
```
http://localhost:3000
http://localhost:3000/contact
http://localhost:3000/investor-access
http://localhost:3000/careers
```

**Production:**
```
https://wynaxa-website.vercel.app
https://wynaxa-website.vercel.app/contact
```

---

## 💡 **Quick Tips**

1. **Always restart server** after changing `.env.local`
2. **Check terminal logs** for detailed error messages
3. **Use browser console (F12)** to check for JavaScript errors
4. **Test on mobile** before deploying
5. **Check spam folders** if emails don't arrive
6. **Backup Google Sheets** regularly
7. **Monitor Vercel logs** after deployment

---

## 🎯 **Success Indicators**

**Forms are working when:**
- ✅ Success message appears
- ✅ Terminal shows green checkmarks
- ✅ Emails arrive at both addresses
- ✅ Google Sheets updates
- ✅ No red errors in terminal

**Website is ready when:**
- ✅ All pages load
- ✅ All forms work
- ✅ Mobile responsive
- ✅ No console errors
- ✅ Build succeeds
- ✅ Tests pass

---

## 📊 **Monitoring Commands**

```powershell
# Check server status
# Server running = Shows "Ready in X.Xs"

# Check for errors
# Look for red text in terminal

# Check build
npm run build
# Should complete without errors

# Check types
npx tsc --noEmit
# Should show no errors
```

---

## 🆘 **When Something Breaks**

1. **Check terminal** for error messages
2. **Check browser console** (F12)
3. **Restart server** (`Ctrl+C` then `npm run dev`)
4. **Check `.env.local`** file exists and is correct
5. **Check Git** - maybe revert last commit
6. **Check Vercel logs** if in production
7. **Rollback deployment** in Vercel if needed

---

## ✅ **Daily Checklist for Live Site**

- [ ] Forms working
- [ ] Emails arriving
- [ ] Google Sheets updating
- [ ] No Vercel errors
- [ ] Site loading fast
- [ ] No user complaints

---

**Keep this guide handy for quick reference!** 📌
