import { shallow } from "enzyme";
import { List } from "../components/List";

test('List has correct item count', () => {
    const items = ['Random string #0', 'Random string #1', 'Random string #2', 'Random string #3'];
    const list = shallow(<List listItems={items} />);

    expect(list.children()).toHaveLength(items.length);
    for (let i = 0; i < items.length; i++) {
        expect(list.find(`#item-${i}`).text()).toBe(`Random string #${i}`);
    }
});
