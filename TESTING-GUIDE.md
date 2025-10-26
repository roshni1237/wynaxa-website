# 🧪 **COMPLETE PAGE TESTING GUIDE**

Test all pages and features to ensure everything works perfectly.

---

## 📝 **TESTING CHECKLIST**

### **✅ ALL PAGES - General Tests**

For EVERY page, check:
- [ ] Page loads without errors
- [ ] Navigation menu works
- [ ] Footer links work
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Responsive on desktop
- [ ] No console errors (F12 → Console)
- [ ] Images load correctly
- [ ] Text is readable
- [ ] Colors match brand

---

## 🏠 **1. HOMEPAGE** (`/`)

**URL:** http://localhost:3000/

### **Features to Test:**

- [ ] **Hero Section**
  - [ ] Headline displays: "The Future, Connected Locally"
  - [ ] CTA buttons work
  - [ ] "Explore Our World" scrolls to ecosystem
  - [ ] "Investor Access" goes to `/investor-access`

- [ ] **Ecosystem Preview**
  - [ ] 4 product cards display:
    - [ ] 🟣 Wynaxa Pay
    - [ ] 🔵 Wynaxa One
    - [ ] 🟢 Wynaxa Eco
    - [ ] 🟠 Wynaxa Foundry
  - [ ] Cards have hover effects
  - [ ] "Explore Ecosystem" button goes to `/ecosystem`

- [ ] **Impact Stats**
  - [ ] Animated counters work
  - [ ] Shows: Communities, Businesses, Impact, Saved

- [ ] **Mission Block**
  - [ ] Quote displays correctly
  - [ ] Background gradient visible

- [ ] **CTA Footer**
  - [ ] "Invest in Future" goes to `/investors`
  - [ ] "Partner with Us" goes to `/products`

---

## 👥 **2. ABOUT PAGE** (`/about`)

**URL:** http://localhost:3000/about

### **Features to Test:**

- [ ] **Hero Banner**
  - [ ] Headline displays correctly
  - [ ] "About Us" badge shows

- [ ] **Team Section**
  - [ ] Both team members display:
    - [ ] Roshni Patel (Founder)
    - [ ] Christian Shanahan (Co-Founder)
  - [ ] Photos load
  - [ ] LinkedIn links work (or show as placeholders)
  - [ ] Bio text displays

- [ ] **Mission & Values**
  - [ ] Mission statement clear
  - [ ] Values/pillars display

- [ ] **Timeline/Story**
  - [ ] Company story displays
  - [ ] Timeline elements work

---

## 🌐 **3. ECOSYSTEM PAGE** (`/ecosystem`)

**URL:** http://localhost:3000/ecosystem

### **Features to Test:**

- [ ] **Overview Header**
  - [ ] "Four products, one mission" headline
  - [ ] Ecosystem badge displays

- [ ] **Product Sections** (Test all 4):
  - [ ] **🟣 Wynaxa Pay**
    - [ ] Description clear
    - [ ] Features listed
    - [ ] CTA button works
  - [ ] **🔵 Wynaxa One**
    - [ ] Description clear
    - [ ] Features listed
    - [ ] CTA button works
  - [ ] **🟢 Wynaxa Eco**
    - [ ] Description clear
    - [ ] Features listed
    - [ ] CTA button works
  - [ ] **🟠 Wynaxa Foundry**
    - [ ] Description clear
    - [ ] Features listed
    - [ ] CTA button works

- [ ] **Product Cards**
  - [ ] All cards display with correct colors
  - [ ] Hover effects work
  - [ ] Icons display correctly

---

## 💼 **4. INVESTORS PAGE** (`/investors`)

**URL:** http://localhost:3000/investors

### **Features to Test:**

- [ ] **Hero Section**
  - [ ] Investment headline
  - [ ] "Investors" badge
  - [ ] CTAs:
    - [ ] "Access Full Pitch Deck" → `/investor-access`
    - [ ] "Schedule Meeting" → `/contact`

- [ ] **Traction Metrics**
  - [ ] 4 metric cards display
  - [ ] Numbers show correctly
  - [ ] Icons display

- [ ] **Why Invest Section**
  - [ ] Advantage cards display
  - [ ] Clear value propositions

