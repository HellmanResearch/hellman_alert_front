
export interface userState { 
    account:number
}

export interface rootState { 
    user:userState
}
export interface METRIGROUPCITEM { 
    id: string|number,
    metrics: METRICITEM[],
    name: string,
    create_time?: string,
    update_time?:string
}

export interface METRICITEM { 
    id: string|number,
    key: string | number,
    display: string,
    fields_attr: Record<any, any>,
    rule_template: string,
    rules_hint: string,
    group: number,
     create_time?: string,
    update_time?:string
}