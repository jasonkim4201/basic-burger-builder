// going to make my reducers leaner and more readable
export const updateObject = (oldObject, updatedProps) => {
  return {
    ...oldObject,
    ...updatedProps
  };
};

  // checking the validity of the form inputs
  export const checkValidity = (value, rules) => {
    let isValid = true;
    // write validation rules here which will determine if isValid will return true.
    if (!rules) {
      return true;
    }
    if (rules.required) { // && isValid added to ensure that all checks must result in true before isValid returns true
        isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isNum) {
      const stupidRegexCheck = /^\d+$/; // this is the way to check is stuff is a number
      isValid = stupidRegexCheck.test(value.trim()) && isValid;
    }
    if (rules.isEmail) {
      const stupidEmailRegexCheck = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; // the really long string that checks for email validation. i really need to save these somewhere
      isValid = stupidEmailRegexCheck.test(value.trim()) && isValid;
    }
    return isValid;
  }