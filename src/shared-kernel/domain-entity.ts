import { Column, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { ulid } from "ulid";

export abstract class DomainEntity {
  @PrimaryColumn({
    type: "text"
  })
  public id: string = ulid();

  @Column({
    name: "created_at"
  })
  public createdAt: Date = new Date();

  @UpdateDateColumn({
    name: "updated_at"
  })
  public updatedAt: Date = new Date();
}
