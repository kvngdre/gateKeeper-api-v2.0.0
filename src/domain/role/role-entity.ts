import { Column, Entity } from "typeorm";
import { DomainEntity } from "src/shared-kernel/domain-entity.js";

@Entity("roles")
export class Role extends DomainEntity {
  @Column({ unique: true })
  public name: string;

  @Column()
  public description: string;

  @Column({ name: "is_admin_role" })
  public isAdminRole: boolean;

  @Column({ name: "role_priority" })
  public rolePriority: number;

  constructor(name: string, description: string, isAdminRole: boolean, rolePriority: number) {
    super();

    this.name = name;
    this.description = description;
    this.isAdminRole = isAdminRole;
    this.rolePriority = rolePriority;
  }
}
