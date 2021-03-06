import { FC, useState, useEffect } from 'react';

import Editor from 'components/Editor';

import useLocaleStorage from 'hooks/useLocaleStorage';

import 'App.css';

const App: FC = () => {
  const [html, setHtml] = useLocaleStorage('html', '');
  const [css, setCss] = useLocaleStorage('css', '');
  const [js, setJs] = useLocaleStorage('js', '');

  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

  return (
    <div className="app">
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;
