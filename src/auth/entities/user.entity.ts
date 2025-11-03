import { Phone } from 'src/phone/entities/phone.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
    nullable: true,
  })
  email: string | null;

  @Column('text')
  password: string;

  @Column('text')
  name: string;

  @ManyToOne(() => Phone, { nullable: true })
  @JoinColumn({ name: 'phone_id' })
  phone: Phone | null;

  @Column('text', { nullable: true, name: 'phone_id', unique: true })
  phoneId: string | null;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
