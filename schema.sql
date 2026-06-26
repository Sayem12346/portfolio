-- ============================================================
-- SAYEM DENTAL CARE — Database Schema
-- Paste entire file into Supabase SQL Editor and click Run
-- ============================================================

-- 1. SITE SETTINGS
create table if not exists site_settings (
  id int primary key default 1,
  hero_badge text default 'Chittagong''s Trusted Dental Clinic',
  hero_headline text default 'Your Healthy Smile Starts Here',
  hero_subheadline text default 'Relief from pain. Confidence in your smile. Expert dental care in Chittagong — gentle, modern, and built around you.',
  phone text default '+8801633282251',
  whatsapp text default '8801633282251',
  email text default 'hafizurrahmansayem@gmail.com',
  address text default 'Chittagong, Bangladesh',
  business_hours text default 'Saturday – Thursday, 10:00 AM – 8:00 PM',
  facebook_url text default 'https://www.facebook.com',
  youtube_url text default 'https://www.youtube.com',
  logo_url text default '',
  clinic_name text default 'Sayem Dental Care',
  tagline text default 'Your Trusted Smile Partner',
  constraint single_row check (id = 1)
);
insert into site_settings (id) values (1) on conflict (id) do nothing;

-- 2. SERVICES
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  sort_order int not null default 0,
  title text not null,
  description text not null,
  benefit_tag text default '',
  image_url text default '',
  active boolean default true,
  created_at timestamptz default now()
);

-- 3. BEFORE/AFTER CASES
create table if not exists before_after (
  id uuid primary key default gen_random_uuid(),
  sort_order int not null default 0,
  before_image_url text default '',
  after_image_url text default '',
  caption text default '',
  active boolean default true,
  created_at timestamptz default now()
);

-- 4. WHY CHOOSE US
create table if not exists why_us (
  id uuid primary key default gen_random_uuid(),
  sort_order int not null default 0,
  icon text default '',
  title text not null,
  description text not null,
  active boolean default true
);

-- 5. TESTIMONIALS
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  sort_order int not null default 0,
  name text not null,
  role text not null,
  quote text not null,
  rating int default 5 check (rating between 1 and 5),
  active boolean default true,
  created_at timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table site_settings enable row level security;
alter table services enable row level security;
alter table before_after enable row level security;
alter table why_us enable row level security;
alter table testimonials enable row level security;

create policy "Public read site_settings" on site_settings for select using (true);
create policy "Public read services" on services for select using (true);
create policy "Public read before_after" on before_after for select using (true);
create policy "Public read why_us" on why_us for select using (true);
create policy "Public read testimonials" on testimonials for select using (true);

create policy "Admin all site_settings" on site_settings for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admin all services" on services for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admin all before_after" on before_after for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admin all why_us" on why_us for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admin all testimonials" on testimonials for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE BUCKET
-- ============================================================
insert into storage.buckets (id, name, public)
values ('dental-images', 'dental-images', true)
on conflict (id) do nothing;

create policy "Public read dental-images" on storage.objects for select
  using (bucket_id = 'dental-images');
create policy "Admin upload dental-images" on storage.objects for insert
  with check (bucket_id = 'dental-images' and auth.role() = 'authenticated');
create policy "Admin update dental-images" on storage.objects for update
  using (bucket_id = 'dental-images' and auth.role() = 'authenticated');
create policy "Admin delete dental-images" on storage.objects for delete
  using (bucket_id = 'dental-images' and auth.role() = 'authenticated');

-- ============================================================
-- SEED DATA
-- ============================================================
insert into services (sort_order, title, description, benefit_tag) values
(1, 'Scaling & Polishing', 'Professional deep cleaning to remove plaque and tartar, leaving your teeth spotless and your breath fresh.', 'Prevents gum disease & decay'),
(2, 'Fillings (Cavity Restoration)', 'Tooth-colored composite fillings that restore damaged teeth naturally, blending seamlessly with your smile.', 'Restore & protect damaged teeth'),
(3, 'Fluoride & Sealant Application', 'Preventive treatments that strengthen enamel and seal grooves, protecting teeth from future decay.', 'Long-term cavity prevention'),
(4, 'Root Canal Therapy (RCT)', 'Pain-free root canal treatment using modern rotary techniques to save infected teeth and eliminate pain.', 'Save your natural tooth'),
(5, 'Caps, Crowns & Bridges', 'Precision-crafted crowns and bridges that restore strength, function, and aesthetics to damaged or missing teeth.', 'Durable full-coverage restoration'),
(6, 'Extractions', 'Gentle, virtually pain-free tooth extractions including wisdom teeth, performed with modern anesthetic techniques.', 'Comfortable, safe removal'),
(7, 'Dentures', 'Custom-fitted partial and full dentures crafted for a natural appearance, comfortable fit, and confident smile.', 'Restore full smile function'),
(8, 'Dental Implants', 'Permanent titanium implants that look, feel, and function like natural teeth — the gold standard for tooth replacement.', 'Lifetime tooth replacement'),
(9, 'Orthodontics (Braces/Aligners)', 'Traditional braces and clear aligner systems to straighten teeth and correct bite issues at any age.', 'Straight teeth, perfect bite')
on conflict do nothing;

insert into why_us (sort_order, icon, title, description) values
(1, 'pain', 'Pain-Free Treatment', 'Advanced anesthesia and gentle techniques ensure every visit is comfortable.'),
(2, 'modern', 'Modern Equipment', 'Digital X-rays, laser dentistry, and state-of-the-art sterilization systems.'),
(3, 'emergency', 'Emergency Care', 'Same-day emergency appointments for dental pain, trauma, and urgent cases.'),
(4, 'specialist', 'Experienced Specialists', 'A team of qualified, experienced dentists committed to your oral health.'),
(5, 'sterile', 'Sterile Environment', 'Hospital-grade sterilization protocols for your complete safety.'),
(6, 'patient', 'Patient-First Approach', 'We explain every step — no surprises, no pressure, just honest care.')
on conflict do nothing;

insert into testimonials (sort_order, name, role, quote, rating) values
(1, 'Fatima Begum', 'Patient, Scaling & Whitening', 'I was terrified of dentists for years. The team was so gentle and patient — my scaling was completely painless. My teeth look amazing now.', 5),
(2, 'Karim Ahmed', 'Patient, Dental Implant', 'The implant looks and feels exactly like my natural tooth. The whole process was explained clearly and I never felt any pain during treatment.', 5),
(3, 'Nadia Sultana', 'Patient, Orthodontics', 'I got clear aligners and the transformation in 8 months is unbelievable. Everyone at the clinic is so professional and caring.', 5)
on conflict do nothing;
