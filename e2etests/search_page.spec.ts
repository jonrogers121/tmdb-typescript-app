import { test, expect } from '@playwright/test';

test('it allows a film to be entered and will show results by query', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.locator('input').click();
  await page.locator('input').fill('Jaws');
  await page.locator('text=Find Movies').click();
  await expect(page).toHaveURL('http://localhost:8080/search/Jaws');
});
