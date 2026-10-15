import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://elljabhruhuxakxdsvjv.supabase.co';
const supabaseAnonKey = 'sb_publishable_mgh6fIC8JSrNn2xe5smFNg_QibaBhFj';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const candidateTables = [
  'Classes', 'classes', 'Class', 'class',
  'Students', 'students', 'Student', 'student',
  'Profiles', 'profiles', 'Profile', 'profile',
  'Users', 'users', 'User', 'user',
  'student_progress', 'progress',
  'learning_pathways', 'destinations',
  'game_questions', 'student_game_history'
];

async function checkTables() {
  console.log('--- Probing Tables on Supabase ---');
  for (const t of candidateTables) {
    const { data, error } = await supabase.from(t).select('*').limit(1);
    if (error) {
      console.log(`[${t}]: ERROR ${error.code} - ${error.message}`);
    } else {
      console.log(`[${t}]: SUCCESS! Found ${data?.length} rows. Sample:`, data);
    }
  }
}

checkTables();
