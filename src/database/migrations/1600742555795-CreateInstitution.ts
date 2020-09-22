import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateInstitution1600742555795 implements MigrationInterface {
    name = 'CreateInstitution1600742555795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "institution" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f60ee4ff0719b7df54830b39087" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "college" DROP CONSTRAINT "PK_ebef1972362002203cdf7a22e0c"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "college" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "college" ADD CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "college" DROP CONSTRAINT "PK_ebef1972362002203cdf7a22e0c"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "college" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "college" ADD CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "institution"`);
    }

}
