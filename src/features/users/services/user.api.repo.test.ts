import { ProtoUser } from "../models/user";
import { UserApiRepo } from "./user.api.repo";

let mockRepo: UserApiRepo;
mockRepo = new UserApiRepo();
describe("Given the UserApiRepo", () => {
  describe("When we use the register function", () => {
    let mockUser = {
      name: "test",
      email: "email",
    } as ProtoUser;

    test("Then it should register a new user", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser),
      });
      await mockRepo.register(mockUser);
      expect(fetch).toHaveBeenCalled();
    });

    test("Then it should throw an error if the registration request fails", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue(undefined),
      });
      await expect(mockRepo.register(mockUser)).rejects.toThrow();
      expect(fetch).toHaveBeenCalled();
    });
  });
});

describe("When we use the login function", () => {
  let mockUser = {
    email: "test",
    passwd: "email",
  } as unknown as ProtoUser;
  test("Then it should log in an existing user and return a User object", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ token: "mockToken" }),
    });
    const result = await mockRepo.login(mockUser);
    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual({ token: "mockToken" });
    expect(localStorage.getItem("token")).toBe("mockToken");
  });

  test("Then it should throw an error if the login request fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(undefined),
    });
    await expect(mockRepo.login(mockUser)).rejects.toThrow();
    expect(fetch).toHaveBeenCalled();
  });
});