- [ ] **Investment Round**
  - [ ] Series A details clear
  - [ ] Funding amount shows
  - [ ] Valuation shows

- [ ] **Bottom CTA**
  - [ ] "Request Access" → `/investor-access`
  - [ ] "Meet Team" → `/about`

---

## 🤝 **5. PRODUCTS PAGE** (`/products`)

**URL:** http://localhost:3000/products

### **Features to Test:**

- [ ] **Hero**
  - [ ] Partnership headline
  - [ ] "Products" badge

- [ ] **Partnership Cards**
  - [ ] 4 partnership types display
  - [ ] Each card has description
  - [ ] "Learn More" buttons work

- [ ] **Partnership Types:**
  - [ ] Technology Partners
  - [ ] Financial Partners
  - [ ] Community Partners
  - [ ] Implementation Partners

---

## 💼 **6. CAREERS PAGE** (`/careers`)

**URL:** http://localhost:3000/careers

### **Features to Test:**

- [ ] **Hero**
  - [ ] "Join Our Team" headline
  - [ ] "Careers" badge

- [ ] **Job Listings** (6 positions):
  - [ ] Senior Full-Stack Engineer
  - [ ] Product Manager
  - [ ] Community Operations Lead
  - [ ] Head of Partnerships
  - [ ] UI/UX Designer
  - [ ] Data Analyst

- [ ] **For Each Job:**
  - [ ] Title displays
  - [ ] Location shows
  - [ ] Job type shows (Full-time/Remote)
  - [ ] Description shows
  - [ ] "Apply Now" button works → Opens application modal or goes to form

- [ ] **Benefits Section**
  - [ ] Benefit cards display
  - [ ] Icons show correctly

- [ ] **Bottom CTA**
  - [ ] "Get in Touch" → `/contact`

---

## 📧 **7. CONTACT PAGE** (`/contact`)

**URL:** http://localhost:3000/contact

### **Features to Test:**

- [ ] **Hero**
  - [ ] "Let's Connect" headline
  - [ ] "Contact Us" badge

- [ ] **Contact Form**
  - [ ] **All fields present:**
    - [ ] Name (required)
    - [ ] Email (required)
    - [ ] Company (optional)
    - [ ] Subject dropdown (required)
    - [ ] Message textarea (required)
  - [ ] Form validation works (try submitting empty)
  - [ ] Subject options:
    - [ ] Investor Inquiry
    - [ ] Partnership
    - [ ] Career Opportunity
    - [ ] General Question

- [ ] **Form Submission:**
  - [ ] Fill with test data
  - [ ] Click "Send Message"
  - [ ] Button shows "Sending..."
  - [ ] Success message appears
  - [ ] Form resets after success
  - [ ] Check terminal for ✅ logs

- [ ] **After Submission Check:**
  - [ ] Email arrives at roshanipatel94@gmail.com
  - [ ] Email arrives at christian@employtec.com
  - [ ] Confirmation email arrives at test email
  - [ ] Entry in Google Sheet Tab 1

- [ ] **Contact Information Cards:**
  - [ ] **Dublin Office**
    - [ ] Location shows
    - [ ] Email: info@wynaxa.com works
  - [ ] **Surat India Office**
    - [ ] Location shows
    - [ ] Email: india@wynaxa.com works

- [ ] **Social Media**
  - [ ] LinkedIn link shows
  - [ ] Instagram link shows

---

## 🔐 **8. INVESTOR ACCESS PAGE** (`/investor-access`)

**URL:** http://localhost:3000/investor-access

### **Features to Test - BEFORE Access:**

- [ ] **Gate Screen**
  - [ ] Lock icon displays
  - [ ] "Investor Access" headline
  - [ ] Form displays

- [ ] **Access Request Form**
  - [ ] **All fields present:**
    - [ ] Full Name (required)
    - [ ] Email (required)
    - [ ] Company/Fund (required)
    - [ ] LinkedIn Profile (optional)
  - [ ] NDA checkbox present
  - [ ] Form validation works

- [ ] **Form Submission:**
  - [ ] Fill with test data
  - [ ] Check NDA box
  - [ ] Click "Request Access"
  - [ ] Button shows loading state
  - [ ] Success → Deck unlocks

