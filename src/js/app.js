import '../styles/app.scss';
import Container from './container/Container';

const root = document.querySelector('#root');
const container = new Container();
root.innerHTML += container.htmlString;






