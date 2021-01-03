export declare type PusherEvent = {
    channel: string;
    name: string;
};
export declare type Config = {
    key: string;
    cluster: string;
};
declare const usePusher: ({ event, config, }: {
    event: PusherEvent;
    config: Config;
}) => {
    data: any;
};
export default usePusher;
