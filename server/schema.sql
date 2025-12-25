create table if not exists contact_messages (
  id bigserial primary key,
  name varchar(120) not null,
  email varchar(255) not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on contact_messages (created_at desc);
