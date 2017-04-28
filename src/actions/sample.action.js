export default class SampleAction {
	getInfoForCloudFetch() {
        return (dispatch) => {
            fetch('/public/rest/api/1.0/config/generalinformation').then((response) => {
            	dispatch({type: 'GET_INFO', data: {cloudmsg: response}});
            });
        };
    }
    getInfoForCloudAJS() {
        return (dispatch) => {
            var AJS = AJS || {};
            AJS.$.ajax('/public/rest/api/1.0/config/generalinformation').then((response) => {
            	dispatch({type: 'GET_INFO', data: {cloudmsg: response}});
            });
        };
    }
    getInfoForZFJFetch() {
    	return (dispatch) => {
            fetch('/jira/rest/zephyr/latest/util/teststatus-list').then((response) => {
	        	dispatch({type: 'GET_INFO', data: {zfjmsg: response}});
	        });
        };
    }
    getInfoForZFJAJS() {
        return (dispatch) => {
        	var AJS = AJS || {};
            AJS.$.ajax('/jira/rest/zephyr/latest/util/teststatus-list').then((response) => {
	        	dispatch({type: 'GET_INFO', data: {zfjmsg: response}});
	        });
        };
    }
}
