export const checkValidEntry = (entry: any): boolean => {
    if (/^[a-zA-Z0-9 .,;:!?'"()\-]$/.test(entry)) {
        return true;
    }
    return false;
};
