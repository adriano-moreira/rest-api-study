type ParamsAsObj = {[key: string]: any};
type ParamsAsArray = any[]
type Query = string;
export const convertParamsToPg = (query: Query, params: ParamsAsObj):[Query,ParamsAsArray] =>{
    let newParams:ParamsAsArray = Object.values(params);
    let keys = Object.keys(params).sort().reverse();
    let newQuery = query;
    for (let key of keys) {
        const currentProperty = `:${key}`;
        const newProperty = `$${ Object.keys(params).indexOf(key) +1 }`;
        newQuery = newQuery.replaceAll(currentProperty, newProperty);
    }
    return [newQuery, newParams]
}
