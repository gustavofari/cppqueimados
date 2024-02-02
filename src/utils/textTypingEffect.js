export function textTypingEffect(text, setText, i = 0) {
  if (i < text.length) {
    const typedText = text.slice(0, i + 1);
    setText(typedText); // Atualiza o estado com a substring atual
    setTimeout(() => textTypingEffect(text, setText, i + 1), 103);
  }
}
