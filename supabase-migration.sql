-- Run this in your Supabase SQL Editor (project: nantzwlhnphyirishxou)
-- Adds new columns to the existing waitlist table for the expanded demo request form.

ALTER TABLE waitlist
  ADD COLUMN IF NOT EXISTS full_name      TEXT,
  ADD COLUMN IF NOT EXISTS business_name  TEXT,
  ADD COLUMN IF NOT EXISTS locations_count INTEGER,
  ADD COLUMN IF NOT EXISTS phone          TEXT;
