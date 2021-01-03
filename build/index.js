"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const pusher_js_1 = require("pusher-js");
const usePusher = ({ event, config, }) => {
    const [data, setData] = react_1.useState();
    react_1.useEffect(() => {
        const pusher = new pusher_js_1.default(config.key, {
            cluster: config.cluster,
        });
        const channelObj = pusher.subscribe(event.channel);
        channelObj.bind(event.name, (data) => setData(data));
        return () => pusher.unsubscribe(event.channel);
    }, []);
    return { data };
};
exports.default = usePusher;
