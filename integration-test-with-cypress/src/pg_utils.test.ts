import {convertParamsToPg} from "./pg_utils";
import {expect} from "@jest/globals";

describe('test pg_utils', () => {
    it('should work basic', () => {
        let [query, params] = convertParamsToPg('select * table_a where name=:name', {name: "Me"});
        expect(query).toBe('select * table_a where name=$1');
        expect(params.length).toBe(1);
        expect(params[0]).toBe("Me");
    });

    it('should work basic 2 params', () => {
        const initialQuery = 'select * table_a where name=:name and name2=:name_2';
        const expectedQuery = 'select * table_a where name=$1 and name2=$2';
        let [query, params] = convertParamsToPg(initialQuery, {name: "Me", name_2:"Me2"});
        expect(query).toBe(expectedQuery);
        expect(params.length).toBe(2);
        expect(params[0]).toBe("Me");
        expect(params[1]).toBe("Me2");
    });

    it('should work', () => {
        const initialQuery = 'select * table_a where name=:name and name2=:name and age=:age';
        const expectedQuery = 'select * table_a where name=$1 and name2=$1 and age=$2';
        let [query, params] = convertParamsToPg(initialQuery, {name: "Me", age:40});
        expect(query).toBe(expectedQuery);
        expect(params.length).toBe(2);
        expect(params[0]).toBe("Me");
        expect(params[1]).toBe(40);
    });
});