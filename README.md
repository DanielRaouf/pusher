# Hook for Pusher-js

A react hook to be used with pusher js https://pusher.com/

## Getting Started

To install run 

    npm install @hooksplace/pusher
    or
    yarn add @hooksplace/pusher

### Usage
    import usePusher from '@hooksplace/pusher';
    
    // then inside your component use
    const { data } = usePusher({
        event: {
        name: '<Your event name >',
        channel: '<Your channel name>'
        },
        config: {
        key: '<Your pusher app key>',
        cluster: '<Your pusher app cluster>'
        }
    });

    //the data will contain the data sent so you can use it within your component

## Contributing

Please add an issue of what you want to add first.

Add a fork and create the PR there.

Share the PR link in the issue

## Versioning

Current version is 2.0.0

## Authors

* ** Daniel Raouf Tadros https://www.linkedin.com/in/daniel-raouf/

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

