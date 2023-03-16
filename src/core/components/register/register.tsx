import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../../features/users/hooks/use.users";
import { UserApiRepo } from "../../../features/users/services/user.api.repo";
import { User } from "../../../features/users/models/user";

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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
        <input type="text" name="name" id="name" required placeholder="Name" />
        <input
          type="text"
          name="surname"
          id="surname"
          required
          placeholder="Surname"
        />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
}
