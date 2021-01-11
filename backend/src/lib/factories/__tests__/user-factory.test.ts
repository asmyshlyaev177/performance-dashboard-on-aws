import { UserType } from "aws-sdk/clients/cognitoidentityserviceprovider";
import UserFactory from "../user-factory";

describe("fromCognitoUser", () => {
  it("converts a cognito user to a user", () => {
    const now = new Date();
    const cognitoUser: UserType = {
      Username: "test user",
      Enabled: true,
      UserStatus: "CONFIRMED",
      Attributes: [
        {
          Name: "sub",
          Value: "123",
        },
        { Name: "email", Value: "test@test.com" },
      ],
      UserCreateDate: now,
      UserLastModifiedDate: now,
    };

    const user = UserFactory.fromCognitoUser(cognitoUser);
    expect(user).toEqual({
      userId: "test user",
      enabled: true,
      userStatus: "CONFIRMED",
      sub: "123",
      email: "test@test.com",
      createdAt: now,
      updatedAt: now,
    });
  });
});