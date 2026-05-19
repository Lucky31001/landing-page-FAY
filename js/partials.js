const parseMarkup = (markup) => {
  const template = document.createElement('template');
  template.innerHTML = markup.trim();
  return template.content;
};

const loadPartialIntoNode = async (node) => {
  const partialPath = node.dataset.partial;

  if (!partialPath) {
    return;
  }

  const response = await fetch(partialPath);

  if (!response.ok) {
    throw new Error(`Impossible de charger ${partialPath}`);
  }

  const markup = await response.text();
  node.replaceWith(parseMarkup(markup));
};

export const initializePartials = async () => {
  const partialNodes = document.querySelectorAll('[data-partial]');

  await Promise.all(
    Array.from(partialNodes).map(async (node) => {
      try {
        await loadPartialIntoNode(node);
      } catch (error) {
        console.error(error);
      }
    })
  );
};
