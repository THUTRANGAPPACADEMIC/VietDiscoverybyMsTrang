const fs = require('fs');
const dotenv = fs.readFileSync('.env', 'utf-8');
const env = {};
dotenv.split('\n').forEach(line => {
  const parts = line.split('=');
  const k = parts[0]?.trim();
  const v = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
  if (k) env[k] = v;
});
const { createClient } = require('@supabase/supabase-js');
const client = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);
async function run() {
  const tClasses = await client.from('Classes').select('*');
  console.log('Classes (capital) error:', tClasses.error);
  console.log('Classes data count:', tClasses.data ? tClasses.data.length : null);
  if (tClasses.data) console.log('Classes:', tClasses.data);

  const tStudents = await client.from('students').select('*');
  console.log('students error:', tStudents.error);
  console.log('students count:', tStudents.data ? tStudents.data.length : null);

  const tProgress = await client.from('student_progress').select('*');
  console.log('student_progress error:', tProgress.error);
  console.log('student_progress count:', tProgress.data ? tProgress.data.length : null);

  const rpcCheck = await client.rpc('verify_student_login', {
    p_full_name: 'test',
    p_class_code: '4.1',
    p_access_code: 'test'
  });
  console.log('verify_student_login rpc error:', rpcCheck.error);
  console.log('verify_student_login rpc data:', rpcCheck.data);
}
run();
