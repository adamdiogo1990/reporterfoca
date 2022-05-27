import EditorJS from '@editorjs/editorjs';

const Editor:React.FC = () => {

    const editor = new EditorJS('editorjs');
    
    return(
        <div id='editorjs'></div>
    )
}

export default Editor;