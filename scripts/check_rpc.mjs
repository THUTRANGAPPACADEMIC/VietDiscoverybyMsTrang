const supabaseUrl = 'https://elljabhruhuxakxdsvjv.supabase.co';
const supabaseAnonKey = 'sb_publishable_mgh6fIC8JSrNn2xe5smFNg_QibaBhFj';

async function checkRpc() {
  const rpcs = [
    'verify_student_login',
    'student_login',
    'login_student',
    'authenticate_student',
    'get_student',
    'get_classes',
    'is_staff',
    'is_super_admin'
  ];

  for (const r of rpcs) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/rpc/${r}`, {
        method: 'POST',
        headers: {
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
      const data = await res.json();
      console.log(`RPC [${r}]: status ${res.status}`, data);
    } catch (e) {
      console.log(`RPC [${r}]: err`, e);
    }
  }
}

checkRpc();
