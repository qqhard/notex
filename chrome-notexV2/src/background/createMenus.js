
import { pushNote } from './noteOps';

export default function createMenus() {
    chrome.contextMenus.create({
        title:'增添笔记(默认快捷键 Shift+v)',
        contexts:['selection'],
        onclick:function(data,tab){
            if(data.selectionText!=null && data.selectionText.length > 0) {
                pushNote(data.selectionText, tab.id, tab.title, tab.url);
            }
        }
    });
}


