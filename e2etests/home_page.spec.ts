import { test, expect } from '@playwright/test';

test('it displays the front page with header, and render movie cards', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  const title = page.locator('h2');
  await expect(title).toHaveText("This week's popular movies");
  const movieCard01 = page.locator('data-test-id=movieCard-0');
  const movieCard02 = page.locator('data-test-id=movieCard-1');
  await expect(movieCard01).toBeDefined();
  await expect(movieCard02).toBeDefined();
});

test('it opens a movie details page when the related movie card is clicked', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.locator('[data-testid="movieCard-0"] div').nth(1).click();
  const movieDetailsHeader = page.locator('data-test-id=movie-details-header');
  const movieDetailsOverview = page.locator('data-test-id=movie-details-overview');
  await expect(movieDetailsHeader).toBeDefined();
  await expect(movieDetailsOverview).toBeDefined();
});
