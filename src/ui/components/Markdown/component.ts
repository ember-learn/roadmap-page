import Component, { tracked } from '@glimmer/component';
import markdownit from 'markdown-it';
import hljs from './-utils/highlight';

const MarkdownIt = markdownit({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (err) {
        console.log('Error highlighting', lang, err);
      }
    }

    return ''; // use external default escaping
  }
});

export default class Markdown extends Component {
  /**
   * Renders the Markdown text with syntax highlighting for code blocks.
   */
  @tracked('args')
  get renderedText() {
    return MarkdownIt.render(this.args.text);
  }
};
