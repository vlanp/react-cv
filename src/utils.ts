function getAge(dateString: string) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const getBoolean = (booleanString: string) => {
  if (booleanString !== "true" && booleanString !== "false") {
    throw new Error(`${booleanString} is not a Boolean string`);
  }
  return booleanString === "true";
};

export { getAge, getBoolean };
