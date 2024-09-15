import { PasswordFieldRequirementsConfig } from "./Password/PasswordFieldRequirementsConfig";
import { UsernameFieldRequirementsConfig } from "./Username/UsernameFieldRequirementsConfig";

export interface FieldRequirementsConfig {
    username: UsernameFieldRequirementsConfig;
    password: PasswordFieldRequirementsConfig;
} 