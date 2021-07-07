import React, { Component } from "react";
import { convertFromRaw, EditorState } from "draft-js";

import Editor, { composeDecorators } from "@draft-js-plugins/editor";

import createImagePlugin from "@draft-js-plugins/image";

import createAlignmentPlugin from "@draft-js-plugins/alignment";

import createFocusPlugin from "@draft-js-plugins/focus";

import createResizeablePlugin from "@draft-js-plugins/resizeable";

import createBlockDndPlugin from "@draft-js-plugins/drag-n-drop";

import createDragNDropUploadPlugin from "@draft-js-plugins/drag-n-drop-upload";
import editorStyles from "./styles.css";
import mockUpload from "./mockUpload";

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: mockUpload,
  addImage: imagePlugin.addImage,
});

const plugins = [
  dragNDropFileUploadPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
];

export default class CustomImageEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw()),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
          <AlignmentTool />
        </div>
      </div>
    );
  }
}
