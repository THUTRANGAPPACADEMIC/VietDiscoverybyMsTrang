import { createClient } from '@supabase/supabase-js';

const url = 'https://elljabhruhuxakxdsvjv.supabase.co';
const key = 'sb_publishable_mgh6fIC8JSrNn2xe5smFNg_QibaBhFj';
const supabase = createClient(url, key);

async function inspectAll() {
  console.log('Testing raw REST endpoints on Supabase:');
  const tables = [
    'Classes', 'classes', 'CLASSES', '"Classes"',
    'Students', 'students', 'STUDENTS', '"students"',
    'Class', 'class', 'Student', 'student'
  ];

  for (const t of tables) {
    try {
      const res = await fetch(`${url}/rest/v1/${t}?select=*&limit=1`, {
        headers: {
          'apikey': key,
          'Authorization': `Bearer ${key}`
        }
      });
      const data = await res.json();
      console.log(`Endpoint /rest/v1/${t} -> status: ${res.status}`, res.status === 200 ? data : data.message || data);
    } catch (e) {
      console.log(`Endpoint /rest/v1/${t} -> error`, e.message);
    }
  }
}

inspectAll();
