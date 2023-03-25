import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../../features/users/hooks/use.users";
import { UserApiRepo } from "../../../features/users/services/user.api.repo";
import { User } from "../../../features/users/models/user";
import styles from "./login.module.scss";

export default function Login() {
  const repo = useMemo(() => new UserApiRepo(), []);
  const { loginUser } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newUser: Partial<User> = {
      email: inputs[0].value,
      password: inputs[1].value,
    };

    loginUser(newUser);
    formData.reset();
  };
  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formcontainer}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            />
          </div>
          <div>
            <button className={styles.buttonlogin} type="submit">
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
