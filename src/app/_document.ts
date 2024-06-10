const documentTemplate = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>%name%</title>

      %scripts%
      %stylesheets%
    </head>
    <body>
      <div id="root"></div>  
    </body>
  </html>`;
};

export default documentTemplate;
