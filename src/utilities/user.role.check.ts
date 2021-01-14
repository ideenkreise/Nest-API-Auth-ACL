import { User } from "src/auth/entities/user.entity";

 export async function roleCheck(user: User, role: String): Promise<boolean> {
    return  user.roles.some(item => item.role === role); 
}

