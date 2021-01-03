import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';


export type PusherEvent = {
    channel: string;
    name: string;
};

export type Config = {
    key: string;
    cluster: string;
};

const usePusher = ({
    event,
    config,
}: { event: PusherEvent, config: Config }): { data: any } => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        const pusher = new Pusher(config.key, {
            cluster: config.cluster,
        });
        const channelObj = pusher.subscribe(event.channel);
        channelObj.bind(event.name, (data: any) => setData(data));
        return () => pusher.unsubscribe(event.channel!);
    }, []);

    return { data };
};

export default usePusher;
