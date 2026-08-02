/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `phone` (text, nullable) — optional phone number
  - `service` (text, not null) — which photography package the visitor is interested in
  - `message` (text, not null) — the visitor's message
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_submissions`.
- INSERT-only for anon + authenticated: any visitor can submit the contact form.
- No SELECT/UPDATE/DELETE policies: submissions are private and can only be read via the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);
