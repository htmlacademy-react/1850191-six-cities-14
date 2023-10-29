function capitalize(str:string) {
  return str[0].toUpperCase() + str.slice(1);
}

function addPluralEnding(count:number) {
  return count !== 1 ? 's' : '';
}


export {addPluralEnding, capitalize};
