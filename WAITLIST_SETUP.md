# N.A.B Glow Waitlist System

## Overview

This launchpad site now includes a comprehensive waitlist system to collect and manage potential customer information before the January 1st, 2026 launch.

## Features Implemented

### 1. Main Email Signup Form
- Located in the Newsletter section (`#newsletter`)
- Collects email addresses with validation
- Stores data both locally and submits to Netlify Forms
- Provides success/error feedback to users

### 2. Product Interest Tracking
- "Get Notified" buttons on product category cards
- "Get Notified" buttons on Glow Kit products
- "Claim Your Discount" button for early bird offers
- Tracks specific product/category interests

### 3. Data Storage Options

#### Option 1: Netlify Forms (Currently Implemented)
- **Pros**: Free, easy setup, built into GitHub Pages via Netlify
- **Cons**: Basic analytics, no advanced email marketing features
- **Setup**: Already configured with hidden form in `index.html`

#### Option 2: Email Service Integration (Recommended for Launch)
Services like Mailchimp, ConvertKit, or EmailOctopus:
```javascript
// Example for Mailchimp integration
const response = await fetch('/api/mailchimp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, interests: ['skincare', 'body-care'] })
});
```

#### Option 3: Simple Backend (For Advanced Users)
- Firebase, Supabase, or custom API
- More control over data and email campaigns

## How to Access Collected Data

### 1. Netlify Dashboard
- Visit your Netlify site dashboard
- Go to "Forms" tab
- View all form submissions with timestamps

### 2. Development Admin Panel
- Visit `https://devangellab.github.io/nab-glow-launchpad/#/admin`
- View locally stored data (browser-specific)
- Download JSON export of all collected data
- Clear test data

### 3. Browser Local Storage (Backup)
The system stores data locally as backup:
- `waitlistEmails`: Email signups
- `categoryInterests`: Product category interests  
- `productInterests`: Specific product interests

## Data Structure

### Email Signups
```json
{
  "email": "user@example.com",
  "timestamp": "2025-01-10T03:00:00.000Z",
  "source": "newsletter"
}
```

### Category Interests
```json
{
  "category": "Skincare",
  "timestamp": "2025-01-10T03:00:00.000Z"
}
```

### Product Interests
```json
{
  "product": "Starter Glow Kit",
  "timestamp": "2025-01-10T03:00:00.000Z"
}
```

## User Flow

1. User visits site and browses products
2. User clicks "Get Notified" on products they're interested in
3. System shows interest confirmation and guides to main signup
4. User enters email in newsletter section
5. Email submitted to Netlify Forms and stored locally
6. User receives confirmation message

## Next Steps for Production

### Immediate (Pre-Launch)
1. **Connect Email Service**: Integrate with Mailchimp/ConvertKit
2. **Email Campaigns**: Set up welcome series and launch countdown
3. **Analytics**: Add Google Analytics or similar for tracking
4. **Testing**: Test form submissions thoroughly

### Before Launch (December 2025)
1. **Email Templates**: Design launch announcement emails
2. **Segmentation**: Group users by product interests
3. **Automation**: Set up automated email sequences
4. **Landing Pages**: Create specific pages for different segments

### Post-Launch
1. **Customer Surveys**: Follow up with waitlist subscribers
2. **Retention Campaigns**: Convert subscribers to customers
3. **Referral Program**: Leverage early adopters for growth

## Technical Implementation

### Current Setup
- React components with form handling
- Netlify Forms for data collection
- Local Storage for backup and analytics
- Toast notifications for user feedback

### Files Modified
- `src/components/NewsletterSection.tsx` - Main signup form
- `src/components/ProductCategories.tsx` - Category interest tracking
- `src/components/ShopPlaceholder.tsx` - Product interest tracking
- `src/components/WaitlistAdmin.tsx` - Admin dashboard
- `index.html` - Hidden form for Netlify detection

## Troubleshooting

### Form Not Submitting
1. Check network tab for errors
2. Verify Netlify site has forms enabled
3. Ensure hidden form in HTML matches field names

### No Data in Netlify Dashboard
1. Wait a few minutes for processing
2. Check spam/junk folder for Netlify notifications
3. Verify site is deployed to Netlify (not just GitHub Pages)

### Local Storage Not Saving
1. Check browser console for errors
2. Verify localStorage is enabled in browser
3. Clear browser cache and test again

## Privacy & GDPR Compliance

Remember to add:
- Privacy policy link
- GDPR compliance notice for EU visitors
- Unsubscribe option in all emails
- Data retention policy

The current implementation includes a privacy notice: "No spam, just glow. Unsubscribe anytime."
