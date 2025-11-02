import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CountrySeed } from './country.seed';
import { UserSeed } from './user.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly countrySeed: CountrySeed,
    private readonly userSeed: UserSeed,
  ) {}

  async runSeed() {
    await this.dropAllTables();
    await this.countrySeed.run();
    await this.userSeed.run();
  }

  async dropAllTables(): Promise<void> {
    await this.dataSource.dropDatabase();
    await this.dataSource.synchronize();
  }
}
