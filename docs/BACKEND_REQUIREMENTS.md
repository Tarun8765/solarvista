# Backend Requirements & Architecture

## Overview
This document outlines the backend infrastructure requirements for the SolarVista website, including folder structure, API routes, authentication, and database schema.

---

## Folder Structure

```
supabase/
├── config.toml                    # Supabase configuration
├── functions/
│   ├── _shared/
│   │   ├── cors.ts               # CORS headers utility
│   │   ├── supabase-client.ts    # Supabase client initialization
│   │   └── validation.ts         # Input validation schemas (zod)
│   │
│   ├── auth/
│   │   └── index.ts              # Custom auth handlers (if needed)
│   │
│   ├── contact-form/
│   │   └── index.ts              # Contact/quote form submission
│   │
│   ├── send-email/
│   │   └── index.ts              # Email sending via Resend
│   │
│   ├── newsletter-subscribe/
│   │   └── index.ts              # Newsletter subscription handler
│   │
│   └── solar-calculator/
│       └── index.ts              # Solar savings calculation API
│
├── migrations/
│   ├── 001_create_profiles.sql
│   ├── 002_create_contact_submissions.sql
│   ├── 003_create_newsletter_subscribers.sql
│   ├── 004_create_quote_requests.sql
│   └── 005_create_blog_posts.sql
│
└── seed.sql                       # Initial data seeding
```

---

## Database Schema

### Tables Required

#### 1. `profiles` (User Profiles)
| Column | Type | Constraints |
|--------|------|-------------|
| id | uuid | PK, FK → auth.users(id) |
| full_name | text | |
| phone | text | |
| address | text | |
| created_at | timestamptz | DEFAULT now() |
| updated_at | timestamptz | DEFAULT now() |

#### 2. `contact_submissions`
| Column | Type | Constraints |
|--------|------|-------------|
| id | uuid | PK, DEFAULT gen_random_uuid() |
| name | text | NOT NULL |
| email | text | NOT NULL |
| phone | text | NOT NULL |
| address | text | NOT NULL |
| message | text | |
| status | text | DEFAULT 'pending' |
| created_at | timestamptz | DEFAULT now() |

#### 3. `quote_requests`
| Column | Type | Constraints |
|--------|------|-------------|
| id | uuid | PK |
| user_id | uuid | FK → auth.users(id), NULLABLE |
| name | text | NOT NULL |
| email | text | NOT NULL |
| phone | text | NOT NULL |
| property_address | text | NOT NULL |
| monthly_bill | numeric | |
| roof_type | text | |
| estimated_savings | numeric | |
| status | enum | 'new', 'contacted', 'quoted', 'closed' |
| notes | text | |
| created_at | timestamptz | DEFAULT now() |

#### 4. `newsletter_subscribers`
| Column | Type | Constraints |
|--------|------|-------------|
| id | uuid | PK |
| email | text | UNIQUE, NOT NULL |
| subscribed_at | timestamptz | DEFAULT now() |
| unsubscribed_at | timestamptz | NULLABLE |
| is_active | boolean | DEFAULT true |

#### 5. `blog_posts` (Future CMS)
| Column | Type | Constraints |
|--------|------|-------------|
| id | uuid | PK |
| slug | text | UNIQUE, NOT NULL |
| title | text | NOT NULL |
| excerpt | text | |
| content | text | NOT NULL |
| category | text | |
| image_url | text | |
| author | text | |
| published_at | timestamptz | |
| is_published | boolean | DEFAULT false |
| created_at | timestamptz | DEFAULT now() |

#### 6. `user_roles` (Admin Access)
| Column | Type | Constraints |
|--------|------|-------------|
| id | uuid | PK |
| user_id | uuid | FK → auth.users(id) |
| role | app_role enum | 'admin', 'staff', 'user' |

---

## API Routes / Edge Functions

