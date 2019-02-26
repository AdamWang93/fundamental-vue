<<<<<<< Updated upstream:ui/src/components/Tabs/__tests__/Tabs.test.ts
import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import { Tabs, TabItem } from "../";

const { isTrue } = assert;

describe("Tabs", () => {
  it("Switches active Tab when item was clicked - event without v-model being used", async () => {
=======
import { mount, createLocalVue } from '@vue/test-utils';
import { Tabs, TabItem } from '../';

describe('Tabs', () => {
  it('Switches active Tab when item was clicked - event without v-model being used', async () => {
>>>>>>> Stashed changes:src/components/Tabs/__tests__/Tabs.test.ts
    const localVue = createLocalVue();
    const wrapper = mount(
      localVue.extend({
        components: { Tabs, TabItem },
        template: `
        <Tabs value="a">
          <TabItem ref="ta" label="A" name="a">TabA_CONTENT</TabItem>
          <TabItem ref="tb" label="B" name="b">TabB_CONTENT</TabItem>
          <TabItem ref="tc" label="C" name="c">TabC_CONTENT</TabItem>
        </Tabs>
      `
      }),
      { localVue }
    );
    await localVue.nextTick();

    const items = wrapper.findAll(TabItem);
    const links = wrapper.findAll("a");

    links.at(0).trigger("click");
    await localVue.nextTick();

    expect((items.at(0).vm as any).active).toBe(true);

    links.at(1).trigger("click");
    await localVue.nextTick();
    expect((items.at(1).vm as any).active).toBe(true);

    links.at(2).trigger("click");
    await localVue.nextTick();
    expect((items.at(2).vm as any).active).toBe(true);
  });
});
