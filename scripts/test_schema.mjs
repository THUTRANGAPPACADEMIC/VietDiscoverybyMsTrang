import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://elljabhruhuxakxdsvjv.supabase.co';
const supabaseAnonKey = 'sb_publishable_mgh6fIC8JSrNn2xe5smFNg_QibaBhFj';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  // Test OpenAPI schema definition to list all available tables
  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/`, {
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`
      }
    });
    const schema = await res.json();
    console.log('Available tables in schema definitions:');
    if (schema.definitions) {
      console.log(Object.keys(schema.definitions));
    } else {
      console.log('No definitions in root, schema keys:', Object.keys(schema));
    }
    if (schema.paths) {
      console.log('Available REST paths:');
      console.log(Object.keys(schema.paths));
    }
  } catch (err) {
    console.error('Fetch root schema err:', err);
  }

  // Test Classes
  console.log('\n--- Querying "Classes" ---');
  const resClasses = await supabase.from('Classes').select('*');
  console.log('Classes error:', resClasses.error);
  console.log('Classes data:', resClasses.data);

  // Test students / Students
  console.log('\n--- Querying "students" ---');
  const resStudents = await supabase.from('students').select('*').limit(5);
  console.log('students error:', resStudents.error);
  console.log('students data:', resStudents.data);

  console.log('\n--- Querying "Students" ---');
  const resStudentsCap = await supabase.from('Students').select('*').limit(5);
  console.log('Students cap error:', resStudentsCap.error);
  console.log('Students cap data:', resStudentsCap.data);
}

main().catch(console.error);
