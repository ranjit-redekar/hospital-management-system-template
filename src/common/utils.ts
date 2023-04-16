export function getNavItem(label: String, key: String, icon?: any, children?: Array<any>): Object {
    return {
        key,
        icon,
        children,
        label,
    };
}