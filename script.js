const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    switch (value) {
      case 'C':
        screen.value = '';
        break;
      case '=':
        const expression = screen.value;
        const result = eval(expression);
        screen.value = result;
        break;
      default:
        screen.value += value;
    }
  });
});