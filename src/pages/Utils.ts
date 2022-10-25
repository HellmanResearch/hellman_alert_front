export const getStr = (value: string) :string=> { 
    return value.length > 10
            ? value.slice(0, 6) + "..." + value.slice(-4)
            : value;
}