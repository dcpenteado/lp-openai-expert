import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = 'https://usujnrmddwilhntptisf.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzdWpucm1kZHdpbGhudHB0aXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NjA0NTIsImV4cCI6MjA2NDAzNjQ1Mn0.jkwg50aJW_2_p3-Zh7-eHvABTN46XI1YrzyrftuWiqU';

    export const supabase = createClient(supabaseUrl, supabaseAnonKey);