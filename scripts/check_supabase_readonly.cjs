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
  const tClasses = await client.from('classes').select('*');
  console.log('classes error:', tClasses.error);
  console.log('classes data count:', tClasses.data ? tClasses.data.length : null);
  if (tClasses.data) console.log('classes:', tClasses.data);

  const tProfiles = await client.from('profiles').select('*');
  console.log('profiles error:', tProfiles.error);
  console.log('profiles count:', tProfiles.data ? tProfiles.data.length : null);
  if (tProfiles.data) console.log('profiles:', tProfiles.data);

  const tMaterials = await client.from('learning_materials').select('*');
  console.log('learning_materials error:', tMaterials.error);
  console.log('learning_materials count:', tMaterials.data ? tMaterials.data.length : null);
}
run();
