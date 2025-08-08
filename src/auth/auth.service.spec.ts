import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it("should return success for PA login with valid credentials", () => {
    const body = {
      data: {
        username: "admin",
        password: "1234",
      },
    };
    const result = service.paLogin(body);
    expect(result).toEqual({
      message: "PA Login successful",
      access_token: "sample_token_123",
    });
  });

  it("should return failure for PA login with invalid credentials", () => {
    const body = {
      data: {
        username: "admin",
        password: "wrong",
      },
    };
    const result = service.paLogin(body);
    expect(result).toEqual({
      message: "Invalid credentials",
    });
  });

  it("should return success for Member login with valid credentials", () => {
    const body = {
      data: {
        username: "member",
        password: "abcd",
      },
    };
    const result = service.memberLogin(body);
    expect(result).toEqual({
      message: "Member Login successful",
      access_token: "sample_token_456",
    });
  });

  it("should return failure for Member login with invalid credentials", () => {
    const body = {
      data: {
        username: "member",
        password: "wrong",
      },
    };
    const result = service.memberLogin(body);
    expect(result).toEqual({
      message: "Invalid member credentials",
    });
  });
});
