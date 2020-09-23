import { ServerStyleSheet } from 'styled-components';
global.Styled = { ServerStyleSheet };


class Hello extends React.Component {
    render() {
        return (<h1> Hello React App</h1>);
    }
}