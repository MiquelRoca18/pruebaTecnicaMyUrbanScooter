import { Migration } from '@mikro-orm/migrations';

export class Migration20250325152818 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "categoria" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "categoria_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_categoria_deleted_at" ON "categoria" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "categoria" cascade;`);
  }

}
