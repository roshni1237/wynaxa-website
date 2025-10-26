# 🚀 **DEPLOYMENT CHECKLIST - Wynaxa Website**

Use this checklist to ensure everything is ready for production deployment.

---

## ✅ **PRE-DEPLOYMENT CHECKLIST**

### **1. Local Development Complete**

- [ ] All pages load without errors
- [ ] Contact form works locally
- [ ] Investor access form works locally
- [ ] Career application form works locally
- [ ] All emails arrive correctly
- [ ] Google Sheets updates correctly
- [ ] No console errors in browser (F12)
- [ ] No errors in terminal

### **2. Environment Variables Configured**

- [ ] `.env.local` file exists in root directory
- [ ] `RESEND_API_KEY` is set correctly
- [ ] `GOOGLE_SHEET_ID` is set correctly
- [ ] `GOOGLE_SERVICE_ACCOUNT_EMAIL` is set correctly
- [ ] `GOOGLE_PRIVATE_KEY` is set correctly (with line breaks)
- [ ] Forms tested and working with these variables

### **3. Google Sheets Setup**

- [ ] Google Sheet created with correct ID
- [ ] Service account email added with Editor permission
- [ ] Tab 1: "Contact Form" with headers
- [ ] Tab 2: "Investor Access" with headers
- [ ] Tab 3: "Career Applications" with headers
- [ ] Test submission appears in correct tab

### **4. Email Setup**

- [ ] Resend account created
- [ ] Domain verified in Resend (if using custom domain)
- [ ] API key generated and tested
- [ ] Test emails received at both addresses:
  - [ ] roshanipatel94@gmail.com
  - [ ] christian@employtec.com
- [ ] Confirmation emails work for users

### **5. Git Repository Clean**

- [ ] `.env.local` is NOT in git
- [ ] `wynaxa-website-*.json` files are NOT in git
- [ ] `.gitignore` properly configured
- [ ] All code committed
- [ ] All changes pushed to main branch
- [ ] No sensitive data in repository

### **6. Code Quality**

- [ ] No TypeScript errors: `npm run build`
- [ ] No lint errors
- [ ] All pages load correctly
- [ ] Navigation works between all pages
- [ ] Mobile responsive (test on phone)
- [ ] Tablet responsive
- [ ] Desktop layout perfect

---

## 🚀 **VERCEL DEPLOYMENT STEPS**

### **Step 1: Prepare Repository**

```bash
# Make sure everything is committed
git status

# Should show:
# On branch main
# nothing to commit, working tree clean

# If not clean:
git add .
git commit -m "Ready for production deployment"
git push origin main
```

### **Step 2: Create Vercel Project**

1. Go to: https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. **Project Settings:**
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### **Step 3: Add Environment Variables**

⚠️ **CRITICAL: Add all 4 variables BEFORE deploying!**

In Vercel Project Settings → Environment Variables:

**Variable 1:**
```
Name: RESEND_API_KEY
Value: [Your Resend API key]
Environments: ✓ Production ✓ Preview ✓ Development
```

**Variable 2:**
```
Name: GOOGLE_SHEET_ID
Value: [Your Google Sheet ID]
Environments: ✓ Production ✓ Preview ✓ Development
```

**Variable 3:**
```
Name: GOOGLE_SERVICE_ACCOUNT_EMAIL
Value: [Your service account email]
Environments: ✓ Production ✓ Preview ✓ Development
```

**Variable 4:**
```
Name: GOOGLE_PRIVATE_KEY
Value: [Full private key with -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----]
Environments: ✓ Production ✓ Preview ✓ Development
```

**⚠️ Important:** Make sure to include the entire private key with line breaks (`\n`)

### **Step 4: Deploy**

1. Click **"Deploy"**
2. Wait 2-3 minutes for build
3. Vercel will provide a URL like: `https://wynaxa-website-xyz.vercel.app`

### **Step 5: Custom Domain (Optional)**

1. Go to: Project Settings → Domains
2. Add your domain: `wynaxa.com` or `www.wynaxa.com`
3. Update DNS records as instructed
4. Wait for DNS propagation (5-10 minutes)

---

## 🧪 **POST-DEPLOYMENT TESTING**

### **Test All Pages**

Visit each page and verify it loads:

- [ ] **Homepage:** `https://your-url.vercel.app/`
- [ ] **About:** `/about`
- [ ] **Ecosystem:** `/ecosystem`
- [ ] **Investors:** `/investors`
- [ ] **Products:** `/products`
- [ ] **Careers:** `/careers`
- [ ] **Contact:** `/contact`
- [ ] **Investor Access:** `/investor-access`

### **Test Contact Form**

1. Go to: `/contact`
2. Fill out form with real email
3. Submit
4. **Check:**
   - [ ] Success message appears
   - [ ] Email received at roshanipatel94@gmail.com
   - [ ] Email received at christian@employtec.com
   - [ ] Confirmation email received at your test email
   - [ ] Entry appears in Google Sheet Tab 1
   - [ ] No errors in Vercel logs

