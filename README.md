# subliminal-ads.js — show subliminal messages and images on your webpage

## Background
The following is taken from a the [WikiPedia page](https://en.wikipedia.org/wiki/Subliminal_stimuli)

> Applications of subliminal stimuli often base themselves on the persuasiveness of the message. Importantly, research on action priming has shown that subliminal stimuli can trigger only actions a receiver of the message plans to perform anyway. However, consensus of subliminal messaging remains unsubstantiated by other research. Most actions can be triggered subliminally only if the person is already prepared to perform a specific action.

## Warning
**Although there is no scientific consensus on the efficacy of whether subliminal messages would prime a customer into purchasing a product, it is based on around the priming concept, so usage should take this into consideration. One such study showed the effects of [priming a group of participants with "old" words made them walk slower down a hallway](https://www.psychologytoday.com/us/blog/social-brain-social-mind/201203/does-thinking-grandpa-make-you-slow).**

It may also be unethical to do this without gaining the consent of your visitors.

## Proprties

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| messages | Array / String | [] | List of messsages |
| width | String | 100% | Message width |
| height | String | 100vh | Message height |
| color | String | #000 | Message color |
| duration **(ms)** | Number | 250 | How long to show the message |
| interval **(ms)** | Number | 10000 | display a new message every... |
| repeat | Boolean | false | Repeat messages |
| random | Boolean | false | Display messages randomly |

## Methods

| Name | Description |
| ---- | ----- |
| start(ms) | Play messages after **ms** offset
| once(ms) | Play messages once after **ms** offset

## Display Random List of Words

```js
var fixedMessage = new FixedMessage({
  messages: ["Our company is awesome", "Buy our product"],
  width: '100%',
  height: '80vh',
  color: 'red',
  duration: '50',
  interval: 2000,
}).start(10000);
```

## Display a Mix of Images / Words Randomly

```js
var fixedMessage = new FixedMessage({
  messages: [ `${window.location.origin}/images/product.png`, `${window.location.origin}/images/heart.png`, "Our company is awesome", "Buy our product"],
  width: '100%',
  height: '80vh',
  color: 'red',
  duration: '50',
  interval: 2000,
}).start(10000);
```

This would create the message in the center screen which would show display each message sequentially every 2 seconds for a duration of 50ms. It would start after 10 seconds. You can also pass in paths that link to images as messages to create image messages.
