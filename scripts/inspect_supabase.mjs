import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://elljabhruhuxakxdsvjv.supabase.co';
const supabaseAnonKey = 'sb_publishable_mgh6fIC8JSrNn2xe5smFNg_QibaBhFj';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function inspect() {
  console.log('--- 1. Testing Connection & Classes Table ---');
  const { data: classes, error: classesError } = await supabase.from('classes').select('*');
  if (classesError) {
    console.error('Classes error:', classesError);
  } else {
    console.log(`Found ${classes?.length} classes:`);
    classes?.forEach(c => console.log(`  - Code: "${c.code}", Name: "${c.name}", ID: ${c.id}, Grade: ${c.grade_level}`));
  }

  console.log('\n--- 2. Testing Students Table (Direct Select) ---');
  const { data: students, error: studentsError } = await supabase.from('students').select('*').limit(10);
  if (studentsError) {
    console.log('Direct select from students error (likely RLS):', studentsError.message, studentsError.code);
  } else {
    console.log(`Found ${students?.length} students in direct query:`);
    students?.forEach(s => console.log(`  - ${s.student_code}: "${s.full_name}", Class Code: "${s.class_code}", Class ID: ${s.class_id}`));
  }

  console.log('\n--- 3. Testing verify_student_login RPC with "Lê Hoàng Khôi", "5.6", "VD56017" ---');
  const { data: rpcResult, error: rpcError } = await supabase.rpc('verify_student_login', {
    p_full_name: 'Lê Hoàng Khôi',
    p_class_code: '5.6',
    p_access_code: 'VD56017'
  });

  if (rpcError) {
    console.error('RPC Error:', rpcError);
  } else {
    console.log('RPC Result:', JSON.stringify(rpcResult, null, 2));
  }

  console.log('\n--- 4. Testing with other variations / trimming / normalization ---');
  const variations = [
    { name: 'Le Hoang Khoi', class: '5.6', code: 'VD56017' },
    { name: 'Lê Hoàng Khôi', class: '5.6', code: '56017' },
    { name: 'Lê Hoàng Khôi', class: '5.6', code: 'VD5617' },
    { name: 'Lê Hoàng Khôi', class: 'Class 5.6', code: 'VD56017' },
  ];
  for (const v of variations) {
    const res = await supabase.rpc('verify_student_login', {
      p_full_name: v.name,
      p_class_code: v.class,
      p_access_code: v.code
    });
    console.log(`Test variation ${JSON.stringify(v)} ->`, res.data?.errorMessage || (res.data?.success ? 'SUCCESS!' : 'FAILED'));
  }
}

inspect().catch(console.error);
