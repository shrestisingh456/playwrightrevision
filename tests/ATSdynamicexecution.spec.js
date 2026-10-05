
const { test, expect } = require("@playwright/test")

test("scenario1", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    const jobname = "Hired"
    const download = page.getByRole("button", { name: "Download Application" });
     await page.goto("https://atsqa.bbsi.com/login")
    await page.locator("#input-vaadin-email-field-6").fill("shresti.singh@bbsihq.com")
    await page.locator("#Ppb_65tyyn").first().click()
    await page.locator("#i0116").fill("shresti.singh@bbsihq.com")
    await page.locator("#idSIButton9").click()
    await page.locator("[type='password']").fill("Neelamdeepak@000")
    await page.locator("[type='submit']").click()
    await page.locator("#KmsiCheckboxField").check()
    await page.locator("#KmsiCheckboxField").uncheck()
    await page.locator("[type='submit']").click()
    await page.waitForLoadState("networkidle")
     const list = page.locator(".card.dashboard-sm-card")
    const total = await list.count()

    for (let i = 0; i < total; i++) {
        const jobs = await list.nth(i).locator(".dashboard-sm-card-text").textContent()
        if (jobname.includes(jobs)) {
            await list.nth(i).locator("[src*='icon-dashboard']").click()
        }
    }
    await page.waitForLoadState("networkidle")
    const title = await page.getByText("APPLICANT LIST").nth(0).textContent()
    const letter = await title.split(" ")
    console.log(letter[2])
    await page.locator(".btn-link.text-primary.text-end.text-md-start.max-w-200.width-200.text-truncate.m-align-truncate").click()
    await page.waitForLoadState("networkidle")

    const [newPage] = await Promise.all
        ([

            context.waitForEvent("page"),
            download.click(),
            


        ])


    await newPage.waitForLoadState("domcontentloaded");
    const pages = await newPage.locator(".action-btn.btn.btn-primary.mr-2").textContent()
    console.log(pages)
    await expect(pages).toBeTruthy()

})










