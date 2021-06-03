process.env.NODE_ENV = "test";

module.exports = {
  files: "src/**/*.test.jsx",
  plugins: [require("vite-web-test-runner-plugin")()],
  // This testRunnerHtml allows us to inject variables into global scope
  testRunnerHtml: (testFramework) => `<html>
    <body>
    <script type="module">
      window.__vite_plugin_react_preamble_installed__ = true;
      global = window;
    </script>
    <script type="module" src="/test-setup/globals.js"></script>
    <script id='uit' type="module" src="${testFramework}"></script>
    </body>
  </html>`
};
