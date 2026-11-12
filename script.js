function validEmail(str) {
  //your JS code here.
	 if (!str) {
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9_]+(?:[.-][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(?:[.-][a-zA-Z0-9_]+)*\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
