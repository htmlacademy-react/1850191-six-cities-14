/** Преобразует в заглавную букву */
export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

/** Добавляет множественное окончание */
export const addPluralEnding = (count: number) => count !== 1 ? 's' : '';

