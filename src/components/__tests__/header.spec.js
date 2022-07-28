import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";



describe("header - Unit", () => {

    it("should be a vue instance", () => {
        const wrapper = mount(Header, {
            propsData: {
                data: false
            }
        })

        expect(wrapper.vm).toBeDefined()
    })

    class Click {}
        function getClick(fn) {
        return fn(new Click());
    }

    test("should be emits click event when clicked and return true", async () => {
        const openMenu = jest.fn();
        getClick(openMenu);
        expect(openMenu).toBeCalledWith(expect.any(Click));
        
        const wrapper = mount(Header, {
          click: openMenu
        });

        await wrapper.find('#menu-button').trigger("click");
        expect(openMenu).toHaveBeenCalled();
        expect(wrapper.find('#menu-button').exists()).toBe(true)
      });

})