
module.exports = (items, id) => `
<script type="text/javascript" src="/lib/react-development.js"></script>
<script type="text/javascript" src="/lib/react-dom.development.js"></script>

${items.map(item => {
  return `<script src="/services/${item}.js"></script>`;
}).join('\n')}

<script>
  ${items.map(item => `
    ReactDOM.hydrate(
      React.createElement(${item}, {projectId: ${id}}),
      document.getElementById('${item}')
    );`).join('\n')}
</script>
`;
