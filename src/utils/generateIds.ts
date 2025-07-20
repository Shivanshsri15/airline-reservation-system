export const generateIdFunc=(role: string):string => {
    if (role === "admin") {
        return `ADM-${Math.floor(Math.random() * 10000)}`;
    }
    return `PAS-${Math.floor(Math.random() * 10000)}`;
}