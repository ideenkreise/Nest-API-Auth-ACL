import { Ability, AbilityBuilder, AbilityClass } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { Action } from "src/auth/action.enum";
import { User } from "src/auth/entities/user.entity";
import { RoleEnum } from "src/auth/role.enum";
import { TodoEntity } from "src/todo/entities/todo.entity";
import { roleCheck } from "src/utilities/user.role.check";

type Subjects = typeof TodoEntity | typeof User | TodoEntity | User | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (roleCheck(user,RoleEnum.Admin)) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can(Action.Read, 'all'); // read-only access to everything
    }

    // can(Action.Update, TodoEntity, { authorId: user.user_id });
    cannot(Action.Delete, TodoEntity, { is_done: true });

    return build();
  }
}