var $ = require('jquery');
import listenMessage from './listenMessage';
import listenWebRequest from './listenWebRequest';
import createMenus from './createMenus';

(function () {
    createMenus();
    listenWebRequest();
    listenMessage();
})();
