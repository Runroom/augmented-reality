const formatDateTime = datetime => {
    const time = new Date(datetime);

    return `${time.getHours()}:${time.getMinutes()}`;
}

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const loadScriptAsync = (tag, uri) => {
  const head = document.getElementsByTagName('head')[0];

  return new Promise((resolve, reject) => {
    tag.type = 'text/javascript';
    tag.src = uri;
    tag.async = true;
    tag.onload = () => {
      resolve();
    };
    head.appendChild(tag);
  });
};

export { formatDateTime, capitalize, loadScriptAsync };
