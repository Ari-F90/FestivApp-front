import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../../features/users/hooks/use.users";
import { UserApiRepo } from "../../../features/users/services/user.api.repo";
import { User } from "../../../features/users/models/user";
import styles from "./register.module.scss";

export default function Register() {
  const repo = useMemo(() => new UserApiRepo(), []);
  const { registerUser } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newUser: Partial<User> = {
      email: inputs[0].value,
      password: inputs[1].value,
      name: inputs[2].value,
      surname: inputs[3].value,
    };

    registerUser(newUser);
    formData.reset();
  };
  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formcontainer}>
          <div>
            <input
              className={styles.inputregister}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className={styles.inputregister}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className={styles.inputregister}
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className={styles.inputregister}
              type="text"
              name="surname"
              id="surname"
              required
              placeholder="Surname"
            />
          </div>
          <div>
            <button className={styles.buttonregister} type="submit">
              REGISTER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
