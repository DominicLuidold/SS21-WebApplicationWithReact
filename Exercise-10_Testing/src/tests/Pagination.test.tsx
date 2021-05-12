import { shallow } from "enzyme";
import { Pagination } from "../components/Pagination";

test('Click "Next Page" button works', () => {
    const spy = jest.fn();
    const pagination = shallow(<Pagination currentPage={1} pageCount={10} setPage={spy} />);

    expect(pagination.find("#current-page").text()).toBe('1 / 10');
    expect(pagination.find('#next').prop('disabled')).toBeFalsy();

    pagination.find("#next").simulate('click');
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(2);
});

test('"Next Page" button is disabled on last page', () => {
    const spy = jest.fn();
    const pagination = shallow(<Pagination currentPage={10} pageCount={10} setPage={spy} />);

    expect(pagination.find("#current-page").text()).toBe('10 / 10');
    expect(pagination.find('#next').prop('disabled')).toBeTruthy();
});

test('Click "Previous Page" button works', () => {
    const spy = jest.fn();
    const pagination = shallow(<Pagination currentPage={2} pageCount={10} setPage={spy} />);

    expect(pagination.find("#current-page").text()).toBe('2 / 10');
    expect(pagination.find('#prev').prop('disabled')).toBeFalsy();

    pagination.find("#prev").simulate('click');
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
});

test('"Previous Page" button is disabled on first page', () => {
    const spy = jest.fn();
    const pagination = shallow(<Pagination currentPage={1} pageCount={10} setPage={spy} />);

    expect(pagination.find("#current-page").text()).toBe('1 / 10');
    expect(pagination.find('#prev').prop('disabled')).toBeTruthy();
});
