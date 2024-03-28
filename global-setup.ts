import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();

  await page.goto(baseURL!);
  await page.waitForLoadState("networkidle");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill(process.env.TEST_USERNAME!);
  await page.getByRole("textbox", { name: "Email" }).press("Enter");
  await page.waitForLoadState("networkidle");
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(process.env.TEST_PASSWORD!);
  await page.getByRole("button", { name: "Verify" }).click();

  await page.waitForURL(baseURL!);
  await page.waitForLoadState("networkidle");

  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;