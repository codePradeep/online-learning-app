export const ValidateEmail = item => {
  // console.log('itm',item);

 if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(item)) {
    // console.log('hii');
    return true;
  } else {
    // console.log('hye');

    return false;
  }
};

export const ValidatePaassword = item => {
  if (/^[0-9a-zA-Z]{6,10}$/.test(item)) {
    console.log('hii');
    return true;
  } else {
    //alert('You have entered an invalid email address!');
    console.log('hye');
    return false;
  }
};

export const ValidateuserName = item => {
  console.log('item', item);
  if (/^([a-zA-Z0-9_-]){5,8}$/.test(item)) {
    return true;
  } else {
    return false;
  }
};
