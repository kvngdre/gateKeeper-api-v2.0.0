import { Column, PrimaryColumn } from "typeorm";
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

  @Column({
    name: "updated_at"
  })
  public updatedAt: Date = new Date();
}
