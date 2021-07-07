const helper = (index) => {
  let number = (index + 1) % 2;
  let if3 = (index + 1) % 3;

  if (number === 0) {
    return "bounceInDown";
  }

  if (if3 === 1 && number === 1) {
    return "bounceInLeft";
  }

  if (number === 1 && if3 === 0) {
    return "bounceInRight";
  }

  return null;
};

const aosHelperZoom = (index) => {
  let number = (index + 1) % 2;
  let if3 = (index + 1) % 3;

  if (number === 0) {
    return "zoom-in-down";
  }

  if (if3 === 1 && number === 1) {
    return "zoom-in";
  }

  if (number === 1 && if3 === 0) {
    return "zoom-in";
  }

  return null;
};

const aosHelperFlip = (index) => {
  let number = (index + 1) % 2;
  let if3 = (index + 1) % 3;

  if (number === 0) {
    return "flip-down";
  }

  if (if3 === 1 && number === 1) {
    return "flip-left";
  }

  if (number === 1 && if3 === 0) {
    return "flip-right";
  }

  return null;
};

const aosHelperFade = (index) => {
  let number = (index + 1) % 2;
  let if3 = (index + 1) % 3;

  if (number === 0) {
    return "flip-down";
  }

  if (if3 === 1 && number === 1) {
    return "fade-up-right";
  }

  if (number === 1 && if3 === 0) {
    return "fade-up-left";
  }

  return null;
};

export { helper, aosHelperZoom, aosHelperFlip, aosHelperFade };
