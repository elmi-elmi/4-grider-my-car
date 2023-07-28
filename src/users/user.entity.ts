import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('This id inserted: ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('This id update: ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('This id removed: ', this.id);
  }
}
