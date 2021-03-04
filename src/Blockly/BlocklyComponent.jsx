import React from 'react';
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import 'blockly/blocks';


class BlocklyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.blocklyDiv = React.createRef();
        this.toolbox = React.createRef();
    }

    componentDidMount() {
        const { initialXml, children, ...rest } = this.props;
        Blockly.Themes.Iota = Blockly.Theme.defineTheme('iota', {
            'base': Blockly.Themes.Classic,
            'componentStyles': {
              'workspaceBackgroundColour': '#fbe8df', // workspace back
              'toolboxBackgroundColour': '#ffe4df', //useless for now
              'toolboxForegroundColour': '#61ffae', //useless for now
              'flyoutBackgroundColour': '#eed0c1', // blocks back 
              'flyoutForegroundColour': '#61ffae',
              'flyoutOpacity': 1,
              'scrollbarColour': '#fff',
              'insertionMarkerColour': '#fff',
              'insertionMarkerOpacity': 0.3,
              'scrollbarOpacity': 0.4,
              'cursorColour': '#d0d0d0',
              'blackBackground': '#ffefec'
            }
          });
        this.primaryWorkspace = Blockly.inject(
            this.blocklyDiv.current,
            {
                toolbox: this.toolbox.current,
                theme: Blockly.Themes.Iota,
                ...rest
            },
            
        );

        if (initialXml) {
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
        }
    }

    get workspace() {
        return this.primaryWorkspace;
    }

    setXml(xml) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
    }

    render() {
        const { children } = this.props;

        return <React.Fragment>
            <div ref={this.blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={this.toolbox}>
                {children}
            </xml>
        </React.Fragment>;
    }
}

export default BlocklyComponent;