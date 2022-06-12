import './scss/main.scss';

const bintodec = (bin: string): number => parseInt(bin, 2);

const showMessageError = (message: string): void => {
  const containerInputBinary = document.querySelector('.container__input')!;
  if (containerInputBinary.lastElementChild?.tagName === 'P') return;
  const messageError = document.createElement('p');
  messageError.textContent = message;
  messageError.style.color = 'red';
  containerInputBinary.append(messageError);
  setTimeout(() => {
    messageError.remove();
  }, 3000);
};

const calculator = () => {
  const binaryInput =
    document.querySelector<HTMLInputElement>('#input-binario')!;
  const decimalInput =
    document.querySelector<HTMLInputElement>('#input-decimal')!;
  const btn = document.querySelector<HTMLButtonElement>('button')!;

  binaryInput.addEventListener('keypress', (e) => {
    const keyCode = e.keyCode;
    if (keyCode !== 48 && keyCode !== 49) {
      showMessageError('Solo puedes ingresar 0 y 1');
      e.preventDefault();
    }
  });

  btn.addEventListener('click', () => {
    if (binaryInput.value.length === 0) {
      showMessageError('Ingrese un número binario');
      return;
    }
    const value = binaryInput.value;
    const decimalValue = bintodec(value);
    decimalInput.value = decimalValue.toString();
  });
};

const init = () => {
  calculator();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
