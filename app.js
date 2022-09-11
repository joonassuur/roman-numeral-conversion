function getRomanNumeral(num) {
  let romanNumbers = '';

  const handleNumerals = () => {
    if (num >= 50 && num < 100) {
      romanNumbers = romanNumbers.concat('L');
      num -= 50;
    }

    if (num >= 40 && num < 50) {
      romanNumbers = romanNumbers.concat('XL');
      num -= 40;
    }

    if (num >= 10 && num < 40) {
      romanNumbers = romanNumbers.concat('X');
      num -= 10;
    }

    if (num === 9) {
      romanNumbers = romanNumbers.concat('IX');
      num -= 9;
    }

    if (num >= 5 && num < 9) {
      romanNumbers = romanNumbers.concat('V');
      num -= 5;
    }

    if (num >= 5 && num < 10) {
      romanNumbers = romanNumbers.concat('V');
      num -= 5;
    }

    if (num === 4) {
      romanNumbers = romanNumbers.concat('IV');
      num -= 4;
    }

    if (num > 0 && num < 4) {
      romanNumbers = romanNumbers.concat('I');
      num -= 1;
    }

    if (num <= 0) {
      return;
    }
    handleNumerals();
  };

  handleNumerals();
  return romanNumbers;
}
