import { Country } from 'src/country/entities/country.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
@Unique(['phoneCountry', 'phone']) // Define la restricción única compuesta
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

  @Column('text')
  surname: string;

  @ManyToOne(() => Country, (country) => country.users, { nullable: true })
  @JoinColumn({ name: 'phone_country_id' })
  phoneCountry: Country | null;

  @Column('number', { nullable: true, name: 'phone_country_id' })
  phoneCountryId: number | null;

  @Column('text', { nullable: true })
  phone: string | null;

  @Column('text', { nullable: true })
  photo: string | null;

  @Column('boolean', {
    default: false,
    name: 'is_connected',
  })
  isConnected: boolean;

  @Column('timestamptz', {
    name: 'last_connection',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastConnection: Date;

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
