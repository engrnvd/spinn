import { Migration } from '@mikro-orm/migrations';

export class Migration20220705073057 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "mikro_orm_seeder" ("name" varchar(255) not null, "ran_at" timestamptz(0) not null);');
    this.addSql('alter table "mikro_orm_seeder" add constraint "mikro_orm_seeder_pkey" primary key ("name");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "mikro_orm_seeder" cascade;');
  }

}