### **Test Investor Access Form**

1. Go to: `/investor-access`
2. Fill out form
3. Submit
4. **Check:**
   - [ ] Success message / unlock happens
   - [ ] Email received at both team addresses
   - [ ] Entry appears in Google Sheet Tab 2
   - [ ] No errors in Vercel logs

### **Test Career Application Form**

1. Go to: `/careers`
2. Click "Apply Now" on any job
3. Fill out form
4. Submit
5. **Check:**
   - [ ] Success message appears
   - [ ] Email received at both team addresses
   - [ ] Confirmation email received
   - [ ] Entry appears in Google Sheet Tab 3
   - [ ] No errors in Vercel logs

### **Check Vercel Logs**

1. Go to: Vercel Dashboard → Your Project → Logs
2. Check for any errors during form submissions
3. Look for your success messages (📧 ✅ symbols)

---

## 🔍 **MONITORING & MAINTENANCE**

### **What to Monitor**

- [ ] **Vercel Dashboard:** Check for build failures
- [ ] **Vercel Analytics:** Monitor traffic and performance
- [ ] **Resend Dashboard:** Check email delivery status
- [ ] **Google Sheets:** Verify data is being collected
- [ ] **Gmail:** Check inbox for form notifications

### **Weekly Checks**

- [ ] Review Google Sheets for new leads
- [ ] Check Resend email delivery rates
- [ ] Monitor Vercel uptime
- [ ] Test forms still working

### **Monthly Checks**

- [ ] Update dependencies: `npm update`
- [ ] Check for Next.js updates
- [ ] Review and respond to investor access requests
- [ ] Backup Google Sheets data

---

## 🚨 **TROUBLESHOOTING PRODUCTION ISSUES**

### **Forms Not Working in Production**

1. **Check Vercel environment variables:**
   - Go to: Settings → Environment Variables
   - Verify all 4 variables are set
   - Verify they're enabled for Production

2. **Check Vercel logs:**
   - Go to: Deployments → Latest → Functions
   - Look for error messages

3. **Check Resend dashboard:**
   - Verify domain is verified
   - Check email sending status
   - Look for bounces/errors

4. **Check Google Sheets:**
   - Verify service account still has access
   - Check sheet hasn't been deleted/moved
   - Verify tabs still exist

### **Emails Not Arriving**

1. **Check spam folders** first
2. **Verify Resend domain** is verified
3. **Check Resend dashboard** for delivery status
4. **Test with different email** provider
5. **Check Vercel logs** for email errors

### **Google Sheets Not Updating**

1. **Verify service account** has Editor access
2. **Check sheet ID** is correct
3. **Verify tabs** haven't been renamed
4. **Check column headers** match code
5. **Look at Vercel logs** for Google API errors

---

## 📊 **SUCCESS METRICS**

### **Week 1 After Launch**

- [ ] All forms tested in production
- [ ] First contact form submission received
- [ ] First investor access request received
- [ ] Zero errors in Vercel logs
- [ ] 100% email delivery rate

### **Month 1 After Launch**

- [ ] X contact form submissions
- [ ] X investor access requests
- [ ] X career applications
- [ ] Google Sheets data reviewed
- [ ] All leads followed up

---

## 🎉 **LAUNCH CHECKLIST**

### **Final Pre-Launch**

- [ ] All pages tested
- [ ] All forms tested
- [ ] All emails working
- [ ] Google Sheets collecting data
- [ ] Mobile responsive verified
- [ ] Performance optimized
- [ ] SEO tags in place
- [ ] Analytics connected (if using)

### **Launch Day**

- [ ] Deploy to production
- [ ] Test production URL
- [ ] Test all forms in production
- [ ] Update DNS (if custom domain)
- [ ] Announce launch
- [ ] Monitor logs closely

### **Post-Launch (First 24 Hours)**

- [ ] Monitor Vercel logs every few hours
- [ ] Check email delivery
- [ ] Verify Google Sheets updating
- [ ] Test forms multiple times
- [ ] Check mobile experience
- [ ] Monitor performance

---

## 📞 **EMERGENCY CONTACTS**

**If something breaks:**

1. **Check Vercel Status:** https://www.vercel-status.com/
2. **Check Resend Status:** https://status.resend.com/
3. **Check Google Status:** https://www.google.com/appsstatus

**Quick Rollback:**
```bash
# In Vercel Dashboard:
Deployments → Previous Deployment → "Promote to Production"
```

---

## ✅ **DEPLOYMENT COMPLETE!**

When all checkboxes are marked:
- ✅ Website is live
- ✅ Forms are working
- ✅ Emails are sending
- ✅ Data is being collected
- ✅ Ready to receive leads!

**Production URL:** https://your-url.vercel.app

**Next Steps:**
1. Share URL with team
2. Test with real users
3. Monitor performance
4. Respond to leads promptly

🎉 **Congratulations! Your website is live!** 🎉
