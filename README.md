# Wallaby v3 Demo
This simple project showcases how tests are executed in Wallaby v3. It contains a mixture of passing and failing tests, some of which are slow or can become slow with simple edits.

Additional commentary appears alongside the tests.

To get started after cloning the repo, simply:

1. Run `npm ci`
2. Open your editor.
3. If you're using VS Code, run the  `Wallaby.js: Start` command. For other editors (and for Wallaby Standalone), please see https://wallabyjs.com/docs/intro/quick-start/, making sure to select the appropriate editor from the dropdown on the top right of the page.
4. Open the Side View (using the `Wallaby.js: Focus Side View` command or by clicking on the left-most icon on the row of icons in the top right of the Wallaby Overview), and select the `Tests` tab.
5. If tests are still executing, wait for them to finish.
6. Start Wallaby again and observe as results become available immediately, and confirmation runs are triggered.
7. To compare to a cold start, you can use the `Wallaby.js: Reset Wallaby Cache` command.

Please note that this project uses Vitest with default configuration, which includes a 5000ms timeout for async tests. Causing async tests to take longer than this to run will result in test failures unless the configuration is modified (see https://wallabyjs.com/docs/integration/vitest/ for details). Non-async tests (such as the slow Fibonacci sequence implementation) are not subject to this timeout.

## **Important**
Please note that if you are an existing Wallaby user that has opted to roll back to the previous generation of the UI (i.e. Wallaby UI v1.0), now is a great time to reevaluate the UI improvements from Wallaby v2. While Wallaby v3 does still work with the previous-gen UI, it doesn't benefit from many of the enhancements, and you'll be left waiting for results you'd receive much more quickly in the modern UI.