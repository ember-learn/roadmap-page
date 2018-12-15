import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | roadmap page/statusboard header", function(
  hooks
) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`{{roadmap-page/statusboard-header}}`);

    assert.dom("img").exists();
  });
});
