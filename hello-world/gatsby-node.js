const path = require('path');

exports.createPages = async ({ actions, graphql }) => {

    const files = await graphql(`
        {
            allFile{
                nodes{
                    relativePath
                    id
                }
            }
        }`);

    files.data.allFile.nodes.forEach(file => {
        actions.createPage({
            path: `images/${file.id}`,
            component: path.resolve(`src/templates/images.jsx`),
            context: {
                relativePath: file.relativePath
            }
        });
    });
   

}