### 1. Contact Form Submission
```
POST /functions/v1/contact-form
```
**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "address": "string (required)",
  "message": "string (optional)"
}
```
**Response:** `{ success: true, id: "uuid" }`

**Actions:**
- Validate input with zod
- Insert into `contact_submissions` table
- Trigger email notification to admin
- Send confirmation email to user

---

### 2. Quote Request (Solar Calculator)
```
POST /functions/v1/solar-calculator
```
**Request Body:**
```json
{
  "monthlyBill": "number",
  "roofType": "string",
  "roofSize": "number (sq ft)",
  "sunExposure": "string (full/partial/limited)",
  "email": "string (optional)",
  "phone": "string (optional)"
}
```
**Response:**
```json
{
  "estimatedSavings": "number",
  "systemSize": "number (kW)",
  "paybackPeriod": "number (years)",
  "co2Offset": "number (tons/year)"
}
```

---

### 3. Newsletter Subscription
```
POST /functions/v1/newsletter-subscribe
```
**Request Body:**
```json
{
  "email": "string (required, valid email)"
}
```
**Response:** `{ success: true }`

**Actions:**
- Validate email format
- Check for existing subscription
- Insert/update subscriber record
- Send welcome email

---

### 4. Send Email (Internal)
```
POST /functions/v1/send-email
```
**Request Body:**
```json
{
  "to": "string",
  "subject": "string",
  "template": "string (quote-confirmation | contact-received | newsletter-welcome)",
  "data": "object"
}
```
**Required Secret:** `RESEND_API_KEY`

---

## Authentication Requirements

### Auth Methods
- [x] Email + Password (primary)
- [ ] Google OAuth (optional, future)
- [ ] Magic Link (optional, future)

### Auth Flows

#### Sign Up
1. User submits email + password
2. Supabase creates auth.users record
3. Trigger creates `profiles` record
4. Send verification email
5. Redirect to dashboard/home

#### Sign In
1. User submits credentials
2. Supabase validates
3. Return JWT token
4. Store session client-side

#### Password Reset
1. User requests reset
2. Edge function sends reset email via Resend
3. User clicks link with token
4. User sets new password

### Protected Routes (Frontend)
- `/dashboard` - User dashboard (if implemented)
- `/admin/*` - Admin panel (staff only)

---

## Row-Level Security (RLS) Policies

### `profiles`
```sql
-- Users can read/update own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);
```

### `contact_submissions`
```sql
-- Public can insert (no auth required)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Only admins can read
CREATE POLICY "Admins can view submissions"
  ON contact_submissions FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));
```

### `quote_requests`
```sql
-- Similar to contact_submissions
-- Public insert, admin read
```

---

## Required Secrets (Environment Variables)

| Secret Name | Description | Where Used |
|-------------|-------------|------------|
| `RESEND_API_KEY` | Resend email API key | send-email function |
| `ADMIN_EMAIL` | Admin notification email | contact-form function |
| `SITE_URL` | Production site URL | Email templates |

---

## Webhooks (Future)

### Stripe (if adding payments)
```
POST /functions/v1/stripe-webhook
```
- Handle payment confirmations
- Update order/subscription status

---

## Rate Limiting Recommendations

| Endpoint | Limit |
|----------|-------|
| contact-form | 5 requests/hour per IP |
| newsletter-subscribe | 3 requests/hour per IP |
| solar-calculator | 20 requests/hour per IP |

---

## Error Response Format

All API endpoints should return consistent error format:
```json
{
  "error": true,
  "message": "Human readable error message",
  "code": "ERROR_CODE",
  "details": {} // Optional validation errors
}
```

---

## Next Steps to Implement

1. **Enable Lovable Cloud** - Provisions Supabase backend
2. **Run migrations** - Create database tables
3. **Add secrets** - Configure RESEND_API_KEY
4. **Create edge functions** - Implement API endpoints
5. **Connect frontend** - Wire up forms to APIs
6. **Test flows** - Verify email delivery, form submissions
