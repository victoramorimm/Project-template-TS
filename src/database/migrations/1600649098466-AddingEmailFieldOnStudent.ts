import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingEmailFieldOnStudent1600649098466 implements MigrationInterface {
    name = 'AddingEmailFieldOnStudent1600649098466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }

}
