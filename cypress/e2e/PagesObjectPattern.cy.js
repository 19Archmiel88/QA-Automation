import { Login } from "../pages/Login";

describe("Test 1", () => {
  it("Logowanie użytkownika user888@gmail.com", () => {
    LoginPage.visit();
    LoginPage.fillEmail("user888@gmail.com");
    LoginPage.fillPassword("1234567890");
    LoginPage.clickLogInButton();

    HomePage.openUserMenu();
    HomePage.clickLogOutButton();

    LoginPage.verifyUrl();
  });
});

describe("Test 2", () => {
  it("Logowanie użytkownika testowyqa@qa.team", () => {
    LoginPage.visit();
    LoginPage.fillEmail("testowyqa@qa.team");
    LoginPage.fillPassword("QA!automation-1");
    LoginPage.clickLogInButton();

    HomePage.openUserMenu();
    HomePage.clickLogOutButton();

    LoginPage.verifyUrl();
  });
});
