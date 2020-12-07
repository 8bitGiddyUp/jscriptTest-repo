const role = 'host';
const person = 'juulis';
const role2 = 'director';
const person2 = 'james';

const team = {};
team[role] = person;
team[role2] = person2;

const computedTeam = {
  [role]: person,
  [role2]: person2
};

function addProp (obj, k, v) {
  const copy = {
    ...obj
  };

  copy[k] = v;
  return copy;
}

const addProp = (obj, k, v) => {
  return {...obj, [k]: v};
}

const addPropOneLine = (obj, k, v) => ({...obj, [k]: v});
