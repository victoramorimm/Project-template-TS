import {MigrationInterface, QueryRunner} from "typeorm";

export default class CriaTabelas1600393185964 implements MigrationInterface {
    name = 'CriaTabelas1600393185964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "linkContent" character varying NOT NULL, CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "key" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "created_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "PK_0ef25918f0237e68696dee455bd"`);
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd"`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "updated_At"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "created_At"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "content"`);
    }

}
