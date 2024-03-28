import { beforeEach } from "node:test";
import test, { expect } from "playwright/test";

test.describe("Sidebar", () => {
  // test.beforeEach(async ({ page }) => {
  //   await page.goto("https://pinpoint-hub.dev.g7y.io/");
  //   await page.waitForLoadState("networkidle");
  //   await page
  //     .getByRole("textbox", { name: "Email" })
  //     .fill(process.env.TEST_USERNAME!);
  //   await page.getByRole("textbox", { name: "Email" }).press("Enter");
  //   await page.waitForLoadState("networkidle");
  //   await page
  //     .locator('input[type="password"]')
  //     .fill(process.env.TEST_PASSWORD!);
  //   await page.getByRole("button", { name: "Verify" }).click();

  //   await page.waitForURL("https://pinpoint-hub.dev.g7y.io/");
  //   await page.waitForLoadState("networkidle");

  // })
  test("should show main side bar", async ({ page }) => {
    await page.goto("/beacon-manager");
    await page.waitForLoadState("networkidle");

    const scenarios = {
      default: "sidebar-default.png"
    }

    await expect(page.getByTestId("sidebarItemProperties")).toHaveAttribute("href", /beacon-manager\/properties/)

    await expect(
      page.getByTestId("sidebar")
    ).toHaveScreenshot(scenarios.default);
  })
})