### **Features to Test - AFTER Access:**

- [ ] **Unlocked Content**
  - [ ] Investor deck displays
  - [ ] Sections are viewable
  - [ ] Content is readable

- [ ] **Action Buttons:**
  - [ ] "Download PDF" (if implemented)
  - [ ] "View Financials" (if implemented)
  - [ ] "Meet the Team" → `/about`
  - [ ] "Access Data Room" (if implemented)

- [ ] **After Submission Check:**
  - [ ] Email arrives at both team addresses
  - [ ] Entry in Google Sheet Tab 2
  - [ ] Status shows "New Lead"

---

## 🎯 **9. NAVIGATION TESTING**

### **Header Navigation:**
- [ ] Click "About" → Goes to `/about`
- [ ] Click "Ecosystem" → Goes to `/ecosystem`
- [ ] Click "Investors" → Goes to `/investors`
- [ ] Click "Products" → Goes to `/products`
- [ ] Click "Careers" → Goes to `/careers`
- [ ] Click "Contact" → Goes to `/contact`
- [ ] Click "Investor Access" button → Goes to `/investor-access`
- [ ] Logo click → Goes to homepage

### **Footer Navigation:**
- [ ] **Company Section:**
  - [ ] About Us → `/about`
  - [ ] Careers → `/careers`
  - [ ] Contact → `/contact`

- [ ] **Products Section:**
  - [ ] Wynaxa Pay → `/ecosystem#pay`
  - [ ] Wynaxa One → `/ecosystem#one`
  - [ ] Wynaxa Eco → `/ecosystem#eco`
  - [ ] Wynaxa Foundry → `/ecosystem#foundry`

- [ ] **Connect Section:**
  - [ ] Email links work (mailto:)
  - [ ] Investor Portal → `/investor-access`

---

## 📱 **10. RESPONSIVE DESIGN TESTING**

### **Mobile (375px - 767px):**
- [ ] All pages load correctly
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] Forms work
- [ ] Navigation menu works (mobile menu)
- [ ] Images scale correctly
- [ ] No horizontal scroll

### **Tablet (768px - 1023px):**
- [ ] Layout adjusts appropriately
- [ ] Cards stack nicely
- [ ] Forms are usable
- [ ] Navigation adapts

### **Desktop (1024px+):**
- [ ] Full desktop layout
- [ ] Multi-column layouts work
- [ ] All features accessible
- [ ] Wide screens look good

---

## 🚨 **11. ERROR HANDLING TESTING**

### **Form Errors:**
- [ ] Try submitting contact form empty → Shows validation
- [ ] Try invalid email → Shows validation
- [ ] Fill required fields only → Works
- [ ] Network error handling (disconnect wifi) → Shows error message

### **Navigation Errors:**
- [ ] Try visiting `/nonexistent` → Shows 404 page
- [ ] Back button works correctly
- [ ] Forward button works correctly

---

## 🔍 **12. BROWSER TESTING**

Test on multiple browsers:
- [ ] **Chrome** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest)
- [ ] **Edge** (latest)
- [ ] **Mobile Safari** (iOS)
- [ ] **Mobile Chrome** (Android)

---

## ✅ **FINAL VERIFICATION**

Before marking complete:
- [ ] All 8 pages tested
- [ ] All 3 forms working
- [ ] All navigation links work
- [ ] All emails arriving
- [ ] All Google Sheets updating
- [ ] Mobile responsive
- [ ] No console errors
- [ ] No broken images
- [ ] No broken links
- [ ] Performance is good (fast loading)

---

## 📊 **TEST RESULTS LOG**

**Test Date:** _____________

**Tester:** _____________

**Issues Found:**
1. 
2. 
3. 

**Status:**
- [ ] All tests passed
- [ ] Issues found (see above)
- [ ] Ready for deployment
- [ ] Needs fixes before deployment

---

## 🎉 **WHEN ALL TESTS PASS:**

✅ **Website is production-ready!**

**Next steps:**
1. Fix any issues found
2. Re-test failed items
3. Deploy to production
4. Run tests again on production URL

**Testing complete!** 🚀
