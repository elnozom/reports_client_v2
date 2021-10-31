import { shallowMount } from "@vue/test-utils";
import DataTable from "@/components/base/datatable.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(DataTable, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
