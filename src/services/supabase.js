import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://crggbookseynxxkvvbqv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZ2dib29rc2V5bnh4a3Z2YnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMjg4MzksImV4cCI6MjAzMDcwNDgzOX0.93mEga1UWP8hh2GULV01Z2rCv42t4_6tOHxWEXKSa-0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
