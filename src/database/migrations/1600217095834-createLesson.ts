import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateLesson1600217095834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'lesson',
                columns: [
                    {
                       name: 'id',
                       type: 'uuid',
                       generationStrategy: 'uuid',
                       default: 'uuid_generate_v4()', 
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('lesson');
    }

}
