create table if not exists public.test_results (
  id text primary key,
  created_at timestamptz not null default now(),
  payload jsonb not null
);

alter table public.test_results enable row level security;

-- Доступ к таблице идёт только через серверный ключ SUPABASE_SERVICE_ROLE_KEY.
-- Публичные политики intentionally не создаются.

create index if not exists test_results_created_at_idx
  on public.test_results (created_at desc);
